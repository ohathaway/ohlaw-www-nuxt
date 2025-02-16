import { mount } from '@vue/test-utils'
import SmallBusinessSection from '../SmallBusinessSection.vue'

const wrapper = mount(SmallBusinessSection, {
  global: {
    stubs: {
      ContactForm: true
    }
  }
})

describe('SmallBusinessSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('shows the contact form when the "More" button is clicked', async () => {
    const button = wrapper.find('button[data-bs-target="#service-description-small-business"]')
    await button.trigger('click')

    expect(wrapper.find('[id="service-description-small-business"]').isVisible()).toBe(true)
  })
})