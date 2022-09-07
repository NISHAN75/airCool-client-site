import React from 'react';
import { FaMapMarkerAlt ,FaMobileAlt,FaWarehouse } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 p-10 bg-neutral text-neutral-content">
            <div>
                <h5 className='font-bold footer-title text-center'>ABOUT US AirCool</h5>
                <p>We know our existence depends on you that support us and we want to Thank You! The highest  compliment we receive is the trust in your referral and we truly Appreciate your Support!</p><br />
                <p>Aenean et nisl in elit consectetur finibus ac nec turpis roin quis nulla egestas mattis purus sit amet, pellentesque nisl.</p>

            </div>
            <div>
                <h5 className='font-bold footer-title text-center mb-5'>CONTACT US</h5>
                <p className='flex my-5'>
                    <span className='mr-5'><FaMapMarkerAlt /></span>
                    4374 Twin House Lane
                    Springfield, MO 65804
                </p>
                <p className='flex my-5'>
                    <span className='mr-5'><FaMobileAlt /></span>
                    4374 Twin House Lane
                    Springfield, MO 65804
                </p>
                <p className='flex my-5'>
                    <span className='mr-5'><FaWarehouse /></span>
                    4374 Twin House Lane
                    Springfield, MO 65804
                </p>
               
            </div>
            <div >
                <h5 className='font-bold footer-title mb-5'>SUBSCRIBE FOR TIPS & GUIDE</h5>
                <div className='w-full mx-auto'>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" /><br/>
                <button className="btn btn-primary mt-5">Submit</button>
                </div>
               
            </div>

        </footer>
    )
}

export default Footer