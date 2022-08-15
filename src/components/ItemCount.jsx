import React, {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext';

function ItemCount({stock, initial, setQuantitySelected, productData}) {
    const [counter, setCounter] = useState(initial);
    const {addProductToCart, cartProducts} = useContext(CartContext);

    function increaseCounter(){
        if (counter < stock) {
            setCounter(counter + 1)
        } else {}
    }

    function decreaseCounter(){
        if (counter > initial) {
            setCounter(counter - 1)
        } else {}
    }
    const onAdd = () => {
        setQuantitySelected(counter)
        addProductToCart({ ...productData, counter })
    }

  return (
    <>
    <div className="flex justify-center">
        <button onClick={decreaseCounter} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
        <p className="text-gray-800 font-semibold py-2 px-4">
            {counter}
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