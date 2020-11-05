import React from 'react'
import Phone from '../components/Phone'
import Form from '../components/Form'
import { FiShield, FiHeart } from "react-icons/fi"

import "../pages/mystyles.scss"
import "../css/main.css"

const Hero = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="columns ">
                    <div className="column maincolumns is-three-fifths">
                        <div className="content has-text-centered ">
                            <div className="content">
                                <h1 className="movetocenter">Blob</h1>
                                <h2 className="movetocenter">value prop for the greatest weather app ever created.</h2>
                                <button class="button is-primary">Try it out now! </button>
                                <div className="section">
                                    <div className="container features-list showborder">
                                        <li className="feature-item">
                                            <FiShield className="icon" size={100}/>
                                            <p className="feature-item-text">Super Secure: coordinate data never leaves the client and thus can not be exploited.</p>
                                        </li>
                                        <li className="feature-item">
                                            <FiShield className="icon" />
                                            <p>Super Secure</p>
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
                                        <div class="buttons try-button buttons-list">
                                            <Form />
                                        </div>
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
