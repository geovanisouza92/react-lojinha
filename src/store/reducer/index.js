import {combineReducers} from 'redux'
import cart from './cart'
import editingProduct from './editingProduct'
import products from './products'

const reducer = combineReducers({
  cart,
  editingProduct,
  products
})

export default reducer
