import React from 'react'
import { FaClock, FaHandHoldingHeart, FaHeadSideVirus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAccessibleIcon, FaPhoenixFramework, FaHubspot, FaStumbleupon } from "react-icons/fa";

const SubBanner = () => {
    return (
        <section className='my-20 bg-[#F6F6F6] py-10 px-10'>
            <div className='subBanner-heading grid lg:grid-cols-2 md:grid-cols-2 gap-10  my-20 lg:mx-10 items-center justify-center'>
                <div className='img-area'
                    data-aos="zoom-out-up"
                    data-aos-offset="300"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <img src='https://images.pexels.com/photos/7861505/pexels-photo-7861505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-auto'></img>
                </div>
                <div className='subBanner-info'
                    data-aos="zoom-out-down"
                    data-aos-offset="300"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <h5 className='text-4xl text-primary font-bold mb-10'>We Offer A Peace Of Mind Satisfaction Guarantee!</h5>
                    <p className='text-xl text-primary mb-5'>Fixit Repair family-owned and operated air conditioning and heating company established in Ahmedabad in 1958.</p>
                    <div className="card-actions items-center mx-auto">
                        <Link to="/about"><button className="btn btn-primary text-white">About us</button></Link>
                    </div>
                </div>
            </div>

            <div className='sub-info'>
                <div className='sub-heading'>
                    <h5 className='text-4xl font-bold text-primary text-center'>Why’re We Difference</h5>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20 mx-10">
                    <div className="card w-full bg-primary shadow-xl"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className="card-body">
                            <span><FaAccessibleIcon className='text-primary text-5xl w-full mx-auto'></FaAccessibleIcon></span>
                            <h2 className="card-title text-2xl text-white font-bold my-5">Professionalism
                            </h2>
                            <p className='text-white text-xl mb-5' >Nullam sapien mauris, placerat vitae sem vitae, efficitur venenatis lorem ipsum dolrhoncus hendrerit.</p>

                        </div>

                    </div>
                    <div className="card w-full bg-primary shadow-xl"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className="card-body">
                            <span><FaPhoenixFramework className='text-primary text-5xl w-full mx-auto'></FaPhoenixFramework></span>
                            <h2 className="card-title text-2xl text-white font-bold  my-5">Integrity
                            </h2>
                            <p className='text-white text-xl mb-5' >Vivamus varius, quam non accumsan convallui lorem variusenismod ex at ultriere sapien.</p>


                        </div>

                    </div>
                    <div className="card w-full bg-primary shadow-xl"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className="card-body">
                            <span><FaHubspot className='text-primary text-5xl w-full mx-auto'></FaHubspot></span>
                            <h2 className="card-title text-2xl text-white font-bold my-5">Guaranteed
                            </h2>
                            <p className='text-white text-xl mb-5' >Praesent tempus ligula lorem, non dapibus lectus vulputum blandit tblac rhoncus hendrerit..</p>


                        </div>

                    </div>
                    <div className="card w-full bg-primary shadow-xl"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className="card-body">
                            <span><FaStumbleupon className='text-primary text-5xl w-full mx-auto'></FaStumbleupon></span>
                            <h2 className="card-title text-2xl text-white font-bold my-5">Achieventment
                            </h2>
                            <p className='text-white text-xl mb-5' >Fusce sit amet aliquam augue, et lorem suscipit mi. Cras lobortis lorem non tuperdiet enc sem id metus..</p>

                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default SubBanner;