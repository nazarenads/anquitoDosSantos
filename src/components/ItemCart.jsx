import React from 'react'
import { useCartContext } from '../context/CartContext'

function ItemCart(product) {
    const {id, image, title, price, description} = product
    const {removeProduct} = useCartContext();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
    <img className="w-full" src={image}/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {description}
        </p>
        <p className="text-gray-700 text-base">
            Precio: {price}
        </p>
        <p>
            Subtotal: 
        </p>
        <button onClick={() => removeProduct(id)}>Borrar todo</button>
    </div>
    </div>
  )
}

export default ItemCart