import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Program.module.sass";

import ScrollParallax from "../../../components/ScrollParallax";
import tech from "../../../assets/images/3DTech/5. Growth Progress.png";

const items = [
  {
    title: "Software Development",
    url: "/services",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "Developing reliable and efficient software tailored to your business needs. We turn ideas into functional digital solutions.",
  },
  {
    title: "Digital Marketing",
    url: "/services",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "Boosting your online presence and reach. We strategize to connect your brand with the right audience effectively.",
  },
  {
    title: "Artificial Intelligence",
    url: "/services",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "Implementing smart solutions with AI. We harness the latest technologies to optimize processes and deliver results.",
  },
  // {
  //   title: "Blockchain Development",
  //   url: "/services",
  //   color: "#FF4757",
  //   image: "/images/content/lightning.svg",
  //   alt: "lightning",
  //   content:
  //     "Navigating the future with intelligence beyond human capability. Delve into the realm where machines think and learn.",
  // },
];

const Program = ({ className }) => {
  return (
    <div className={cn("section-bg", styles.book, className)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.headerRow}>
            <div className={styles.titleCol}>
              <div className={cn("stage", styles.stage)}>Our Services</div>
              <h2 className={cn("h2", styles.title)}>
                Innovative, Dynamic, <br />
                Future-Ready
              </h2>
              <div className={styles.info}>
                Offering a diverse range of services to cater to your business
                needs. Let's transform the digital landscape together.
              </div>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.preview}>
                <img srcSet={tech} src={tech} alt="Bottle" />{" "}
              </div>
              <Link to="/services" className={styles.button}>
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className={cn(styles.list, styles.twoColumns)}>
            {items.slice(0, 4).map((x, index) => (
              <ScrollParallax
                className={styles.item}
                style={{ marginLeft: "40px" }}
                key={index}
              >
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
      </div>
    </div>
  );
};

export default Program;
