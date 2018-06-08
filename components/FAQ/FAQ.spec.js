import Faq from './index.js'
import { mount } from '@vue/test-utils'

describe('Faq.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Faq)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Faq)
    expect(wrapper.classes()).toContain('Faq')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(Faq)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
