import React from 'react'
import ProductItem from "../components/ProductItem"

function itemList({ products }) {
  return (
    <>
    { products.map( thisproduct => {
        return (
            <ProductItem product={thisproduct} />
        )
    }
)}
    </>
    
  )
}

export default itemList