import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "../../assets/hero_img2.png";
const Hero2 = () => {
  return (
    <div className="hero mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left w-full lg:w-1/2 mt-5 ms-3">
          <h1 className="text-5xl font-bold">
            Work together, wherever you work
          </h1>
          <p className="py-6">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>

          
            <Link className="link link-primary flex justify-center lg:justify-start">
              Learn More <FaArrowRight className="ms-1 mt-[6px]" />
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero2;
