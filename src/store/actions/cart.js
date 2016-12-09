import {ADD_PRODUCT_TO_CART, REMOVE_FROM_CART, CHECKOUT} from '../constants'

export function addToCart (product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
}

export function removeFromCart (product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  }
}

export function checkout (cart) {
  const itens = cart
    .reduce((itens, item) => {
      const found = itens.find(i => i.id === item.id)

      if (found) {
        found.quantity += 1
      } else {
        itens.push({product_id: item.id, quantity: 1})
      }

      return itens
    }, [])

  const order = {itens}
  
  const params = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  }

  return {
    type: CHECKOUT,
    payload: {
      promise: fetch('http://localhost:3001/orders', params)
        .then(res => res.json())
    }
  }
}
