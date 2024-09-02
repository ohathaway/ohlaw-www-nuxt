<template>
  <Timeline :tl-content="tlContent"></Timeline>
</template>

<script setup>
const tlContent = [
  {
    type: 'content',
    info: 'Initial Consult',
    content: [
      `The first time we meet with you, we'll explain our process and how you can choose your own package and fees. We won't make any firm recommendations until we've had a chance to get to know you and your family a little better.`
    ]
  },
  {
    type: 'content',
    info: 'The Life and Legacy Session',
    content: [
      `We `
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
      `Rather than create draft documents and ask you to review a bunch of legal terms you may or may not understand, we use a consolidated form call the CIMI (Confirmation of Information and Missing Information) to make sure we have all the information we need and that we understand your wishes exactly.`
    ]
  },
  {
    type: 'content',
    info: 'Drafting',
    content: [
      `At this stage, we've already figured out which documents we need for your plan and how they need to be drafted. So now we create them.`
    ]
  },
  {
    type: 'content',
    info: 'Signing Ceremony',
    content: [
      `The signing ceremony is when you will actually sign the documents we've prepared for you. You'll need to bring at least one witness with you to this meeting.`,
      `We like to create lots of original copies of everything we create. Many times a photocopy of a document will work, but not always. We make sure each of your agents gets an original copy of your documents and each major healthcare provider has a copy of your living will.`,
      `This can take up to an hour, so do your signing stretches before coming to the office.`
    ]
  },
  {
    type: 'content',
    info: 'Delivery and Training',
    content: [
      `Once all your documents are signed, we assemble them into their final package for you. This takes a little time, so we don't make you wait around. We schedule a final meeting to deliver them and teach you how to use them.`,
      `At our final (for now) meeting, we teach you how to use each of the documents we've prepared in your plan. `
    ]
  },
  {
    type: 'content',
    info: 'The Life & Legacy Interview',
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