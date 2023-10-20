import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import videoFiles from "../../../assets/videos/TmhVideo.mp4";

import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import VideoComponent from "../../../components/Video";

const Hero = ({ scrollToRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Crafted In Code {/*<span>icon</span>*/}
          </div>
          <h1 className={cn("h1", styles.title)}>
            Welcome to The Mastery House.
          </h1>
          {isMobile && (
            <VideoComponent
              videoSrc={videoFiles}
              autoplay={false}
              muted={true}
              loop={true}
            />
          )}
          <div className={styles.text}>
            Merging technology and creativity, we embody creative
            problem-solving to craft unique experiences.
          </div>

          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/download">
              Your Digital Story
            </Link>

            {/* <Link
              className={cn("button-stroke", styles.button)}
              to="/class02-details"
            >
              Book a Class
            </Link> */}
          </div>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <div className={styles.preview}>
            {!isMobile && (
              <VideoComponent
                videoSrc={videoFiles}
                height="500px"
                autoplay={true}
                muted={true}
                loop={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
