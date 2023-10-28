import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Intro.module.sass";
// import ScrollParallax from "../ScrollParallax";

const Intro = ({ scrollToRef, content }) => {
  return (
    <div className={styles.section} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}></div>
        {content}

        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>Projects That Define Us</h2>
          <div className={styles.text}>
            Each project at The Mastery House is a testament to our dedication
            to innovation and quality.
          </div>
          <Link className={cn("button", styles.button)} to="/download">
            Let's Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
