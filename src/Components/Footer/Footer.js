import React from 'react'
import './Footer.css'
import logo from '../../imgs/logo.png'
import face from '../../imgs/icons/facebook.png'
import twitter from '../../imgs/icons/twitter.png'
import instgram from '../../imgs/icons/instgram.png'
import linkedin from '../../imgs/icons/linkedin.png'
import zigzag  from '../../imgs/footer/7.png'
import pluse  from '../../imgs/footer/6.png'
import borderSquare  from '../../imgs/testi4.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row main-foot'>
                    <div className='col-xl-3 col-lg-3 col-md-6 logo-col'>
                        <img src={logo} alt='logo' className='logo'/>
                        <p className='txt-footer'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className='contact'>
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <div className='phone'>
                                <h4>Contact Us</h4>
                                <h3>+01 123 456 7890</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6 links-col'>
                        <div className='title-foot'>
                            <h2>Quick Links</h2>
                        </div>
                        <ul className='links'>
                            <li><Link to='/'>About Us</Link></li>
                            <li><Link to='/'>Services</Link></li>
                            <li><Link to='/'>Booking</Link></li>
                            <li><Link to='/'>Faq's</Link></li>
                            <li><Link to='/'>Blogs</Link></li>
                            <li><Link to='/'>Out Team</Link></li>
                        </ul>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6 links-col'>
                        <div className='title-foot'>
                            <h2>Our Service</h2>
                        </div>
                        <ul className='links'>
                            <li><Link to='/'>Dental Care</Link></li>
                            <li><Link to='/'>Services</Link></li>
                            <li><Link to='/'>Massege Therapy</Link></li>
                            <li><Link to='/'>Cardiology</Link></li>
                            <li><Link to='/'>Precise Diagnosis</Link></li>
                            <li><Link to='/'>Abmbulance Services</Link></li>
                        </ul>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 mail-col'>
                        <div className='title-foot'>
                            <h2>Subcribe</h2>
                        </div>
                        <form>
                            <input type='email' placeholder='Email Address'/>
                            <button className='send'>Subcribe Now</button>
                        </form>
                        <ul className='icons'>
                            <li><Link to='/'><img src={face} alt='icon'/></Link></li>
                            <li><Link to='/'><img src={twitter} alt='icon'/></Link></li>
                            <li><Link to='/'><img src={instgram} alt='icon'/></Link></li>
                            <li><Link to='/'><img src={linkedin} alt='icon'/></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 text-center copyright"><p className="copyright-text">Copyright © 2023 Design &amp; Developed by <Link to="/" rel="noreferrer" target="_blank" className="text-secondary">Mohamed Tobal</Link></p></div>
            </div>
            <img src={pluse} alt='shape' className='position-absolute square hide' style={{top: '6%',left: '4%', zIndex: '2'}}/>
            <img src={zigzag} alt='shape' className='position-absolute zigzag zigzag-r hide' style={{top: '75%',left: '81%', zIndex: '2'}}/>
            <img src={borderSquare} alt='shape' className='position-absolute square-rotate square-rotate-r  hide' style={{top: '20%',right: '2.2%', zIndex: '2'}}/>

        </footer>
    )
}

export default Footer
