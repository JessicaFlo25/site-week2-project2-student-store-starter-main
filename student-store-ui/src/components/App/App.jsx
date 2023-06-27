import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar";

//still have to do routes and components, rest of four event handler functions

export default function App() {
//states;still need checkout form
const checkoutFormInputData = {
  name:"",
  email:""
}
  const[lastPurchase,setLastPurchase] =useState([])
  const[checkoutInput,setCheckoutInput] = useState(checkoutFormInputData)
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({}); //holds the id and the quantity & need in product details too
  const[count,setCounter]= useState(0)
  const handleAddItemToCart = (productID) => { //also need in product details
    setCounter(count+1)
    console.log("counter",count)
    if(`${productID}` in shoppingCart){
      setShoppingCart((currShopCartState)=> ({...currShopCartState,[productID]:currShopCartState[productID]+1}))
    }else{
      setShoppingCart((currShopCartState)=> ({...currShopCartState,[productID]:1}))
    }
    console.log(shoppingCart)

  }
const removeItemFromCart = (productID) => { //product details also needs
  if(`${productID}` in shoppingCart){
    if(shoppingCart[productID]===1){
      //delete shoppingCart[productID] was not updating the shoppingcart object, so we have to use the setter function to update the object rather than us directly deleting it

      const tempCart = {...shoppingCart}
      delete tempCart[productID]
      setShoppingCart(tempCart)
      
    }
    else{
      const newQuant = shoppingCart[productID] - 1; 
      setShoppingCart((currShopCartState)=> ({...currShopCartState,[productID]:newQuant} 
    ))}

    
  }
  else{
    return 
  }

  console.log(shoppingCart)

}

const handleCheckoutInput = (event) => {
  setCheckoutInput((prev) => ({
    ...prev,[event.target.name]: event.target.value
  }) )
}


const handleCheckoutFormSubmit = (event) => {
  event.preventDefault()
  setLastPurchase(shoppingCart)
  setShoppingCart([])
}

  useEffect(() => {
    axios
      .get("http://localhost:3001/store")
      .then((response) => {
        setProducts(response.data.products);
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
          <Sidebar products={products}
            shoppingCart={shoppingCart}
            lastPurchase= {lastPurchase}
            setLastPurchase={setLastPurchase}
            handleCheckoutInput={handleCheckoutInput}
            handleCheckoutFormSubmit={handleCheckoutFormSubmit}
            checkoutInput={checkoutInput}
          />
          {/* <Search products={products}/> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  removeItemFromCart={removeItemFromCart}
                  shoppingCart={shoppingCart}

                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  removeItemFromCart={removeItemFromCart}
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}/>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* YOUR CODE HERE!,,,browser router controls the URL that shows in address bar */}
          {/* Here I am passing down props to the child components which are event Handlers? */}
          {/* <Sidebar onToggle={() => handleOnToggle()} />    */}
          {/* <Home products = {products} /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
