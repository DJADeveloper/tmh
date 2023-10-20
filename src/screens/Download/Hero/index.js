import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";

import Form from "../../../components/Form";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send the data to a server or API.
    alert(`Email: ${email}\nMessage: ${message}`);
  };

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/download-pic@2x.png 2x"
              srcSetDark="/images/content/download-pic-dark@2x.png 2x"
              src="/images/content/download-pic.png"
              srcDark="/images/content/download-pic-dark.png"
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
