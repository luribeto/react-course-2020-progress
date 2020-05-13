import React from 'react';
import ProductRow from './ProductRow'
import { cleanup, render } from '@testing-library/react'
import { renderWithRedux } from '../test/utils'


describe('ProductRow', () => {
  afterEach(cleanup)

  test('display the product', () => {
    const product = {
      "category": "Sporting Goods",
      "price": "$49.99",
      "stocked": true,
      "name": "Football"
    }
    const { getByText } = renderWithRedux(
      <table>
        <tbody>
          <ProductRow {...{ product }} />
        </tbody>
      </table>,
      {
        initialState: {
          productsList: {
            selectedProducts: []
          }
        }
      }
    )

    const productName = getByText('Football')
    expect(productName).not.toBe(undefined)
  })

  test('display the product stocked', () => {
    const product = {
      "category": "Sporting Goods",
      "price": "$49.99",
      "stocked": false,
      "name": "Football"
    }
    const { getByText } = renderWithRedux(
      <table>
        <tbody>
          <ProductRow {...{ product }} />
        </tbody>
      </table>,
      {
        initialState: {
          productsList: {
            selectedProducts: []
          }
        }
      }
    )

    const productName = getByText('Football')
    const style = getComputedStyle(productName)
    expect(style.color).toBe('rgb(170, 0, 255)')
  })

  test('display the price of a product', () => {
    const product = {
      "category": "Sporting Goods",
      "price": "$49.99",
      "stocked": true,
      "name": "Football"
    }
    const { getByText } = renderWithRedux(
      <table>
        <tbody>
          <ProductRow {...{ product }} />
        </tbody>
      </table>,
      {
        initialState: {
          productsList: {
            selectedProducts: []
          }
        }
      }
    )

    const productName = getByText('$49.99')
    expect(productName).not.toBe(undefined)
  })
})
