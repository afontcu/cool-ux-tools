import CoolResource from './index.js'
import { mount } from '@vue/test-utils'
require('intersection-observer')

const propsData = {
  category: 'category',
  link: 'link.com',
  name: 'Name',
  image: 'image.png',
}

describe('CoolResource.vue', () => {
  it('is a component', () => {
    const wrapper = mount(CoolResource, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(CoolResource, { propsData })
    expect(wrapper.classes()).toContain('Cool-resource')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(CoolResource, { propsData })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
