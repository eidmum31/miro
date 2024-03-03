import React from "react";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import hero from "../../assets/hero_img.png";
const Hero = () => {
  return (
    <div className="hero mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="lg:me-5 text-center lg:text-left mt-5 ms-3 ">
          <h1 className="text-5xl font-bold">Take ideas from better to best</h1>
          <p className="py-6 mt-2">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <input
            style={{ borderRadius: "32px" }}
            type="text"
            placeholder="Enter Your Work Email"
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <br></br>
          <button
            style={{ borderRadius: "32px" }}
            className="btn btn-primary w-full max-w-xs mt-2"
          >
            {" "}
            Sign Up Free <FaArrowRight />
          </button>
          <p className="mt-1 ms-1 text-slate-600">
            <small>Collaborate with your team within minutes</small>
          </p>
          <div className="flex bg-[#F5F5F7]  p-4 justify-around mt-8 mb-5">
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>Based on 5149+ reviews:</p>
            </div>
            <FaGoogle className="mt-1 text-xl" />
            <p className="font-bold">GetApp</p>
            <p className="font-bold">Captera</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
