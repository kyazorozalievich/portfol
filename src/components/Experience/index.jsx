import React from "react";
import scss from "./Experience.module.scss";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import javascript from "../../assets/image/javascript.png";
import react from "../../assets/image/react.png";
import redux from "../../assets/image/redux.png";
import typescript from "../../assets/image/typescript.svg";
import next from "../../assets/image/next.png";
import git from "../../assets/image/git.webp";
import github from "../../assets/image/github.png";
import vite from "../../assets/image/vite.png";
import mui from "../../assets/image/mui.png";
import sass from "../../assets/image/sass.webp";
import tailwind from "../../assets/image/tailwind.png";
import flowbite from "../../assets/image/flowbite.png";

const Experience = () => {
  const tools = [
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    {
      img: javascript,
      title: "JavaScript",
    },
    {
      img: react,
      title: "React",
    },
    {
      img: redux,
      title: "Redux",
    },
    {
      img: typescript,
      title: "TypeScript",
    },
    {
      img: next,
      title: "NextJs",
    },

    {
      img: git,
      title: "Git",
    },
    {
      img: github,
      title: "GitHub",
    },
    {
      img: vite,
      title: "Vite",
    },
    {
      img: mui,
      title: "MUI",
    },
    {
      img: sass,
      title: "SASS",
    },
    {
      img: tailwind,
      title: "Tailwind",
    },
    {
      img: flowbite,
      title: "Flowbite",
    },
  ];

  return (
    <div className={scss.experience}>
      <div className='container'>
        <div className={scss.experienceAll}>
          <div className={scss.experienceMe}>
            <h5>02.</h5>
            <h1 className="poppins">Навыки</h1>
            <hr />
          </div>
          <div className={scss.experienceBlocks}>
            {tools.map((el) => (
              <div className={scss.experienceBlock}>
                <div className={scss.image}>
                  <img src={el.img} alt="" />
                </div>
                <h3>{el.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
