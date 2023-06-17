import React from 'react'
import {Link} from "react-router-dom"
import ProductGrid from './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
        <Link to={`/products/${product.id}`}>
        <img id="images" src = {product.image}></img>
        </Link>
        <div className="box">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">price: ${product.price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default ProductCard