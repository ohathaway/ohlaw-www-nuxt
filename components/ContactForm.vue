<template>
  <!-- eslint-disable prettier/prettier -->
  <h2 :class="headlineClasses">{{ headline }}</h2>
  <p class="mt-5"></p>
  <FormKit
    type="form"
    :actions="false"
    @submit="sendMessage"
    #default="{ state: { valid } }"
  >
    <input type="hidden" name="service-form-name" :value="props.serviceFormName" />
    <FormKit
      type="hidden"
      name="service-form-name"
      value="Generic Contact"
    />
    <FormKit 
      type="text"
      name="from_name"
      label="Your Name"
      prefix-icon="user"
      validation="required"
      :floating-label="false"
    />
    <FormKit
      type="email"
      name="from_email"
      label="Your Email Address"
      prefix-icon="at"
      validation="required|email"
      :floating-label="false"
    />
    <FormKit
      type="tel"
      name="from_phone"
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
import { computed, ref } from 'vue'
import axios from 'axios'
import { isEmpty } from 'lodash'

const props = defineProps(['headline', 'textColor', 'serviceFormName'])

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
        ],
        subject: `${fields.serviceFormName} via OHLaw website`
      }
    ],
    content: [
      {
        type: 'text/plain',
        value: `
Name: ${fields.from_name}
Email: ${fields.from_email}
Phone: ${fields.from_phone}

fields.content
`
      }
    ],
    from: {
      email: import.meta.env.VITE_CONTACT_FROM_EMAIL,
      name: import.meta.env.VITE_CONTACT_FROM_NAME
    },
    reply_to: {
      email: fields.from_email,
      name: fields.from_name
    }
  }
  console.debug('submission body: ', body)
  return endpoint.post('/', body)
}
</script>