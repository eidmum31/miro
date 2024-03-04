import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/brainstorming.webp";
import hero2 from "../../assets/diagramming.webp";
import hero3 from "../../assets/research.webp";
import hero4 from "../../assets/mappings.webp";
import hero5 from "../../assets/scrum.webp";
import hero6 from "../../assets/planning.webp";
import hero7 from "../../assets/workshop.webp";
import { FaArrowRight } from "react-icons/fa";
const UseCases = () => {
  
  const brainstorming = {
    name: "Brainstorming",
    details: `Unleash creative ideas and build on them with the help of sticky
    notes, images, mind maps, videos, drawing capabilities — the list
    goes on.`,
    img: hero1,
  };
  const diagramming = {
    name: "Diagramming",
    details: `Diagramming is a visual tool used to represent information, concepts, or processes. It employs symbols, shapes, and connections to illustrate relationships and ideas.`,
    img: hero2,
  };
  const meetings = {
    name: "Meetings & Workshops",
    details: `Meetings and workshops often utilize diagramming as a collaborative tool, aiding in the visualization and organization of ideas, plans, and discussions. Through diagrams, participants can effectively communicate complex concepts, brainstorm solutions, and create actionable plans in a structured and visual manner.`,
    img: hero7,
  };
  const scrum = {
    name: "Scrum Events",
    details: `Scrum events, integral to agile project management, leverage diagramming to enhance communication and collaboration among team members. These events, including sprint planning, daily stand-ups, sprint reviews, and retrospectives, utilize diagrams like burndown charts, task boards, and process flows to track progress, identify impediments, and facilitate decision-making, fostering transparency and continuous improvement within the team.`,
    img: hero5,
  };

  const mapping = {
    name: "Mapping",
    details: `
    Mapping, whether it be concept mapping, mind mapping, or process mapping, is a powerful technique for visually representing relationships, ideas, or workflows. By organizing information spatially and hierarchically, mapping aids in understanding complex concepts, generating new ideas, and identifying patterns or gaps. It's a versatile tool used across various fields, from education and problem-solving to project management and strategic planning.`,
    img: hero4,
  };
  const research = {
    name: "Research & Design",
    details: `
    Research and design are interconnected processes that often rely on mapping techniques to organize and visualize information. Through methods like user journey mapping, personas, and affinity diagrams, researchers and designers can gain insights into user needs, preferences, and behaviors. These visual representations help guide the design process, informing decisions and iterations to create products or experiences that meet user requirements effectively.`,
    img: hero3,
  };
  const planning = {
    name: "Strategic Planning",
    details: `
    Planning is an essential aspect of any endeavor, whether it's a project, event, or personal goal. Utilizing mapping techniques such as Gantt charts, timelines, and mind maps, planners can organize tasks, set timelines, and identify dependencies. These visual representations facilitate efficient resource allocation, risk management, and communication among stakeholders, ensuring that plans are well-defined and achievable.`,
    img: hero6,
  };
  const [cases, setCases] = useState(brainstorming);
  return (
    <div className="mt-16 mb-16  mx-1 ">
      <h1 className="text-5xl text-center font-bold mb-10">
        Built for the way you work
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-7 text-center mb-5">
        <Link>
          <button
            style={{ borderRadius: "32px" }}
            className="btn btn-active mt-2"
            onClick={() => {
              setCases(brainstorming);
            }}
          >
            {" "}
            Brainstorming
          </button>
        </Link>
        <Link>
          <button
            style={{ borderRadius: "32px" }}
            className="btn mt-2"
            onClick={() => {
              setCases(diagramming);
            }}
          >
            {" "}
            Diagramming
          </button>
        </Link>
        <Link>
          <button style={{ borderRadius: "32px" }} className="btn mt-2" onClick={() => {
              setCases(meetings);
            }}>
            {" "}
            Meetings & Workshops
          </button>
        </Link>
        <Link>
          <button style={{ borderRadius: "32px" }} className="btn mt-2" onClick={() => {
              setCases(scrum);
            }}>
            {" "}
            Scrum Events
          </button>
        </Link>
        <Link>
          <button style={{ borderRadius: "32px" }} className="btn mt-2" onClick={() => {
              setCases(mapping);
            }}>
            {" "}
            Mapping
          </button>
        </Link>
        <Link>
          <button style={{ borderRadius: "32px" }} className="btn mt-2" onClick={() => {
              setCases(research);
            }}>
            {" "}
            Research & Design
          </button>
        </Link>
        <Link>
          <button style={{ borderRadius: "32px" }} className="btn mt-2" onClick={() => {
              setCases(planning);
            }}>
            {" "}
            Strategic Planning
          </button>
        </Link>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse mx-3">
          <img src={cases.img} className="lg:w-1/2 w-full rounded-lg h-[400px] " />
          <div className="lg:w-1/2 w-full lg:text-left text-center">
            <h1 className="text-5xl font-bold">{cases.name}</h1>
            <p className="py-6">
              {cases.details}
            </p>
            <Link className="link link-primary flex justify-center lg:justify-start">
              Learn More <FaArrowRight className="ms-1 mt-[6px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
