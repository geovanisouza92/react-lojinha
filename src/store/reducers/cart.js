import {ADD_PRODUCT_TO_CART, REMOVE_FROM_CART, CHECKOUT_FULFILLED} from '../constants'

const initialState = []

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.payload.id)
    case CHECKOUT_FULFILLED:
      return []
    default:
      return state
  }
}
