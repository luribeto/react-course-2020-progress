import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'

import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FilterableProductTable from './FilterableProductTable'
import { renderWithRedux } from '../test/utils'

describe('FilterableProductTable', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(renderWithRedux(<FilterableProductTable />))
  })

  it('Render correctly', () => {
    expect(wrapper).not.toBeNull()
    expect(wrapper.find(Card)).toHaveLength(1)
    expect(wrapper.find(CardHeader)).toHaveLength(1)
    expect(wrapper.find(CardContent)).toHaveLength(1)

    expect(wrapper.find(SearchBar)).toHaveLength(1)
    expect(wrapper.find(ProductsTable)).toHaveLength(1)
  })
})
