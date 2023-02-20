import React from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

import data from "../../json/Contributors.json";

function CProfileCard() {
    return (
        <div className="w-full px-10">
            <div className="text-center text-uppercase m-8">
                <h1 className="text-4xl font-semibold"> Our Contributors </h1>
                <p className="text-base"> Thanks To All Contributors. Join Us </p>
            </div>

            <div>
                {/* background: linear-gradient(90deg, rgba(3,13,87,0.40518205573244925) 0%, rgba(182,0,255,0.41918765797334556) 100%) */}
                <div className="grid gap-x-5 gap-y-4 place-items-center grid-cols-custom">
                    {data.profiles.map(({ name, github, twitter, avatarUrl }) => {
                        return (
                            <div className="contributor-card m-1 w-30" key={github}>
                                <div className="rounded-3xl bg-gradient-to-r 
                                to-[#0f1c8018] from-[#b700ff48] backdrop-filter backdrop-blur-md z-0 overflow-visible shadow-md max-w-[240px] h-[350px] my-3 p-4 text-white
                                hover:from-[#9d08d8] hover:to-[#711fce] transition-all ease-linear delay-80 duration-300 hover:scale-110 hover:transition-all">
                                    <img
                                        src={avatarUrl}
                                        className="rounded-full border-solid border-white border-2 mt-3"
                                        alt="avatarUrl"
                                    />
                                    <div>
                                        <h2 className="text-center text-2xl font-bold m-2">
                                            {name}
                                        </h2>
                                        <div className="flex justify-evenly items-center mt-4 ">
                                            <a target="_blank" href={`https://github.com/${github}`}>
                                                <FaGithub
                                                    className="w-8 h-8"
                                                    alt="github"
                                                />
                                            </a>
                                            <a target="_blank" href={`https://twitter.com/${twitter}`}>
                                                <FaTwitter
                                                    className="w-8 h-8"
                                                    alt="twitter"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CProfileCard