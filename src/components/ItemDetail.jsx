import React, {useState} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({product}) {
  const {image, title, description, stock} = product
  const [quantitySelected, setQuantitySelected] = useState(0)


  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
    <img className="w-full" src={image}/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {description}
        </p>
        <div className="flex justify-center pb-2">
        {
        quantitySelected > 0 ? <button><Link to="/cart">Terminar compra</Link></button> : <ItemCount stock={stock} initial={1} setQuantitySelected={setQuantitySelected}/>
        }
        </div>
        
    </div>
    </div>
  )
}

export default ItemDetail