import React from "react";
import tmdb from "../../assets/image/tmdb.png";
import watch from "../../assets/image/watch.png";
import food from "../../assets/image/food.png";
import strongpass from "../../assets/image/StrongPass.png";
import { LuGithub } from "react-icons/lu";
import { FaRegShareFromSquare } from "react-icons/fa6";
import scss from "./Work.module.scss";

const Work = () => {
  function toVerceltmdb() {
    window.open(` https://tmdb-topaz.vercel.app/`);
  }
  function toGithubtmdb() {
    window.open(` https://github.com/kyazorozalievich/tmdb.git`);
  }
  function toVercelapplewatch() {
    window.open(`https://applewatch-eosin.vercel.app/`);
  }
  function toGithubapplewatch() {
    window.open(`https://github.com/kyazorozalievich/applewatch.git`);
  }
  function toVercelfood() {
    window.open(`https://food-my.vercel.app/`);
  }
  function toGithubfood() {
    window.open(`https://github.com/kyazorozalievich/food.git`);
  }
  function toVercelStrongPass() {
    window.open(`https://strong-pass-ashy.vercel.app/`);
  }
  function toGithubStrongPass() {
    window.open(`https://github.com/kyazorozalievich/StrongPass.git`);
  }

  const projects = [
    {
      img: tmdb,
      vercel: toVerceltmdb,
      title: "TMDB cinema",
      description:
        "  Internet Movie Database (IMDb, в переводе с англ. — «Интернет-база фильмов») — веб-сайт со свобод редактируемой и крупнейшей в мире базой данных о кинематографе",
      tools: "HTML, CSS, React, JavaScript",
      iconVercel: toVerceltmdb,
      iconGitHub: toGithubtmdb,
    },
    {
      img: watch,
      vercel: toVercelapplewatch,
      title: "Apple Watch Store",
      description:
        "Apple Watch — линейка умных часов, созданных корпорацией  и представленных 9 сентября 2014 года. Для их  полноценной работы требуется смартфон iPhone 5 или новее с IOS 8 или новее.",
      tools: "HTML, CSS, ReactVite, JavaScript, Redux, Tailwind",
      iconVercel: toVercelapplewatch,
      iconGitHub: toGithubapplewatch,
    },
    {
      img: food,
      vercel: toVercelfood,
      title: "Food",
      description:
        "   Пи́ща (еда́) — то, что едят, чем питаются — любое вещество,пригодное для еды и питья живым организмам для пополнения запасов энергии и необходимых ингредиентов для нормального течения химических реакций обмена веществ: белков, жиров,  углеводов, витаминов, минералов и микроэлементов.",
      tools: "HTML, CSS, ReactVite, JavaScript, ReduxToolkit, Tailwind",
      iconVercel: toVercelfood,
      iconGitHub: toGithubfood,
    },
    {
      img: strongpass,
      vercel: toVercelStrongPass,
      title: "StrongPass",
      description:
        "'StrongPass' — это современный онлайн-инструмент для проверки надежности паролей. Мы помогаем пользователям оценивать уровень безопасности их паролей, даем рекомендации по их улучшению и создаем условия для защиты ваших данных от киберугроз.",
      tools: "SASS.module, NextJs, TypeScript, Zustand, Tailwind, Antd",
      iconVercel: toVercelStrongPass,
      iconGitHub: toGithubStrongPass,
    },
  ];

  return (
    <div className={scss.work}>
      <div className="container">
        <div className={scss.workAll}>
          <div className={scss.workMe}>
            <h5>03.</h5>
            <h1>Проекты</h1>
            <hr />
          </div>
          <div className={scss.workBlocks}>
            {projects.map((el, id) =>
              id % 2 === 0 ? (
                <>
                  <div className={scss.workBlockLeft}>
                    <img src={el.img} alt="" onClick={() => el.vercel()} />
                    <div className={scss.workBlockLeftText}>
                      <h3>{el.title}</h3>
                      <div className={scss.leftTextBlockDes}>
                        <p>
                          {el.description.length >= 150
                            ? el.description.slice(0, 150) + "..."
                            : el.description}
                        </p>
                      </div>
                      <h1>{el.tools}</h1>
                      <div className={scss.leftTextBlockIcons}>
                        <a>
                          <LuGithub onClick={() => el.iconGitHub()} />
                        </a>
                        <a onClick={() => el.iconVercel()}>
                          <FaRegShareFromSquare />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={scss.hr}></div>
                </>
              ) : (
                <>
                  <div className={scss.workBlockRight}>
                    <div className={scss.workBlockRightText}>
                      <h3>{el.title}</h3>
                      <div className={scss.rightTextBlockDes}>
                        <p>
                          {el.description.length >= 150
                            ? el.description.slice(0, 150) + "..."
                            : el.description}
                        </p>
                      </div>
                      <h1>{el.tools}</h1>
                      <div className={scss.rightTextBlockIcons}>
                        <a>
                          <LuGithub onClick={() => el.iconGitHub()} />
                        </a>
                        <a onClick={() => el.iconVercel()}>
                          <FaRegShareFromSquare />
                        </a>
                      </div>
                    </div>
                    <img src={el.img} alt="" onClick={() => el.vercel()} />
                  </div>
                  <div className={scss.hr}></div>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
