import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const SustainableTechInnovation = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Harnessing Green Innovation: The Sustainable Tech Revolution
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="arrow-down" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {/* Optional: Image related to sustainable technology */}
            <div className={styles.preview}>
              <img
                src="/images/content/sustainable-tech.png"
                alt="Sustainable Technology"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                As the clarion call for environmental stewardship grows louder,
                sustainable technology is emerging as the cornerstone of
                conscientious innovation. This domain isn't just about reducing
                carbon footprints; it’s about pioneering a path where technology
                harmonizes with ecology.
              </p>
              <p>
                This piece delves into the strides made in sustainable tech,
                spotlighting renewable energy solutions, eco-friendly
                infrastructure, and the algorithms driving efficiency without
                sacrificing performance. We’re witnessing an era where tech
                giants and startups alike are investing in green technologies,
                not just as a corporate responsibility, but as a fundamental
                business imperative.
              </p>
              <p>
                Explore with us the confluence of technology and sustainability,
                where the latest trends are not only ecologically sound but are
                paving the way for a greener, more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableTechInnovation;
