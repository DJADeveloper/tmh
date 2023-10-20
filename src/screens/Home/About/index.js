import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";

import ScrollParallax from "../../../components/ScrollParallax";
import tech from "../../../assets/images/3DTech/5. Growth Progress.png";

const items = [
  {
    title: "Software Development",
    content:
      "Crafting tailored software solutions to drive business outcomes and enhance user experience.",
    color: "#9757D7",
  },
  {
    title: "Digital Marketing",
    content:
      "Strategic online marketing campaigns to boost your brand's visibility and engagement.",
    color: "#EF466F",
  },
  {
    title: "Artificial Intelligence",
    content:
      "Leveraging the power of machine learning and AI to build intelligent and efficient systems.",
    color: "#45B26B",
  },
];

const About = () => {
  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage", styles.stage)}>Our Services</div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
              Innovative, Dynamic, <br></br>Future-Ready
            </h2>
            <div className={styles.info}>
              Offering a diverse range of services to cater to your business
              needs. Let's transform the digital landscape together.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    0{index + 1}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img srcSet={tech} src={tech} alt="About pic" />
              <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                {/* <img
                  srcSet="/images/tech/22 Wifi.png"
                  src="/images/tech/22 Wifi.png"
                  alt="Plate"
                /> */}
              </ScrollParallax>
              {/* <button className={cn("play", styles.play)}>
                <Icon name="play" size="21" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
