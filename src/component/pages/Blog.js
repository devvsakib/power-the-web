import { React } from "react";
import BlogCard from "../../json/Blogs.json";

function Blog() {
  return (
    <div className="flex flex-wrap justify-center my-6">
      {BlogCard.Cards.map((card, idx) => (
        <div
          key={idx}
          className="w-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-3 bg-slate-50 rounded"
        >
          <div className="max-w-sm  md:h-[400px] flex flex-col justify-between rounded overflow-hidden shadow-lg">
            <div>
              <img className="w-full h-44 object-cover" src={card.thumbnail} alt={card.title} />
              <h2 className="px-6 font-bold text-lg my-2">{card.title}</h2>
            </div>
            <div className="px-6 pb-4">
              <p className="text-gray-700 text-base">
                {card.description.slice(0, 100) + "..."}
              </p>
            </div>
            <div className="px-6 pb-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={card.url} target="_blank">
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
