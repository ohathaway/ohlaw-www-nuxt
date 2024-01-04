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
    <div class="row">
      <FormKit 
        type="text"
        name="first_name"
        id="first_name"
        label="Your First Name"
        prefix-icon="user"
        outer-class="col-md-6"
        validation="required"
        :floating-label="false"
      />
      <FormKit 
        type="text"
        name="last_name"
        id="last_name"
        label="Your Last Name"
        prefix-icon="user"
        outer-class="col-md-6"
        validation="required"
        :floating-label="false"
      />
    </div>
    <div class="row">
      <FormKit
        type="email"
        name="email"
        id="email"
        label="Your Email Address"
        prefix-icon="at"
        outer-class="col-md-6"
        validation="required|email"
        :floating-label="false"
      />
      <FormKit
        type="tel"
        name="phone"
        id="phone"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
        outer-class="col-md-6"
        validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }"
        validation-visibility="dirty"
        :floating-label="false"
        prefix-icon="phone"
      />
    </div>
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
const LM_FORM_URL = 'https://api.lawmatics.com/v1/forms/6a5e3a04-f6ff-4eee-998f-17683b408cf3/submit'

const endpoint = axios.create({
  // baseURL: OHL_EMAIL_URL,
  baseURL: LM_FORM_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

/* sendgrid via google function
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
    */

const sendMessage = async (fields, event) => {
  try {
    // if (event) event.preventDefault()
    const data = JSON.stringify({
      first_name: fields.first_name,
      last_name: fields.last_name,
      email: fields.email,
      phone: fields.phone,
      case_blurb: fields.content
    })

    const result = await endpoint.post('/', data)

    const notification = {
      type: 'success',
      header: 'Success',
      message: (`Message sent successfully. We'll be in touch`)
    }
    // store.addNotification(notification, { root: true })
    store.toastSuccess(notification)
    reset('first_name')
    reset('last_name')
    reset('phone')
    reset('email')
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