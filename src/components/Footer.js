import React from "react"

import { FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import "../pages/mystyles.scss"


const Footer = () => {

  return (
    
    <footer className="footer footer-background">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <div>
                <b>Created by Grew in the EU </b> <p> by @ihmissuti, @aleksimmonen and @JMeriluoto</p>
            </div>
          </div>
          <div className="column">
            <p className="footer-heading"><b>Contact</b></p>
            <p>Lorem ipsum</p>
            <a>
              <FaLinkedin className="icon"></FaLinkedin>
            </a>
            <a>
              <FaTwitterSquare className="icon"></FaTwitterSquare>
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer