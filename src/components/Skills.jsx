import React from "react";

import Autocad from "../assets/Autocad.png";
import C from "../assets/C.png";
import Cpp from "../assets/Cpp.png";
import Git from "../assets/Git.png";
import Github from "../assets/Github.png";
import Html from "../assets/Html.png";
import Javascript from "../assets/JavaScript.png";
import Node from "../assets/Node.png";
import Postman from "../assets/Postman.png";
import Python from "../assets/Python.png";
import ReactLogo from "../assets/React.png";
import Solidworks from "../assets/Solidworks.png";
import Tailwind from "../assets/Tailwind.png";
import VScode from "../assets/VScode.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full py-12 min-h-screen flex items-center bg-[#0a192f] text-gray-300">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are some of the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python Icon" />
            <p className="py-1">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cpp} alt="Cpp Icon" />
            <p className="py-1">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="C Icon" />
            <p className="py-1">C</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript Icon"
            />
            <p className="py-2">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="HTML Icon" />
            <p className="py-1">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="py-1">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactLogo} alt="React Icon" />
            <p className="py-3">React.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
            <p className="py-1">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={VScode} alt="VScode Icon" />
            <p className="py-1">VS Code</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Postman} alt="Postman Icon" />
            <p className="py-1">Postman</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="Git Icon" />
            <p className="py-1">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="py-1">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Solidworks}
              alt="Solidworks Icon"
            />
            <p className="py-1">SolidWorks</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Autocad} alt="Autocad Icon" />
            <p className="py-1">AutoCAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
