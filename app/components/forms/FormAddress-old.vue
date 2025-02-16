<template>
  <FormKit
    type="form"
    @submit="updateAddress"
    submit-label="Update Address"
    :config="{
      classes: {
        input: {
          'form-control': true,
          'formkit-input': false
        }
      }
    }"
  >
    <FormKit
      type="text"
      name="street1"
      id="street1"
      :placeholder="address ? address.stree1 : null"
      :value="address ? address.street1 : null"
    />
    <FormKit
      type="text"
      name="street2"
      id="street2"
      placeholder="Street Address2"
      :placeholder="address ? address.street2 : null"
      :value="address ? address.street2 : null"
    />
    <FormKit
      type="text"
      name="city"
      id="city"
      placeholder="City"
      :placeholder="address ? address.city : null"
      :value="address ? address.city : null"
    />
    <FormKit
      type="text"
      name="state"
      id="state"
      placeholder="State"
      :placeholder="address ? address.state : null"
      :value="address ? address.state : null"
    />
    <FormKit
      type="text"
      name="zip"
      id="zip"
      placeholder="Zip"
      :placeholder="address ? address.zip : null"
      :value="address ? address.zip : null"
    />
  </FormKit>
</template>

<script setup>
import { FormKitSchema } from '@formkit/vue'
import { useCaseBkStore } from '@/stores/caseBkStore'
const props = defineProps(['formFor', 'address'])

const caseStore = useCaseBkStore()

const schema = [
  {
    $el: 'h5',
    children: ''
  }
]
const updateAddress = (fields) => {
  const addressType = `address${capitalize(props.formFor)}`
  caseStore.filingInfo.debtor1[addressType] = fields
}
</script>
