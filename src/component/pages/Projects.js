import React from 'react'
import GetProjects from '../Projects/GetProjects'

function Projects() {
    return (
        <div>
            <div className="text-center text-uppercase m-8">
                <h1 className="text-2xl md:text-4xl font-semibold  text-white">  Contributors Projects </h1>
                <p className="text-sm md:text-base text-white"> Source code given in GitHub. Join Us</p>
            </div>
            <GetProjects />

        </div >
    )
}

export default Projects