import React from 'react'
import './Login.css'
import Banner from '../../Banner/Banner'
import logo from '../../../imgs/logo.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <Banner bannerTitle="login" path="login"/>
            <div className="register login">
                <div class="page-wraper">
                    <div class="section-area account-wraper2">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-lg-6 col-md-8">
                                    <div class="my-form form-wraper">
                                        <div class="logo">
                                            <img src={logo} alt="d"/>
                                        </div>
                                        <form action="#">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password"/>
                                            </div>
                                            <div class="form-group">
                                                <Link type="button" class="btn mb-30 btn-lg btn-primary w-100" to="/">Register Now</Link>
                                            </div>
                                            <div class="text-center mt-40">
                                                <p class="mt-0">Dont have any account?</p>
                                                <Link class="btn btn-lg btn-secondary w-100 regstir" data-toggle="tab" to="/pages/login">Login</Link>
                                            </div>
                                        </form>
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

export default Register
