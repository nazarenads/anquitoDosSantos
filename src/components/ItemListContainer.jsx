import React from 'react'
import ProductItem from './ProductItem'

function ItemListContainer( props ) {
  return (
      <>
      <h1>{props.greeting}</h1>
      <div className='flex justify-center'>
        <ProductItem image={"./assets/product-1.jpg"} title={"Gírgolas"} description={"Descripción"}/>
        <ProductItem image={"./assets/product-2.jpg"} title={"Risotto de calabaza"} description={"Descripción"}/>
        <ProductItem image={"./assets/product-3.jpg"} title={"Kimchi"} description={"Descripción"}/>
      </div>
      </>
      
  )
}

export default ItemListContainer