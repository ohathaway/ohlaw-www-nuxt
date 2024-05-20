export const toTitleCase = (phrase, delimiter = ' ') => {
  return phrase.toLowerCase().split(delimiter).map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

export const toKebobCase = (phrase, delimiter = ' ') => {
  return phrase.toLowerCase().replaceAll(delimiter, '-')
}

export const httpUrl = url => {
  return url.startsWith('http')
    ? url
    : `https://${url}`
}

export const formatAnchorText = text => {
  return `#${text.replaceAll(' ', '-')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(':', '')
    .toLowerCase()
  }`
}