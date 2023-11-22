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
                src="/images/content/blog/ar-trends.png"
                alt="Augmented Reality"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                In 2023, augmented reality (AR) is not just a futuristic concept
                but a tangible part of everyday life. It seamlessly blends the
                digital and physical worlds, creating experiences that are
                immersive and interactive.
              </p>
              <p>
                The impact of AR technology is evident across various sectors.
                In retail, it allows customers to visualize products in their
                own space before making a purchase. In education, AR brings
                learning to life, making complex concepts easier to grasp.
              </p>
              <p>
                The healthcare industry also benefits from AR. Surgeons use it
                for intricate procedures, overlaying vital information directly
                onto their field of view. This integration of digital
                information with the real world enhances precision and
                efficiency.
              </p>
              <p>
                One of the key drivers of AR's growth is the advancement in
                mobile technology. With smartphones becoming more powerful, AR
                experiences are more accessible than ever. This ubiquity is
                driving innovation and adoption across different demographics.
              </p>
              <p>
                However, the true potential of AR lies in its ability to create
                a more connected and interactive world. From virtual fitting
                rooms to interactive museum exhibits, AR is redefining the way
                we interact with our surroundings.
              </p>
              <p>
                As we look towards the future, the fusion of AR with other
                emerging technologies like AI and IoT promises even more
                exciting possibilities. The continued evolution of AR is not
                just changing our digital interactions but reshaping our
                physical world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AugmentedRealityTrends;
