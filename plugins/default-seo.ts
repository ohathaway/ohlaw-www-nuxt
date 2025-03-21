// plugins/default-seo.ts
export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const seo = appConfig.seo
  
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | ${seo.siteName}` : seo.defaultTitle
    },
    title: seo.defaultTitle,
    meta: [
      { name: 'description', content: seo.defaultDescription },
      { name: 'keywords', content: seo.defaultKeywords },
      { property: 'og:title', content: seo.defaultTitle },
      { property: 'og:description', content: seo.defaultDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: seo.siteUrl },
      { property: 'og:image', content: seo.logo },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.defaultTitle },
      { name: 'twitter:description', content: seo.defaultDescription },
      { name: 'twitter:image', content: seo.logo },
      { name: 'twitter:image:alt', content: `${seo.siteName} logo` }
    ],
    link: [
      { rel: 'canonical', href: seo.siteUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          'name': seo.siteName,
          'image': seo.logo,
          'telephone': seo.phone,
          'url': seo.siteUrl,
          // Basic structured data
        })
      }
    ]
  })
})