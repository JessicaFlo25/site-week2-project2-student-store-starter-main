import React from 'react'
import ProductCard from "../Product Card/ProductCard"
import "./ProductGrid.css"

const ProductGrid = ({products,userSearch,categories}) => {
  
  let filteredData = products.filter(product => product.category.includes(categories))

  return (
    <div className="product-grid">
        {products && filteredData.filter(product => 
    product.name.toLowerCase().includes(userSearch.toLowerCase())
  ).map((product,key) => 
            <ProductCard key= {key} product = {product}/>
            
        )}
    </div>
  )
}

export default ProductGrid