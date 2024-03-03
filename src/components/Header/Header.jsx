import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
const Header = () => {
  const option1 = (
    <>
      <li className="font-semibold">
        <Link>Product</Link>
      </li>
      <li className="font-semibold">
        <Link>Solutions</Link>
      </li>
      <li className="font-semibold">
        <Link>Resources</Link>
      </li>
      <li className="font-semibold">
        <Link>Enterprize</Link>
      </li>
      <li className="font-semibold">
        <Link>Pricing</Link>
      </li>
    </>
  );
  const option2 = (
    <>
      <li className="font-semibold">
        <Link><TfiWorld />EN</Link>
      </li>
      <li className="font-semibold">
        <Link>Contact Sales</Link>
      </li>
      <li className="font-semibold">
        <Link>Login</Link>
      </li>
      <li>
      <button style={{ borderRadius: "24px" }} className="btn btn-primary mt-2 md:mt-0">
          Sign Up Free <FaArrowRight />
      </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {option1}{option2}
          </ul>
        </div>
        <p className="text-3xl font-bold my-auto mt-1">miro</p>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1 my-auto">{option1}</ul>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 my-auto">{option2}</ul>
        
      </div>
    </div>
  );
};

export default Header;
