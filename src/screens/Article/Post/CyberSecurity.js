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
                src="/images/content/blog/cyber-security.png"
                alt="Cybersecurity"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                As we traverse the vast digital terrain, cybersecurity emerges
                as the vanguard, shielding our digital sanctuaries. In the face
                of ever-evolving threats, from stealthy cyber incursions to
                elaborate social engineering deceptions, cybersecurity's mantle
                has never been more pivotal. Its essence lies in cultivating
                trust and safeguarding the fabric of our digital interactions.
              </p>
              <p>
                Our discourse traverses the forefront of cybersecurity
                developments as they unfold in 2023. We're charting the
                innovative frontiers—from the unbreakable encryptions of
                blockchain to the keen vigilance of AI-powered
                surveillance—ushering in a new epoch of digital defense. These
                advancements recalibrate our security paradigms to parry the
                escalating complexities of our interconnected realms.
              </p>
              <p>
                Embark on this odyssey with us as we dissect the intricacies of
                cybersecurity, confront the present-day adversities, and
                envisage the emergent innovations poised to fortify our cyber
                bastions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityEssentials;
