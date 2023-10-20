import React from "react";
import cn from "classnames";
import styles from "./Community.module.sass";
import Subscription from "../Subscription";
import Image from "../Image";

const Community = ({
  imageUrl = "/images/content/dumbbell.png",
  image2xUrl = "/images/content/dumbbell@2x.png",
  imageDarkUrl = "/images/content/dumbbell-dark.png",
  imageDark2xUrl = "/images/content/dumbbell-dark@2x.png",
  imageAlt = "Mastery House Logo",
  stageText = "Unlock new potentials with Mastery House",
  title = "Join The Mastery House Community",
  description = "Become a part of The Mastery House's community to access exclusive content and updates. Your journey towards mastery starts here.",
  subscriptionPlaceholder = "Enter your email",
  termsLink = "/#",
  policyLink = "/#",
}) => (
  <div className={cn("section-pb", styles.section)}>
    <div className={cn("container", styles.container)}>
      <div className={styles.preview}>
        <Image
          srcSet={`${image2xUrl} 2x`}
          srcSetDark={`${imageDark2xUrl} 2x`}
          src={imageUrl}
          srcDark={imageDarkUrl}
          alt={imageAlt}
        />
      </div>
      <div className={cn("stage-small", styles.stage)}>{stageText}</div>
      <h2 className={cn("h2", styles.title)}>{title}</h2>
      <div className={styles.text}>{description}</div>
      <Subscription
        className={styles.subscription}
        placeholder={subscriptionPlaceholder}
      />
      <div className={styles.note}>
        By clicking sign in, you agree with Mastery House's{" "}
        <a href={termsLink}>terms</a> and <a href={policyLink}>policy</a>.
      </div>
    </div>
  </div>
);

export default Community;
