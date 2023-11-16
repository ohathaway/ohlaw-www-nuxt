import { mount } from '@vue/test-utils'
import NonprofitsSection from '../NonprofitsSection.vue'

const wrapper = mount(NonprofitsSection, {
  global: {
    stubs: {
      ContactForm: true
    }
  }
})

describe('NonprofitsSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('shows the contact form when the "More" button is clicked', async () => {
    const button = wrapper.find('button[data-bs-target="#service-description-nonprofit"]')
    await button.trigger('click')

    expect(wrapper.find('[id="service-description-nonprofit"]').isVisible()).toBe(true)
  })
})