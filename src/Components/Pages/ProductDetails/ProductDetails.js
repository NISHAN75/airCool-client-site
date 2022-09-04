import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetails.css'


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = async (data) => {
    const presentQuantity = parseInt(data.quantity);
    const availableQuantity = parseInt(part.available);
    const minimumQuantity = parseInt(part.minimum);
    const inputQuantity = parseInt(data.quantity);
    const totalPrice = inputQuantity * presentQuantity;
    if (minimumQuantity > inputQuantity) {
      return alert("Please Enter minimum Order");
    } else if (availableQuantity < inputQuantity) {
      return alert("You Have no Parts You want please enter valid Quantity");
    } else if (
      availableQuantity > inputQuantity ||
      minimumQuantity < inputQuantity
    ) {
      const orders = {
        partId: part._id,
        partName: part.name,
        quantity: data.quantity,
        user: user?.displayName,
        userEmail: user?.email,
        userPhone: data.phone,
        pay: totalPrice,
      };
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            toast.success(
              <p className="text-green-500">{`congratulations! Your ${part.name} parts Order Successfully`}</p>
            );
            navigate('/')
          } else {
            toast.error(
              <p className="text-red-700">{`This Order already declare!! 
              check  My Order page search parts field ${part.name} .Please Try another?`}</p>
            );
          }
        });
    }
    const PartQuantity = parseInt(part.quantity);
    const inputFiledQuantity = parseInt(data.quantity);
    const newAvailableQuantity = PartQuantity - inputFiledQuantity;
    console.log(newAvailableQuantity);
    reset();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  px-20 gap-10 justify-center my-20">
      <div className="card card-compact w-max-lg w-full  text-left shadow-xl flex">
        <figure>
          <img src={part.img} alt="parts img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-10">
            <span className="text-primary font-bold text-xl mr-3">
              Part name:
            </span>
            <span className="font-bold text-primary">{part.name}</span>
          </h2>
          <div className="leading-[15px]">
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 font-bold text-primary">minimum Order:</span>
            <span className="font-bold text-primary" >{part.minimum}</span>
          </p>
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 font-bold text-primary">Available:</span>
            <span className="font-bold text-primary">{part.available}</span>
          </p>
          <p className="text-zinc font-bold">
            <span className="text-xl mr-3 font-bold text-primary">Price:</span>
            <span className="font-bold text-primary">${part.price}</span>
          </p>
          </div>
        </div>
      </div>
      <div className="card card-compact w-max-lg h-auto w-full  shadow-xl flex">
        <div className="card-body items-center">
          <h2 className="card-title text-primary justify-center font-bold">
            Enter Your information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-80 max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                disabled
                placeholder="Enter Your Name"
                className="input input-bordered w-full font-bold text-black"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-80 max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                readOnly
                disabled
                placeholder="Enter Your Email"
                className="input input-bordered w-full font-bold text-black"
              />
            </div>
            <div className="form-control w-80 max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="phone"
                placeholder="Enter Your phone"
                className="input input-bordered w-full text-black"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-80 max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-full text-black"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-80 max-w-xs">
              <label className="label">
                <span className="label-text">Enter Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter Your Quantity"
                className="input input-bordered w-full text-black"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity Required",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
              type="submit"
              value="Confirm Booking"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;