import {ADD_PRODUCT_TO_CART, REMOVE_FROM_CART, ORDER_CREATED} from '../constants'

export function addToCart (product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  }
}

export function removeFromCart (product) {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

export function checkout () {
  return function (dispatch, getState) {
    const itens = getState()
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
    .then(order => dispatch({type: ORDER_CREATED, order}))
  }
}
