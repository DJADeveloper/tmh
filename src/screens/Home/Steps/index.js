import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Initial Consultation",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content:
      "Begin with a comprehensive discussion to understand your brand's objectives, target audience, and vision.",
  },
  {
    title: "Design & Conceptualization",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content:
      "Our creative team develops a unique design concept tailored to your brand's identity and values.",
  },
  {
    title: "Development & Testing",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content:
      "Engineers bring the design to life with functional and responsive coding, followed by rigorous testing for perfection.",
  },
  {
    title: "Launch & Post-launch Support",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content:
      "Your digital solution is launched with precision. We also provide post-launch support ensuring seamless operation.",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Our Process</h2>
          <div className={styles.info}>
            Dive into the journey of creating digital masterpieces with our
            step-by-step approach, tailored for success.
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
