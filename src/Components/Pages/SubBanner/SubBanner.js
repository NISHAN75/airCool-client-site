import React from 'react'
import { FaClock, FaHandHoldingHeart, FaHeadSideVirus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SubBanner = () => {
    return (
        <section className='my-20'>
            <div className='subBanner-heading grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10  my-20'>
                <div className='img-area'>
                    <img src='https://images.pexels.com/photos/7861505/pexels-photo-7861505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </div>
                <div className='subBanner-info'>
                    <h5 className='text-4xl text-primary font-bold'>We Offer A Peace Of Mind Satisfaction Guarantee!</h5>
                    <p className='text-xl text-primary'>Fixit Repair family-owned and operated air conditioning and heating company established in Ahmedabad in 1958.</p>
                    <div class="card-actions items-center mx-auto">
                        <Link to="/about"><button class="btn btn-primary">About us</button></Link>
                    </div>
                </div>
            </div>

            <div className='sub-info'>
                <div className='sub-heading'>
                    <h5 className='text-4xl font-bold text-primary text-center'>Why’re We Difference</h5>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20 mx-10">
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Professionalism
                            </h2>
                            <p className='text-primary text-xl mb-5' >Nullam sapien mauris, placerat vitae sem vitae, efficitur venenatis lorem ipsum dolrhoncus hendrerit.</p>
                            <p className='text-primary text-xl mb-10'>
                                + 1 800 -123-4567

                                info@fixitrepairahed.com
                            </p>
                         
                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Professionalism
                            </h2>
                            <p className='text-primary text-xl mb-5' >Nullam sapien mauris, placerat vitae sem vitae, efficitur venenatis lorem ipsum dolrhoncus hendrerit.</p>
                            <p className='text-primary text-xl mb-10'>
                                + 1 800 -123-4567

                                info@fixitrepairahed.com
                            </p>
                         
                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Professionalism
                            </h2>
                            <p className='text-primary text-xl mb-5' >Nullam sapien mauris, placerat vitae sem vitae, efficitur venenatis lorem ipsum dolrhoncus hendrerit.</p>
                            <p className='text-primary text-xl mb-10'>
                                + 1 800 -123-4567

                                info@fixitrepairahed.com
                            </p>
                         
                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Professionalism
                            </h2>
                            <p className='text-primary text-xl mb-5' >Nullam sapien mauris, placerat vitae sem vitae, efficitur venenatis lorem ipsum dolrhoncus hendrerit.</p>
                            <p className='text-primary text-xl mb-10'>
                                + 1 800 -123-4567

                                info@fixitrepairahed.com
                            </p>
                         
                        </div>

                    </div>
                   

                </div>
            </div>

        </section>
    )
}

export default SubBanner;