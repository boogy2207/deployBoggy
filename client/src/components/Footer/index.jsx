import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className={style.containerFooter}>
      <div className={style.containerCopy}>
        <p className={style.copyright}>
         Copyright © 2023 -{" "}
          <Link to="/">
            <button className={style.title}>Books Paradise</button>
          </Link>
        </p>
      </div>
      <div className={style.containerButtons}>
        <Link to="/FAQs">
          <button className={style.buttonFooter}>Preguntas</button>
        </Link>
        <Link to="/help">
          <button className={style.buttonFooter}>Ayuda</button>
        </Link>
        <Link to="/about">
          <button className={style.buttonFooter}>Equipo</button>
        </Link>
      </div>
      <div className={style.containerIcons}>
        <a href="https://www.instagram.com/" target={"_blank"}>
          <i className="fa-brands fa-instagram"><InstagramIcon/></i>
        </a>
        <a href="https://www.facebook.com/" target={"_blank"}>
          <i className="fa-brands fa-facebook-f"><FacebookIcon/></i>
        </a>
        <a href="https://www.linkedin.com/" target={"_blank"}>
          <i className="fa-brands fa-linkedin-in"><LinkedInIcon/></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;