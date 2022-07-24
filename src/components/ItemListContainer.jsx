import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import productsDB from "../data/products"

function getProducts(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(productsDB)
    },
     500 
    )
  }
  )
}

function ItemListContainer( props ) {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    getProducts().then(
      respuestaPromise => {
        console.log(respuestaPromise)
        setProducts(respuestaPromise)
      })
    },[])

  return (
      <>
      <div className='flex justify-center'>
        <ItemList products={products}/>
      </div>
      </>
      
  )
}

export default ItemListContainer