import React from "react";

const VideoComponent = ({
  videoSrc,
  videoTitle,
  width = "100%",
  height = "auto",
  autoplay = false,
  muted = false,
  loop = false,
  ...props
}) => (
  <div className="video-container" style={{ maxWidth: width }}>
    <video
      controls
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      width={width}
      height={height}
      {...props}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoComponent;
