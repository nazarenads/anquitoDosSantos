import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import productsDB from "../data/products"
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

function ItemListContainer( props ) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(()=> {
    if (categoryId){
      getProducts().then(
        respuestaPromise => {
          setProducts(respuestaPromise.filter( product => product.category === categoryId ))
        })
    }
    else {
      getProducts().then(
        respuestaPromise => {
          setProducts(respuestaPromise)
      })
    }
    },[categoryId])

  return (
      <>
      <div className='flex flex-wrap justify-center'>
        <ItemList products={products}/>
      </div>
      </>
      
  )
}

export default ItemListContainer