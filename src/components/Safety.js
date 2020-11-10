import React from 'react'
import "../pages/mystyles.scss"
import "../css/main.css"
import traditionalgif from '../assets/traditional2.gif'
import pointng from '../assets/pointng2.gif'
import Form from '../components/Form'

const Safety = () => {
    return (
        <div className="section">
            <div className="container">
                <div>
                    <h1 className="movetocenter safetyheader">
                        What makes Secure Local Weather so secure?
                    </h1>
                    <div className="description">
                        <p className="content description-text">Secure Local Weather uses pointNG location identification method that doesn't send coordinate data outside the client and to 3rd party servers.</p> 
                    </div>
                    <div className="columns columns-space">
                        <div className="column column-space maincolumns-safety">
                            <div className="box">
                            <div className="content ">
                                <p className="movetocenter animation-text">How location identification works in Secure Local Weather:</p>
                                <img className="safety-animation" src={pointng} width="300px" alt="Hpw traditional location identification" />
                            </div>
                            </div>
                            <p className="animation-text-description">Secure Local Weather utilizes pointNG in location identification and <b>never sends coordinate data over the internet</b>.</p>
                            <button class="button is-primary animation-button">Read More</button>

                        </div>
                        <div className="column column-space  maincolumns-safety">
                            <div className="box">
                            <div className="content ">
                                <p className="movetocenter animation-text">How location identification works in traditional weather apps:</p>
                                <img className="safety-animation" src={traditionalgif} width="300px" alt="Hpw traditional location identification" />
                            </div>
                            </div>
                            <p className="animation-text-description">Typical weather apps send <b>the users exact location coordinates over the internet to third party services</b>.</p>
                        </div>
                    </div>
                            <div className="container">
                                <div className="content">
                                    <div className="movetocenter sign-up-form">
                                        <p className="sign-up-text">Sign up for secure weather updates here:</p>
                                        <div style={{marginLeft:"20px"}}>
                                            <Form />
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Safety
