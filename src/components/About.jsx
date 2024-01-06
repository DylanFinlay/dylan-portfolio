import React from "react";
import DoubleRobot from "../assets/DoubleRobot.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-2">
          <div className="p-4 flex justify-center items-center col-span-1">
            <img
              className="w-auto h-auto max-h-[400px] object-cover shadow-lg shadow-pink-600"
              src={DoubleRobot}
              alt="Personal Pic"
            />
          </div>
          <div className="col-span-2">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                  About{" "}
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
              <div className="md:text-left text-3xl font-bold">
                <p>
                  Hi there, welcome to my portfolio. I'm Dylan, an Engineering
                  student at the University of Waterloo.
                </p>
              </div>
              <div className="text-gray-400">
                <p>
                  My main interests are around software development and
                  robotics. I have experience and interest in the ML/AI fields
                  and full-stack development. Right now, I'm using TensorFlow's
                  neural networks to create a custom chatbot for weight lifting!
                  I love to take on a challenge and I am always prepared to try
                  something new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
