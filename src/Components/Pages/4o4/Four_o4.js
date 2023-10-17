import React from 'react'
import './Four_o4.css'
import Banner from '../../Banner/Banner'
import { Link } from 'react-router-dom'

const FourO4 = () => {
    return (
        <>
            <Banner bannerTitle='4o4' path='4o4'/>
            <section class="section-area sec-padd error-404">
                <div class="container">
                    <div class="inner-content">
                        <h2 class="error-title">4<span></span>4</h2>
                        <h3 class="error-text">The Page you were looking for, couldn't be found.</h3>
                        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <div class="clearfix">
                            <Link class="btn btn-primary" to="/">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourO4

