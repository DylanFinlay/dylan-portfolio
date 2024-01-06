import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Headshot from "../assets/Headshot1.JPG";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-2">
          <div className="col-span-2">
            <p className="text-xl text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Dylan Finlay
            </h1>
            <h2 className="text-4xl sm:text:7xl font-bold text-[#8892b0]">
              I'm a UW Mechatronics Engineering student.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I'm a 2nd year Mechatronics Engineering student at the University
              of Waterloo. I created this website with React.JS and Tailwind CSS
              to use as my personal portfolio. Currently enrolled in my 2A term,
              I spend my time studying and working on projects to explore the
              world of software, machine learning and robotics. As a co-op
              student, I am actively seeking connections for future
              opportunities, so please reach out!
            </p>
            <div>
              <Link to="projects" smooth={true} offset={-80} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>{" "}
            </div>
          </div>
          <div className="p-4 flex justify-center items-center col-span-1">
            <img
              className="w-auto h-auto max-h-[400px] object-cover shadow-lg shadow-pink-600"
              src={Headshot}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
