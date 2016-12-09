import {PRODUCTS_LOADED, UPDATE_PRODUCT, PRODUCT_UPDATED} from '../constants'

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return action.products
    case UPDATE_PRODUCT:
      return state
    case PRODUCT_UPDATED:
      return state.map(product => {
        if (product.id === action.product.id) {
          return action.product
        }
        return product
      })
    default:
      return state
  }
}
