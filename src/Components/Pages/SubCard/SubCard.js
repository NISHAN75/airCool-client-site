import React from 'react'
import { FaClock ,FaHandHoldingHeart ,FaHeadSideVirus} from "react-icons/fa";

const SubCard = () => {
    return (
        <section className='my-20'>
            <div className='card-heading text-center'>
                <h3 className='text-4xl text-primary font-bold mb-5'>Most Trusted AC & Heating Company</h3>
                <p className='text-primary mx-28 text-xl'>Fixit Repair family-owned and operated air conditioning and heating company established in Ahmedabad in 1958. We know our existence depends on you that support us and we want to Thank You! The highest compliment we receive is the trust in your referral and we truly appreciate your support!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 mx-10">
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body bg-primary ">
                        <span><FaClock className='text-white text-6xl mb-5 w-full mx-auto'></FaClock></span>
                        <h2 class="card-title text-2xl text-white font-bold">Open 24/7 - Available</h2>
                        <p className='text-white text-xl'>Emergency repair services 24 hours a day, seven days a week. Fixit all time ready to repair & supportive.</p>
                    </div>
                   
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body bg-primary ">
                        <span><FaHandHoldingHeart className='text-white text-6xl mb-5 w-full mx-auto'></FaHandHoldingHeart></span>
                        <h2 class="card-title text-2xl text-white font-bold">Satisfaction Guaranteed</h2>
                        <p className='text-white text-xl'>Service Fixit offers 100% satisfaction guarantees on all Air-conditioner & Heating services.</p>
                    </div>
                   
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <div class="card-body bg-primary ">
                        <span><FaHeadSideVirus className='text-white text-6xl mb-5 w-full mx-auto'></FaHeadSideVirus></span>
                        <h2 class="card-title text-2xl text-white font-bold">Professionally Technicians</h2>
                        <p className='text-white text-xl'>Our technicians have your safety, welfare and comfort in mind at all times. they are certified and experienced.</p>
                    </div>
                   
                </div>
            </div>

        </section>
    )
}

export default SubCard