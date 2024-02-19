import React from "react";
import programming2 from "../assets/programming2.jpg";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen py-12 flex items-center text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1500px] mx-auto xl:px-40 lg:px-20 md:px-12 sm:px-8 px-4 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6">
            // A little look at my past experience in the field
          </p>
        </div>
        {/* Timeline Starts below this */}
        <section className="shadow-xl shadow-[#040c16] text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-pink-600">
                  <h3 className="text-3xl font-semibold">Dylan Finlay</h3>
                  <span className="text-sm font-bold tracki uppercase text-gray-400">
                    Professional Experience
                  </span>
                  <div className="flex pt-6 justify-center sm:justify-start">
                    <img
                      className="w-auto h-auto max-h-[200px] object-cover shadow-sm shadow-pink-600"
                      src={programming2}
                      alt="Programming Pic"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 space-y-12 sm:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Software Developer
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jan 2024 - Present
                    </time>
                    <p className="mt-3">
                      Currently working at Solace Corporation as a Software
                      Developer for my Winter Co-Op term. Focused on advancing
                      the back end infrastructure for the team's testing tools,
                      to support the EDA messaging solution that Solace offers.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Autonomous Path Planner
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Sept 2023 - present
                    </time>
                    <p className="mt-3">
                      A key contributor in the Waterloo Aerial Robotics Group
                      design team, writing code for the autonomous flight of the
                      team's hand-made drone. My focus revolves around Python
                      software development for drone autonomy. This encompasses
                      computer vision code, path planning, and more.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Web Application Developer
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      May 2023 - august 2023
                    </time>
                    <p className="mt-3">
                      Working with manulife insurance company through the
                      Waterloo Experience (WE) Accelerate Co-Op program.
                      Designed, implemented and deployed the REST API for a
                      robust python web scraper empowering developers to
                      effortlessly extract open graph tags from diverse
                      websites.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Versatile Workforce
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Mar 2020 - august 2022
                    </time>
                    <p className="mt-3">
                      Beyond my expertise directly in the field, I also spent
                      many years building work ethic in high school and summer
                      jobs. Over 2 years working as a grocery clerk through the
                      pandemic, as well as a year working various positions at
                      an obstacle training gym.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline ends at the above div */}
      </div>
    </div>
  );
};

export default Experience;
