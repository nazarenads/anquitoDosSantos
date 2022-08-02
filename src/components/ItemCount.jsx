import React, {useState} from 'react'

function ItemCount({stock, initial, setQuantitySelected}) {
    const [counter, setCounter] = useState(initial);

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
      }

  return (
    <>
    <button onClick={decreaseCounter} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
    <p className="text-gray-800 font-semibold py-2 px-4">
        {counter}
    </p>
    <button onClick={increaseCounter} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">+</button>
    <button onClick={onAdd}> Agregar al carrito </button>
    </>
  )
}

export default ItemCount