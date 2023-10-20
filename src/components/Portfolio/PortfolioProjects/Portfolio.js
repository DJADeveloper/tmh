import React, { useEffect } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "../Portfolio.module.sass";
import { useState } from "react";
import ProjectFilter from "../ProjectFilter/ProjectFilter";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "Web Design",
    imageUrl: "/images/content/user.svg",
    description: "A modern e-commerce platform for a leading fashion brand.",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Development",
    imageUrl: "/images/content/medal-1.svg",
    description: "A banking app designed to make finances easy and accessible.",
  },
  {
    id: 3,
    title: "Branding for Cafe",
    category: "Graphic Design",
    imageUrl: "/images/content/lightning.svg",
    description: "Creative branding solution for a new city cafe.",
  },
  // ... add more projects as needed
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  // ...

  return (
    <div className={styles.portfolio}>
      <header className={styles.header}>
        <h1>Our Portfolio</h1>
        <p>Check out some of our recent works.</p>
      </header>

      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={(filter) => setActiveFilter(filter)}
      />

      <div className={styles.gallery}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Optional footer */}
      <footer className={styles.footer}>
        <p>
          Interested in working with us? <a href="/contact">Contact us</a>.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
