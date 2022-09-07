import React from 'react'
import SubBanner from '../SubBanner/SubBanner'

const About = () => {
    return (
        <section className='my-20'>
            <div className='mx-20 text-center'>
                <h3 className='text-4xl font-bold mb-10 text-primary'> Most Trusted AC & Heating Company</h3>
                <p className='text-xl text-primary'>Service Experts Heating & Air Conditioning is committed to performing expert quality AC repair, maintenance and installation throughout your city.

                </p>
                <p className='text-xl text-primary mt-5 font-bold'> Call 1-800-123-456 anytime & 100% satisfaction guaranteed!</p>

            </div>
            <div className='about-card'>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20 mx-10">
                    <div class="card w-full bg-base-100 shadow-xl"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                   data-aos-offset="300"
                   data-aos-delay="150"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true"
                   data-aos-once="false" >
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Fixit address
                            </h2>
                            <p className='text-primary text-xl mb-5' >4374 Twin House Lane Springfield, MO 65804</p>
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
                   data-aos-once="false" >
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Phone numbers
                            </h2>
                            <p className='text-primary text-xl mb-5' >
                                + 1 800 -123-2145 
                            </p>
                            <p className='text-primary text-xl mb-5' >
                                + 1 800 -123-4567
                            </p>
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
                   data-aos-once="false" >
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Email address
                            </h2>
                            <p className='text-primary text-xl mb-5' >
                                info@fixitrepairahed.com
                                info@fixitrepairahed.com
                            </p>


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
                   data-aos-once="false" >
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">avlabile:
                            </h2>
                            <p className='text-primary text-xl mb-5' >
                                Mon - Fri: 9:00am - 8:00pm
                                Saturday: 10:00am - 5:00pm
                                Sunday: 10:00am - 2:00pm
                            </p>

                        </div>

                    </div>


                </div>
            </div>
            <SubBanner></SubBanner>
        </section>
    )
}

export default About