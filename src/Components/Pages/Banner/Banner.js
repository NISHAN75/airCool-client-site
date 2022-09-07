import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import bgVideo from '../../../video/bg-vidoe.mp4';

const Home = () => {
    return (
        <div>
            <div className='video-area relative'>
                <video src={bgVideo} autoPlay loop muted className='w-full h-auto'></video>
                <div className='font-bold absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                <div className='video-info absolute text-left font-bold absolute lg:top-48  lg:ml-48 md:top-20 md:ml-28 sm:top-20 sm:ml-20 top-2 ml-16'>
                    <h1 className='lg:text-7xl md:text-6xl sm:text-4xl text-xl text-white lg:mb-10 md:mb-10 sm:mb-5 mb-2'>Air Condition repair & <br /> Heating Services </h1>
                    <p className='lg:text-4xl md:text-2xl sm:text-xl text-sm  text-white'>Fed up With Poor Services? So are we hare to help <br /> you fast & accurate services.</p>
                    <Link to="/contact">
                    <button className='main-btn lg:mt-10 md:mt-8 sm:mt-4 mt-2 ' data-hover="click Hare !"><div>Meet My Team</div></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home