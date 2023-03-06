import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './Projects.css'
function GetProjects() {
    const url = "https://api.github.com/repos/devvsakib/power-the-web/contents/PROJECTS"
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getProjects = async () => {
        await axios.get(url)
            .then(res =>
                setProjects(res.data)
            )
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        getProjects()
    }, [projects.length])
    return (
        <>
            {
                isLoading ?
                    (<div className="loader h-[90vh]  md:-mt-36 flex flex-col items-center">
                        <img className='mx-auto md:w-1/3' src='/assets/run.gif' />
                        <h2 className='text-center text-2xl font-semibold text-white'>Loading...</h2>
                    </div>
                    ) : (
                        <div className='projects-container place-items-center p-4'>
                            <ul className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center'>
                                {
                                    projects.map((item, index) => (
                                        <li className='py-3 items-center grid'>
                                            <a className='flex projects-line align-middle bg-black rounded-l-[30px]' href={item.html_url} target="_blank">
                                                <span className='h-14 w-14 cursor-pointer border-2 border-black rounded-full text-center font-bold flex items-center justify-center'>{index + 1}</span>
                                                <p className='pl-2  font-semibold flex items-center tracking-wider'>{item.name}</p>
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