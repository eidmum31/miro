import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <div className="mt-16 mb-16">
      <h1 className="w-1/3 mx-auto  text-5xl text-center font-bold ">
        Collaborate without constraints
      </h1>
      <div className="lg:flex mt-10 mx-14">
        <div className="me-3 ">
          <h3 className="text-xl font-bold">Free forever</h3>
          <p className="mt-5 text-slate-500">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our{" "}
            <span className="text-primary">pricing plans</span> for more
            features.
          </p>
        </div>
        <div className="me-3 mt-8 lg:mt-0">
          <h3 className="text-xl font-bold">Easy integrations</h3>
          <p className="mt-5 text-slate-500">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our <span className="text-primary">Marketplace</span> .
          </p>
        </div>
        <div className="me-3 mt-8 lg:mt-0">
          <h3 className="text-xl font-bold">Security first</h3>
          <p className="mt-5 text-slate-500">
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our{" "}
            <span className="text-primary">Trust Center</span> .
          </p>
        </div>
      </div>
      <div className="text-center mt-10 mb-10">
        <button
          style={{ borderRadius: "24px" }}
          className="btn btn-primary mx-atuo"
        >
          Sign Up Free <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Features;
