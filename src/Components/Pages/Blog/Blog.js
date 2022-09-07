import React from 'react'

const Blog = () => {
    return (
        <section className='my-20'>
            <h5 className='text-4xl font-bold text-primary text-center my-10'>Welcome Our Blogs</h5>
            <div className='main-blog grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-20 mx-10'>
                <div className='blog-caption'>
                    <div>
                        <img src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <h5 className='text-4xl font-bold text-primary my-5'>Repair or Replace Air Conditioning Services</h5>
                    <p className=' font-bold text-primary my-3'>By Admin / in air conditioning</p>
                    <p className='text-primary my-5'>Nunc cursus leo risus non ac efficitur vel sed Mauris iaculis finibus ex et viverra. Aliquam blandit ornare justo, in sagittis sem ornare sit amet. Cras posuere vel ex at vulputate. Praesent volutpat consequat urna lorem ipsuget sagittis.condimentum dictum urna id volutpat vivamus auctor magna eu velit suscipit…</p>
                    <button className='btn btn-primary'>Read More...</button>
                </div>
                <div className='blog-card'>
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

export default Blog