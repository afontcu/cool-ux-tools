import CoolResource from './index.js'
import { mount } from '@vue/test-utils'

describe('CoolResource.vue', () => {
  it('is a component', () => {
    const wrapper = mount(CoolResource)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(CoolResource)
    expect(wrapper.classes()).toContain('Cool-resource')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(CoolResource)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
