import CProfileCard from "./CProfileCard";
import data from "../../json/Contributors.json";

function GetContributors() {
    return (
        <div className="w-full px-10">
            <div className="text-center text-uppercase m-8 text-white">
                <h1 className="text-4xl font-semibold"> Our Contributors </h1>
                <p className="text-base"> Thanks To All Contributors. Join Us </p>
            </div>

            <div>
                {/* background: linear-gradient(90deg, rgba(3,13,87,0.40518205573244925) 0%, rgba(182,0,255,0.41918765797334556) 100%) */}
                <div className="grid gap-x-5 gap-y-4 place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {data.profiles.map(({ name, github, twitter, avatarUrl }, idx) => {
                        return (
                            <CProfileCard
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
        </div>
    )
}

export default GetContributors