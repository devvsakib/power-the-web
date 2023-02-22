import React from 'react'
import { Link } from 'react-router-dom'
const arr = ["Frontend Delopment", "Backend Development", "Full-Stack Development"]
function Card() {
    return (
        <>
            <hr></hr>
            <div className='container-style grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 sm:px-20  py-6 mt-10 items-center z-999  content-center mb-10'>
                {
                    arr.map(items => (
                        //i want o add a link to each card
                        <Link to='/roadmap'>
                            <div className="rounded-md text-center backdrop-blur-[30px] z-0 overflow-visible drop-shadow-2xl sm:drop-shadow-2xl p-10 my-3">
                                <h2 className='inline font-semibold'>{items}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Card