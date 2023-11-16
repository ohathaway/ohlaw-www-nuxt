import { mount } from '@vue/test-utils'
import EstatePlanningSection from '../EstatePlanningSection.vue'

const wrapper = mount(EstatePlanningSection, {
  global: {
    stubs: {
      ContactForm: true
    }
  }
})

describe('EstatePlanningSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('shows the contact form when the "More" button is clicked', async () => {
    const button = wrapper.find('button[data-bs-target="#service-description-estate-planning"]')
    await button.trigger('click')

    expect(wrapper.find('[id="service-description-estate-planning"]').isVisible()).toBe(true)
  })
})