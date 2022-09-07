import React from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/fa";


const Blog = ({ blog }) => {

    const { name, short, img, _id } = blog;

    return (
        <div className='blog-caption mb-5'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="300"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false" >
            <div>
                <img src={img}></img>
            </div>
            <h5 className='text-4xl font-bold text-primary my-5'>{name}</h5>
            <p className=' font-bold text-primary my-3'>By Admin / in air conditioning</p>
            <p className='text-primary my-5'>{short}</p>
            <button className='btn btn-primary'><Link className="text-white" to={`/blog/${_id}`}>Read More..</Link></button>
        </div>
    );
};

export default Blog;