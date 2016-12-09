import {PRODUCTS_LOADED, PRODUCT_UPDATED} from '../constants'

export function loadProducts () {
  return function (dispatch, getState) {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(products =>
        dispatch({
          type: PRODUCTS_LOADED,
          products
        })
      )
  }
}

export function updateProduct (product) {
  return function (dispatch) {
    fetch(`http://localhost:3001/products/${product.id}/`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(updated => dispatch({
      type: PRODUCT_UPDATED,
      product
    }))
  }
}
