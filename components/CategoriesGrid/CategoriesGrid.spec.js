import CategoriesGrid from './index.js'
import { mount } from '@vue/test-utils'

describe('CategoriesGrid.vue', () => {
  it('is a component', () => {
    const wrapper = mount(CategoriesGrid)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(CategoriesGrid)
    expect(wrapper.classes()).toContain('c-categories-grid')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(CategoriesGrid)
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
