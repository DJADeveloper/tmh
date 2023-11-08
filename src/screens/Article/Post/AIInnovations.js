import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const AIInnovations = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            The Rise of AI: Transforming Business in 2023
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              {/* Replace with the path to your first image */}
              <img
                src="/images/content/blog/ai-innovation.png"
                alt="AI in the Office"
              />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
              Embracing the New Collaborator: Artificial Intelligence
            </h2>
            <div className={styles.info}>
              In the bustling digital era, businesses are finding a new ally in
              artificial intelligence (AI). Far from the cold, metallic
              portrayal in science fiction, today's AI is like a warm breeze,
              pushing enterprises towards uncharted realms of efficiency and
              personalization.
            </div>
            {/* <div className={styles.preview}>
              
              <img
                src="/images/content/blog/ai-innovation.png"
                alt="AI in a Meeting"
              />
            </div> */}
            <div className={styles.content}>
              <p>
                Imagine walking into an office where your coffee is brewed just
                how you like it, thanks to a smart system that remembers your
                preferences. Picture a conference room where a virtual assistant
                not only takes notes but also offers insights drawn from the
                latest market trends. This is the business landscape of 2023,
                where AI is less of a tool and more of a partner.
              </p>
              <p>
                If you're new to technology, AI in 2023 is not about
                overwhelming changes; it's about subtle enhancements that make
                life simpler. For the tech-savvy, it's the advanced algorithms
                that process data at breakneck speeds, offering insights that
                inform strategic decisions.
              </p>
              <p>
                Let's take a day in the life of a business in 2023. Morning
                commutes are optimized by AI, reducing traffic and pollution. At
                work, AI helps prioritize your tasks based on your productivity
                patterns. In meetings, data analytics powered by AI provide a
                backdrop for informed discussions.
              </p>
              <p>
                The rise of AI in business is not just about smarter machines;
                it's about a smarter way of working where everyone can find
                value. Join us in embracing the rise of AI in 2023, where
                business and technology walk hand in hand towards a horizon
                brimming with possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovations;
