import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";
import techTeam from "../../../assets/images/3DTech/10. Team Discussion.png";

const Hero = ({ scrollToRef }) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Innovate. Integrate. Inspire.
          </div>
          <h1 className={cn("h1", styles.title)}>
            Mastering the Digital Landscape
          </h1>
          <div className={styles.text}>
            Specializing in Software Development, AI, and Digital Marketing
            Services. With every project, we're committed to excellence and
            making a positive impact. A portion of our proceeds goes towards
            supporting autistic organizations.
          </div>
          {isMobile && (
            <div className={styles.gallery}>
              <div className={styles.preview}>
                <Image
                  srcSet={techTeam}
                  srcSetDark={techTeam}
                  src={techTeam}
                  srcDark={techTeam}
                  alt="Digital Transformation"
                />
              </div>
              <ScrollParallax
                className={styles.preview}
                animateIn="fadeInUp"
                delay={300}
              >
                <img
                  srcSet="/images/tech/21 Internet.png"
                  src="/images/tech/21 Internet.png"
                  alt="Ball"
                />
              </ScrollParallax>
              <ScrollParallax
                className={styles.preview}
                animateIn="fadeInUp"
                delay={600}
              >
                <img
                  srcSet="/images/tech/25 Blockchain.png"
                  src="/images/tech/11 Artificial Intelliegence.png"
                  alt="Dumbbells"
                />
              </ScrollParallax>
              <ScrollParallax
                className={styles.preview}
                animateIn="fadeInUp"
                delay={900}
              ></ScrollParallax>
            </div>
          )}
          <Link className={cn("button", styles.button)} to="/services">
            Explore Our Services
          </Link>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        {!isMobile && (
          <div className={styles.gallery}>
            <div className={styles.preview}>
              <Image
                srcSet={techTeam}
                srcSetDark={techTeam}
                src={techTeam}
                srcDark={techTeam}
                alt="Digital Transformation"
              />
            </div>
            <ScrollParallax
              className={styles.preview}
              animateIn="fadeInUp"
              delay={300}
            >
              <img
                srcSet="/images/tech/21 Internet.png"
                src="/images/tech/21 Internet.png"
                alt="Ball"
              />
            </ScrollParallax>
            <ScrollParallax
              className={styles.preview}
              animateIn="fadeInUp"
              delay={600}
            >
              <img
                srcSet="/images/tech/25 Blockchain.png"
                src="/images/tech/11 Artificial Intelliegence.png"
                alt="Dumbbells"
              />
            </ScrollParallax>
            <ScrollParallax
              className={styles.preview}
              animateIn="fadeInUp"
              delay={900}
            ></ScrollParallax>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
