import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import doctorsBG from '../../../imgs/testi0.png'
import doctor1 from '../../../imgs/doctors/0.jfif'
import doctor2 from '../../../imgs/doctors/1.jfif'
import doctor3 from '../../../imgs/doctors/2.jfif'
import doctor4 from '../../../imgs/doctors/3.jfif'
import doctor5 from '../../../imgs/doctors/4.jfif'
import doctor6 from '../../../imgs/doctors/5.jfif'
import square from '../../../imgs/testi4.png'
import zigzag  from '../../../imgs/6.png'
import emptyCircle  from '../../../imgs/4.png'

const Testimonials = () => {

    const [slider, setSlider] = useState(null);

    useEffect(() => {
        if (slider) {
            slider.slickGoTo(0);
        }
    }, [slider]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Use the dynamic value
        slidesToScroll: 1,
    };

    return (
        <div className='main-testi sec-padd position-relative'> 
            <div className='container'>
                <div className="section-header">
                    <h5 className='about-title'>Testimonial</h5>
                    <h1 className='main-title'>See What Are The Patients Saying About us</h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 ">
                        <div className='thumb-wraper'>
                            <img src={doctorsBG} alt='docs'/>
                            <ul className='docs'>
                                <li className='doc-1'><a href='/'><img src={doctor1} alt='doc'/></a></li>
                                <li className='doc-2'><a href='/'><img src={doctor2} alt='doc'/></a></li>
                                <li className='doc-3'><a href='/'><img src={doctor3} alt='doc'/></a></li>
                                <li className='doc-4'><a href='/'><img src={doctor4} alt='doc'/></a></li>
                                <li className='doc-5'><a href='/'><img src={doctor5} alt='doc'/></a></li>
                                <li className='doc-6'><a href='/'><img src={doctor6} alt='doc'/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 ">
                        <Slider ref={slider => setSlider(slider)} {...settings}>
                            <div className="slide">
                                <div className='testi-box'>
                                    <i class="fa fa-quote-left q-left"></i>
                                    <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <div className='info'>
                                        <div className='heading'>
                                            <h3>Jon Doe</h3>
                                            <h4>Patient</h4>
                                        </div>
                                        <i class="fa fa-quote-right q-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className='testi-box'>
                                    <i class="fa fa-quote-left q-left"></i>
                                    <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <div className='info'>
                                        <div className='heading'>
                                            <h3>Michael Scofield</h3>
                                            <h4>Patient</h4>
                                        </div>
                                        <i class="fa fa-quote-right q-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <img src={square} alt='shape' className='position-absolute square hide' style={{top: '22%',left: '4%', zIndex: '2'}}/>
            <img src={emptyCircle} alt='shape' className='position-absolute emptyCircle hide' style={{bottom: '2%',left: '75%', zIndex: '2'}}/>
            <img src={zigzag} alt='shape' className='position-absolute pluse  hide' style={{top: '85%',left: '2%', zIndex: '2'}}/>

        </div>
    )
}

export default Testimonials
