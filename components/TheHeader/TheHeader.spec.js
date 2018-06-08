import TheHeader from './index.js'
import { mount } from '@vue/test-utils'

describe('TheHeader.vue', () => {
  it('is a component', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.classes()).toContain('c-the-header')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
