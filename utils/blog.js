import { intersection } from 'lodash'

const { public: { strapi: { url: strapiUrl } } } = useRuntimeConfig()

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

const getStrapiThumbnailUrl = image => {
  const { data: { attributes: {url } } } = image
  const urlParts = url.split('/')
  urlParts.push(urlParts.pop().replace(/^/, 'thumbnail_'))
  return strapiUrl+urlParts.join('/')
}

const getStrapiUrl = image => {
  const { data: { attributes: {url } } } = image
  return strapiUrl+url
}

/*
 * graphQl queries
 */

const allPostsQuery = gql`
query {
  posts(sort: "publishedAt:ASC") {
    data {
      id
      attributes {
        Title,
        Snippet,
        Image {
          data {
            attributes {
              name
              url
            }
          }
        },
        slug,
        tags {
          data {
            id,
            attributes {
                Name
            }
          }
        }
      }
    }
  }
}`

const featuredPostQuery = gql`
query {
  featuredPost{
    data{
      attributes{
        post {
          data {
            id,
              attributes {
              Content,
                CTA,
                publishedAt,
                Title,
                slug,
                category {
                data {
                  id,
                    attributes{
                    Name
                  }
                }
              },
              Image {
                data {
                  id,
                  attributes {
                    name,
                    url
                  }
                }
              }
              tags {
                data {
                  id,
                    attributes {
                    Name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`

const spotlightPostsQuery = gql`
query {
  spotlight{
    data{
      attributes{
        posts {
          data {
            id,
              attributes {
              Content,
                CTA,
                publishedAt,
                Title,
                category {
                data {
                  id,
                    attributes{
                    Name
                  }
                }
              },
              Image {
                data {
                  attributes {
                    name,
                    url
                  }
                }
              },
              tags {
                data {
                  id,
                    attributes {
                    Name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export {
  allPostsQuery,
  getStrapiThumbnailUrl,
  getStrapiUrl,
  getThumbnailUrl,
  featuredPostQuery,
  isModifier,
  spotlightPostsQuery 
}