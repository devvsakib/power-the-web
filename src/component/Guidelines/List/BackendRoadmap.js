import React from 'react'
import { useState } from 'react';

const BackendRoadmap = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h2 className='cursor-pointer'
                onClick={() => setOpen(!open)}
            >Backend Roadmap</h2>
            <div className='flex flex-col gap-5'>
                <ul className={`${open ? "" : "hidden"}`}>
                    <li className='cursor-pointer'>HTML</li>
                    <li className='cursor-pointer'>CSS</li>
                    <li className='cursor-pointer'>JavaScript</li>
                    <li className='cursor-pointer'>React</li>
                    <li className='cursor-pointer'>Redux</li>
                    <li className='cursor-pointer'>React Router</li>
                    <li className='cursor-pointer'>React Hooks</li>
                    <li className='cursor-pointer'>React Native</li>
                    <li className='cursor-pointer'>Next.js</li>
                    <li className='cursor-pointer'>TypeScript</li>
                    <li className='cursor-pointer'>Styled Components</li>
                    <li className='cursor-pointer'>Tailwind CSS</li>
                    <li className='cursor-pointer'>Bootstrap</li>
                    <li className='cursor-pointer'>Sass</li>
                </ul>
            </div>
        </div>
    )
}

export default BackendRoadmap