import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";

const TheMasteryHouseStory = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            The Story Behind The Mastery House: Pioneering Digital Excellence
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              {/* Replace with the path to your Mastery House image */}
              <img
                src="/images/content/logo/tmhLogo.png"
                alt="The Mastery House"
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.content}>
              <p>
                In a world where digital footprints have become the lifeline of
                businesses, there emerged a visionary entity – The Mastery
                House. A Creative Digital Agency and a cradle for innovation,
                where technology meets creativity, turning digital aspirations
                into tangible results.
              </p>
              <p>
                The story of The Mastery House is one of inevitability in an era
                burgeoning with technological advancements. A group of
                tech-savvy maestros, each a master in their domain, founded this
                powerhouse to bridge the gap in the digital landscape.
              </p>
              <p>
                United by a passion for technology and commitment to excellence,
                they embarked on a mission to harness the power of digital
                technologies and guide businesses to success.
              </p>
              <p>
                Our services at The Mastery House encompass Digital Marketing,
                Software Development, and pioneering in AI & Blockchain
                technologies. We believe in offering comprehensive solutions
                that cater to every digital need of our clients.
              </p>
              <p>
                Our ethos is simple – to bring unparalleled value to businesses,
                transforming them into digital powerhouses. Our drive stems from
                a profound belief in the transformative power of technology.
              </p>
              <p>
                The Mastery House was born from a collective vision to make a
                difference in the digital world. Our journey has been about
                continuous evolution, embracing new technologies, and building
                strong relationships with the businesses we transform.
              </p>
              <p>
                As we move forward, The Mastery House continues to be a beacon
                of innovation in the digital space, writing a story of mastery,
                innovation, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheMasteryHouseStory;
