import { mount } from '@vue/test-utils'
import WelcomeSection from '../WelcomeSection.vue'

const wrapper = mount(WelcomeSection)

describe('WelcomeSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})