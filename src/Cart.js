import React from 'react'
import './Cart.css'

const Cart = React.createClass({
  render () {
    const items = this.props.cart.length === 0
      ? <div className='alert alert-info'>Carrinho vazio :(</div>
      : <ul className='col-md-12'>{
          this.props.cart
            .map((product, i) =>
              <li key={i} className='row'>
                <span>
                  {product.name}
                </span>
                <div className='pull-right'>
                  <span className='label label-default'>{product.price}</span>
                </div>
              </li>
            )
        }</ul>

    const total = Math.round(this.props.cart
      .reduce((subtotal, product) => subtotal + product.price, 0) * 100) / 100

    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          {items}
          <hr />
          <div>Total: <span className='pull-right'>{total}</span></div>
        </div>
      </div>
    )
  }
})

export default Cart
