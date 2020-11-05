import React from 'react'
import Footer from "./Footer"
import "../pages/mystyles.scss"



const Layout = ({children}) => {
    return (
        <div >
            {children}
            <Footer />
        </div>
    )
}

export default Layout
