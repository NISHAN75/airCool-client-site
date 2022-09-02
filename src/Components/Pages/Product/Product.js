import React from 'react';
import { Link } from 'react-router-dom';




const Product = ({ product }) => {
    const {name,img,price,description,minimum,quantity,_id}=product


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title font-bold text-primary">Name: <span className='ml-2 text-primary font-bold'>{name}</span></h2>
                <p className='text-primary '>{description}</p>
                <div className='text-left mb-3'>
                <p className='text-primary font-bold'>Price: <span className='ml-2 text-primary font-bold'>${price}</span></p>
                <p className='text-primary font-bold'>Minimum Order: <span className='ml-2 text-primary font-bold'>{minimum}</span></p>
                <p className='text-primary font-bold'>Quantity: <span className='ml-2 text-primary font-bold'>{quantity}</span></p>
                </div>
                <div class="card-actions items-center mx-auto">
                    <Link to={`/products/${_id}`}><button class="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;