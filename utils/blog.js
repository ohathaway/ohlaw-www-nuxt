// const nuxtApp = useNuxtApp()

// console.debug('nuxtApp: ', nuxtApp)
// const { strapiUrl } = nuxtApp.runWithContext(() => useAppConfig())
const strapiUrl = 'https://strapi.ohlawcolorado.com'

const isModifier = brick => {
  const modifierTypes = [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'code'
  ]
  return intersection(modifierTypes, Object.keys(brick)).length > 0
}

const getThumbnailUrl = url => {
  const urlParts = url.split('/')
  urlParts.push(urlParts.pop().replace(/^/, 'thumbnail_'))
  return urlParts.join('/')
}

/*
const getStrapiThumbnailUrl = image => {
  const { data: { attributes: {url } } } = image
  const urlParts = url.split('/')
  urlParts.push(urlParts.pop().replace(/^/, 'thumbnail_'))
  return strapiUrl+urlParts.join('/')
}
*/
const getStrapiThumbnailUrl = image => {
  const url = image?.data?.attributes?.url ?? image?.url
  if (!url) return ''
  const urlParts = url.split('/')
  urlParts.push(urlParts.pop().replace(/^/, 'thumbnail_'))
  return strapiUrl + urlParts.join('/')
}

/*
const getStrapiUrl = image => {
  const { data: { attributes: {url } } } = image
  return strapiUrl+url
}
*/
const getStrapiUrl = image => {
  const url = image?.data?.attributes?.url ?? image?.url
  return url ? strapiUrl + url : ''
}

const richTextToPlainText = rich => {
  try {
    return rich.map(brick => {
      if (brick.type === 'paragraph') {
        return brick.children.map( child => {
          return child.type === 'text'
            ? child.text
            : child.children[0].text
        }).join(' ').trim()
      }
    })[0]
  } catch (error) {
    console.error(error)
    return error
  }
}

const addScrollSpy = () => {

}

/*
 * graphQl queries
 */
const singlePostQuery = slug => {
  return gql`
    query Posts {
      posts(
        filters: {
          slug: {
            eq: "${slug}"
          }
        }
      ) {
        documentId
        Content
        Title
        Image {
          name
          caption
          url
          previewUrl
          provider
        }
        tags {
          Name
          slug
        }
        category {
          Name
          slug
        }
        slug
        publishDate
        Snippet
        CTA
        createdAt
        updatedAt
        publishedAt
        terms {
            term
            definition
            slug
            sources
        }
      }
    }
  `
}

const allPostsQuery = gql`
query Posts {
  posts {
      documentId
      Content
      Title
      Image {
          name
          url
          previewUrl
          provider
      }
      tags {
          Name
          slug
      }
      category {
          Name
          slug
      }
      CTA
      createdAt
      updatedAt
      publishedAt
  }
}
`

const featuredPostQuery = gql`
query FeaturedPost {
  featuredPost {
    documentId
    createdAt
    updatedAt
    publishedAt
    post {
      documentId
      Content
      Title
      slug
      publishDate
      Snippet
      CTA
      createdAt
      updatedAt
      publishedAt
      category {
        documentId
        Name
        slug
        createdAt
        updatedAt
        publishedAt
      }
      Image {
        documentId
        name
        url
        previewUrl
      }
      tags {
        Name
        slug
      }
    }
  }
}`

const spotlightPostsQuery = gql`
query Spotlight {
  spotlight {
    posts {
      documentId
      Content
      Title
      slug
      publishDate
      Snippet
      CTA
      createdAt
      updatedAt
      publishedAt
      Image {
        name
        url
        previewUrl
        provider
      }
      tags {
        documentId
        Name
        slug
      }
      category {
        Name
        slug
      }
    }
  }
}
`

const categoryPostsQuery = (category, limit = 3) => {
  return gql`
  query Categories {
    categories(
      pagination: { start: 0, limit: ${limit} },
      filters: { Name: { eq: "${category}" } }
    ) {
      posts (sort: "publishDate:DESC") {
        documentId
        Snippet
        Title
        slug
        publishDate
        tags {
            Name
            slug
            documentId
        }
        Image {
            name
            caption
            alternativeText
            url
            previewUrl
            provider
        }
      }
    }
  }
  `
}

const tagPostsQuery = (tag, limit = 3) => {
  return gql`
  query Tags {
    tags(
      pagination: { start: 0, limit: ${limit} },
      filters: { slug: { eq: "${tag}" } }
    ) {
      terms {
        term
        definition
        sources
        slug
      }
      posts (
        sort: "publishDate:DESC"
      ) {
        documentId
        Title
        Image {
          name
          alternativeText
          url
          previewUrl
          provider
        }
        tags {
          Name
          slug
        }
        Snippet
        terms {
          term
          definition
          sources
          slug
        }
      }
    }
  }
  `
}

const dedupPosts = posts =>{
  return posts.filter((value, index, self) => {
    return self.findIndex(v => v.documentId === value.documentId) === index
  })
}

export {
  allPostsQuery,
  categoryPostsQuery,
  dedupPosts,
  getStrapiThumbnailUrl,
  getStrapiUrl,
  getThumbnailUrl,
  featuredPostQuery,
  isModifier,
  richTextToPlainText,
  singlePostQuery,
  spotlightPostsQuery,
  tagPostsQuery
}