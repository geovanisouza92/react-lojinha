import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addToCart, removeFromCart, checkout} from '../../store/actions/cart'
import {editProduct} from '../../store/actions/editingProduct'
import {updateProduct} from '../../store/actions/products'
import ProductList from '../../components/ProductList'
import ProductForm from '../../components/ProductForm'
import Cart from '../../components/Cart'
import './styles.css'

class App extends Component {
  render () {
    const products = this.props.products
    const cart = this.props.cart
    const editingProduct = this.props.editingProduct

    // TODO: this.método -> this.props.método

    let main = (
      <div className='row'>
        <div className='col-md-8 col-sm-8'>
          <h3>Produtos</h3>

          <ProductList
            products={products}
            onAddToCart={this.props.addToCart}
            onEditProduct={this.props.editProduct} />

        </div>
        <div className='col-md-4 col-sm-4'>
          <h3>Carrinho</h3>

          <Cart
            cart={cart}
            onCheckout={this.props.checkout}
            onRemoveFromCart={this.props.removeFromCart} />
        </div>
      </div>
    )

    if (editingProduct) {
      main = (
        <ProductForm
          product={editingProduct}
          onUpdateProduct={this.props.updateProduct} />
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

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    ...state
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    editProduct: (product) => dispatch(editProduct(product)),
    updateProduct: (product) => dispatch(updateProduct(product)),
    checkout: () => dispatch(checkout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
