<template>
  <div>
    <main id="lowIncomeResourcesSeeder" class="container-fluid main px-lg-5 py-lg-5">
      <h1>Low-Income Resources Admin</h1>
      <div class="w-75">
        <textarea
          cols="120"
          placeholder="foobar is a real word"
          id="resources"
        />
        <button class="btn btn-secondary" @click="seedDb()">Submit Data</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

const db = useFirestore()

const seedDb = async () => {
  const resources = JSON.parse(document.getElementById('resources').value)

  Promise.all(await resources.map(async resource => {
    const added = await addDoc(collection(db, 'lowIncomeResources'), resource)
    return added
  })).then( result => {
    console.debug('result: ', result)
  }).catch(error => {
    console.error('Error added documents to firestore: ', error)
  })
}
</script>

<style lang="scss" scoped>
textarea {
  font-family: 'Noto Sans Mono';
}
</style>