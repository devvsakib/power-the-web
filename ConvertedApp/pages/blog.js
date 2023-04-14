import { React } from "react";
import blogs from "/json/Blogs.json";
import BlogCard from "@/components/Blog/BlogCard";
import Layout from "@/components";

function Blog() {
  return (
    <Layout>
      <div className="w-full px-10 ">
        <div className="text-center text-uppercase m-8 text-white">
          <h1 className="text-4xl font-semibold"> Blogs </h1>
          <p className="text-base">Read more, Gain more. <a href={"https://github.com/devvsakib/power-the-web"}
            className="text-base hover: underline" target={"_blank"} rel="noreferrer"> Add</a> your Blog!</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-6">
          {blogs.blogs.map((card, idx) => (
            <BlogCard
              card={card}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </Layout>

  );
}

export default Blog;
