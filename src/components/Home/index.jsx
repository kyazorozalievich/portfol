import React from "react";
import scss from "./Home.module.scss";
import podpis from "../../assets/image/podpis.png";
import About from "../About";
import Snowfall from "react-snowfall";
import Experience from "../Experience";
import Work from "../Work";
import Contact from "../Contact";

const Home = () => {
  function frontEnd() {
    window.open(
      `https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4#:~:text=front%20end%2C%20frontend)%20%E2%80%94%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F,backend).`
    );
  }
  function motionWeb() {
    window.open(`https://motion.kg/kg`);
  }
  function kyrgyzstan() {
    window.open(
      `https://ru.wikipedia.org/wiki/%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD`
    );
  }
  return (
    <div className={scss.homeAll}>
      <Snowfall
        snowflakeCount={50}
        style={{
          position: "fixed",
          width: `100%`,
          height: `100%`,
          left: 0,
          top: 0,
          opacity: 0.8,
          zIndex: -1,
        }}
      />
      <div className={scss.home}>
        <div className={scss.container}>
          <div className={scss.homeText}>
            <h6>Добро пожаловать , меня зовут</h6>
            <h1>Kyaiz Orozalievich</h1>
            <h1>I'm Junior Developer</h1>
            <p>
              Я <span onClick={() => frontEnd()}>Front-End</span> разработчик
              (программист), специализирующийся на создании "Web" сайтов . В
              настоящее время учусь в It академии
              <span onClick={() => motionWeb()}> Motion Web</span> . Мне 17 лет ,
              живу в <span onClick={() => kyrgyzstan()}>Кыргызстане</span>, и у
              меня есть большие цели в жизни!
            </p>
            <div className={scss.podpis}>
              <h6>KyaizDev: </h6>
              <img src={podpis} alt="podpis" />
            </div>
          </div>
        </div>
      </div>
      <div className={scss.details}>
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
