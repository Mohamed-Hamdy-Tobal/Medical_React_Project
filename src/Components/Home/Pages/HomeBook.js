import React from 'react'
import From from '../../Booking/Pages/From'
import phone from './../../../imgs/book/6.png'
import ele4 from './../../../imgs/book/1.png'
import ele3 from './../../../imgs/book/2.png'
import ele5 from './../../../imgs/book/3.png'
import ele2 from './../../../imgs/book/4.png'
import ele1 from './../../../imgs/book/5.png'

const HomeBook = () => {
    return (
        <div className='main-book'>
            <div className="container-fluid">
                <div className='appointment-inner section-sp2'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-6"><From/></div>
                            <div className="col-xl-5 col-lg-6 col-md-6">
                                <div className='appointment-thumb'>
                                    <img src={phone} alt='dkf'/>
                                    <div className='images-group'>
                                        <img src={ele1} className='img1' alt='dkf'/>
                                        <img src={ele2} className='img2 up' alt='dkf'/>
                                        <img src={ele3} className='img3' alt='dkf'/>
                                        <img src={ele4} className='img4' alt='dkf'/>
                                        <img src={ele5} className='img5' alt='dkf'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBook
