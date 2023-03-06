import React from 'react'
import { Link } from 'react-router-dom'
function RoadmapHero() {
    return (
        <div>
            <div className='px-2 md:px5 w-full text-center sm:text-left pt-20 sm:pt-0 sm:h-screen flex flex-col sm:flex-row items-center justify-center h-[100vh]'>
                <div className='w-full sm:w-1/2 mx-auto text-center'>
                    <h1 className='text-5xl font-bold text-white uppercase'>Guidelines</h1>
                    <p className='text-lg text-white'>
                        Your one stop for all the guidelines you need to follow to contribute to this project and make it better. Your development journey starts here.
                    </p>
                    <div className='flex flex-row mt-5 justify-center'>
                        <Link to={"/guidelines/getstarted"}>
                        <button className='bg-white font-semibold uppercase text-black px-4 py-2 rounded-lg mr-2'>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapHero