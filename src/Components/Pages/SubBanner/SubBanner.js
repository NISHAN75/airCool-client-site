import React from 'react'
import { FaClock, FaHandHoldingHeart, FaHeadSideVirus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SubBanner = () => {
    return (
        <section className='my-20 bg-[#F6F6F6] py-10 px-10'>
            <div className='subBanner-heading grid lg:grid-cols-2 md:grid-cols-2 gap-10  my-20 lg:mx-10 items-center justify-center'>
                <div className='img-area'>
                    <img src='https://images.pexels.com/photos/7861505/pexels-photo-7861505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-3/4 h-auto'></img>
                </div>
                <div className='subBanner-info'>
                    <h5 className='text-4xl text-primary font-bold mb-10'>We Offer A Peace Of Mind Satisfaction Guarantee!</h5>
                    <p className='text-xl text-primary mb-5'>Fixit Repair family-owned and operated air conditioning and heating company established in Ahmedabad in 1958.</p>
                    <div class="card-actions items-center mx-auto">
                        <Link to="/about"><button class="btn btn-primary text-white">About us</button></Link>
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

                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Integrity
                            </h2>
                            <p className='text-primary text-xl mb-5' >Vivamus varius, quam non accumsan convallui lorem variusenismod ex at ultriere sapien.</p>


                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Guaranteed 
                            </h2>
                            <p className='text-primary text-xl mb-5' >Praesent tempus ligula lorem, non dapibus lectus vulputum blandit tblac rhoncus hendrerit..</p>


                        </div>

                    </div>
                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-primary font-bold mb-10">Achieventment
                            </h2>
                            <p className='text-primary text-xl mb-5' >Fusce sit amet aliquam augue, et lorem suscipit mi. Cras lobortis lorem non tuperdiet enc sem id metus..</p>

                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default SubBanner;