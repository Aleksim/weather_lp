import React from 'react'
import "../pages/mystyles.scss"
import "../css/main.css"
import traditionalgif from '../assets/traditional.gif'
import pointng from '../assets/pointng.gif'
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
                            <p className="animation-text-description">Instead of sending exact coordinate data to third parties, Secure Local Weather utilizes pointNG in location identification. PointNG returns a chain of neural networks that guess the location of the user in the client interface.</p>
                            <button class="button is-primary animation-button">Read More</button>

                        </div>
                        <div className="column column-space  maincolumns-safety">
                            <div className="box">
                            <div className="content ">
                                <p className="movetocenter animation-text">How location identification works in traditional weather apps:</p>
                                <img className="safety-animation" src={traditionalgif} width="300px" alt="Hpw traditional location identification" />
                            </div>
                            </div>
                            <p className="animation-text-description">Typical location based services send the users exact location coordinates over the internet to third party services. In return, te third party services return reverse geocoded location data to the service.</p>
                        </div>
                    </div>
                            <div className="container">
                                <div className="content">
                                    <div className="movetocenter sign-up-form">
                                        <p className="sign-up-text">Sign up for proper release here:</p>
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
