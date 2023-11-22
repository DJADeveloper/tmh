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
                The year 2023 marks a pivotal moment in the realm of technology,
                where green innovation is not just a trend but a necessity. As
                the world grapples with climate change, sustainable technology
                is emerging as the beacon of hope.
              </p>
              <p>
                This revolution is characterized by a surge in renewable energy
                solutions, like solar panels and wind turbines, that are
                becoming more efficient and affordable. These technologies are
                essential in reducing our carbon footprint and fostering a
                sustainable future.
              </p>
              <p>
                In the automotive sector, electric vehicles (EVs) are at the
                forefront of this change. With advancements in battery
                technology, EVs are becoming more accessible, signaling a
                significant shift away from fossil fuel dependence.
              </p>
              <p>
                Green innovation is also evident in everyday gadgets. From
                energy-saving smart home devices to biodegradable electronics,
                technology is being reimagined with sustainability at its core.
              </p>
              <p>
                Beyond individual gadgets, the tech industry is also witnessing
                a shift in its overall approach. Companies are increasingly
                adopting circular economy principles, focusing on sustainability
                in manufacturing processes and product lifecycles.
              </p>
              <p>
                The sustainable tech revolution is not just about creating
                greener products; it's about transforming our mindset. It
                encourages a holistic view of technology, where environmental
                impact is as crucial as functionality and design.
              </p>
              <p>
                As we journey further into 2023, green innovation continues to
                inspire and challenge us. It propels us towards a future where
                technology and sustainability are inextricably linked, driving
                positive change for our planet and generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableTechInnovation;
