import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'

import ProductsTable from './ProductsTable'
import Table from '@material-ui/core/Table';
import CircularProgress from '@material-ui/core/CircularProgress';
import { renderWithRedux } from '../test/utils'

describe('ProductsTable', () => {
  let wrapper
  const filterText = ''
  const isStockOnly = false

  it('Render progress state', () => {
    const mockBeforeProducts = {
      productsList: {
        isLoading: true,
        products: [],
        selectedProducts: [],
      }
    }

    wrapper = mount(renderWithRedux(<ProductsTable {...{ filterText, isStockOnly }} />, mockBeforeProducts))

    expect(wrapper).not.toBeNull()
    expect(wrapper.find(Table)).toHaveLength(0)
    expect(wrapper.find(CircularProgress)).toHaveLength(1)
  })

  it('Once products renders table', () => {
    const mockAfterProducts = {
      productsList: {
        isLoading: false,
        products: [
          { id: 1, category: "Sporting Goods", name: 'MyProduct1', price: '$4,99', stocked: true },
          { id: 2, category: "Sporting Goods", name: 'MyProduct2', price: '$4,99', stocked: false },
          { id: 3, category: "Electronics", name: 'MyProduct3', price: '$4,99', stocked: true },
        ],
        selectedProducts: [],
      }
    }

    wrapper = mount(renderWithRedux(<ProductsTable {...{ filterText, isStockOnly }} />, mockAfterProducts))

    expect(wrapper).not.toBeNull()
    expect(wrapper.find(Table)).toHaveLength(1)
    expect(wrapper.find(CircularProgress)).toHaveLength(0)
  })
})
