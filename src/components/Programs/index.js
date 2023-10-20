import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Programs.module.sass";
import Slider from "react-slick";
import Icon from "../Icon";
import ScrollParallax from "../ScrollParallax";
import MasteryStory from "../MasteryStory/masteryStory";

const items = [
  {
    title: "Software Development",
    url: "/class02-details",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "Crafting digital masterpieces with precision and flair. Dive into the realm of code, where innovation meets functionality.",
  },
  {
    title: "Digital Marketing",
    url: "/class02-details",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "Amplifying brand voices in the crowded digital marketplace. Harness the power of online channels to captivate your audience.",
  },
  {
    title: "Artificial Intelligence",
    url: "/class02-details",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "Navigating the future with intelligence beyond human capability. Delve into the realm where machines think and learn.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Programs = ({ classNameTitle, title, classNameSection, scrollToRef }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn(classNameSection, styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <MasteryStory />
        <div className={styles.wrap}>
          <Slider className="services-slider" {...settings}>
            {items.map((x, index) => (
              <ScrollParallax className={styles.slide} key={index}>
                <div className={cn("service-item", styles.item)}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: x.color }}
                  >
                    <img src={x.image} alt={x.alt} />
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                  <Link
                    className={cn("button-stroke", styles.button)}
                    to={x.url}
                  >
                    Learn More
                  </Link>
                </div>
              </ScrollParallax>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Programs;
