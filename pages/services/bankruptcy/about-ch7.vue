<template>
  <Timeline :tl-content="tlContent"></Timeline>
</template>

<script setup>
const tlContent = [
  {
    type: 'content',
    info: 'The day you hire us',
    content: [
      `We start representing you once you've signed the engagement letter and paid your first $100. This means we can send letters to creditors notifying them that you intend to file bankruptcy.`,
      `We haven't filed your case yet, so we can't force garnishments, foreclosures, or evictions to stop, but a lot of creditors don't want to waste their time collecting if they don't get to keep the money.`
    ]
  },
  {
    type: 'content',
    info: 'Payment Plan',
    content: [
      `Almost nobody who needs to file for bankruptcy has the cash on hand to pay their fees in full. So we work with our clients to put a payment plan together that works for them and their budget.`,
      `Unfortunately, we are not allowed to file your case then have you pay us afterward. Some states allow this. So far Colorado and Nebraska do not.`
    ]
  },
  {
    type: 'content',
    info: 'Doing Your Homework',
    content: [
      `Once you are a few months away from having your fees paid, we start you on your homework. We have a checklist of documents we need from you and a packet of information we need you to fill out. If your life is organized, it will probably take you a week. Most folks take a lot longer.`
    ]
  },
  {
    type: 'content',
    info: 'Preparing Your Petition',
    content: [
      `After you turn in your homework, we use it to prepare your bankruptcy petition. Unless your case is complicated, and around 10% of our cases are, we can usually get this completed in about a week.`,
      `We almost always have a few clarifications we need from you, so this is a time we need you to be diligent about watching for emails, text messages or phone calls from us.`
    ]
  },
  {
    type: 'content',
    info: 'Petition Review',
    content: [
      `We always do a 1 hour meeting with our clients to review and sign the petition before we file it. This meeting gives us a chance to make sure we understood everything you gave us and gives you a chance to make sure we did it right. We always find something we need to update in the petition or a question that hadn't come up yet. That's way we do these meetings.`,
      `We also pick a date together to file your case with the bankruptcy court.`
    ]
  },
  {
    type: 'period',
    content: 'Filing Day'
  },
  {
    type: 'content',
    info: 'The Automatic Stay',
    content: [
      `The instant we file your case, a court order automatically goes into place staying any action to try to collect from you on a debt. This means garnishments, foreclosures, and evictions all must stop, immediately. Violation of this court order is contempt of court, which means the court can impose sanctions (fines) on the creditors who disregard it.`,
      `This order is so strong that many creditors who you want to keep paying, like your car lender or your mortgage servicer, won't talk to you and may even disable your access to their online services. They also will probably stop taking automatic payments if you've set that up with them. So make sure you've made alternate arrangements to pay on the debts you want to keep after bankruptcy.`
    ]
  },
  {
    type: 'content',
    info: '&sect; 341 Meeting',
    content: [
      `About a month after we file your case, you will be required to attend a &sect; 341 meeting of creditors. It's called a "meeting," but it feels a lot like court. You will be put under oath and asked a bunch of questions about your bankruptcy. Don't sweat it, and tell the truth. There shouldn't be any surprises here if you were thorough in doing your homework for us.`,
      `If there are any problems with your case, or if the trustee on your case is going to require you to pay some money or turn over a tax refund, this is when we'll most likely find out about it. We almost always know what the trustee is likely to ask for, and this is one of the biggest reasons to hire an attorney for your bankruptcy. We'll have you ready for this meeting.`
    ]
  },
  {
    type: 'content',
    info: 'Discharge',
    content: [
      `About 60 days after your &sect; 341 meeting, the court will issue your discharge. This is the order that wipes out all of your debt. It's a general discharge. It doesn't pick and choose. It wipes out everything that isn't subject to an exception.`,
      `The trustee can have your discharge revoked if you don't follow through on any of the payments that came up at your &sect; 341. So stay on top of those, and get in touch with us immediately if something happens to make it harder for you to make those payments. If no payments are due, you're done.`
    ]
  },
  {
    type: 'period',
    content: 'CONGRATULATIONS YOU DID IT'
  }
]
</script>