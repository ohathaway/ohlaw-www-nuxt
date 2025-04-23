import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { library, o2svg } from '@/plugins/fontawesome'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('fk-a2c0cf2353', inputs)

const at = o2svg(library.definitions.fas.at)
const phone = o2svg(library.definitions.fas.phone)
const user = o2svg(library.definitions.fas.user)

const isCheckboxAndRadioMultiple = (node) =>
  (node.props.type === 'checkbox' || node.props.type === 'radio') && node.props.options

const validZip = (node) => {
  return !isEmpty(node.value.match(/^\d{5}(?:[-\s]\d{4})?$/))
}

const isTrue = (node) => {
  return typeof node.value === 'boolean' ? node.value : false
}

const legends = ['checkbox_multi', 'radio_multi', 'repeater', 'transferlist']

function addAsteriskPlugin(node) {
  if (['button', 'submit', 'hidden', 'group', 'meta'].includes(node.props.type)) return

  node.on('created', () => {
    const legendOrLabel = legends.includes(`${node.props.type}${node.props.options ? '_multi' : ''}`) ? 'legend' : 'label'

    if (node.props.definition.schemaMemoKey) {
      node.props.definition.schemaMemoKey += `${node.props.options ? '_multi' : ''}_add_asterisk`
    }
    
    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      sectionsSchema[legendOrLabel] = {
        children: ['$label', {
          $el: 'span',
          if: '$state.required',
          attrs: {
            class: '$classes.asterisk',
          },
          children: [' *']
        }]
      }
      
      return schemaFn(sectionsSchema)
    }
  })
}

export default {
  config: {
    classes: {
      /*
      inner: {
        'formkit-inner': false,
        'input-group': true
      },
      */
      input: {
        'input-bg-white': true,
        'form-control': true,
      },
      outer: {
      },
      checkbox: {
        'form-control': true,
        'label-class': {
          $reset: true
        }
      },
      submit: {
        input: {
          'btn': true,
          'btn-primary': true
        }
      }
      /*
      },
      prefixIcon: {
        'formkit-prefix-icon': false,
        'input-group-text': true
      },
      wrapper: {
        'formkit-wrapper': false
      }
      */
    }
  },
  icons: {
    ...genesisIcons, at, phone, user
  },
  messages: {
    en: {
      validation: {
        validZip({ node }) {
          return `${node.value} is not a valid zipcode`
        }
      }
    }
  },
  plugins: [
    addAsteriskPlugin,
    createFloatingLabelsPlugin({ useAsDefault: true }),
    pro
  ],
  rules: { isTrue, validZip }
}