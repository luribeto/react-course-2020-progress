import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import { productsReducer } from './productsReducer'

export const store = createStore(
  combineReducers({
    productsList: productsReducer
  }),
  applyMiddleware(thunk)
)
