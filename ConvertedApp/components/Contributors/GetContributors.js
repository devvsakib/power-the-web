import React from 'react';
import CProfileCard from "./CProfileCard";
import data from "../../json/Contributors";

function GetContributors() {
    return (

        <div>
            <div className="mb-12 grid gap-x-5 gap-y-4 place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {data.profiles.map(({ name, github, twitter, avatarUrl }, idx) => {
                    return (
                        <CProfileCard
                        key={name}
                            name={name}
                            idx={idx} 
                            github={github}
                            twitter={twitter}
                            avatarUrl={avatarUrl}
                            
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default GetContributors