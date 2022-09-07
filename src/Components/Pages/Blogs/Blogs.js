import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import Blog from '../Blog/Blog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <section className='my-20'>
            <h5 className='text-4xl font-bold text-primary text-center my-10'>Welcome Our Blogs</h5>
            <div className='main-blog grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-20 mx-10'>
                <div>
                    {
                        blogs.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
                    } 

                </div>
                <div className='blog-card'>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>
                    <div class="card w-full bg-primary shadow-xl mb-5">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white font-bold mb-5">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><FaAngleRight></FaAngleRight><span className=' ml-2'>AIR - CONDITIONING</span></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blogs;