import React from "react";
import scss from "./Home.module.scss";
import podpis from "../../assets/image/podpis.png";
import Snowfall from "react-snowfall";
import resume from "../../assets/image/resume.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import resumePdf from "../../../public/resume.pdf";

const Home = () => {
  const birthDate = new Date(2007, 0, 28);
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

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

  function onResume() {
    window.open(resumePdf, "_blank");
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
        <div className="container">
          <div className={scss.homeIndex}>
            <div className={scss.homeText}>
              <h6>Привет, меня зовут</h6>
              <h1>Kyaiz Orozalievich</h1>
              <h1>I'm a Junior Developer</h1>
              <p>
                Я <span onClick={() => frontEnd()}>Front-End</span> разработчик,
                специализирующийся на создании веб-сайтов. В настоящее время я
                обучаюсь в IT-академии
                <span onClick={() => motionWeb()}> Motion Web</span>. Мне {age}{" "}
                лет, я живу в{" "}
                <span onClick={() => kyrgyzstan()}>Кыргызстане</span>, и передо
                мной стоят большие цели, которых я планирую достичь!
              </p>
              <div className={scss.blocks}>
                <div className={scss.podpis}>
                  <h6>KyaizDev:</h6>
                  <img src={podpis} alt="Подпись" />
                </div>
                <div className={scss.img2} onClick={() => onResume()}>
                  <div className={scss.bg}>
                    <h2>Resume</h2>
                  </div>
                  <img src={resume} alt="resume" />
                </div>
              </div>
            </div>
            <div className={scss.homeBlock}>
              <div className={scss.img} onClick={() => onResume()}>
                <div className={scss.bg}>
                  <h2>Resume</h2>
                </div>
                <img src={resume} alt="resume" />
              </div>
              <div className={scss.buttons}>
                <button
                  className={scss.lin}
                  onClick={() => window.open("https://www.linkedin.com/feed/")}
                >
                  <FaLinkedin />
                  Linkedin
                </button>
                <button
                  className={scss.git}
                  onClick={() =>
                    window.open("https://github.com/kyazorozalievich")
                  }
                >
                  <BsGithub />
                  GitHub
                </button>
                <button
                  className={scss.tele}
                  onClick={() => window.open("https://t.me/orozal1evich")}
                >
                  <FaTelegram />
                  Telegram
                </button>
                <button
                  className={scss.insta}
                  onClick={() =>
                    window.open("https://www.instagram.com/k_orozalievich")
                  }
                >
                  <RiInstagramFill />
                  Instagram
                </button>
                <button
                  className={scss.phon}
                  // onClick={() => window.open("+996707592828")}
                >
                  <IoLogoWhatsapp />
                  WhatsApp
                </button>
                <button
                  className={scss.mail}
                  // onClick={() =>
                  //   window.open(
                  //     "https://myaccount.google.com/ashimalievkyaz@gmail.com"
                  //   )
                  // }
                >
                  <IoIosMail />
                  Gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
