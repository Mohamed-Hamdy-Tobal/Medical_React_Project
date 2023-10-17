import React from 'react'
import './MainAbout.css'
import Banner from '../../Banner/Banner'
import About from '../../Home/Pages/About'
import BestDoctors from './BestDoctors'
import doc1 from '../../../imgs/team/member1.22ac1d594f69ddaf3e08.jpg'
import doc2 from '../../../imgs/team/member2.d03a0686030bcd2f05ec.jpg'
import doc3 from '../../../imgs/team/member3.0d822ecc51b2532abe0e.jpg'
import Testimonials from '../../Home/Pages/Testimonials'
import News from '../../Home/Pages/News'

const MainAbout = () => {
    return (
        <>
            <Banner bannerTitle='About Us' path='About'/>
            <div className='main-about'>
                <About/>
                <BestDoctors/>
                <div className='section-area section-sp3 team-wraper'>
                    <div className='container'>
                        <div className="section-header">
                            <h5 className='about-title'>Our Doctor</h5>
                            <h1 className='main-title'>Meet Best Doctors</h1>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-sm-6 mb-4">
                                <div class="team-member">
                                    <div class="team-media">
                                        <img src={doc1} alt="Dr. Addition Smith"/>
                                    </div>
                                    <div class="team-info">
                                        <div class="team-info-content">
                                            <h4 class="title">Dr. Addition Smith</h4>
                                            <span class="text-secondary">Dentist</span>
                                        </div>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4">
                                <div class="team-member">
                                    <div class="team-media">
                                        <img src={doc2} alt="Dr. Mahfuz Riad"/>
                                    </div>
                                    <div class="team-info">
                                        <div class="team-info-content">
                                            <h4 class="title">Dr. Mahfuz Riad</h4>
                                            <span class="text-secondary">Chiropractor</span>
                                        </div>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4">
                                <div class="team-member">
                                    <div class="team-media">
                                        <img src={doc3} alt="Dr. David Benjamin"/>
                                    </div>
                                    <div class="team-info">
                                        <div class="team-info-content">
                                            <h4 class="title">Dr. David Benjamin</h4>
                                            <span class="text-secondary">Cardiologist</span>
                                        </div>
                                        <ul className="social-media">
                                            <li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonials/>
                <News/>
            </div>
        </>
    )
}

export default MainAbout
