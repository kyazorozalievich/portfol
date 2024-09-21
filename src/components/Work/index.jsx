import React, { useState } from "react";
import tmdb from "../../assets/image/tmdb.png";
import watch from "../../assets/image/watch.png";
import food from "../../assets/image/food.png";
import { LuGithub } from "react-icons/lu";
import { FaRegShareFromSquare } from "react-icons/fa6";
import scss from "./Work.module.scss";

const Work = () => {
  const [onTmdb, setOnTmdb] = useState(false);
  const [onAppleWatch, setOnAppleWatch] = useState(false);
  const [onFood, setOnFood] = useState(false);

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

  return (
    <div className={scss.work}>
      <div className={scss.container}>
        <div className={scss.workAll}>
          <div className={scss.workMe}>
            <h5>03.</h5>
            <h1>Проекты</h1>
            <hr />
          </div>
          <div className={scss.workBlocks}>
            <div className={scss.workBlockLeft}>
              <img src={tmdb} alt="" onClick={() => toVerceltmdb()} />
              <div className={scss.workBlockLeftText}>
                <h3>TMDB cinema</h3>
                <div className={scss.leftTextBlockDes}>
                  <p>
                    Internet Movie Database (IMDb, в переводе с
                    англ. — «Интернет-база фильмов») — веб-сайт со свободно
                    редактируемой и крупнейшей в мире базой данных о
                    кинематографе.
                  </p>
                </div>
                <h1>HTML, CSS, React, Java Script</h1>
                <div className={scss.leftTextBlockIcons}>
                  <a>
                    <LuGithub onClick={() => toGithubtmdb()} />
                  </a>
                  <a onClick={() => toVerceltmdb()}>
                    <FaRegShareFromSquare />
                  </a>
                </div>
              </div>
            </div>
            <div className={scss.workBlockRight}>
              <div className={scss.workBlockRightText}>
                <h3>Apple Watch Store</h3>
                <div className={scss.rightTextBlockDes}>
                  <p>
                    Apple Watch — линейка умных часов, созданных корпорацией
                    Apple и представленных 9 сентября 2014 года. Для их
                    полноценной работы требуется смартфон iPhone 5 или новее с
                    IOS 8 или новее.
                  </p>
                </div>
                <h1>HTML, CSS, ReactVite, Java Script, Redux, Tailwind</h1>
                <div className={scss.rightTextBlockIcons}>
                  <a>
                    <LuGithub onClick={() => toGithubapplewatch()} />
                  </a>
                  <a onClick={() => toVercelapplewatch}>
                    <FaRegShareFromSquare />
                  </a>
                </div>
              </div>
              <img src={watch} alt="" onClick={() => toVercelapplewatch()} />
            </div>
            <div className={scss.workBlockLeft}>
              <img src={food} alt="" onClick={() => toVercelfood()} />
              <div className={scss.workBlockLeftText}>
                <h3>Food</h3>
                <div className={scss.leftTextBlockDes}>
                  <p>
                    Пи́ща (еда́) — то, что едят, чем питаются — любое вещество,
                    пригодное для еды и питья живым организмам для пополнения
                    запасов энергии и необходимых ингредиентов для нормального
                    течения химических реакций обмена веществ: белков, жиров,
                    углеводов, витаминов, минералов и микроэлементов.
                  </p>
                </div>
                <h1>
                  HTML, CSS, ReactVite, JavaScript, ReduxToolkit, Tailwind
                </h1>
                <div className={scss.leftTextBlockIcons}>
                  <a>
                    <LuGithub onClick={() => toGithubfood()} />
                  </a>
                  <a onClick={() => toVercelfood()}>
                    <FaRegShareFromSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
