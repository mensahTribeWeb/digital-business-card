import React from "react";
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png'
import github from '../img/github-b.png'

export default function Footer () {
  return(
    <div className="footer">
      <link to='https://twitter.com/MensahTribeWDev'>
        <img className="footer--img" src={twitter} alt="twitter" />
      </link>
      <link to="https://www.instagram.com/software_engineer_nick_mensah/">
        <img className="footer--img" src={instagram} alt="instagram" />
      </link>
      <link to="https://github.com/mensahTribeWeb">
         <img className="footer--img" src={github} alt="github" />
      </link>
    </div>

  );
}