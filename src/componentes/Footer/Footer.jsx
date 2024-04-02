import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer poppins-medium">
      <div>
        <ul className="footer--menu">
          <li className="footer--itemsMenu poppins-medium">
              <div className="">
                Meu contato:
                <br />
                (11) 94060-8467
              </div>
          </li>
          <li className="footer--itemsMenu poppins-medium">
            <div>
              Meu Email:
              <br />
              carlosbom64@gmail.com
            </div>
          </li>
        </ul>
      </div>
      <div className="icons">
        <a href="https://github.com/CabrQW" >
        <FaGithub size={30}/>
        </a>
        <a className="icons2" href="https://www.linkedin.com/in/carlos-eduardo-a971501a5/" >
          <FaLinkedin size={30}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;