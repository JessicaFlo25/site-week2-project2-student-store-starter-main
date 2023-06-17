import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"
import Home from "../Home/Home"
import "./App.css"

//still have to do routes and components, rest of four event handler functions

export default function App() {
  const handleOnToggle = (event) => setOpen(event.trget.value);
  //const handleAddItemToCart = {productId} => 

  //states;still need checkout form  
  const[products,setProducts]= useState([])
  const[isFetching,setFetching] = useState(false)
  const[error,setError] = useState("")
  const[isOpen,setOpen] = useState(false)
  // const[shoppingCart,setShoppingCart] = useState([]) //will use later

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProducts(response.data.products);
        console.log(products)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter> 
        <main>
        <Navbar />
        {/* <Search products={products}/> */}
        <Routes>
          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
          {/* YOUR CODE HERE!,,,browser router controls the URL that shows in address bar */}
          {/* Here I am passing down props to the child components which are event Handlers? */}
          {/* <Sidebar onToggle={() => handleOnToggle()} />    */}
          {/* <Home products = {products} /> */}
        </main>
      </BrowserRouter>
    </div>
  )
}
