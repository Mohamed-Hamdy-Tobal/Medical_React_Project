import React from 'react'
import Banner from '../../Banner/Banner'
import './ServiceDetails.css'
import servBann from './../../../imgs/servicesDetails/pic1.5a7f5c08a94b8b308c29.jpg'
import widget1 from './../../../imgs/servicesDetails/1.png'
import widget2 from './../../../imgs/servicesDetails/2.png'
import { Link } from 'react-router-dom'


const SerDetail = () => {
    return (
        <>
            <Banner bannerTitle="Service Details" path="Service Details"/>
            <div className="service-details section-sp1">
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-12 col-lg-7 col-xl-8' style={{marginBottom: '0 !important'}}>
                            <div className='blog-card blog-single'>
                                <div className='post-media'>
                                    <img src={servBann} alt='blog'/>
                                </div>
                                <div class="ttr-post-title">
                                    <h2 class="post-title">Why Medical Had Been So Popular Till</h2>
                                </div>
                                <div className='ttr-post-text post-serv'>
                                    <p className='p-blog'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                </div>

                                <div class="row align-items-center mb-4 mt-3">
                                    <div class="col-md-6 mb-3 ">
                                        <ul class="list-check-squer mb-0">
                                            <li><i class="fa fa-check"></i>Then along come two they</li>
                                            <li><i class="fa fa-check"></i>That’s just a little bit more than</li>
                                            <li><i class="fa fa-check"></i>Standard dummy text ever since</li>
                                            <li><i class="fa fa-check"></i>Simply dummy text of the printing</li>
                                            <li><i class="fa fa-check"></i>Make a type specimen book</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6 mb-30">
                                        <div class="skillbar-box mb-3">
                                            <h6 class="title">Advanced Technology</h6>
                                            <div class="skillbar appear">
                                                <p class="skillbar-bar" style={{width: '96%'}}></p>
                                                <span class="skill-bar-percent">96%</span>
                                            </div>
                                        </div>
                                        <div class="skillbar-box mb-3">
                                            <h6 class="title">Certified Engineers</h6>
                                            <div class="skillbar appear">
                                                <p class="skillbar-bar" style={{width: '79%'}}></p>
                                                <span class="skill-bar-percent">79%</span>
                                            </div>
                                        </div>
                                        <div class="skillbar-box mb-0">
                                            <h6 class="title">6 years Experience</h6>
                                            <div class="skillbar appear">
                                                <p class="skillbar-bar" style={{width: '75%'}}></p>
                                                <span class="skill-bar-percent">75%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="head-text mb-30">
                                    <h4 class="title mb-10">Popular Questions</h4>
                                    <p class="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                </div>

                                <div className="faq's mt-5">
                                    <div className='questions'>
                                        <div className="row justify-content-center align-items-center g-2">
                                            <div className="col-lg-12 ">
                                                <div class="accordion" id="accordionExample">

                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                How Doctor Can Ease Your Pain?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingTwo">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How do I withdraw from a subject?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingThree">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Understand Doctor Before You Regret?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingFour">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What types of systems do you support?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingFive">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                We Teach You How To Feel Better?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="headingSix">
                                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                How Can I Contact You?
                                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                                            </button>
                                                        </h2>
                                                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='col-md-12 col-lg-5 col-xl-4'>
                            <aside className='side-bar sticky-top aside-bx'>
                                <div class="widget">
                                    <ul class="service-menu">
                                        <li class="active"><Link to="/services/service-details"><span>Engine Diagnostics</span><i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to="/services/service-details"><span>Lube Oil and Filters</span><i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to="/services/service-details"><span>Belts and Hoses</span><i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to="/services/service-details"><span>Air Conditioning</span><i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to="/services/service-details"><span>Brake Repair</span><i class="fa fa-angle-right"></i></Link></li>
                                        <li><Link to="/services/service-details"><span>Tire and Wheel Services</span><i class="fa fa-angle-right"></i></Link></li>
                                    </ul>
                                </div>
                                <div class="widget">
                                    <div class="brochure-bx">
                                        <h5 class="title-head">Download</h5>
                                        <Link to="/services/service-details" class="download-link">
                                            <img src={widget1} alt=""/>
                                            <h5 class="title">Download our Brochures</h5>
                                            <span>Download</span>
                                        </Link>
                                        <Link to="/services/service-details" class="download-link">
                                            <img src={widget2} alt=""/>
                                            <h5 class="title">Our Company Details</h5>
                                            <span>Download</span>
                                        </Link>
                                    </div>
                                </div>
                                
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SerDetail
