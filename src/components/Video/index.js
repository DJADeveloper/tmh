import React from "react";
import styles from "./Video.module.sass"; // Adjust the path if needed

const VideoComponent = ({
  videoSrc,
  videoTitle,
  poster,
  autoplay = true,
  muted = true,
  loop = true,
  ...props
}) => (
  <div className={styles.videoContainer}>
    <video
      controls
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      playsInline
      poster={poster}
      {...props}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoComponent;
