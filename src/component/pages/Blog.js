import { React } from "react";
import blogs from "../../json/Blogs.json";
import BlogCard from "../Blog/BlogCard";

function Blog() {
  return (
    <>
      <div className="text-center text-uppercase m-8 text-white">
        <h1 className="text-4xl font-semibold"> Blogs </h1>
        <div className="flex flex-row text-center justify-center">
          <p className="text-base">Read more, Gain more.&nbsp; </p>
          <a
            href={"https://github.com/devvsakib/power-the-web"}
            className="text-base hover: underline"
          >
            {" "}
            Add
          </a>
          <p className="text-base">&nbsp;your Blog!</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-6">
        {blogs.blogs.map((card, idx) => (
          <BlogCard
            card={card}
            idx={idx}
          />
        ))}
      </div>
    </>
  );
}

export default Blog;
