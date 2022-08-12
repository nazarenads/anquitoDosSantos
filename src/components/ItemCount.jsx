import React, {useState} from 'react'
import { useCartContext } from '../context/CartContext';

function ItemCount({stock, initial, setQuantitySelected, productData}) {
    const {quantity, setQuantity} = useState(initial);
    const {addProduct} = useCartContext();

    function increaseCounter(){
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } else {}
    }

    function decreaseCounter(){
        if (quantity > initial) {
            setQuantity(quantity - 1)
        } else {}
    }
    const onAdd = () => {
        setQuantitySelected(quantity)
        addProduct(productData, quantity)
    }

  return (
    <>
    <div className="flex justify-center">
        <button onClick={decreaseCounter} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
        <p className="text-gray-800 font-semibold py-2 px-4">
            {quantity}
        </p>
        <button onClick={increaseCounter} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">+</button>
    </div>
    <div className="flex justify-center">
        <button onClick={onAdd} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Agregar al carrito
        </button>
    </div>
    </>
  )
}

export default ItemCount