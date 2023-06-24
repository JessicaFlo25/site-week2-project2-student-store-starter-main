import React from 'react'
import "./Checkoutform.css"

const Checkoutform = (
{   shoppingCart,
    lastPurchase,
    setLastPurchase,
    handleCheckoutInput,
    handleCheckoutFormSubmit,
    checkoutInput

    
}) => {
  return (
    <div>
        <form onSubmit={(event)=> handleCheckoutFormSubmit(event)}>
            <input 
            type="text"
            value={checkoutInput.name}
            name="name"
            onChange={handleCheckoutInput}/>
            
            <input 
            type="email"
            value={checkoutInput.email}
            name="email"
            onChange={handleCheckoutInput}/>
            <button 
            type="submit">Submit</button>
            
        </form>
        {Object.keys(lastPurchase).length > 0 ? (<h1>Purchase Successful!</h1>): (<></>)}
    </div>
  )
}
 export default Checkoutform