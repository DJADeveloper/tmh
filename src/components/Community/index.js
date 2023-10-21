import React from "react";
import cn from "classnames";
import styles from "./Community.module.sass";

import logo from "../../assets/images/logo/2.png";
import Image from "../Image";

const Community = ({
  imageUrl = logo,
  image2xUrl = { logo },
  imageDarkUrl = { logo },
  imageDark2xUrl = { logo },
  imageAlt = "Mastery House Logo",
  stageText = "Who We Are",
  title = "The Mastery House Story",
  description = "Founded in 2019,The Mastery House began with a vision: harnessing the transformative power of technology for businesses. Beyond tasks and projects, we see the dreams and ambitions of our clients. Through our dedication, we light up the digital landscape, helping dreams turn into grand visions.",
  subscriptionPlaceholder = "Enter your email",
  termsLink = "/#",
  policyLink = "/#",
}) => (
  <div className={cn("section-pb", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={cn("stage-small", styles.stage)}>{stageText}</div>
      <h2 className={cn("h2", styles.title)}>{title}</h2>
      <div className={styles.preview}>
        <Image
          srcSet={`${image2xUrl} 2x`}
          srcSetDark={`${imageDark2xUrl} 2x`}
          src={imageUrl}
          srcDark={imageDarkUrl}
          alt={imageAlt}
        />
      </div>
      <div className={styles.text}>{description}</div>
      {/*  */}
    </div>
  </div>
);

export default Community;
