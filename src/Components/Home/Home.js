import React from 'react'
import './Home.css'
import Banner from './Pages/Banner'
import About from './Pages/About'
import Work from './Pages/Work'
import HomeBook from './Pages/HomeBook'
import SliderComponent from './Pages/ServiceWrapper'
import Testimonials from './Pages/Testimonials'
import News from './Pages/News'

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <About/>
            <Work/>
            <HomeBook/>
            <SliderComponent />
            <Testimonials/>
            <News/>
        </div>
    )
}

export default Home
