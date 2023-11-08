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
                Augmented Reality (AR) is weaving the digital essence into our
                tangible world, layering virtuality atop our physical
                experiences to craft enchanting realms. It transcends mere
                overlays of information, venturing to sculpt an intertwined
                existence where virtual entities coalesce seamlessly with our
                environment.
              </p>
              <p>
                As AR's scope burgeons, it germinates novel modalities of
                interaction across sectors such as healthcare, education, and
                commerce, revolutionizing engagement and pedagogy. This article
                journeys through the vanguard AR trends of 2023, spotlighting
                the engines of innovation propelling this digital metamorphosis
                and its resonating effects on society and commerce. We’ll
                navigate the transformative ways AR is reshaping our perception
                and involvement in the world's tapestry.
              </p>
              <p>
                With AR technologies growing increasingly ubiquitous and
                creative minds challenging the frontiers of the imaginable, we
                are perched at the cusp of a paradigm shift. Embark with us as
                we unveil how augmented reality promises to redefine the
                contours of our digital and corporeal existences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AugmentedRealityTrends;
