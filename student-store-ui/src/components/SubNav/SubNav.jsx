import React from 'react'
import SubNav from "./SubNav.css"

const subNav = ({handleSearch,userSearch,handleCategories}) => {
  
    return (
    <div>
            <input
            type="text"
            value={userSearch}
            onChange={handleSearch}
            placeholder='Enter Item Name' 
            />

            <button id="" onClick={handleCategories}>All Categories</button>
            <button id="clothing" onClick={handleCategories}>Clothing</button>
            <button id="food" onClick={handleCategories}>Food</button>
            <button id="accessories" onClick={handleCategories}>Accessories</button>
            <button id="tech" onClick={handleCategories}>Tech</button>
    </div>
  )
}

export default subNav