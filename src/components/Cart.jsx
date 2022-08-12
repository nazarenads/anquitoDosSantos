import React from 'react'
import { useCartContext } from '../context/CartContext';

function Cart() {
  const [cart, totalPrice] = useCartContext();

  if (cart.length === 0) {
    return <>
      No hay productos en el carrito
    </>
  }

  return (
    <div>Cart</div>
  )
}

export default Cart