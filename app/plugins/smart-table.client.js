import SmartTable from 'vuejs-smart-table'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(SmartTable)
})