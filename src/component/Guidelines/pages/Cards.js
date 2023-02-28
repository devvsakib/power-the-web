import { Link } from 'react-router-dom'
const Cards = ({title, summarize}) => {
    return (
        <div className="m-3 bg-white/10 backdrop-blur-[10px] text-white rounded-lg p-3">
            <div className="max-w-sm flex flex-col justify-between rounded overflow-hidden">
                <div>
                    <h2 className="px-6 font-bold text-lg my-2">{title}</h2>
                </div>
                <div className="px-6 pb-4">
                    <p className=" text-base">
                        {summarize}
                    </p>
                </div>
                <div className="px-6 pb-6">
                    <button className="ptw-grad hover:scale-110 duration-300 ease-linear hover:shadow-md hover:shadow-white/30 ptw-gradHover text-white font-bold py-2 px-4 rounded">
                        <Link>
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards