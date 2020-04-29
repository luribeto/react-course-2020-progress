import * as actionTypes from './actionTypes'

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

export const selectProduct = productId => ({
  type: actionTypes.SELECT_PRODUCT,
  payload: productId
})

export const unSelectProduct = productId => ({
  type: actionTypes.UNSELECT_PRODUCT,
  payload: productId
})

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
})
