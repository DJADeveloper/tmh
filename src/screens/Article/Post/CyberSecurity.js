import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const CybersecurityEssentials = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Cybersecurity: Fortifying the Digital Frontier
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {/* Optional: Image related to Cybersecurity */}
            <div className={styles.preview}>
              <img
                src="/images/content/cyber-security.png"
                alt="Cybersecurity"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                In the sprawling expanse of the digital age, cybersecurity
                stands as the silent sentinel guarding our most sensitive data.
                The virtual world is fraught with threats, from sophisticated
                cyber attacks to intricate phishing schemes, making the role of
                cybersecurity more crucial than ever. This necessity extends
                beyond mere protection; it’s about fostering trust and ensuring
                the integrity of our online interactions.
              </p>
              <p>
                This article examines the latest advancements and strategies in
                cybersecurity as we navigate through 2023. We’ll explore the
                innovative technologies and practices that are setting new
                standards for security and privacy. From blockchain-based
                security layers to AI-driven threat detection systems, the
                landscape of cybersecurity is evolving to meet the demands of an
                increasingly connected society.
              </p>
              <p>
                Join us as we delve into the complexities of cybersecurity,
                understand the current challenges, and anticipate the future
                developments that will continue to shield the digital realm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityEssentials;
