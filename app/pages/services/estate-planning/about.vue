<template>
  <Timeline :tl-content="tlContent"></Timeline>
</template>

<script setup>
const tlContent = [
  {
    type: 'content',
    info: 'The Life and Legacy Session',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Choose Your Path',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Plan Design',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Information Confirmation - CIMI',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Drafting',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Signing Ceremony',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Delivery and Training',
    content: [
      ``
    ]
  },
  {
    type: 'content',
    info: 'Maintenance',
    content: [
      ``
    ]
  }
]

const { schedulingLinks: { newClient: link } } = useAppConfig()
console.debug('link: ', link)
</script>