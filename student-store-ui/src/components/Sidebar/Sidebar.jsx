import React from 'react'
import { useState } from 'react'
import "./Sidebar.css"
import Shoppingcart from "../Shoppingcart/shoppingcart"
import  Checkoutform from '../Checkoutform/Checkoutform'

const Sidebar = (
  {products,
  shoppingCart,
  lastPurchase,
  setLastPurchase,
  handleCheckoutInput,
  handleCheckoutFormSubmit,
  checkoutInput,
  }) => {
//need to pass products and shopping cart to shopping cart component
const [sidebarStatus, setsidebarStatus] = useState('closed')

const handleToggle = () => {
  if (sidebarStatus === 'closed') {
    setsidebarStatus('open')
  } else if(sidebarStatus === 'open'){
    setsidebarStatus('closed')
  }

}

console.log("sidebar shpcart : ", shoppingCart)
  return (
    <div className='side-bar'>
      <div className= {sidebarStatus}>
        <button onClick = {handleToggle}  className ='toggle-button'>Test</button> 
        {sidebarStatus === 'open'? <div><Shoppingcart products={products}
          shoppingCart={shoppingCart}
        /></div>:null}
        <Checkoutform 
        shoppingCart={shoppingCart}
        lastPurchase={lastPurchase}
        setLastPurchase={setLastPurchase}
        handleCheckoutInput={handleCheckoutInput}
        handleCheckoutFormSubmit={handleCheckoutFormSubmit}
        checkoutInput={checkoutInput}
        
        /> 
        {/* the conditional would display the shopping cart component */}
      </div>  
    </div>
  )
}

export default Sidebar