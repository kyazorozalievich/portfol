import React from "react";
import scss from "./Experience.module.scss";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import javascript from "../../assets/image/javascript.png";
import react from "../../assets/image/react.png";
import redux from "../../assets/image/redux.png";
import typescript from "../../assets/image/typescript.svg";
import next from "../../assets/image/next.png";
import node from "../../assets/image/node.png";
import git from "../../assets/image/git.webp";
import github from "../../assets/image/github.png";
import vite from "../../assets/image/vite.png";
import mui from "../../assets/image/mui.png";
import sass from "../../assets/image/sass.webp";
import windows from "../../assets/image/windows.png";
import tailwind from "../../assets/image/tailwind.png";
import flowbite from "../../assets/image/flowbite.png";

const Experience = () => {
  return (
    <div className={scss.experience}>
      <div className={scss.container}>
        <div className={scss.experienceAll}>
        <div className={scss.experienceMe}>
          <h5>02.</h5>
          <h1 className="poppins">Навыки</h1>
          <hr />
        </div>
        <div className={scss.experienceBlocks}>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={html} alt="" />
            </div>
            <h3>HTML</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={css} alt="" />
            </div>
            <h3>CSS</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={javascript} alt="" />
            </div>
            <h3>Java Script</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={react} alt="" />
            </div>
            <h3>React</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={redux} alt="" />
            </div>
            <h3>ReduxToolkit</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={typescript} alt="" />
            </div>
            <h3>Type Script</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={next} alt="" />
            </div>
            <h3>Next js</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={node} alt="" />
            </div>
            <h3>Node js</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={git} alt="" />
            </div>
            <h3>Git</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={github} alt="" />
            </div>
            <h3>GitHub</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={vite} alt="" />
            </div>
            <h3>Vite</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={tailwind} alt="" />
            </div>
            <h3>Tailwind</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={flowbite} alt="" />
            </div>
            <h3>Flowbite</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={windows} alt="" />
            </div>
            <h3>Window</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={mui} alt="" />
            </div>
            <h3>MUI</h3>
          </div>
          <div className={scss.experienceBlock}>
            <div className={scss.image}>
              <img src={sass} alt="" />
            </div>
            <h3>SASS</h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
