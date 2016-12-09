import {LOAD_PRODUCTS_FULFILLED, UPDATE_PRODUCT_FULFILLED} from '../constants'

const initialState = []

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_FULFILLED:
      return action.payload
    case UPDATE_PRODUCT_FULFILLED:
      return state.map(product => {
        if (product.id === action.payload.id) {
          return action.payload
        }
        return product
      })
    default:
      return state
  }
}
