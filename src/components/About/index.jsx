import React from "react";
import me from "../../assets/image/me.jpg";
import scss from "./About.module.scss";

const About = () => {
  function motionWeb() {
    window.open(`https://motion.kg/kg`);
  }
  return (
    <div className={scss.about}>
      <div className="container">
        <div className={scss.aboutAll}>
          <div className={scss.aboutText}>
            <div className={scss.aboutMe}>
              <h5>01.</h5>
              <h1 className="poppins">Обо мне</h1>
              <hr />
            </div>

            <div className={scss.aboutDescription}>
              <p>
                Привет! Меня зовут Кыяз, я начинающий IT-программист. Мне
                нравится создавать IT-продукты. В настоящее время я занимаюсь
                веб-разработкой и участвовал в различных проектах, таких как
                продуктовые, медицинские, кино и другие.
              </p>
              <p>
                Моя цель — создавать интересные и полезные продукты, которые
                узнают во всем мире. Я продолжаю развиваться в IT-сфере, изучая
                новые технологии и языки. Это только начало моего пути, и
                впереди меня ждет много увлекательных достижений.
              </p>
              <p>
                Хочу поделиться своей историей обучения. Я обучался в
                IT-академии{" "}
                <span onClick={() => motionWeb()}>Motion Web LLC</span>. Мой
                главный совет: никогда не теряйте надежду, даже если что-то не
                получается. Стремитесь к своей цели и преодолевайте трудности —
                только так можно достичь успеха.
              </p>
            </div>
          </div>
          <img src={me} alt="Моё фото" />
        </div>
      </div>
    </div>
  );
};

export default About;
