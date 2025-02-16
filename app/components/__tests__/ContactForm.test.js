import { mount } from '@vue/test-utils'
import ContactForm from '../ContactForm.vue'

describe('ContactForm component', () => {
  it('matches the snapshot', () => {
    /*
    const wrapper = mount(ContactForm)

    expect(wrapper).toMatchSnapshot()
    */
  })

  it('disables the submit button when the form is not valid', async () => {
    /*
    const wrapper = mount(ContactForm, {
      props: {
        serviceFormName: 'General Contact'
      }
    })

    const submit = wrapper.find('button.submit')
    expect(submit.classes()).toContain('disabled')
    */
  })
})
