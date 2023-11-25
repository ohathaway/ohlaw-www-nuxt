<template>
  <!-- eslint-disable prettier/prettier -->
  <h2 :class="headlineClasses">{{ headline }}</h2>
  <p class="mt-5"></p>
  <FormKit
    type="form"
    id="contactForm"
    :actions="false"
    @submit="sendMessage"
    #default="{ state: { valid } }"
  >
    <FormKit type="hidden" name="serviceFormName" :value="props.serviceFormName" />
    <FormKit 
      type="text"
      name="from_name"
      id="from_name"
      label="Your Name"
      prefix-icon="user"
      validation="required"
      :floating-label="false"
    />
    <FormKit
      type="email"
      name="from_email"
      id="from_email"
      label="Your Email Address"
      prefix-icon="at"
      validation="required|email"
      :floating-label="false"
    />
    <FormKit
      type="tel"
      name="from_phone"
      id="from_phone"
      label="Phone number"
      placeholder="xxx-xxx-xxxx"
      validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
      :validation-messages="{
        matches: 'Phone number must be in the format xxx-xxx-xxxx',
      }"
      validation-visibility="dirty"
      :floating-label="false"
      prefix-icon="phone"
    />
    <FormKit
      type="textarea"
      name="content"
      id="content"
      rows="6"
      label="What can we help you with?"
      validation="required"
      :floating-label="false"
    />
    <FormKit type="submit" :disabled="!valid" />
  </FormKit>
  <!-- eslint-enable prettier/prettier -->
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { computed } from 'vue'
import { reset } from '@formkit/core'
import pkg from 'lodash'
const { isEmpty } = pkg
import { useMainStore } from '@/stores/mainStore'
import axios from 'axios'

const props = defineProps(['headline', 'textColor', 'serviceFormName'])

const store = useMainStore()

/* eslint-disable prettier/prettier */
const headline = computed(() => {
  return isEmpty(props.headline)
    ? 'Contact us now for a Free Consultation'
    : props.headline
})

const headlineClasses = [ // eslint-disable-line vue/no-setup-props-destructure
  'text-center',
  `text-${props.textColor}`
]
/* eslint-enable prettier/prettier */

const OHL_EMAIL_URL = import.meta.env.VITE_OHL_EMAIL_URL

const endpoint = axios.create({
  baseURL: OHL_EMAIL_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const sendMessage = async (fields, event) => {
  try {
    // if (event) event.preventDefault()
    const body = {
      personalizations: [
        {
          to: [
            {
              // email: import.meta.env.VITE_CONTACT_ADDR,
              email: 'owen@ohlawcolorado.com',
              name: import.meta.env.VITE_CONTACT_NAME
            }
          ]
        }
      ],
      subject: `${fields.serviceFormName} via OHLaw website`,
      content: [
        {
          type: 'text/plain',
          value: `
Name: ${fields.from_name}
Email: ${fields.from_email}
Phone: ${fields.from_phone}

${fields.content}
`
        }
      ],
      from: {
        email: import.meta.env.VITE_CONTACT_FROM_EMAIL,
        name: import.meta.env.VITE_CONTACT_FROM_NAME
      },
      replyTo: {
        email: fields.from_email,
        name: fields.from_name
      }
    }

    const result = await endpoint.post('/', body)
    console.debug('result: ', result)
    const notification = {
      type: 'success',
      header: 'Success',
      message: (`Message sent successfully. We'll be in touch`)
    }
    // store.addNotification(notification, { root: true })
    store.toastSuccess(notification)
    reset('from_name')
    reset('from_email')
    reset('from_phone')
    reset('content')
    return result
  } catch (error) {
    console.error('error sending form message: ', error)
    const notification = {
      type: 'danger',
      header: 'Whoops',
      message: (`Error sending form message: ${error.message}`)
    }
    // store.addNotification(notification, { root: true })
    store.toastError(notification)
    return error
  }
}
</script>