import FancyLink from './index.js'
import { mount } from '@vue/test-utils'

const propsData = {
  href: 'href.com',
  title: 'someTitle',
}

describe('FancyLink.vue', () => {
  it('is a component', () => {
    const wrapper = mount(FancyLink, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(FancyLink, { propsData })
    expect(wrapper.classes()).toContain('FancyLink')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(FancyLink, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
