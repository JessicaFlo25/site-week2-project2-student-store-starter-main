import React from 'react'
import "./footerbottom.css"

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h1>All Categories</h1>
                <ul>
                  <li>All Categories</li><br></br>
                  <li>Clothing</li><br></br>
                  <li>Food</li><br></br>
                  <li>Accessories</li><br></br>
                  <li>Tech</li><br></br>
                  </ul>
              <div className="link-column">
                <h1>Company</h1>
              <ul>
                  <li>About Us</li><br></br>
                  <li>Find a Store</li><br></br>
                  <li>Terms</li><br></br>
                  <li>Sitemap</li><br></br>
                  <li>Careers</li><br></br>
                  </ul>
              </div>
              <div className="link-column">
              <h1>Support</h1>
              <ul>
                  <li>Contact Us</li><br></br>
                  <li>Money Refund</li><br></br>
                  <li>Order</li><br></br>
                  <li>Shipping Info</li><br></br>
                  <li>Open Dispute</li><br></br>
                  </ul>
              </div>

              </div>

            </div>
          </div>

        </div>

      </footer>
    </div>

  )
}

export default footer