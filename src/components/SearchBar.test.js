import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import SearchBar from './SearchBar'
import { cleanup, fireEvent } from '@testing-library/react'
import { renderWithRedux } from '../test/utils'

afterEach(cleanup)

describe('SearchBar ', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <Provider store={store}>
        <SearchBar />
      </Provider>
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('displays the input to search a product', () => {
    const { getByText } = renderWithRedux(<SearchBar />)

    const inputLabel = getByText('Search Product')
    expect(inputLabel).not.toBe(undefined)
  })

  test('displays the checkbox to to search a product in the stock only', () => {
    const { getByText } = renderWithRedux(<SearchBar />)

    const checkbox = getByText('Only show products in stock')
    expect(checkbox).not.toBe(undefined)
  })
})
