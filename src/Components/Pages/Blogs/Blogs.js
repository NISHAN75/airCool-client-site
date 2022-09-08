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
                    <div className="card w-full bg-[#F1F4F7] shadow-xl border-4 border-primary mb-5"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000" >
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-black font-bold mb-10">
                                Categories
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2 '><span className=' ml-2 text-black font-bold hover:text-primary'>AIR - CONDITIONING</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>HEATING & FURNACE</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>MAINTENANCE</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>COMMERCIAL</span></li>
                            </ul>
                        </div>

                    </div>
                    <div className="card w-full bg-[#F1F4F7] shadow-xl border-4 border-primary mb-10"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-black font-bold mb-5">
                                Archives
                            </h2>
                            <ul className='text-left'>
                                <li className=' flex mb-2 '><span className=' ml-2 text-black font-bold hover:text-primary'>FEBRUARY (2016)</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>DECEMBER (2015)</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>JULY (2015)</span></li>
                                <li className=' flex mb-2'><span className=' ml-2 text-black font-bold hover:text-primary'>JANUARY (2015)</span></li>
                            </ul>
                        </div>

                    </div>
                    <div className="card w-96 bg-[#F1F4F7] shadow-xl border-4 border-primary mb-10"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-black font-bold mb-5">
                                Recent Post
                            </h2>
                            <div>
                                <div><img src='https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-2/4 rounded-lg'></img></div>
                                <p className='text-black font-bold hover:text-primary mt-5'>3 Ways a Tune-Up Prevents A/C from Breaking Down</p>
                            </div>
                        </div>

                    </div>
                    <div className="card w-96 bg-[#F1F4F7] shadow-xl border-4 border-primary mb-10"
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="1000">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-black font-bold mb-5">
                                Recent Post
                            </h2>
                            <div>
                                <div><img src='https://images.pexels.com/photos/7541353/pexels-photo-7541353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-2/4 rounded-lg'></img></div>
                                <p className='text-black font-bold hover:text-primary mt-5'>Smart Alternative to an Air Conditioner</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Blogs;