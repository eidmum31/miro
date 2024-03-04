import React from "react";
import hero from "../../assets/hero_img3.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Hero3 = () => {
  return (
    <div className="hero mt-16 mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src={hero} className="w-full lg:w-1/2 rounded-lg me-3" />
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-5 ">
          <h1 className="text-5xl font-bold">
            Connect your tools, close your tabs
          </h1>
          <p className="py-6">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <Link className="link link-primary flex justify-center lg:justify-start">
            Learn More <FaArrowRight className="ms-1 mt-[6px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
