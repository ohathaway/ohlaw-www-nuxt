// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAt,
  faBan,
  faBoxArchive,
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faCommentDots,
  faCommentSms,
  faEnvelope,
  faExternalLink,
  faExternalLinkAlt,
  faFax,
  faFileArrowDown,
  faFileCsv,
  faFileContract,
  faFloppyDisk,
  faGaugeHigh,
  faHome,
  faMailBulk,
  faMap,
  faPenToSquare,
  faPhone,
  faPlus,
  faTrashCan,
  faTriangleExclamation,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {
  faIdBadge,
  faRectangleXmark
} from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})


// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faAt,
  faBan,
  faBoxArchive,
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faCommentDots,
  faCommentSms,
  faPenToSquare,
  faEnvelope,
  faExternalLink,
  faExternalLinkAlt,
  faFax,
  faFileArrowDown,
  faFileContract,
  faFileCsv,
  faFloppyDisk,
  faGaugeHigh,
  faHome,
  faIdBadge,
  faMailBulk,
  faMap,
  faPenToSquare,
  faPhone,
  faPlus,
  faTrashCan,
  faTriangleExclamation,
  faRectangleXmark,
  faUser
)

const o2svg = (faIcon) => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 ${faIcon[0]} ${faIcon[1]}"
      class="svg-inline--fa fa-at"
      role="img">
      <path fillColor="currentColor" d="${faIcon[4]}" />
    </svg
  `
}

export { library, o2svg }