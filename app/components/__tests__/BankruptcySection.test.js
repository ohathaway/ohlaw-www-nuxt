import { mount } from '@vue/test-utils'
import BankruptcySection from '../BankruptcySection.vue'

const wrapper = mount(BankruptcySection, {
  global: {
    stubs: {
      ContactForm: true
    }
  }
})

describe('BankruptcySection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('shows the contact form when the "More" button is clicked', async () => {
    const button = wrapper.find('button[data-bs-target="#service-description-bankruptcy"]')
    await button.trigger('click')

    expect(wrapper.find('[id="service-description-bankruptcy"]').isVisible()).toBe(true)
  })
})