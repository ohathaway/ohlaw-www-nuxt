<template>
  <FormKit
    type="form"
    :actions="false"
    wrapper-class="subscribe-form"
    #default="{ state: { valid } }"
    @submit="handleSubscribe"
  >
    <FormKit
      type="text"
      id="first_name"
      name="first_name"
      label="First Name"
      validation="required|alpha_spaces"
      validation-visibility="dirty"
    />
    <FormKit
      type="text"
      id="last_name"
      name="last_name"
      label="Last Name"
      validation="required|alpha_spaces"
      validation-visibility="dirty"
    />
    <FormKit
      type="email"
      id="email"
      name="email"
      label="Email"
      validation="required|email"
    />
    <FormKit
      type="tel"
      id="phone"
      name="phone"
      label="Phone"
      :delay="1500"
      validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
      :validation-messages="{
        matches: 'Phone number must be in the format xxx-xxx-xxxx',
      }"
    />
    <FormKit type="submit" :disabled="!valid" />
  </FormKit>
</template>

<script setup>
import { reset } from '@formkit/core'
import axios from 'axios'

const { background } = defineProps(['background'])

const store = useMainStore()

const OHL_MC_URL = import.meta.env.VITE_OHL_MC_URL

const endpoint = axios.create({
  baseURL: OHL_MC_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const handleSubscribe = async (fields, event) => {
  console.debug('fields: ', fields)
  try {
    // if (event) event.preventDefault()
    const body = {
      first_name: fields.first_name,
      last_name: fields.last_name,
      phone: fields.phone,
      email: fields.email,
      list: "9a4a061070"
    }

    const result = await endpoint.post('/', body)

    const notification = {
      type: 'success',
      header: 'Success',
      message: (`Thank you for subscribing. We hope you find our articles useful.`)
    }
    // store.addNotification(notification, { root: true })
    store.toastSuccess(notification)
    reset('first_name')
    reset('last_name')
    reset('phone')
    reset('email')
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