import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trainers.module.sass";
import Item from "./Item";

import ScrollParallax from "../../../components/ScrollParallax";

// data
import { teamsList } from "../../../mocks/teams";

const Trainers = () => {
  const options = [];
  teamsList.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>We Have Mastered Our Craft</h2>
        <div className={styles.info}>
          At The Mastery House, we bring together a diverse group of industry
          experts and creative minds to deliver unparalleled digital solutions.
          Our team is our strength, and they're here to guide you through your
          digital transformation journey.
        </div>

        <div className={styles.nav}>
          {teamsList.map((x, index) => (
            <button
              className={cn(styles.btn, {
                [styles.active]: x.title === direction,
              })}
              onClick={() => setDirection(x.title)}
              key={index}
            >
              {x.title}
            </button>
          ))}
        </div>
        {/* <Dropdown
          className={styles.dropdown}
          value={direction}
          setValue={setDirection}
          options={options}
        /> */}
        <div className={styles.list}>
          {teamsList
            .find((x) => x.title === direction)
            .courses.map((x, index) => (
              <ScrollParallax key={index} className={styles.box}>
                <Item className={styles.item} item={x} />
              </ScrollParallax>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
