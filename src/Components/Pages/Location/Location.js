import React from 'react'
import { FaClock, FaHandHoldingHeart, FaHeadSideVirus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Location = () => {
    return (
        <section className='my-20'>
            <div className='card-heading text-center'>
                <h3 className='text-4xl text-primary font-bold mb-5'>Our angence locations</h3>
                <p className='text-primary mx-28 text-xl'>Serving Chattogram and the surrounding areas with exceptional home comfort services:</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 mx-10">
                <div class="card w-full bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
               data-aos-offset="300"
               data-aos-delay="150"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false" 
                >
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-primary font-bold mb-10">Agrabad
                        </h2>
                        <p ><address className='text-primary text-xl mb-5'>4374 Twin House Lane
                            Springfield,
                            MO 65804</address></p>
                        <p className='text-primary text-xl mb-10'>
                            + 1 800 -123-4567

                            info@fixitrepairahed.com
                        </p>
                        <div class="card-actions items-center mx-auto">
                            <Link to="/contact"><button class="btn btn-primary">Contact</button></Link>
                        </div>
                    </div>

                </div>
                <div class="card w-full bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
               data-aos-offset="300"
               data-aos-delay="150"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false" 
               >
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-primary font-bold mb-10">Halishahar
                        </h2>
                        <p ><address className='text-primary text-xl mb-5'>4374 Twin House Lane
                            1314 Radford Street
                            Bloomfield,
                            KY 40008</address></p>
                        <p className='text-primary text-xl mb-10'>
                            + 1 800 -123-4567

                            info@fixitrepairranip.com
                        </p>
                        <div class="card-actions items-center mx-auto">
                            <Link to="/contact"><button class="btn btn-primary">Contact</button></Link>
                        </div>
                    </div>

                </div>
                <div class="card w-full bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
               data-aos-offset="300"
               data-aos-delay="150"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false" 
               >
                    <div class="card-body">
                        <h2 class="card-title text-2xl text-primary font-bold mb-10">Potenga
                        </h2>
                        <p ><address className='text-primary text-xl mb-5'>4726 Rainbow Drive
                            Northfield,
                            OH 44067</address></p>
                        <p className='text-primary text-xl mb-10'>
                            + 1 800 -123-4567

                            info@fixitrepair.com
                        </p>
                        <div class="card-actions items-center mx-auto">
                            <Link to="/contact"><button class="btn btn-primary">Contact</button></Link>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Location;