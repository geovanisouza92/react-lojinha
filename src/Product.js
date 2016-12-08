import React from 'react'

const Product = React.createClass({
  render () {
    const product = this.props.product
    const onEditProduct = () => this.props.onEditProduct(this.props.product)
    const onAddToCart = () => this.props.onAddToCart(this.props.product)

    return (
      <div className='thumbnail'>
        <img alt='produto' src={product.image} />
        <div className='caption'>
          <h4>
            {product.name}
            <span className='pull-right label label-default'>{product.price}</span>
          </h4>
        </div>
        <div className='caption'>
          <div className='btn-group' role='group'>
            <button
              className='btn'
              onClick={onEditProduct}>
              Editar
            </button>
            <button
              className='btn btn-primary'
              onClick={onAddToCart}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    )
  }
})

export default Product
