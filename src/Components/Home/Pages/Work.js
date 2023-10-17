import React from 'react'
import plus from '../../../imgs/testi1.png'
import twoSqaure from '../../../imgs/twoSqaure.png'
import dottedSqaure  from '../../../imgs/testi4.png'

const Work = () => {
    return (
        <div className='work'>
            <div className='container'>
                <div className="section-header">
                    <h5 className='about-title'>Working Process</h5>
                    <h1 className='main-title'>How we works?</h1>
                </div>
                <div className='row justify-content-center main-box'>
                    <div className='col-lg-4 col-sm-6 mb-30 box'>
                        <div className='work-box box-bott'>
                            <div className='content'>
                                <h1 className='num'>01</h1>
                                <h3 className='title'>Make Appointmnet</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                                <button type="button" class="btn btn-primary">View More <i class="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 mb-30 box'>
                        <div className='work-box'>
                            <div className='content'>
                                <h1 className='num'>02</h1>
                                <h3 className='title'>Take Treatment</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>  
                                <button type="button" class="btn btn-primary">View More <i class="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 mb-30 box'>
                        <div className='work-box box-bott'>
                            <div className='content'>
                                <h1 className='num'>03</h1>
                                <h3 className='title'>Registration</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of.</p> 
                                <button type="button" class="btn btn-primary">View More <i class="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={plus} alt='shape' className='position-absolute pluse up hide' style={{top: '50%',right: '5%', zIndex: '-1'}}/>
            <img src={twoSqaure} alt='shape' className='position-absolute up hide' style={{top: '70%',right: '7%', zIndex: '-1'}}/>
            <img src={dottedSqaure} alt='shape' className='position-absolute hide' style={{bottom: '0%',right: '18%', zIndex: '-1'}}/>
        </div>
    )
}

export default Work
