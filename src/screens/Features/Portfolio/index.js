import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Portfolio.module.sass"; // renamed the sass file to match the component name
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const portfolioItems = [
  // renamed to reflect portfolio projects
  {
    title: "Software Development",
    image: "/images/content/lifestyle-pic-1.png",
    image2x: "/images/content/lifestyle-pic-1@2x.png",
    content:
      " software solutions tailored for your business needs. Dive into the world of seamless software integration.",
  },
  {
    title: "Digital Marketing",
    image: "/images/content/lifestyle-pic-2.png",
    image2x: "/images/content/lifestyle-pic-2@2x.png",
    content:
      "Expand your digital footprint. Capture your audience with innovative and tailored marketing strategies.",
  },
  {
    title: "Artificial Intelligence",
    image: "/images/content/lifestyle-pic-3.png",
    image2x: "/images/content/lifestyle-pic-3@2x.png",
    content:
      "Harness the power of AI. Implement smart solutions and transform your business landscape.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Portfolio = () => {
  // Renamed the component
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Our Works</div>
          <h2 className={cn("h2", styles.title)}>
            Showcasing Our Expertise
          </h2>{" "}
          <div className={styles.info}>
            Dive into our portfolio and explore the wide range of projects we've
            successfully undertaken.
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/project-details"
          >
            <span>View a Project</span>
            <Icon name="arrow-right" size="10" />
          </Link>
        </div>
        <div className={styles.wrap}>
          <Slider
            className={cn("portfolio-slider", styles.slider)}
            {...settings}
          >
            {portfolioItems.map((x, index) => (
              <ScrollParallax className={styles.item} key={index}>
                <div className={styles.row}>
                  <div className={styles.col}>
                    <div className={styles.details}>
                      <div className={styles.number}>0{index + 1}.</div>
                      <div className={styles.category}>{x.title}</div>
                      <div className={styles.content}>{x.content}</div>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <img
                      srcSet={`${x.image2x} 2x`}
                      src={x.image}
                      alt="Portfolio"
                    />
                  </div>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // Updated the export to match the component name
