import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const Workouts = ({ title, info, path, items }) => {
  return (
    <div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.infoContainer}>
            <h2 className={cn("h2", styles.title)}>{title}</h2>
            <div className={styles.info}>{info}</div>
            {/* <div className={styles.btns}>
              <Link className={cn("button", styles.button)} to={path}>
                Choose Plan
              </Link>
              <button className={cn("button-stroke", styles.button)}>
                Request a demo
              </button>
            </div> */}
          </div>
          <div className={styles.checkListContainer}>
            <ul className={styles.list}>
              {items?.map((x, index) => (
                <li className={styles.item} key={index}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
