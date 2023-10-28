import React from "react";
// import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Programs.module.sass";
import Slider from "react-slick";
import Icon from "../Icon";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Software Development",
    url: "/services",
    color: "#45B26B",
    image: "/images/content/user.svg",
    alt: "user",
    content:
      "Journey into the heart of digital creation. At The Mastery House, we sculpt lines of code into robust and elegant software solutions, marrying form and function seamlessly.",
  },
  {
    title: "Digital Marketing",
    url: "/services",
    color: "#9757D7",
    image: "/images/content/medal-1.svg",
    alt: "medal",
    content:
      "Elevate your brand's digital narrative. With a symphony of strategy, creativity, and technology, we amplify your presence, ensuring your voice resounds in every digital corner.",
  },
  {
    title: "Artificial Intelligence",
    url: "/services",
    color: "#3772FF",
    image: "/images/content/lightning.svg",
    alt: "lightning",
    content:
      "Steer into the future with us, where machines resonate with human thought. At The Mastery House, we harness the power of AI, crafting solutions that think, adapt, and evolve.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Programs = ({ description, title, classNameSection, scrollToRef }) => {
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
        {/* <MasteryStory /> */}
        <div className={styles.wrap}>
          <h2 className={(cn("h2"), styles.title)}>{title}</h2>
          <p className={styles.info}>{description}</p>
          <Slider className={styles.serviceItem} {...settings}>
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
                  {/* <Link
                    className={cn("button-stroke", styles.button)}
                    to={x.url}
                  >
                    Learn More
                  </Link> */}
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
