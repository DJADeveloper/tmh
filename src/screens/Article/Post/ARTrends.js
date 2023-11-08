import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const AugmentedRealityTrends = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Augmented Reality: Merging Digital and Physical Realms
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {/* Optional: Image related to Augmented Reality */}
            <div className={styles.preview}>
              <img
                src="/images/content/ar-trends.png"
                alt="Augmented Reality"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                Augmented reality (AR) is redefining our interaction with the
                world around us, merging digital content with the physical
                environment to create immersive experiences. From enhancing
                gaming experiences to transforming online retail, AR is not just
                about overlaying digital information; it's about creating a new
                dimension where users can interact with virtual elements as if
                they were part of their natural surroundings.
              </p>
              <p>
                The applications of AR are expanding, with innovations in
                healthcare, education, and marketing offering new ways to engage
                and educate. This article delves into the latest AR trends of
                2023, the technology driving this digital revolution, and the
                impact it’s having on both consumers and businesses. We’ll
                explore how AR is not only changing the way we see the world but
                also how we participate in it.
              </p>
              <p>
                As AR devices become more accessible and content creators push
                the boundaries of what’s possible, we stand on the brink of a
                new era. Join us in exploring how augmented reality is set to
                alter our digital and physical landscapes forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AugmentedRealityTrends;
