import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const products = {
      available: data.available,
      minimum: data.minimum,
      description: data.description,
      img: data.img,
      name: data.name,
      price: data.price,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Products added Successfully!");
      });
    reset();
  };
  return (
    <section>
      <h2 className="text-primary font-bold text-2xl text-center mt-5">
        Add a Product
      </h2>
      <div className="flex h-3/4 justify-center items-center mt-10 mb-20">
        <form className="px-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full text-black"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Required",
                },
              })}
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
              <span className="label-text">description</span>
            </label>
            <textarea
              type="text"
              placeholder="Enter Your Comment"
              className="input input-bordered w-full text-black"
              {...register("description", {
                required: {
                  value: true,
                  message: "description Required",
                },
              })}
            />
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your minimum"
              className="input input-bordered w-full text-black"
              {...register("price", {
                required: {
                  value: true,
                  message: "price Required",
                },
                max: {
                  value: 50,
                  message: "Enter price  digit $50 than less", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
              {errors.price?.type === "max" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">minimum order</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your minimum"
              className="input input-bordered w-full text-black"
              {...register("minimum", {
                required: {
                  value: true,
                  message: "minimum Required",
                },
                min: {
                  value: 100,
                  message: "Enter minimum digit 100 than more", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.minimum?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimum.message}
                </span>
              )}
              {errors.minimum?.type === "min" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimum.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">available order</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your available"
              className="input input-bordered w-full text-black"
              {...register("available", {
                required: {
                  value: true,
                  message: "available Required",
                },
                max: {
                  value: 5000,
                  message: "Enter 5000 less than digit",
                },
              })}
            />
            <label className="label">
              {errors.available?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.available.message}
                </span>
              )}
              {errors.available?.type === "max" && (
                <span className="label-text-alt text-red-500">
                  {errors.available.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-80 max-w-xs">
            <label className="label">
              <span className="label-text">Your img url</span>
            </label>
            <input
              type="text"
              placeholder="Enter photo url"
              className="input input-bordered w-full text-black"
              {...register("img", {
                required: {
                  value: true,
                  message: "Url Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn my-3 btn-primary px-10 w-full max-w-xs  text-white hover:bg-white hover:text-black"
            type="submit"
            value="Add a Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;