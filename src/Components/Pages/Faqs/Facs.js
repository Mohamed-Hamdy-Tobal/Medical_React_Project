import React from 'react'
import './Fax.css'
import Banner from '../../Banner/Banner'
import News from '../../Home/Pages/News'

const Fax = () => {
    return (
        <>
            <Banner bannerTitle="Faq's" path="Faq's"/>
            <div className="faq's sec-padd">
                <div className='container'>
                    <div className='questions'>
                        <div className="row justify-content-center align-items-center g-2">
                            <div className="col-lg-6 ">
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
                            <div className="col-lg-6 ">
                                <div class="accordion" id="accordionExample">


                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwoZ">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoZ" aria-expanded="false" aria-controls="collapseTwoZ">
                                                How do I withdraw from a subject?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseTwoZ" class="accordion-collapse collapse" aria-labelledby="headingTwoZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThreeZ">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeZ" aria-expanded="false" aria-controls="collapseThreeZ">
                                                Understand Doctor Before You Regret?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseThreeZ" class="accordion-collapse collapse" aria-labelledby="headingThreeZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOneZ">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneZ" aria-expanded="true" aria-controls="collapseOneZ">
                                                How Can I Contact You?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseOneZ" class="accordion-collapse collapse show" aria-labelledby="headingOneZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFourZ">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourZ" aria-expanded="false" aria-controls="collapseFourZ">
                                                What types of systems do you support?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseFourZ" class="accordion-collapse collapse" aria-labelledby="headingFourZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFiveZ">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveZ" aria-expanded="false" aria-controls="collapseFiveZ">
                                                We Teach You How To Feel Better?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseFiveZ" class="accordion-collapse collapse" aria-labelledby="headingFiveZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSixZ">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixZ" aria-expanded="false" aria-controls="collapseSixZ">
                                                How Doctor Can Ease Your Pain?
                                                <i className='fa fa-chevron-down icon-down icon-arr'></i> <i className='fa fa-chevron-up icon-up icon-arr'></i>
                                            </button>
                                        </h2>
                                        <div id="collapseSixZ" class="accordion-collapse collapse" aria-labelledby="headingSixZ" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <News/>
                </div>
            </div>
        </>
    )
}

export default Fax
