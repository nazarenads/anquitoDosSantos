import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import productsDB from "../data/products"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"

function ItemListContainer( props ) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(()=> {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products')

    if (categoryId){
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter).then(
        res => {
          setProducts(res.docs.map(product => ({id: product.id, ...product.data()})))
        })
    }
    else {
      getDocs(queryCollection).then(
        res => {
          setProducts(res.docs.map(product => ({id: product.id, ...product.data()})))
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