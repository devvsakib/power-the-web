import React from 'react'
import Cards from './Cards'

const GetStarted = () => {
    return (
        <>

            <div className='w-full sm:w-1/2 mt-20 mx-auto text-center'>
                <h1 className='text-5xl font-bold text-white uppercase'>Guidelines</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 my-20">
                <Cards title={"Frontend Roadmap"} summarize={"Prepare for the interview"}/>
                <Cards title={"Backend Roadmap"} summarize={"Prepare for the interview"}/>
                <Cards title={"Full-Stack Development Roadmap"} summarize={"Prepare for the interview"}/>
                <Cards title={"Frontend Interview Preparation"} summarize={"Prepare for the interview"}/>
            </div>
        </>
    )
}

export default GetStarted