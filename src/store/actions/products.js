import {LOAD_PRODUCTS, UPDATE_PRODUCT} from '../constants'

export function loadProducts () {
  return {
    type: LOAD_PRODUCTS,
    payload: {
      promise: fetch('http://localhost:3001/products')
        .then(res => res.json())
    }
  }
}

export function updateProduct (product) {
  const params = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  }

  return {
    type: UPDATE_PRODUCT,
    payload: {
      promise: fetch(`http://localhost:3001/products/${product.id}/`, params)
        .then(res => res.json())
    }
  }
}
