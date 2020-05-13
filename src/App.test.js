import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'

import App from './App'
import FilterableProductTable from './components/FilterableProductTable'
import Header from './components/Header'


describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('Render correctly', () => {
    expect(wrapper).not.toBeNull()
    expect(wrapper.find(Provider)).toHaveLength(1)
    expect(wrapper.find(Header)).toHaveLength(1)
    expect(wrapper.find(FilterableProductTable)).toHaveLength(1)
  })
})
