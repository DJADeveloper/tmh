import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import contactImage from "../../../assets/images/3DTech/8. Online Meeting.png";
import Form from "../../../components/Form";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              srcSet={contactImage}
              srcSetDark={contactImage}
              src={contactImage}
              srcDark={contactImage}
              alt="Contact us"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}>
              Empower Your Digital Presence
            </div>
            <h1 className={cn("h1", styles.title)}>
              Elevate Your Business with Innovative Solutions
            </h1>
            <div className={styles.text}>
              At The Mastery House, we empower businesses to thrive in the
              digital era. Our expertise in software development, digital
              marketing, AI, and blockchain crafts unparalleled digital
              experiences. Let's collaborate to elevate your business in the
              global digital landscape.
            </div>

            <div className={styles.contact}>
              <div className={styles.text}>
                <strong>Phone:</strong> (813) 670-2774 <br />
                <strong>Email:</strong> themasteryhouse@gmail.com
              </div>
              <div className={styles.text}></div>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
