import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Intro.module.sass";
import ScrollParallax from "../ScrollParallax";

const Intro = ({ scrollToRef }) => {
  return (
    <div className={styles.section} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bag@2x.png 2x"
              src="/images/content/bag.png"
              alt="Bag"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/gloves@2x.png 2x"
              src="/images/content/gloves.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bottle-1@2x.png 2x"
              src="/images/content/bottle-1.png"
              alt="Bottle"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>
            Where Creativity Meets Innovation
          </h2>
          <div className={styles.text}>
            The Mastery House in Tampa combines tech, creativity, and marketing.
            Leading in Digital Marketing, Software Engineering, and AI. Join our
            digital excellence journey. 🔥🌐
          </div>
          <Link className={cn("button", styles.button)} to="/download">
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
