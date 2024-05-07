import React from "react";
import "./Section.css";

const Main = () => {
  return (
    <div className="sectionWrapper">
      <section className="">
        <article className="firstArticle">
          <p>HEY</p>
        </article>
        <article className="secondArticle">
          <p>Coming Soon..</p>
        </article>
        <ul className="">
          More Information:
          <li>
            <a href="https://github.com/canaksakal">
              <img src="../src/images/logo-github.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/18244518/can-aksakal">
              <img src="../src/images/logo-stackoverflow.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
