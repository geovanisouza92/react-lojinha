import {EDIT_PRODUCT, UPDATE_PRODUCT_FULFILLED} from '../constants'

const initialState = null

export default function editingProductReducer (state = initialState, action) {
  switch (action.type) {
    case EDIT_PRODUCT:
      return action.payload
    case UPDATE_PRODUCT_FULFILLED:
      return null
    default:
      return state
  }
}
