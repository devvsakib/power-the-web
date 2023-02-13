import { React } from "react";
import BlogCard from "../../json/BlogCards.json";

function Blog() {
  return (
    <div className="flex flex-wrap justify-center my-6">
      {BlogCard.Cards.map((card) => (
        <div
          key={card.key}
          className="w-100 h-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-3 bg-slate-50 rounded"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={card.img} alt={card.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">
                {card.description.slice(0, 100) + "..."}
              </p>
            </div>
            <div className="px-6 pb-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
