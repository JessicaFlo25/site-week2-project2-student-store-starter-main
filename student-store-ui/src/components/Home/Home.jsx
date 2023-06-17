import * as React from "react"
import "./Home.css" 
import Hero from "../Hero/Hero"
import ProductGrid from "../Product Grid/ProductGrid"
import { useState } from "react"
import About from "../About/About"
import SubNav from "../SubNav/SubNav"
import Contact from "../Contact/Contact"
import Footer from "../Footerbottom/footerbottom"

export default function Home({products}){
  const [userSearch, setUserSearch] = useState("")
  const[categories,setCategory] = useState("")

  const handleCategories = (event) => {
    setCategory(event.target.id)
  }
  const handleSearch = (event) => {
    event.preventDefault()
    setUserSearch(event.target.value)
  }

    return (
    <div className= "home">
      <Hero/>
      <SubNav handleSearch={handleSearch} userSearch={userSearch} handleCategories = {handleCategories} ></SubNav>
      <ProductGrid userSearch={userSearch} products ={products} categories = {categories}></ProductGrid>
      <About/>
      <Contact/>
      <Footer/>
    </div> 
  )
}


