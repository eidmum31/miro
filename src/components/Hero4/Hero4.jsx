import React from "react";
import hero from "../../assets/hero_img4.png";
import { FaArrowRight } from "react-icons/fa";
const Hero4 = () => {
  return (
    <div className="mb-8">
      <div
        className="hero h-[200px]  lg:h-[550px] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content hidden lg:block ms-[600px] text-center">
          <div className="max-w-md text-black">
            <h1 className="mb-5 text-5xl font-bold">The Ways We Work</h1>
            <p className="mb-5">How has our relationship with work changed?</p>
            <button
              style={{ borderRadius: "32px" }}
              className="btn btn-primary w-full max-w-xs mt-2"
            >
              {" "}
              View the report <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="hero-content text-neutral-content block lg:hidden">
        <div className="max-w-md text-black mx-auto text-center">
          <h1 className="mb-5 text-5xl font-bold">The Ways We Work</h1>
          <p className="mb-5">How has our relationship with work changed?</p>
          <button
            style={{ borderRadius: "32px" }}
            className="btn btn-primary w-full max-w-xs mt-2"
          >
            {" "}
            View the report <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
