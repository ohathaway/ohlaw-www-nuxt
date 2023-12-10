import { intersection } from 'lodash'

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

export {
  getThumbnailUrl,
  isModifier
}