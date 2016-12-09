import {EDIT_PRODUCT} from '../constants'

export function editProduct (product) {
  return {
    type: EDIT_PRODUCT,
    product
  }
}
