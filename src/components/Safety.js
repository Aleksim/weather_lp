import React from 'react'
import "../pages/mystyles.scss"
import "../css/main.css"

const Safety = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="showborder safety-main">
                    <h1 className="movetocenter safetyheader">
                        What makes Blob so secure?
                    </h1>
                    <div className="description">
                        <p className="content description-text">Blob has a unique location identification method that doesn't send coordinate data outside the client and to 3rd party servers.</p> 
                        <button class="button is-primary">Read More</button>
                    </div>
                    <div className="columns column-space column-flex-safety">
                        <div className="column showborder">
                            <div className="content">
                                <p>How location identification works in Blob:</p>
                                <p>gif</p>
                            </div>
                            </div>
                            <div className="column">
                            <div className="content">
                                <p>How location identification works traditional weather apps:</p>
                                <p>gif</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Safety
