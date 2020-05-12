import * as actionTypes from './actionTypes'
import { baseUrl } from '../config/baseUrl'


export const fetchProducts = () => (dispatch, getState) => {
  dispatch(productsLoading());

  return fetch(baseUrl + 'products')
    .then(response => response.json())
    // .then(products => dispatch(addProducts(products)))
    .then(products => {
      setTimeout(() => {
        dispatch(addProducts(products))
      }, 2000)
    })
    .catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
  type: actionTypes.PRODUCTS_LOADING
})

export const productsFailed = (errmess) => ({
  type: actionTypes.PRODUCTS_FAILED,
  payload: errmess
})

export const addProducts = (products) => ({
  type: actionTypes.ADD_PRODUCTS,
  payload: products
})

export const selectProduct = product => ({
  type: actionTypes.SELECT_PRODUCT,
  product
})

export const unSelectProduct = product => ({
  type: actionTypes.UNSELECT_PRODUCT,
  product
})

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
})
