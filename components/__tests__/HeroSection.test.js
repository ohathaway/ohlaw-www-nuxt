import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

const wrapper = mount(HeroSection)

describe('HeroSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})