import React from 'react'
const arr = ["Frontend Delopment", "Backend Development", "Full-Stack Development"]
function Card() {
    return (
        <>
            <hr></hr>
            <div className='container-style flex flex-col sm:flex-row px-5 sm:px-20  py-6 mt-10 justify-between mb-10'>
                {
                    arr.map(items => (
                        <div className="rounded-md backdrop-blur-[30px] z-0 overflow-visible drop-shadow-3xl sm:drop-shadow-4xl p-10 my-3">
                            <h2 className='inline font-semibold'>{items}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card