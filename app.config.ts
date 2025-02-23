export default defineAppConfig({
  schedulingLinks: {
    checkIn: 'https://booking.ohlawcolorado.com/check-in',
    estatePlanCheckup: 'https://booking.ohlawcolorado.com/ll-plan-checkup',
    estatePlanDesign: 'https://booking.ohlawcolorado.com/ll-plan-design',
    newClient: 'https://booking.ohlawcolorado.com/new-client',
    petitionReviewInPerson: 'https://booking.ohlawcolorado.com/bk-review-in-person',
    petitionReviewRemote: 'https://booking.ohlawcolorado.com/bk-review-remote'
  },
  strapiUrl: 'https://strapi.ohlawcolorado.com',
  ui: {
    primary: '#006699',
    gray: 'slate',
    tooltip: {
      background: '!bg-background'
    },
    variables: {
      dark: {
        background: 'var(--color-gray-950)'
      },
      header: {
        height: '5rem'
      }
    },
    icons: {
      dark: 'i-ph-moon-duotone',
      light: 'i-ph-sun-duotone',
      search: 'i-ph-magnifying-glass-duotone',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash-duotone'
    },
    header: {
      wrapper: 'lg:mb-0 lg:border-0',
      popover: {
        links: {
          active: 'dark:bg-gray-950/50',
          inactive: 'dark:hover:bg-gray-950/50'
        }
      }
    }
  }
})