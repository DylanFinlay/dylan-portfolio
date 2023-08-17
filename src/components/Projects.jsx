import React from "react";
import WebScrape from "../assets/WebScraper.png";
import SnackTrack from "../assets/SnackTrack.png";
import Barbot from "../assets/BarBot.jpg";
import Keychain from "../assets/KeychainAssembly.png";
import Sudoku from "../assets/SudokuSolver.png";
import TronRobot from "../assets/TronDaysRobot.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Barbot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Barbot
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/DylanFinlay/BarBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2*/}
          <div
            style={{ backgroundImage: `url(${WebScrape})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Web Scraping API
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/DylanFinlay/OpenGraph-Web-Scraper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
                <a
                  href="https://open-graph-web-scraper.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3*/}
          <div
            style={{ backgroundImage: `url(${SnackTrack})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Snack Track
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/DylanFinlay/Snack-track"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
                <a
                  href="https://github.com/DylanFinlay/Snack-track"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4*/}
          <div
            style={{ backgroundImage: `url(${Sudoku})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Sudoku Solver Game
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/DylanFinlay/Sudoku-Solver-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5*/}
          <div
            style={{ backgroundImage: `url(${TronRobot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mobile 3-Axis Robotic Arm
              </span>
            </div>
          </div>

          {/* Grid Item 6*/}
          <div
            style={{ backgroundImage: `url(${Keychain})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Custom Keychain Production
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
