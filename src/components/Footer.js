import React from "react";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import github from "../img/github-b.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/MensahTribeWDev">
        <img className="footer--img" src={twitter} alt="twitter" />
      </a>
      <a href="https://www.instagram.com/software_engineer_nick_mensah/">
        <img className="footer--img" src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/mensahTribeWeb">
        <img className="footer--img" src={github} alt="github" />
      </a>
    </div>
  );
}
