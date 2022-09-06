import React from "react";
import {
  FaFlag,
  FaDesktop,
  FaPeopleCarry,
  FaHandSparkles,
} from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <section className="my-24 px-10">
      <h2 className="text-5xl text-center font-bold text-primary uppercase">
        millions business trust us
      </h2>
      <p className="text-2xl text-center font-bold text-primary mt-5">
        try to understand user experctation{" "}
      </p>

      <div className="summary-card grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20 mb-20">
        <div className="card  bg-primary shadow-lg">
          <figure className="px-10 pt-10 ">
            <FaFlag className="text-primary text-6xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-4xl">72</h2>
            <p className="text-3xl font-bold text-white">countries </p>
          </div>
        </div>
        <div className="card  bg-primary shadow-lg ">
          <figure className="px-10 pt-10">
            <FaDesktop className="text-white text-6xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-4xl">535+</h2>
            <p className="text-3xl font-bold text-white">complete projects+</p>
          </div>
        </div>
        <div className="card  bg-primary shadow-lg">
          <figure className="px-10 pt-10">
            <FaPeopleCarry className="text-white text-6xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-4xl">230+</h2>
            <p className="text-3xl font-bold text-white">happy clients+ </p>
          </div>
        </div>
        <div className="card  bg-primary shadow-lg">
          <figure className="px-10 pt-10">
            <FaHandSparkles className="text-white text-6xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white text-4xl">432+</h2>
            <p className="text-3xl font-bold text-white">feedbacks+ </p>
          </div>
        </div>
      </div>

      <div className="q-area grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 shadow-xl  mt-5 gap-10">
        <div className="q-area p-5">
          <h2 className="text-xl lg:text-4xl font-bold text-primary mb-5">
            Have any question about us or get a products request ?
          </h2>
          <p className="text-2xl text-secondary">
            Don't hesitate to contact us
          </p>
        </div>
        <div className="q-btn flex  flex-col gap-5 p-5 lg:justify-evenly items-center">
          <button className="btn btn-primary px-20 text-white hover:bg-white hover:text-black">
            Don't hesitate to
          </button>
          <button className="btn btn-secondary px-10 text-white hover:bg-white hover:text-black">
            contact us{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;