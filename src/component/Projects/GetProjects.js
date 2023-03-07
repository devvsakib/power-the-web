import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './Projects.css'
import Error from '../Error/Error.js'
function GetProjects() {
    const url = "https://api.github.com/repos/devvsakib/power-the-web/contents/PROJECTS"
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const getProjects = async () => {
        await axios.get(url)
            .then(res => setProjects(res.data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        getProjects();
    }, [projects.length])

    if (isError) {
        return <Error
            msg={`Sorry, we couldn’t find project list for now. Please comeback letter`}
        />
    }

    return (
        <>
            {
                isLoading ?
                    (<div className="loader h-[90vh]  md:-mt-36 flex flex-col items-center">
                        <img className='mx-auto md:w-1/3' src='/assets/run.gif' alt="run.gif"/>
                        <h2 className='text-center text-2xl font-semibold text-white'>Loading...</h2>
                    </div>
                    ) : (
                        <div className='projects-container place-items-center p-4'>
                            <ul className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center'>
                                {
                                    projects.map((item, index) => (
                                        <li className='py-3 items-center grid' key={item.name}>
                                            <a title={item.name} className='rounded-l-[30px] flex align-middle bg-gradient-to-r to-[#00000018] from-[#b700ff48] backdrop-filter backdrop-blur-md z-0 overflow-visible shadow-md text-white hover:from-[#3701729e] hover:to-[#7128b3b8] transition-all ease-linear delay-80 duration-300 hover:scale-110 hover:transition-all' href={item.html_url} target="_blank" rel="noopener noreferrer">
                                                <span className='bubble h-14 w-14 cursor-pointer border-2 border-[#adb2c5] rounded-full text-center font-bold flex items-center justify-center'>{index + 1}</span>
                                                <p className='pl-2 font-semibold flex items-center tracking-wider'>{item.name.substring(0, 28)} {item.name.length >= 28 && '...'}</p>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>)
            }
        </>

    )
}

export default GetProjects