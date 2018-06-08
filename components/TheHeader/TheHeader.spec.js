import TheHeader from './index.js'
import { mount } from '@vue/test-utils'

describe('TheHeader.vue', () => {
  it('is a component', () => {
    const wrapper = mount(TheHeader, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(TheHeader, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.classes()).toContain('Header')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(TheHeader, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
