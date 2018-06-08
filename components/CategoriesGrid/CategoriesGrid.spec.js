import CategoriesGrid from './index.js'
import { mount } from '@vue/test-utils'

describe('CategoriesGrid.vue', () => {
  it('is a component', () => {
    const wrapper = mount(CategoriesGrid, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(CategoriesGrid, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.classes()).toContain('Categories-grid')
  })

  it('renders a snapshot', () => {
    const wrapper = mount(CategoriesGrid, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.html()).toMatchSnapshot('default')
  })
})
