import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = ({bannerTitle, path, increase}) => {
    return (
        <div className={`full-banner sec-padd ${increase}`}>
            <div className="container">
                <div className="content-banner">
                    <h3 className='title'>{bannerTitle}</h3>
                    <div className='path'>
                        <Link to='/' ><i className='fa fa-home icon'></i> Home</Link>
                        <span className='sec-path'>{path}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
