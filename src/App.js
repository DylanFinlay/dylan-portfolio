import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <Navbar nav={nav} handleClick={handleClick} />
      <Home />
      <About />
      <Experience />
      <Projects nav={nav} />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
