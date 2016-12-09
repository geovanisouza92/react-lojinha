import {bindActionCreators} from 'redux'
import {addToCart, removeFromCart, checkout} from '../../store/actions/cart'
import {editProduct} from '../../store/actions/editingProduct'
import {updateProduct} from '../../store/actions/products'

export const createActions = dispatch => bindActionCreators({
  addToCart,
  removeFromCart,
  editProduct,
  updateProduct,
  checkout
}, dispatch)
