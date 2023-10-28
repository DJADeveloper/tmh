// PricingTiers.jsx

import React from "react";
import styles from "./PricingTiers.module.sass";

const PricingTiers = ({ tiersData }) => {
  return (
    <div className={styles.section}>
      <div className={styles.stage}>
        <h1 className={styles.title}>Choose Your Plan</h1>
        <div className={styles.row}>
          {tiersData.map((tier, index) => (
            <div className={styles.col} key={index}>
              <div className={styles.head}>
                <div className={styles.package}>{tier.package}</div>
                <div className={styles.description}>{tier.description}</div>
                <div className={styles.cost}>
                  <span className={styles.sign}>$</span>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.note}>/ mo</span>
                </div>
              </div>
              <div className={styles.body}>
                {tier.features.map((feature, fIndex) => (
                  <div className={styles.parameter} key={fIndex}>
                    <span className={styles.label}>{feature.name}</span>
                    {feature.available ? (
                      <span className={styles.tick}>✔</span>
                    ) : (
                      <span className={styles.minus}>-</span>
                    )}
                  </div>
                ))}
              </div>
              <button className={styles.button}>{tier.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTiers;
