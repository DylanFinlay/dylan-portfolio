/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import WebScrape from "../assets/WebScraper.png";
import SnackTrack from "../assets/SnackTrack.png";
import Barbot from "../assets/BarBot.jpg";
import Keychain from "../assets/KeychainAssembly.png";
import Sudoku from "../assets/SudokuSolver1.png";
import TronRobot from "../assets/TronDaysRobot.jpg";

const Projects = ({ nav }) => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen py-12 flex items-center text-gray-300 bg-[#0a192f]"
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  The BarBot
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  The BarBot is an autonomous drink delivery robot built using
                  Lego EV3 Mindstorm hardware, and programmed with RobotC to
                  deliver drinks on a custom grid system.
                </p>
              </div>
              <div className="text-center">
                <a
                  href={
                    nav ? undefined : "https://github.com/DylanFinlay/BarBot"
                  }
                  onClick={nav ? (e) => e.preventDefault() : undefined}
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Web Scraping API
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  Python Web Scraper built to grab OG tags from thousands of
                  websites, implemented as an API with Flask, and showcased
                  through an intricate React Web App.
                </p>
              </div>
              <div className="text-center">
                <a
                  href={
                    nav
                      ? undefined
                      : "https://github.com/DylanFinlay/OpenGraph-Web-Scraper"
                  }
                  onClick={nav ? (e) => e.preventDefault() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
                <a
                  href={
                    nav
                      ? undefined
                      : "https://open-graph-web-scraper.vercel.app/"
                  }
                  onClick={nav ? (e) => e.preventDefault() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3*/}
          <div
            style={{ backgroundImage: `url(${SnackTrack})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Snack Track
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  Collaborated in a team of 5 to create a React App with a clean
                  UI, that allows users to search for and access detailed
                  nutritional information about various foods.
                </p>
              </div>
              <div className="text-center">
                <a
                  href={
                    nav
                      ? undefined
                      : "https://github.com/DylanFinlay/Snack-track"
                  }
                  onClick={nav ? (e) => e.preventDefault() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
                <a
                  href={nav ? undefined : "https://snack-track.vercel.app/"}
                  onClick={nav ? (e) => e.preventDefault() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Site
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4*/}
          <div
            style={{ backgroundImage: `url(${Sudoku})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Sudoku Solver
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  Developed a back-tracking algorithm capable of solving any
                  sudoku board, and further implemented a full sudoku game with
                  a PyGame graphical user interface.
                </p>
              </div>
              <div className="text-center">
                <a
                  href={
                    nav
                      ? undefined
                      : "https://github.com/DylanFinlay/Sudoku-Solver-Game"
                  }
                  onClick={nav ? (e) => e.preventDefault() : undefined}
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Mobile 3-Axis Robotic Arm
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  Awarded first place in a University of Waterloo competition by
                  designing a fully mobile 3-Axis Robotic Arm. The arm is
                  controlled remotely to pick up and move small items.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Item 6*/}
          <div
            style={{ backgroundImage: `url(${Keychain})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Custom Keychain Assembly
                </span>
              </div>
              <div className="text-center">
                <p className="px-4 py-2">
                  Modelled, designed and produces a custom keychain. Seven
                  individual pieces 3D Modelled precisely with SolidWorks, and
                  further hand crafted in the shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
