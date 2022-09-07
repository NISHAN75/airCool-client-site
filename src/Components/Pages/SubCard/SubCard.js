import React from 'react'
import { FaClock, FaHandHoldingHeart, FaHeadSideVirus } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const SubCard = () => {
    return (
        <section className='my-20'>
            <div className='card-heading text-center' >
                <h3 className='text-4xl text-primary font-bold mb-5'>Most Trusted AC & Heating Company</h3>
                <p className='text-primary mx-28 text-xl'>Fixit Repair family-owned and operated air conditioning and heating company established in Ahmedabad in 1958. We know our existence depends on you that support us and we want to Thank You! The highest compliment we receive is the trust in your referral and we truly appreciate your support!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 mx-10">
                <div class="card w-full bg-base-100 shadow-xl " data-aos="fade-right" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <div class="card-body bg-primary ">
                        <span><FaClock className='text-white text-6xl mb-5 w-full mx-auto'></FaClock></span>
                        <h2 class="card-title text-2xl text-white font-bold">Open 24/7 - Available</h2>
                        <p className='text-white text-xl'>Emergency repair services 24 hours a day, seven days a week. Fixit all time ready to repair & supportive.</p>
                    </div>

                </div>
                <div class="card w-full bg-base-100 shadow-xl" data-aos="fade-up" data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <div class="card-body bg-primary " >
                        <span><FaHandHoldingHeart className='text-white text-6xl mb-5 w-full mx-auto'></FaHandHoldingHeart></span>
                        <h2 class="card-title text-2xl text-white font-bold">Satisfaction Guaranteed</h2>
                        <p className='text-white text-xl'>Service Fixit offers 100% satisfaction guarantees on all Air-conditioner & Heating services.</p>
                    </div>

                </div>
                <div class="card w-full bg-base-100 shadow-xl" 
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="150"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false" >
                    <div class="card-body bg-primary " >
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