import React, { useState } from 'react'
import './Contact.css'
import Banner from '../Banner/Banner'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [area, setArea] = useState('')

    const [errorN, setEN] = useState('')
    const [nameShow, setNameShow] = useState(false)

    const [errorE, setEE] = useState('')
    const [emailShow, setEmailShow] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()

        if (name === '') {
            setEN('Empty Field')
            setNameShow(true)
        } else if (name.length < 10) {
            setEN('Must be more than 10 characters')
            setNameShow(true)
        } else {
            setNameShow(false)
        }

        if (email === '') {
            setEE('Empty Field')
            setEmailShow(true)
        } else {
            if (!email.includes('@')) {
                setEE("Must Include '@'")
                setEmailShow(true)
            } else {
                setEmailShow(false)
            }
        }
        
        if (nameShow && emailShow) {
            console.log('try again')
        } else {
            console.log('final name: ',name)
            console.log('final email: ',email)
            console.log('final phone: ',phone)
            setName('')
            setEmail('')
            setPhone('')
            setArea('')
        }
    }

    const inputNameHandler = (e) => {
        setName(e.target.value)
        // console.log(name)
    }
    const inputEmailHandler = (e) => {
        setEmail(e.target.value)
        // console.log(email)
    }
    const inputPhoneHandler = (e) => {
        setPhone(e.target.value)
        // console.log(phone)
    }
    const inputAreaHandler = (e) => {
        setArea(e.target.value)
        // console.log(phone)
    }

    return(
        <>
            <Banner bannerTitle='Contact Us' path='contact' increase='increase-bottom'/>
            <div className='contact sec-neg sec-pos'>
                <div className="container">
                    <div className='contact-wrapper'>
                        <div className="row justify-content-center align-items-center contact-holder">
                            <div className="col-lg-6 main-form for-padd">
                                <form action='#' className='form-contact' onSubmit={formHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={inputNameHandler}/>
                                        {nameShow && <h4 className='error btn btn-danger'>{errorN}</h4>}  
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" value={email} onChange={inputEmailHandler} />
                                        {emailShow && <h4 className='error btn btn-danger'>{errorE}</h4>}  
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="Phone Numbers" value={phone} onChange={inputPhoneHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-select form-control">
                                            <option>Selecty Department</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea value={area} onChange={inputAreaHandler}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                                </form>
                            </div>
                            <div className="col-lg-6 for-padd form-info">
                                <div className='contact-us'>
                                    <div className='content'>
                                        <h2>Contact Us For Any Information</h2>
                                        <div className='location box'>
                                            <h3><i className='fa fa-map icon'></i> Location</h3>
                                            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                        </div>
                                        <div className='mail box'>
                                            <h3><i className='fa fa-id-badge icon'></i> Email & Phone</h3>
                                            <p>
                                                <a className="text-white" href="/">info@yourdomain.com</a>
                                                <span className='d-block mt-1'>(+68) 120034509</span>
                                            </p>
                                        </div>
                                        <div className="icon-box box">
                                            <h3 className="title"><i className="fa fa-globe icon"></i>Follow Us</h3>
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
                </div>
            </div>
        </>
    )
}

export default Contact
