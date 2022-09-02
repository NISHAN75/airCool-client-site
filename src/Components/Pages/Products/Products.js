import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {

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
    <div className="mx-20 " >
      <h2 className="text-center font-bold text-4xl text-primary my-10">
        {" "}
        Our Products
      </h2>
      <div className="grid lg:grid-cols-3 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <div className="m-btn-area w-50 mx-auto text-center mt-5">
        <button className="btn btn-primary text-white my-5 hover:bg-white hover:text-primary">
          <Link to="/manage">Manage Items</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Products;