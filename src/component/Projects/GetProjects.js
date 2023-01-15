import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './Projects.css'
function GetProjects() {
    const url = "https://api.github.com/repos/devvsakib/hacktoberfest-react-project/contents/PROJECTS"
    const [projects, setProjects] = useState([])
    const getProjects = async () => {
        await axios.get(url)
            .then(res =>
                // console.log(data)
                setProjects(res.data)
            )
    }
    useEffect(() => {
        getProjects()
    }, [])
    return (
        <>
            <div className='projects-container place-items-center p-4'>
                <div className="text-center text-uppercase m-8">
                    <h1 className="text-4xl font-semibold">  Contributors Projects </h1>
                    <p className="text-base"> Source code given in GitHub. Join Us </p>
                </div>
                <ul>
                    {
                        projects.map((item, index) => (
                            <li className='py-3'>
                                <a className='flex projects-line align-middle bg-black rounded-l-[30px]' href={item.html_url}>
                                    <span className='bg-[#efefbb] h-12 w-12 cursor-pointer border-2 border-black rounded-full text-center font-bold leading-[2.7]'>{index + 1}</span>
                                    <p className='pl-2  font-semibold leading-[2.7] tracking-wider'>{item.name}</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>

    )
}

export default GetProjects