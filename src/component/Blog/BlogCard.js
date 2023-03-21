import React  from 'react';

const BlogCard = ({card, idx}) => {
    return (
        <div
            key={idx}
            className=" bg-white/10 backdrop-blur-[10px] text-white rounded"
            style={{ maxWidth: "350px",margin: "-5px" }}
        >
            <div className=" md:h-[350px] flex flex-col justify-between rounded overflow-hidden shadow-lg" >
                <div>
                    <img
                        className="w-full h-44 object-fit-cover skeleton"
                        src={card.thumbnail}
                        alt={card.title}
                    />
                    <h2 className="px-2 font-bold text-sm my-2">
                        {card.title.slice(0, 50) + "..."}
                    </h2>
                </div>
                <div className="px-2 pb-2">
                    <p className=" text-base">
                        {card.description.slice(0, 90) + "..."}
                    </p>
                </div>
                <div className="px-1 py-4">
                    <button className="ptw-grad hover:scale-110 duration-300 ease-linear hover:shadow-md hover:shadow-white/30 ptw-gradHover text-white font-bold py-2 px-4 rounded">
                        <a href={card.url} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard