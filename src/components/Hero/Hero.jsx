import React from "react";
import { FaArrowRight } from "react-icons/fa";
import hero from "../../assets/hero_img.png";
const Hero = () => {
  return (
    <div className="hero mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={hero}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="lg:me-5">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
