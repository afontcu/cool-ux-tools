import FancyLink from './index.js'
import { mount } from '@vue/test-utils'

describe('FancyLink.vue', () => {
  it('is a component', () => {
    const wrapper = mount(FancyLink)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(FancyLink)
    expect(wrapper.classes()).toContain('c-fancy-link')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(FancyLink)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
