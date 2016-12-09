import React from 'react'
import Product from '../Product'
import './styles.css'

const ProductList = React.createClass({
  render () {
    const items = this.props.products
      .map(product =>
        <li key={product.id} className='col-md-6'>

          <Product
            product={product}
            onAddToCart={this.props.onAddToCart}
            onEditProduct={this.props.onEditProduct} />

        </li>
      )

    return (
      <ul>
        {items}
      </ul>
    )
  }
})

export default ProductList
