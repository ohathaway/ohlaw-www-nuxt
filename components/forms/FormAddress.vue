<template>
  <FormKit type="text" name="street1" label="Street Address1" validation="required" />
  <FormKit type="text" name="street2" label="Street Address2" />
  <FormKit type="text" name="city" label="City" validation="required" />
  <FormKit type="text" name="state" label="State" validation="required" />
  <FormKit type="text" name="zip" label="Zip" :delay="1500" validation="required|validZip" />
</template>

<script setup>
// import { ref } from 'vue'
// import { getZipcode } from '@/apis/usps'

// const zipValidated = ref(false)

/*
const lookupZip = (event, node) => {
  if (event.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
    getZipcode(event).then(result=> {
      console.debug('googlemaps result: ', result.data.results[0].postcode_localities)
    })
  }
}
*/
</script>
