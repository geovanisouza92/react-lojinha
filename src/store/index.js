import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

const middlewares = applyMiddleware(promise(), thunk)
const enhance = composeWithDevTools(middlewares)
const enhancedCreateStore = enhance(createStore)
const store = enhancedCreateStore(rootReducer)

export default store
