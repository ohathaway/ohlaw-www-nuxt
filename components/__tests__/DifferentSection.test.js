import { mount } from '@vue/test-utils'
import DifferentSection from '../DifferentSection.vue'

const wrapper = mount(DifferentSection)

describe('DifferentSection component', () => {
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})