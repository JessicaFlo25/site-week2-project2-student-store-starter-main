import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddItemToCart,removeItemFromCart, shoppingCart }) => {

  const getQuantity = (productID) => {
    if (productID in shoppingCart) {
      return shoppingCart[productID]
    }
    else {
      return 0; 
    }
  }
  
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img id="images" src={product.image}></img>
      </Link>
      <div className="box">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">price: ${product.price.toFixed(2)}</p>
        <button onClick={() => handleAddItemToCart(product.id)}>+</button>
        <button onClick={() => removeItemFromCart(product.id)}>-</button>
        {/* {console.log("ProdCard Quant",product.id, getQuantity(product.id))} */}
        {getQuantity(product.id) !== 0 ? (
          
          <h2>{getQuantity(product.id)}</h2>
        ) : (<p>0</p>)} 
        {/* when the item is removed, trying to remove the last 1 item does not display zero */}
      </div>
    </div>
  );
};

export default ProductCard;
