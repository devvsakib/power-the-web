import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './Projects.css'
function GetProjects() {
    const url = "https://api.github.com/repos/devvsakib/hacktoberfest-react-project/contents/PROJECTS"
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
            <div className="text-center text-uppercase m-8">
                <h1 className="text-2xl md:text-4xl font-semibold  text-white">  Contributors Projects </h1>
                <p className="text-sm md:text-base text-white"> Source code given in GitHub. Join Us</p>
            </div>
            {
                isLoading ?
                    (<div className="loader h-[90vh]  md:-mt-36 flex flex-col items-center">
                        <img className='mx-auto md:w-1/3' src='/assets/run.gif' />
                        <h2 className='text-center text-2xl font-semibold text-white'>Loading...</h2>
                    </div>
                    ) : (
                        <div className='projects-container place-items-center p-4'>

                            <ul>
                                {
                                    projects.map((item, index) => (
                                        <li className='py-3'>
                                            <a className='flex projects-line align-middle bg-black rounded-l-[30px]' href={item.html_url}>
                                                <span className='h-12 w-12 cursor-pointer border-2 border-black rounded-full text-center font-bold leading-[2.7]'>{index + 1}</span>
                                                <p className='pl-2  font-semibold leading-[2.7] tracking-wider'>{item.name}</p>
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