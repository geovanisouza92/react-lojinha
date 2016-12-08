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
    this.removeFromCart = this.removeFromCart.bind(this)
    // TODO: Faça o bind dos métodos editProduct e updateProduct
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
    // TODO: Defina o atributo editingProduct do state
    // com o produto recebido
  }

  updateProduct (product) {
    // TODO:
    //
    // 1) Execute uma requisição HTTP PATCH usando
    // a API fetch do navegador¹ (use o segundo argumento)
    // para definir o método, cabeçalhos e body da requisição,
    // capture o retorno
    //
    // 2) Com o valor recebido, defina o atributo editingProduct
    // como nulo e o atributo products do state com uma
    // *nova lista* de produtos, substituindo o produto que
    // estava sendo editado pelo valor recebido da requisição
    // de update
    //
    // Referências:
    // ¹ https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
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
            onRemoveFromCart={this.removeFromCart} />
        </div>
      </div>
    )

    // TODO: Substitua a variável main pelo ProductForm
    // quando houver um produto a ser editado
    if (editingProduct) {
      // Código
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
