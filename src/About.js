import React from 'react'
import Common from './Common'
import web3 from './images/web3.png'

const About = () => {
    return (
        <>
         <Common
                heading="Welcome to About page"
                img={web3}
                btn="Contact Us"
                href='/contact'
            />
            <div className="empty-div2"></div>
        </>
    )
}

export default About
