import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";

const items = [
  {
    url: "/the-mastery-house-story",
    title: "The Story Behind The Mastery House",
    content:
      "  How a group of passionate tech enthusiasts, that excel in Software Development, AI, Blockchain, and Digital Marketing formed a collective to bring businesses digital solutions.",
    image: "url('/images/content/logo/tmhLogo.png')",
    status: "pink",
    statusContent: "new",
  },
  {
    url: "/article-digital-transformation",
    title: "Decoding the Success DNA: The Digital Landscape in 2023",
    content:
      "Explore the current state of digital transformation and its impact on business strategy and customer experience.",
    image: "url('/images/content/blog/digital-transformation.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-ai-innovation",
    title: "The Rise of AI: Transforming Business in 2023",
    content:
      "Delve into the advancements and innovations in AI shaping the future of industries.",
    image: "url('/images/content/blog/ai-innovation.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-quantum-computing",
    title: "Quantum Computing: The Next Frontier in 2023",
    content:
      "Discover how quantum computing is revolutionizing problem-solving and data analysis.",
    image: "url('/images/content/blog/quantum-computing.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-ar-trends",
    title: "Augmented Reality: Merging Digital and Physical Realms",
    content:
      "Get insights on the latest trends in augmented reality and its diverse applications.",
    image: "url('/images/content/blog/ar-trends.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-cyber-security",
    title: "Cybersecurity: Fortifying the Digital Frontier",
    content:
      "Understand the critical importance of cybersecurity in protecting digital assets.",
    image: "url('/images/content/blog/cyber-security.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-sustainable-tech",
    title: "Harnessing Green Innovation: The Sustainable Tech Revolution",
    content:
      "Learn about the intersection of technology and sustainability for a greener future.",
    image: "url('/images/content/blog/sustainable-tech.png')",
    status: "red",
    statusContent: "technology",
  },
  {
    url: "/article-seo-ai",
    title:
      "SEO in the Age of AI: Navigating New Horizons in Search Engine Optimization",
    content:
      "Explore the dynamic changes in SEO strategies with the advent of AI technologies.",
    image: "url('/images/content/blog/seo-ai.png')",
    status: "green",
    statusContent: "digital-marketing",
  },
];

const History = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.history}>
      <div className={styles.wrap}>
        <Slider className="history-slider" {...settings}>
          {items.map((x, index) => (
            <div className={styles.slide} key={index}>
              <div className={cn("history-item", styles.item)}>
                <div
                  className={styles.preview}
                  style={{ backgroundImage: x.image }}
                ></div>
                <div className={styles.details}>
                  <div
                    className={cn(
                      {
                        "status-pink": x.status === "pink",
                      },
                      {
                        "status-green": x.status === "green",
                      },
                      styles.status
                    )}
                  >
                    {x.statusContent}
                  </div>
                  <div className={styles.title}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                  <Link
                    to={x.url}
                    className={cn("button-small", styles.button)}
                  >
                    Read full story
                  </Link>
                </div>
                <div className={styles.position}>{x.position}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default History;
