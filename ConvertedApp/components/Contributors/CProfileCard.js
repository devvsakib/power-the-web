import { FaGithub, FaTwitter, FaRegAddressCard } from "react-icons/fa";
import Link from 'next/link'

const CProfileCard = ({ github, avatarUrl, twitter, name, idx }) => {
    return (
        <div className="m-1 w-full md:w-30 cursor-pointer" key={idx}>
            <div className="w-full mx-auto rounded-3xl bg-gradient-to-r
                                to-[#0f1c8018] from-[#b700ff48] backdrop-filter backdrop-blur-md z-0 overflow-visible shadow-md max-w-[240px] h-[350px] my-3 p-4 text-white
                                hover:from-[#9d08d8] hover:to-[#711fce] transition-all ease-linear delay-80 duration-300 hover:scale-105 hover:transition-all">
                <img src={avatarUrl} className="rounded-full w-[100%] h-[65%] skeleton  border-solid border-white border-2 mt-3"
                    alt={name}
                />
                <div>
                    <h2 className="text-center text-2xl font-bold m-2">
                        {name}
                    </h2>
                    <div className="flex justify-evenly items-center mt-4 ">


                        {
                            github &&
                            <a target="_blank" href={`https://github.com/${github}`} rel="noopener noreferrer">
                                <FaGithub
                                    className="socialIcon"
                                    alt="github"
                                />
                            </a>
                        }
                        {
                            github &&
                            <Link href={`/card/${github}`} passHref title='My Contributor Card'>
                                <FaRegAddressCard
                                    className="socialIcon customName"
                                    alt="Card"
                                />
                            </Link>
                        }
                        {
                            twitter &&
                            <a target="_blank" href={`https://twitter.com/${twitter}`} rel="noopener noreferrer">
                                <FaTwitter
                                    className="socialIcon"
                                    alt="twitter"
                                />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CProfileCard;

