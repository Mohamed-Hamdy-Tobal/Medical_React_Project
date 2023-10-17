import React from 'react'
import Banner from '../../Banner/Banner'
import './Blog.css'

import clinic1 from './../../../imgs/news/6.jpg'
import clinic2 from './../../../imgs/news/7.jpg'
import clinic3 from './../../../imgs/news/8.jpg'
import clinic4 from './../../../imgs/news/9.jpg'
import clinic5 from './../../../imgs/news/10.jpg'
import clinic6 from './../../../imgs/news/1.jpg'
import clinic7 from './../../../imgs/news/2.jpg'
import clinic8 from './../../../imgs/news/3.jpg'
import clinic9 from './../../../imgs/news/44.jpg'
import doctor1 from '../../../imgs/doctors/0.jfif'
import doctor2 from '../../../imgs/doctors/1.jfif'
import doctor3 from '../../../imgs/doctors/2.jfif'
import doctor4 from '../../../imgs/doctors/3.jfif'
import doctor5 from '../../../imgs/doctors/4.jfif'

const BlogMain = () => {

    const boxsImages = [clinic1, clinic2, clinic3, clinic4, clinic5,clinic6, clinic7, clinic8, clinic9]
    const boxsDocs = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor2, doctor1, doctor3, doctor4]
    const boxNames = ['John deo', 'Peter Packer', 'Sonar Moyana', 'Kalina Mollika', 'Michel', 'John deo', 'Peter Packer', 'Sonar Moyana', 'Kalina Mollika']
    const boxText = [
        'In this hospital there are special surgeon',
        'Can you get a diflucan prescription online?',
        'Why Is Skin Surgeon Considered Underrated',
        'Dental Care for Women is very important',
        'Health Will Be A Thing Of The Past And Here\'s Why',
        'Understand Health Before You Regret',
        'Ten Gigantic Influences Of Health',
        'Why Is Skin Surgeon Considered Underrated',
        'Everyone need to go Dentist regularly33'
    ]

    const box = boxsImages.map((slideImg, idx) => {
        return (
            <div className="slide col-xl-4 col-md-6">
                <div className='box'>
                    <img src={slideImg} alt='patient'/>
                    <div className='content'>
                        <div className='info'>
                            <img src={boxsDocs[idx]} alt='patient'/>
                            <h5>{boxNames[idx]}</h5>
                            <div className='date'><i class="fa fa-calendar"></i> 1{idx} July 2023</div>
                        </div>
                        <h1>{boxText[idx]}</h1>
                        <button type="button" class="btn btn-primary">Read More <i class="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <Banner bannerTitle="Blog" path="Blog"/>
            <div className='blog sec-padd'>
            <div class="container">
                <div className="section-header">
                    <h5 className='about-title'>Latest News</h5>
                    <h1 className='main-title'>Our Latest News</h1>
                </div>
                <div className='row justify-content-center align-items-center'>
                    {box}
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogMain
