import React from 'react'
import ReactDOM from 'react-dom'
// TODO: Importe o Provider do react-redux, a store e
// a ação que carrega os produtos
import {Provider} from 'react-redux'
import store from './store'
import {loadProducts} from './store/actions/products'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

// TODO: Despache a primeira ação para a store
store.dispatch(loadProducts())

// TODO: Envolva o container App no Provider passando
// a store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
