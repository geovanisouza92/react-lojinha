import {EDIT_PRODUCT, PRODUCT_UPDATED} from '../constants'

export default function editingProductReducer (state = null, action) {
  switch (action.type) {
    case EDIT_PRODUCT:
      return action.product
    case PRODUCT_UPDATED:
      return null
    default:
      return state
  }
}
