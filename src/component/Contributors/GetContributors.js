import CProfileCard from "./CProfileCard";
import data from "../../json/Contributors.json";

function GetContributors() {
    return (

        <div>
            {/* background: linear-gradient(90deg, rgba(3,13,87,0.40518205573244925) 0%, rgba(182,0,255,0.41918765797334556) 100%) */}
            <div className="mb-12 grid gap-x-5 gap-y-4 place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
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
    )
}

export default GetContributors