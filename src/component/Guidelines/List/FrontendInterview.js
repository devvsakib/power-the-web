import React from 'react'
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';


const FrontendInterview = ({ setContent, content }) => {
    const topics = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setOpen(!open)} className='cursor-pointer flex justify-between items-center'>
                <h2 className='select-none tttt'>Frontend Interview</h2>
                {
                    !open ? <FaAngleRight /> : <FaAngleDown />
                }
            </div>
            <div className='flex flex-col gap-y-5'>
                <ul className={`${open ? "" : "hidden"}`}>
                    {topics.map((topic, index) => (
                            <li key={index} className={`bg-transparent cursor-pointer my-2 hover:bg-[#8A00AD] transition-all ease-linear duration-300 ml-0 px-1 rounded py-2  hover:text-white hover:translate-x-3 hover:scale-105 hover:pl-2`} onClick={() => { setContent(topic.toLowerCase()); setOpen(!open); }}>
                                {topic}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default FrontendInterview