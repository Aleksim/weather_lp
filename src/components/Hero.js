import React from 'react'
import Phone from '../components/Phone'

import { FiShield, FiHeart } from "react-icons/fi"
import { BiBullseye } from "react-icons/bi";

import "../pages/mystyles.scss"
import "../css/main.css"

const Hero = () => {

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

    return (
        <div className="section">
            <div className="container">
                <div className="columns columns-flex ">
                    <div className="column  maincolumns is-three-fifths">
                        <div className="content has-text-centered ">
                            
                                <p className="movetocenter heroheader">Secure Local Weather</p>
                                <p className="movetocenter hero-value-prop">Get your accurate local weather forecast without sending any coordinate data to 3rd party services.</p>
                                <button onClick={()=>{openInNewTab('https://www.pointng.io/')}} class="button b-text is-primary is-medium">Try it out now! </button>
                                    <div className="section">
                                        <div className="container features-list">
                                        <div className="">
                                            <li className="feature-item">
                                                <FiShield size={60}/>
                                                <p className="feature-item-text">Super Secure</p>
                                            </li>
                                            <li className="feature-item">
                                                <BiBullseye size={60}/>
                                                <p className="feature-item-text">Accurate</p>
                                            </li>
                                            <li className="feature-item">
                                                <FiHeart size={60}/>
                                                <p className="feature-item-text">Open source</p>
                                            </li>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>




                    <div class="column ">
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
