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
              alt="Download bg"
            />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("stage", styles.stage)}>Contact Us</div>
            <h1 className={cn("h1", styles.title)}>Get in touch with us.</h1>
            <div className={styles.text}>
              Have questions or feedback? We'd love to hear from you.
            </div>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
