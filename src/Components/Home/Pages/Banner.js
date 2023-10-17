import React from 'react'
import banner from '../../../imgs/per1.png'
import plus from '../../../imgs/4.png'
import square from '../../../imgs/6.png'
import towSquare from '../../../imgs/5.png'
import rhombus  from '../../../imgs/7.png'
import zigzag  from '../../../imgs/9.png'

const Banner = () => {
    return (
        <div className='main-banner'>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2 banner-content" style={{zIndex: '3'}}>
                    <div className="col-lg-7 col-md-6 col-sm-5 sec-info">
                        <h5>We Provide All Health Care Solution</h5>
                        <h1>Protect Your Health And Take Care To Of Your Health</h1>
                        <button className='btn btn-primary'>Read More</button>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-7 text-center">
                        <img src={banner} alt='logo' style={{maxWidth:'95%'}}/>
                    </div>
                </div>
            </div>
            <img src={plus} alt='shape' className='position-absolute plus hide' style={{bottom: '12%',left: '32%', zIndex: '2'}}/>
            <img src={square} alt='shape' className='position-absolute square hide' style={{top: '22%',left: '40%', zIndex: '2'}}/>
            <img src={towSquare} alt='shape' className='position-absolute towSquare hide' style={{top: '200px',left: '218px', zIndex: '2'}}/>
            <img src={rhombus} alt='shape' className='position-absolute rhombus hide' style={{top: '65%',left: '0.5%', zIndex: '2'}}/>
            <img src={zigzag} alt='shape' className='position-absolute zigzag zigzag-r hide' style={{top: '75%',left: '81%', zIndex: '2'}}/>
        </div>
    )
}

export default Banner
