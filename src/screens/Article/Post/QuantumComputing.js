import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const QuantumComputingBreakthroughs = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Quantum Computing: The Next Frontier in 2023
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            {/* Optional: Image related to Quantum Computing */}
            <div className={styles.preview}>
              <img
                src="/images/content/quantum-computing.png"
                alt="Quantum Computing"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                Quantum computing is poised to revolutionize our problem-solving
                capabilities in ways we've never before imagined. Even in its
                early stages, it promises to unravel complex problems at a pace
                that overshadows the capabilities of our current supercomputers.
                This leap is not just theoretical; it's starting to take shape
                in various research labs and pilot projects across the globe.
              </p>
              <p>
                The potential applications of quantum computing are vast,
                ranging from material science discoveries to unlocking new
                facets of artificial intelligence. However, the road to a
                quantum future is laden with challenges, including the need for
                advancements in quantum error correction and the development of
                sustainable, scalable systems.
              </p>
              <p>
                In this in-depth look, we explore the current state of quantum
                computing, its potential impact across industries, and how
                businesses and governments are preparing for a quantum-inclusive
                future. Discover the milestones already achieved in 2023 and the
                strides we’re making towards a new era of computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthroughs;
