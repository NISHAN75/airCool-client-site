import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/blog/${blogId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div className="card w-full my-20">
      <figure>
        <img src={blog.img} className="w-3/4 rounded-lg" alt="Shoes" />
      </figure>
      <div className="card-body mx-20">
        <div className="blog-info">
          <h2 className="card-title text-primary text-2xl font-bold">{blog.name}</h2><br />
          <h5 className="text-primary text-xl font-bold">Author:  {blog.writer}</h5><br />
          <h5 className="text-primary text-xl font-bold">Date:  {blog.data}</h5><br />
          <p className="text-primary ">{blog.message}</p><br /><br />
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 my-10">
            <div>
              <img src={blog.img1} className="w-3/4 h-auto"></img>
            </div>
            <div>
              <h2 className="text-primary text-xl font-bold">{blog.caption1}</h2><br />
              <p className="text-primary">{blog.message1}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">

            <div>
              <h2 className="text-primary text-xl font-bold">{blog.caption2}</h2><br />
              <p className="text-primary">{blog.message2}</p>
            </div>
            <div>
              <img src={blog.img2} className="w-3/4 h-auto"></img>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetails;