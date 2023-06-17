import * as React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from "../Logo/Logo"
//import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo/> 
       <ul>
        {/* <li><Link href="default.asp">Home</Link></li>
        <li><Link href="news.asp">News</Link></li>
        <li><Link href="contact.asp">Contact</Link></li>
        <li><Link href="about.asp">About</Link></li> */}

      <li><Link to="/">Home</Link></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#About">About</a></li>

      </ul>
    </nav>
  )
}
