import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const SeoAIBlog = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            SEO in the Age of AI: Navigating New Horizons in Search Engine
            Optimization
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              {/* Image related to SEO and AI */}
              <img src="/images/content/blog/seo-ai.png" alt="SEO and AI" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                In the pulsating heart of digital marketing, search engine
                optimization (SEO) remains the lifeblood of any successful
                online strategy. With search algorithms becoming increasingly
                sophisticated and the rise of artificial intelligence (AI), the
                quest for visibility has transformed into a strategic game of
                wit and agility.
              </p>
              <p>
                Today, at The Mastery House, we dive deep into the evolving
                landscape of SEO to unearth strategies that not only align with
                the latest advancements but also anticipate the seismic shifts
                that AI is bringing to the digital forefront.
              </p>
              <p>
                Join us as we unravel the enigma of AI-driven SEO with our
                comprehensive guide, designed to elevate your online presence
                and empower your brand's digital essence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoAIBlog;
