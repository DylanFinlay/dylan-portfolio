import React from "react";
import programming2 from "../assets/programming2.jpg";
import robocup from "../assets/robocup_robot.png";
import warg from "../assets/warg_drone.jpg";

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
                      Software Developer Intern || Solace
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Sept 2024 - present
                    </time>
                    <p className="mt-3">
                      I am excited to be starting my next co-op term at Solace,
                      working with the Cloud Integration team. I will be
                      focusing on developing and maintaining the Solace Cloud
                      platform, as well as working on various projects to
                      enhance the user experience and functionality of the
                      platform.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Software Developer Intern || Solace
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jan 2024 - Apr 2024
                    </time>
                    <p className="mt-3">
                      Focused on enhancing back-end infrastructure for testing
                      tools, particularly supporting Solace's EDA messaging
                      solution. Leveraging my proficiency in Python, C, and bash
                      scripting, I contributed to optimizing efficiency and
                      functionality during my term.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-7">
                    <h3 className="text-xl font-semibold tracki">
                      Software Engineering Intern || Shyftlabs
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      May 2023 - Aug 2023
                    </time>
                    <p className="mt-3">
                      Designed, implemented and deployed the REST API for a
                      robust python web scraper empowering developers to
                      effortlessly extract open graph tags from diverse
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* First Timeline Ends here */}
        <div className="p-12">
          <p className="text-4xl font-italic inline border-b-4 text-gray-300 border-pink-600">
            Design Teams
          </p>
        </div>
        <section className="shadow-xl shadow-[#040c16] text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 space-y-12 sm:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-8">
                    <h3 className="text-xl font-semibold tracki">
                      Co-Founder & Software/AI Team Lead || UW RoboSoccer
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Aug 2024 - present
                    </time>
                    <p className="mt-3">
                      Co-Founder of Waterloo's newest SDC design team. Our group
                      aims to compete in the global RoboCup competition, where
                      we will present a group of humanoid robots to autonomously
                      compete in 4v4 soccer matches. The Software/ML/AI Team is
                      responsible for developing the algorithms that drive our
                      humanoid robots. This includes computer vision for
                      recognizing the ball and opponents, decision-making
                      algorithms for strategic play, and machine learning models
                      to improve robot performance over time.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-pink-600"></div>
                  </div>
                  <div className="col-span-8">
                    <h3 className="text-xl font-semibold tracki">
                      Autonomous Airside Project Manager || WARG
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Sept 2023 - Sept 2024
                    </time>
                    <p className="mt-3">
                      A project manager in the Waterloo Aerial Robotics Group
                      design team, leading the team in charge of writing code
                      for the autonomous flight of WARG's custom drone. My focus
                      revolves around Python software development for drone
                      autonomy. This encompasses computer vision code, path
                      planning, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-right mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 sm:before:ml-auto before:bg-pink-600">
                  <h3 className="text-2xl font-semibold">
                    Design Team Experience
                  </h3>
                  <div className="flex pt-6 justify-center sm:justify-end">
                    <img
                      className="w-auto h-auto max-h-[200px] object-cover shadow-sm shadow-pink-600"
                      src={robocup}
                      alt="Programming Pic"
                    />
                  </div>
                  <div className="flex pt-6 justify-center sm:justify-end">
                    <img
                      className="w-auto h-auto max-h-[200px] object-cover shadow-sm shadow-pink-600"
                      src={warg}
                      alt="Programming Pic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline ends here */}
      </div>
    </div>
  );
};

export default Experience;
