import React from 'react'
import "./SubNav.css"

const subNav = ({handleSearch,userSearch,handleCategories}) => {
  
    return (
    <div className='container'>
      <div className='sub-nav'>
            <input
            className='search-bar'
            type="text"
            value={userSearch}
            onChange={handleSearch}
            placeholder='Enter Item Name' 
            />

            <button className="first-b" id="" onClick={handleCategories}>All Categories</button>
            <button className="second-b" id="clothing" onClick={handleCategories}>Clothing</button>
            <button className="third-b"id="food" onClick={handleCategories}>Food</button>
            <button className="fourth-b" id="accessories" onClick={handleCategories}>Accessories</button>
            <button className="fifth-b" id="tech" onClick={handleCategories}>Tech</button>
      </div>
    </div>
  )
}

export default subNav