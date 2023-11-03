import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import videoFiles from "../../../assets/videos/TmhVideo.mp4";

// import ScrollButton from "../../../components/ScrollButton";
import VideoComponent from "../../../components/Video";

const Hero = ({ scrollToRef }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700); // Assuming mobile width is 768px or less
  const isTablet = window.innerWidth >= 700 && window.innerWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Crafted In Code {/*<span>icon</span>*/}
          </div>
          <h1 className={cn("h1", styles.title)}>
            Welcome to The Mastery House
          </h1>

          <div className={styles.text}>
            Merging technology and creativity, we embody creative
            problem-solving to craft unique experiences.
          </div>
          {isTablet && (
            <VideoComponent
              videoSrc={videoFiles}
              height="200px"
              autoplay={true}
              muted={true}
              loop={true}
            />
          )}
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/contact">
              Start Your Digital Story
            </Link>

            {/* <Link
              className={cn("button-stroke", styles.button)}
              to="/class02-details"
            >
              Book a Class
            </Link> */}
          </div>
        </div>
        {/* <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={styles.scroll}
        /> */}
        {!isMobile && (
          <div className={styles.gallery}>
            <div className={styles.preview}>
              <VideoComponent
                videoSrc={videoFiles}
                height={isMobile ? "200px" : "400px"}
                autoplay={true}
                muted={true}
                loop={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
