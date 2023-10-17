import React from 'react'
import Banner from '../../Banner/Banner'
import FirstTeam from './FirstTeam'
import SecondTeam from './SecondTeam'

const Team = () => {
    return (
        <>
            <Banner bannerTitle='Team' path='Team'/>
            <div className='section-area section-sp1 team-wraper'>
                    <div className='container'>
                        <div class="row justify-content-center">
                            <FirstTeam/>
                            <SecondTeam/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Team
