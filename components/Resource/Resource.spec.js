import Resource from './index.js'
import { mount } from '@vue/test-utils'

describe('Resource.vue', () => {
  it('is a component', () => {
    const wrapper = mount(Resource)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(Resource)
    expect(wrapper.classes()).toContain('c-resource')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(Resource)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
