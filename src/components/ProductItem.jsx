import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function ProductItem({product}) {
  const {image, title, description, stock, id} = product
  return (
     <div className="max-w-sm rounded overflow-hidden shadow-lg p-3">
    <img className="w-full" src={image}/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {description}
        </p>
        <div className="flex justify-center p-2">
        <Link to={`/item/${id}`}>
          <p><strong>Ver detalle</strong></p>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default ProductItem