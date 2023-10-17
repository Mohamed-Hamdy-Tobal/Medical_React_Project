import React from 'react'
import doc1 from '../../../imgs/team/member1.22ac1d594f69ddaf3e08.jpg'
import doc2 from '../../../imgs/team/member2.d03a0686030bcd2f05ec.jpg'
import doc3 from '../../../imgs/team/member3.0d822ecc51b2532abe0e.jpg'

const FirstTeam = () => {
    return (
        <>
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
        </>
    )
}

export default FirstTeam
