import React from "react";
import dev from "../../assets/image/kyazdevbg-Photoroom.png";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";
import { MdOutlineMenuOpen } from "react-icons/md";

const Header = () => {
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.headerDetail}>
          <div className={scss.headerImage}>
            <img src={dev} alt="logo" />
          </div>
          <div className={scss.headerText}>
            <NavLink NavLink to="" className={scss.link}>
              <span>01.</span>
              Обо Мне
            </NavLink>
            <NavLink NavLink to="" className={scss.link}>
              <span>02.</span>
              Навыки
            </NavLink>
            <NavLink NavLink to="" className={scss.link}>
              <span>03.</span>
              Проекты
            </NavLink>
            <NavLink NavLink to="" className={scss.link}>
              <span>04.</span>
              Контакты
            </NavLink>
          </div>
          {/* <a className={scss.menu}>
            <MdOutlineMenuOpen />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
