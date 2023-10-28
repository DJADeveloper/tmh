import React, { useRef } from "react";
import styles from "./ImageScroll.module.sass";

const ImageScroll = ({ images }) => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    containerRef.current.scrollLeft += e.deltaY + e.deltaX * 3;
  };

  return (
    <div
      className={styles.scrollContainer}
      onWheel={handleWheel}
      ref={containerRef}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Work ${idx}`}
          className={styles.imageItem}
        />
      ))}
    </div>
  );
};

export default ImageScroll;
