import React from "react";
import Headshot from "../assets/Headshot1.JPG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-2">
          <div className="col-span-2">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="md:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                  About{" "}
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
              <div className="md:text-right text-4xl font-bold">
                <p>
                  Hi there. I'm Dylan, nice to meet you. Please take a look
                  around.
                </p>
              </div>
              <div>
                <p>
                  I am passionate about blahblah blahsshhasu hdasuihd shgdsygdgs
                  agdhsgahd hshgdhasgdh sahdhsa shdhasuhds shhshasd shsj
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 py-4 md:py-2 flex justify-center items-center col-span-1">
            <img
              className="w-auto h-auto max-h-[400px] object-cover"
              src={Headshot}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
