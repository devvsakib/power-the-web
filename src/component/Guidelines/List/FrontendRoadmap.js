import React from 'react'
import { useState } from 'react';

const FrontendRoadmap = ({ setContent, setMenu, menu }) => {
    const topics = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Sass"]
    const [open, setOpen] = useState(false);
    // const [type, setType] = useState("");
    // console.log(type);

    return (
        <div>
            <h2 className='cursor-pointer'
                onClick={() => setOpen(!open)}
            >Frontend Roadmap</h2>
            <div className='flex flex-col gap-y-5'>
                <ul className={`${open ? "" : "hidden"}`}>
                    {
                        topics.map((topic, index) => (
                            <li key={index} className='cursor-pointer my-2 hover:bg-slate-600 transition-all ease-linear duration-200a ml-0 px-1 rounded py-2' onClick={() => { setContent(topic.toLowerCase()); setOpen(!open); }}>{topic}</li>
                        ))

                    }

                </ul>
            </div>
        </div>
    )
}


export default FrontendRoadmap