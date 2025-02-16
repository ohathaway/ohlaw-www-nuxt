import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'

const wrapper = mount(ContactSection, {
  global: {
    stubs: {
      ContactForm: true
    }
  }
})

describe('ContactSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})