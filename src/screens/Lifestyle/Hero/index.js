import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import History from "./History";
import Item from "./Item";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "AI",
    items: [
      {
        url: "/article-ai-innovation",
        title: "The Rise of AI: Transforming Business in 2023",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Sept 15, 2023",
        image: "/images/content/blog/ai-innovation.png",
        image2x: "/images/content/blog/ai-innovation.png",
        category: "red",
        categoryContent: "ai",
      },
      {
        url: "/article-seo-ai",
        title:
          "SEO in the Age of AI: Navigating New Horizons in Search Engine Optimization",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Nov 08, 2023",
        image: "/images/content/blog/seo-ai.png",
        image2x: "/images/content/blog/seo-ai.png",
        category: "green",
        categoryContent: "ai",
      },
    ],
  },
  {
    title: "Digital Transformation",
    items: [
      {
        url: "/article-digital-transformation",
        title: "Decoding the Success DNA: The Digital Landscape in 2023",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "May 14, 2023",
        image: "/images/content/blog/digital-transformation.png",
        image2x: "/images/content/blog/digital-transformation.png",
        category: "red",
        categoryContent: "digital-transformation",
      },
    ],
  },
  {
    title: "Emerging Technologies",
    items: [
      {
        url: "/article-quantum-computing",
        title: "Quantum Computing: The Next Frontier in 2023",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Oct 28, 2023",
        image: "/images/content/blog/quantum-computing.png",
        image2x: "/images/content/blog/quantum-computing.png",
        category: "red",
        categoryContent: "emerging-technologies",
      },
      {
        url: "/article-ar-trends",
        title: "Augmented Reality: Merging Digital and Physical Realms",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Nov 02, 2023",
        image: "/images/content/blog/ar-trends.png",
        image2x: "/images/content/blog/ar-trends.png",
        category: "red",
        categoryContent: "emerging-technologies",
      },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      {
        url: "/article-cyber-security",
        title: "Cybersecurity: Fortifying the Digital Frontier",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Nov 02, 2023",
        image: "/images/content/blog/cyber-security.png",
        image2x: "/images/content/blog/cyber-security.png",
        category: "red",
        categoryContent: "cybersecurity",
      },
    ],
  },
  {
    title: "Sustainable Technology",
    items: [
      {
        url: "/article-sustainable-tech",
        title: "Harnessing Green Innovation: The Sustainable Tech Revolution",
        avatar: "/images/content/avatar-1.png",
        author: "Darryl Adams",
        date: "Nov 02, 2023",
        image: "/images/content/blog/sustainable-tech.png",
        image2x: "/images/content/blog/sustainable-tech.png",
        category: "red",
        categoryContent: "sustainable-technology",
      },
    ],
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("hero", styles.title)}>Digital Trends</h2>
        <div className={styles.info}>
          Exploring the Intersection of Technology, Creativity, and Business
          Growth - Unveiling Innovations and Strategies for the Digital Age with
          The Mastery House
        </div>
        <History />
        <div className={styles.nav}>
          {items.map((x, index) => (
            <button
              className={cn(styles.btn, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x.title}
            </button>
          ))}
        </div>
        <div className={styles.list}>
          {items[activeIndex].items.map((x, index) => (
            <ScrollParallax className={styles.box} key={index}>
              <Item item={x} className={styles.item} />
            </ScrollParallax>
          ))}
        </div>
        {/* <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            Load more
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
