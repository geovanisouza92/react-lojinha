import {ADD_PRODUCT_TO_CART, REMOVE_FROM_CART, ORDER_CREATED} from '../constants'

export default function cartReducer (state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, action.product]
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.product.id)
    case ORDER_CREATED:
      return []
    default:
      return state
  }
}
