import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from './images/web.png';

const Home = () => {
    return (
        <>
            <Common
                heading="Grow your business with"
                img={web}
                btn="Get Started"
                href='/service'
            />
        </>
    )
}

export default Home
