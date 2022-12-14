import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";


const Inventory = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const url="http://localhost:5000/products";
    axios.get(url)
  .then(function (response) {
    // handle success
    const {data} = response;
    setProducts(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    
  }, []);
  

  return (
    <div className="my-20 mx-20" >
      <h2 className="text-center font-bold text-4xl text-primary my-10">
        {" "}
        Our Products
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <div className="m-btn-area w-50 mx-auto text-center mt-10">
        <button className="btn btn-primary text-white my-5 hover:bg-white hover:text-primary">
          <Link to="/manage">All Products</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Inventory;