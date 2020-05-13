import React from 'react';
import ProductsTable from './ProductsTable'
import { cleanup } from '@testing-library/react'
import { renderWithRedux } from '../test/utils'

afterEach(cleanup)

describe('ProductsTable', () => {
  let filterText = ''
  let isStockOnly = false

  test('display the not product warning', () => {
    const { getByText } = renderWithRedux(
      <ProductsTable {...{ filterText, isStockOnly }} />,
      {
        initialState: {
          productsList: {
            isLoading: false,
            products: [],
            selectedProducts: []
          }
        }
      }
    )

    const unexistingProduct = getByText('There is not product to show')
    expect(unexistingProduct).not.toBe(undefined)
  })

  test('display the category row for a product', () => {
    const { getByText } = renderWithRedux(
      <ProductsTable {...{ filterText, isStockOnly }} />,
      {
        initialState: {
          productsList: {
            isLoading: false,
            products: [
              {
                "category": "Sporting Goods",
                "price": "$49.99",
                "stocked": false,
                "name": "Football"
              }
            ],
            selectedProducts: []
          }
        }
      }
    )

    const unexistingProduct = getByText('Sporting Goods')
    expect(unexistingProduct).not.toBe(undefined)
  })
})
