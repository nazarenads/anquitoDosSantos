import React, {useEffect, useState} from 'react'
import productsDB from "../data/products"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from "firebase/firestore"


function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(()=> {
      const querydb = getFirestore();
      const querydoc = doc(querydb, 'products', productId)
      getDoc(querydoc).then(
        res => setProduct({id: res.id, ...res.data()})
      )
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