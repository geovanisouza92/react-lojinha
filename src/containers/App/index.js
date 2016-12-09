import React, { Component } from 'react'
import ProductList from '../../components/ProductList'
import ProductForm from '../../components/ProductForm'
import Cart from '../../components/Cart'
import './styles.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.checkout = this.checkout.bind(this)
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
    const cart = this.state.cart
      .filter(p => p.id !== product.id)
    this.setState({cart})
  }

  editProduct (product) {
    this.setState({
      editingProduct: product
    })
  }

  updateProduct (product) {
    fetch(`http://localhost:3001/products/${product.id}/`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(updated => {
        const i = this.state.products
          .findIndex(p => p.id === updated.id)
        const len = this.state.products.length
        const products = this.state.products
          .slice(0, i)
          .concat(updated)
          .concat(this.state.products
            .slice(i+1, len))
        this.setState({
          editingProduct: null,
          products
        })
      })
  }

  checkout () {
    const itens = this.state.cart
      .reduce((itens, item) => {
        const found = itens.find(i => i.id === item.id)

        if (found) {
          found.quantity += 1
        } else {
          itens.push({id: item.id, quantity: 1})
        }

        return itens
      }, [])

    const order = {itens}

    fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(order => {
        this.setState({cart: []})
      })
  }

  render () {
    const products = this.state.products
    const cart = this.state.cart
    const editingProduct = this.state.editingProduct

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

          <Cart
            cart={cart}
            onCheckout={this.checkout}
            onRemoveFromCart={this.removeFromCart} />
        </div>
      </div>
    )

    if (editingProduct) {
      main = (
        <ProductForm
          product={editingProduct}
          onUpdateProduct={this.updateProduct} />
      )
    }

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
