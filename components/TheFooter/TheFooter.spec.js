import TheFooter from './index.js'
import { mount } from '@vue/test-utils'

describe('TheFooter.vue', () => {
  it('is a component', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.classes()).toContain('Footer')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
