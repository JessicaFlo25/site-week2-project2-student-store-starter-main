import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./ProductDetail.css"

const ProductDetail = (
{shoppingCart,
setShoppingCart,
removeItemFromCart,
handleAddItemToCart
}
) => {

  ///new above
  const{productId} = useParams()
  const[itemDetails,setItemDetails] = useState(null)


  const fetchProduct = async () => {
  try {
    const res =  await axios.get(`http://localhost:3001/store/${productId}`)
    if (res?.data) {
      setItemDetails(res.data)
    } else {
      console.error("Something went wrong.")
    }
  } catch (err) {
    console.log(err)
 }
}

if (itemDetails){
  console.log("Got the itemDetails")
}
else{

  fetchProduct()

}

const addItem = () => {
  handleAddItemToCart(itemDetails.id)
}

const removeItem = () => {
  removeItemFromCart(itemDetails.id)
}

const getQuantity = (productID) => {
  if (productID in shoppingCart) {
    return shoppingCart[productID]
  }
  else {
    return 0; 
  }
}


    //const[product,setProduct]= useState("")
    return (
      <div>
    {itemDetails ? ( <div className='wrapper'><h2 className='name'>{itemDetails.name}</h2>
     <h2 className='details'>ID:#{itemDetails.id}</h2>
    <img className="image" id = "productImg" src={itemDetails.image} />
    <h2 className='description'>{itemDetails.description}</h2>
    <div className='price'><h3>${itemDetails.price.toFixed(2)}</h3></div>
    <div className='buttons'>
    <button onClick={addItem}>+</button>
    <button onClick={removeItem}>-</button>
    {getQuantity(itemDetails.id) !== 0 ? (
          
          <h2>{getQuantity(itemDetails.id)}</h2>
        ) : (<p>0</p>)} 

    </div>
     </div>) : (<h1 className='loading'> loading</h1>)}
      </div>

  )
}

export default ProductDetail

