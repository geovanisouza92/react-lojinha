import {combineReducers} from 'redux'
import cart from './cart'
import editingProduct from './editingProduct'
import products from './products'

const rootReducer = combineReducers({
  cart,
  editingProduct,
  products
})

export default rootReducer
