import { combineReducers, createStore } from 'redux'
import { productsReducer } from '../redux/productsReducer'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(combineReducers({ productsList: productsReducer }), initialState)
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
