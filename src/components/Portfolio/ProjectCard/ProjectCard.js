import React from "react";
import styles from "./ProjectCard.module.sass"; // Assuming you adapt the styles as per the given styles

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.item}>
      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      ></div>
      <div className={styles.details}>
        <div className={styles.subtitle}>{project.title}</div>
        <div className={styles.description}>{project.description}</div>
        {/* Add any additional information you need */}
      </div>
    </div>
  );
};

export default ProjectCard;
