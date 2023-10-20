import React from "react";
import styles from "./ProjectFilter.module.sass";

const ProjectFilter = ({ activeFilter, onFilterChange }) => {
  const categories = ["All", "Web Design", "App Development", "Graphic Design"];
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeFilter ? styles.active : ""}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
