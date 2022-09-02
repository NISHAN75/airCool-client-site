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
                <div className='video-info absolute top-44  left-56'>
                    <h1 className='text-7xl font-bold text-white mb-10'>Air Condition repair & <br /> Heating Services </h1>
                    <p className='text-white font-bold text-4xl'>Fed up With Poor Services? So are we hare to help <br /> you fast & accurate services.</p>
                    <Link to="/contact">
                    <button className='main-btn mt-10' data-hover="click Hare !"><div>Meet My Team</div></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home