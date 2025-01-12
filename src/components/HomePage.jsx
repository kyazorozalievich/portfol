import React from "react";
import scss from "./HomePage.module.scss";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Experience from "./Experience";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className={scss.container}>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
