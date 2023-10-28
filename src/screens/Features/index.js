import React, { useRef } from "react";
// import styles from "./Features.module.sass";

import ValueProps from "../../components/ValueProps";

import Programs from "../../components/Programs";

const Features = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      {/* <Hero scrollToRef={scrollToRef} /> */}
      {/* <Clients /> */}

      <ValueProps className="section-pb" />
      <Programs
        scrollToRef={scrollToRef}
        classNameSection="section-pb"
        title="Digital Solutions Tailored to Your Needs"
        description="Experience 1-on-1 consulting and project development to bring your visions to life. From software engineering to AI integration and digital marketing strategies, we ensure your brand stands out in the digital realm."
      />
      {/* <VideoComponent
        videoSrc={videoFiles}
        autoplay={true}
        muted={true}
        loop={true}
        styles={styles.videoContainer}
      /> */}
      {/* <Intro scrollToRef={scrollToRef} /> */}
      {/* <Program /> */}
      {/* <About /> */}
      {/* <Review /> */}

      {/* <Workouts /> */}

      {/* <Advantages />
      <Offer className="section" /> */}
    </>
  );
};

export default Features;
