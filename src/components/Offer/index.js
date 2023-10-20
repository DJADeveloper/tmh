import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          Your Success Is Our Code
        </div>
        <h2 className={cn("h1", styles.title)}>
          Elevate Your Digital Potential.
        </h2>
        <div className={styles.text}>
          Your imagination. Our expertise. Let's collaborate to craft solutions
          that are as unique and exceptional as your business.
        </div>
        <Link className={cn("button", styles.button)} to="/download">
          Join Us Now
        </Link>
      </div>
    </div>
  );
};

export default Offer;
