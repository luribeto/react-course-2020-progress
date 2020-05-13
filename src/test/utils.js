// import { combineReducers, createStore } from 'redux'
// import { productsReducer } from '../redux/productsReducer'
// import { render } from '@testing-library/react'
// import React from 'react'
// import { Provider } from 'react-redux'

// export const renderWithRedux = (
//   ui,
//   {
//     initialState,
//     store = createStore(combineReducers({ productsList: productsReducer }), initialState)
//   } = {},
// ) => {
//   return {
//     ...render(<Provider store={store}>{ui}</Provider>),
//     store,
//   }
// }

import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk]);
const defaultState = {
  productsList: {
    isLoading: true,
    products: [],
    selectedProducts: [],
  }
}

export const renderWithRedux = (component, state = defaultState) => {
  const store = mockStore(state);

  return (
    <Provider store={store}>
      {component}
    </Provider>
  )
}
