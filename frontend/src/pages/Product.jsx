import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {

    const { name } = useParams();

  return (
    <div>
        <h1>Product page of {name}</h1>
    </div>
  )
}

export default Product;