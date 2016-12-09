import React from 'react'

const ProductForm = React.createClass({
  getInitialState () {
    return {...this.props.product}
  },

  onNameChange (e) {
    this.setState({
      name: e.target.value
    })
  },

  onPriceChange (e) {
    this.setState({
      price: parseFloat(e.target.value)
    })
  },

  onSubmit (e) {
    e.preventDefault()
    this.props.onUpdateProduct(this.state)
  },

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type='text'
            value={this.state.name}
            onChange={this.onNameChange} />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type='number'
            value={this.state.price}
            onChange={this.onPriceChange} />
        </div>
        <input type='submit' value='Salvar Produto' />
      </form>
    )
  }
})

export default ProductForm
