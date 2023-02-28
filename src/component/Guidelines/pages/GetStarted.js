import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const GetStarted = () => {
    return (
        <>

            <div className='w-full sm:w-1/2 mt-20 mx-auto text-center'>
                <h1 className='text-5xl font-bold text-white uppercase'>Guidelines</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-10 my-20">
                <Cards title={"Frontend Interview Preparation"} summarize={"Prepare for the interview"}/>
                <Cards title={"Frontend Interview Preparation"} summarize={"Prepare for the interview"}/>
                <Cards title={"Frontend Interview Preparation"} summarize={"Prepare for the interview"}/>
                <Cards title={"Frontend Interview Preparation"} summarize={"Prepare for the interview"}/>
            </div>
        </>
    )
}

export default GetStarted