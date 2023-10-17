import React from 'react'
import Banner from '../../Banner/Banner'
import From from '../../Booking/Pages/From'

const MainBook = () => {
    return (
        <>
            <Banner bannerTitle="Booking" path="Booking"/>
            <div className="booking sec-padd">
                <div className='container'>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6"><From/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBook
