import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./ProductDetail.css"

const ProductDetail = () => {
  const{productId} = useParams()
  const[itemDetails,setItemDetails] = useState(null)

  const fetchProduct = async () => {
  try {
    const res =  await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
    if (res?.data?.product) {
      setItemDetails(res.data.product)
      console.log(res.data.product)
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


    //const[product,setProduct]= useState("")
    return (
      <div>
    {itemDetails ? ( <div><h2>{itemDetails.name}</h2>
     <h2>{itemDetails.id}</h2>
    <img id = "productImg" src={itemDetails.image} />
    <h2>{itemDetails.description}</h2>
     </div>) : (<h1> loading</h1>)}
      </div>

  )
}

export default ProductDetail

