import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Software Development",
    color: "#FF708A", // Lighter than #EF466F
    images: "/images/content/download.svg",
    content:
      "Crafting tailored software solutions to drive business outcomes and enhance user experience.",
  },
  {
    title: "Digital Marketing",
    color: "#EF466F", // Original reddish color
    images: "/images/content/whistle.svg",
    content:
      "Strategic online marketing campaigns to boost your brand's visibility and engagement.",
  },
  {
    title: "AI",
    color: "#D1365B", // Darker than #EF466F
    images: "/images/content/medal.svg",
    content:
      "Leveraging the power of machine learning and AI to build intelligent and efficient systems.",
  },
  {
    title: "Blockchain",
    color: "#B02447", // Darker than #EF466F
    images: "/images/content/stopwatch.svg",
    content:
      "Empowering businesses with secure and transparent transaction systems using blockchain technology.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Our Services</h2>
          <div className={styles.info}>
            Offering a diverse range of services to cater to your business
            needs. Let's transform the digital landscape together.
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
