import * as actionTypes from './actionTypes'
const DEFAULT_STATE = { isLoading: false, errMess: null, products: [], selectedProducts: [] }

export const productsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      return { ...state, isLoading: false, errMess: null, products: action.payload }

    case actionTypes.PRODUCTS_LOADING:
      return { ...state, isLoading: true, errMess: null, products: [] }

    case actionTypes.PRODUCTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload }

    case actionTypes.SELECT_PRODUCT:
      return { ...state, selectedProducts: [...state.selectedProducts, action.product] }

    case actionTypes.UNSELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts.filter(p => p !== action.product)]
      }

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        selectedProducts: []
      }

    default:
      return state
  }
}