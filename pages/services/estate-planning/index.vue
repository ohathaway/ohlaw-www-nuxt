<template>
  <h2>This is the Estate Planning service page</h2>
  <div class="row">
    <div class="col-6">
      <ServicesFaq :questions="epFaqContent" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'services'
})

const epFaqContent = [
  {
    question: 'What is a trust?',
    answer: [
      `Think of a trust as a will substitute. Like a will, it specifies who gets what, under what circumstances, and who is responsible for ensuring that happens.The only difference is the process they follow. The critical difference between a will and a trust is that a will has to be filed with a probate court and reviewed and approved before anyone can act under it or receive any assets from your estate.So everything filed in the probate court, including the will, becomes a public record, and, as you might imagine, it takes time to go through a public court proceeding.`,
      `A trust, on the other hand, is an entirely private document. No one is entitled to see it except those who are named in it, and the successor trustee named in your trust can act immediately without having to go to court, file anything, or get permission first.So, a trust is a private document that can be more immediate and efficient upon someone’s passing.In contrast, a will is a public document once filed with the court, and the court has to review and approve an appointment as Personal Representative of the estate before anyone can act under it.`,
      `So, a will and a trust are similar in terms of their objectives, but they follow different processes when someone needs to act. A trust is more streamlined and private. A will, on the other hand, takes a bit longer and is public.`
    ]
  },
  {
    question: `Aren’t trusts only for wealthy people?`,
    answer: [
      `So you’ve probably heard people say that trusts are only for the rich or only for folks with a net worth of X dollars or more. That is not the approach that we take. Instead, we let the client decide if a will is the best route or a trust is the best. It has nothing to do with how much you own or might own or your net worth or anything like that. For us, it’s really about the quality of what your family will have to go through.`,
      `If you leave a will without a trust and own real estate, your family will probably have to go through the probate court.If you utilize a trust instead and everything is done correctly, then your family can avoid the probate court, and things can be much more immediate and kept private versus with a will, and things become a public record.`,
      `So, going through the ins and outs of how a will works, what steps will need to be taken, compared to how a trust works and the steps to take under a trust down the road really helps our clients figure out whether a trust is right for them.`,
      `We never make a judgment call looking at our clients’ assets to say, “Oh, that client doesn’t need a trust.We’re not even going to talk to them about it.” Or making the judgment call, “That client definitely needs a trust, and that’s all we’re going to talk to them about.” It’s not up to us ultimately.It’s up to our clients, whom we go to great lengths to educate you about the differences between the two so that you eventually decide what’s best for you and your family.`
    ]
  }
]
</script>