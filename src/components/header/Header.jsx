import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="">
      <span className="headFirst">
        <h3>aksakaldev</h3>
      </span>
      <span className="headSecond">
        <ul className="headList">
          <li>
            <a href="https://www.linkedin.com/in/aksakalcan/">
              <img src="../src/images/logo-linkedin.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aksakalcn/">
              <img src="../src/images/logo-instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/garbagecn">
              <img src="../src/images/logo-twitter.png" alt="" />
            </a>
          </li>
        </ul>
        <button className="headMail" type="button">
          <img src="../src/images/mail.png" alt="" /> Mail Me!
        </button>
      </span>
    </nav>
  );
};

export default Header;
