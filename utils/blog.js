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

const addScrollSpy = () => {

}

/*
 * graphQl queries
 */
const singlePostQuery = slug => {
  return gql`
  query {
    posts(filters: { slug: { eq: "${slug}" } }) {
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
                Name,
                slug
              }
            }
          },
          tags {
            data {
              id,
              attributes {
                Name,
                slug
              }
            }
          },
          Image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }`
}

const allPostsQuery = gql`
query {
  posts(sort: "publishedAt:DESC") {
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
              Name,
              slug
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
                    Name,
                    slug
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
                    Name,
                    slug
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
        posts (sort: "publishDate:DESC") {
          data {
            id,
              attributes {
              Content,
                CTA,
                publishedAt,
                slug,
                Title,
                category {
                data {
                  id,
                    attributes{
                    Name,
                    slug
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
                    Name,
                    slug
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

const categoryPostsQuery = (category, limit = 3) => {
  return gql`
  query {
    categories(
      pagination: { start: 0, limit: ${limit} },
      filters: { Name: { eq: "${category}" } }
    ) {
      data {
        attributes {
          posts (sort: "publishDate:DESC") {
            data {
              id,
              attributes {
                Snippet,
                Title,
                slug,
                tags {
                  data {
                    id,
                    attributes {
                      Name
                    }
                  }
                },
                Image {
                  data {
                    attributes {
                      name
                      url
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
}

const tagPostsQuery = (tag, limit = 3) => {
  return gql`
  query {
    tags(
      pagination: { start: 0, limit: ${limit} },
      filters: { slug: { eq: "${tag}" } }
    ) {
      data {
        attributes {
          posts (sort: "publishDate:DESC") {
            data {
              id,
              attributes {
                Snippet,
                Title,
                slug,
                tags {
                  data {
                    id,
                    attributes {
                      Name,
                      slug
                    }
                  }
                },
                Image {
                  data {
                    attributes {
                      name
                      url
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
}

export {
  allPostsQuery,
  categoryPostsQuery,
  getStrapiThumbnailUrl,
  getStrapiUrl,
  getThumbnailUrl,
  featuredPostQuery,
  isModifier,
  singlePostQuery,
  spotlightPostsQuery,
  tagPostsQuery
}