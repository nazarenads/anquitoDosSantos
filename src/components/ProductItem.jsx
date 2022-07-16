import React from 'react'

function ProductItem({image, title, description}) {
  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={image} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
            {description}
        </p>
        <div className="flex justify-center">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Agregar al carrito
        </button>
        </div>
    </div>
    </div>
  )
}

export default ProductItem