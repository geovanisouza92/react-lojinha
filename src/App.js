import React, { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
    // TODO: Faça o bind do método removeFromCart
  }

  componentWillMount () {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(products => this.setState({products}))
  }

  addToCart (product) {
    const cart = [...this.state.cart, product]
    this.setState({cart})
  }

  removeFromCart (product) {
    // TODO: Remova o produto do carrinho (criando uma nova lista)
  }

  render () {
    const products = this.state.products
    const cart = this.state.cart

    // TODO: Passe a referência do método removeFromCart via props
    // para o carrinho
    let main = (
      <div className='row'>
        <div className='col-md-8 col-sm-8'>
          <h3>Produtos</h3>

          <ProductList
            products={products}
            onAddToCart={this.addToCart}
            onEditProduct={this.editProduct} />

        </div>
        <div className='col-md-4 col-sm-4'>
          <h3>Carrinho</h3>

          <Cart cart={cart} />
        </div>
      </div>
    )

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-sm-12'>
            <h1>Lojinha Demais!</h1>
          </div>
        </div>
        {main}
      </div>
    )
  }
}

export default App
