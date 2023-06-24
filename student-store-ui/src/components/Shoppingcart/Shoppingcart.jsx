import React from 'react'
import "./Shoppingcart.css"
// import ProductCard from '../ProductCard/ProductCard'


const Shoppingcart = ({products,shoppingCart}) => {


  return (
    <div className='shopping-cart'>

        {Object.keys(shoppingCart).map((item) => {
            console.log("random",item)
            const foundProducts = products.find((item2) => 
            item2.id == item
            )
            console.log(foundProducts)
            return(

                    <div>
                        <h1>{foundProducts.name}</h1>
                        <h2>{item.quantity}</h2>
                    </div>
                )
        })};
            {Object.keys(shoppingCart).map((item) => {
                let x = 0 //will hold price before the tax
                const tax = 0.0875
                const product = products.find((item2) => (item2.id == item))
                x += product.price * shoppingCart[item]

                const price = x * tax
                const grandtotal = price + x
                return(<div>
                        <p>Quantity of {product.name}: {shoppingCart[item]}</p>
                        <p>Subtotal of {product.name}: ${x.toFixed(2)}</p>
                        <p>Tax for {product.name}: ${price.toFixed(2)}</p>
                        <p>Grandtotal: ${grandtotal.toFixed(2)}</p>
                    </div>)
            })}
    </div>

 )
  //products is an object with all products and their details
  //shopping cart contains the things the user clicked so we can access their id and qunatity

}

export default Shoppingcart