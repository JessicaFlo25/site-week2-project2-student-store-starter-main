import * as React from "react"
import "./Hero.css"


export default function Hero() {
    return (
        <div className="hero">
            <div className="intro">
                <h1 className="Welcome">Welcome To Coveted FLO!</h1>
                <h2 className="Find">Find your Merch!</h2>
                <p className="Have">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            </div>
            <div className="media">
                <img className="hero-img" src="https://i.scdn.co/image/ab67616d00001e0298a60a1a457f1c03f1d0a9c4" alt="picture of house"/>
            </div>

        </div>
    )
  }
