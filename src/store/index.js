import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'

const finalCreateStore = composeWithDevTools(
  applyMiddleware(thunk, createLogger())
)(createStore)

const store = finalCreateStore(reducer)

export default store
