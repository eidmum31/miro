import React from "react";
import {
  SiAppletv,
  SiCisco,
  SiTsnode,
  SiVolvo,
  SiWalmart,
} from "react-icons/si";
const Companies = () => {
  return (
    <div className="mt-14 mb-10">
      <h1
        className="text-center text-slate-400 "
      >
        Trusted by 45M+ users
      </h1>
      <div className="md:flex lg:justify-around mt-10">
        <SiWalmart className="text-8xl mx-auto lg:mx-0" />
        <SiCisco className="text-8xl mx-auto lg:mx-0 mb-5" />
        <SiVolvo className="text-8xl mx-auto lg:mx-0 mb-5" />
        <SiAppletv className="text-8xl mx-auto lg:mx-0 mb-5" />
        <SiTsnode className="text-8xl mx-auto lg:mx-0 mb-5" />
      </div>
    </div>
  );
};

export default Companies;
