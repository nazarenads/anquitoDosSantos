import React, {useEffect, useState} from 'react'
import productsDB from "../data/products"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

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

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(()=> {
      getProducts().then(
        respuestaPromise => {
          setProduct(respuestaPromise.find( product => product.id === parseInt(productId) ))
        })
    },[])

  return (
      <>
      <div className='flex justify-center'>
        <ItemDetail product={product}/>
      </div>
      </>
      
  )
}

export default ItemDetailContainer