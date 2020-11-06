import React from 'react'
import Phone from '../components/Phone'
import Form from '../components/Form'
import { FiShield, FiHeart } from "react-icons/fi"

import "../pages/mystyles.scss"
import "../css/main.css"

const Hero = () => {
    return (
        <div className="section">
            <div className="container showborder column-flex">
                <div className="columns ">
                    <div className="column maincolumns is-three-fifths">
                        <div className="content has-text-centered ">
                            
                                <p className="movetocenter heroheader">Blob</p>
                                <p className="movetocenter hero-value-prop">value prop for the greatest weather app ever created.</p>
                                <button class="button is-primary is-medium">Try it out now! </button>
                                    <div className="section">
                                        <div className="container features-list showborder">
                                            
                                            <li className="feature-item">
                                                <FiShield size="2em" className="icon"/>
                                                <p>Super Secure</p>
                                            </li>
                                            
                                            <li className="feature-item">
                                                <FiShield className="icon" />
                                                <p>Minimal design</p>
                                            </li>
                                            <li className="feature-item">
                                                <FiShield className="icon" />
                                                <p>Super Secure</p>
                                            </li>
                                        </div>
                                    </div>
                            <div className="section">
                                <div className="container">
                                    <div className="showborder">
                                        <p className="sign-up-text">Sign up for proper release here</p>
                                        <div class="movetocenter">
                                            <Form />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>




                    <div class="column">
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
