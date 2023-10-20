import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Interesting.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";

const items = [
  {
    url: "/service-search-engine-optimization",
    title: "SEO Optimization",

    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "blue",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-1.png",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  // {
  //   url: "/service-social-media-management",
  //   title: "Social Media Campaigns",
  //   image: "/images/content/card-pic-2.png",
  //   image2x: "/images/content/card-pic-2@2x.png",
  //   category: "blue",
  //   categoryText: "Digital Marketing",
  //   avatar: "/images/content/avatar-2.png",
  //   level: "red",
  //   levelText: "Advanced",
  //   counterVideo: "7",
  //   counterUser: "160",
  //   play: true,
  // },
  {
    url: "/service-pwa",
    title: "Progressive Web Applications (PWA)",
    image: "/images/content/card-pic-3.png",
    image2x: "/images/content/card-pic-3@2x.png",
    category: "orange",
    categoryText: "Software Development",
    avatar: "/images/content/avatar-3.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-story-branding",
    title: "Storybranding",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "blue",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-13.png",
    level: "green",
    levelText: "Beginner",
    counterVideo: "18",
    counterUser: "270",
  },
  {
    url: "/service-frontend",
    title: "Frontend Development",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "orange",
    categoryText: "Software Development",
    avatar: "/images/content/avatar-4.png",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-chatbot",
    title: "Chatbot Integration",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-5.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-recommendation-systems",
    title: "Recommendation Systems",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-6.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-natural-language-processing",
    title: "Natural Language Processing",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-6.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-computer-vision",
    title: "Compute Vision",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-6.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-machine-learning",
    title: "Machine Learning",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-6.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-process-automation",
    title: "Process Automation",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "green",
    categoryText: "AI",
    avatar: "/images/content/avatar-6.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },

  {
    url: "/service-ecommerce",
    title: "E-commerce Development",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "purple",
    categoryText: "Software Development",
    avatar: "/images/content/avatar-7.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "5",
    counterUser: "100",
  },

  {
    url: "/service-content-creation",
    title: "Content Creation",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-9.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-social-media-ads",
    title: "Social Media Advertising",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-9.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-social-media-marketing",
    title: "Social Media Marketing",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-9.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-email-marketing",
    title: "Email Marketing & Management",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/avatar-9.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },

  {
    url: "/service-backend",
    title: "Backend Development",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "blue",
    categoryText: "Software Development",
    avatar: "/images/content/avatar-12.png",
    level: "green",
    levelText: "Beginner",
    counterVideo: "5",
    counterUser: "110",
  },
  {
    url: "/service-cms",
    title: "CMS",
    image: "/images/content/card-pic-1.png",
    image2x: "/images/content/card-pic-1@2x.png",
    category: "blue",
    categoryText: "Software Development",
    avatar: "/images/content/avatar-12.png",
    level: "green",
    levelText: "Beginner",
    counterVideo: "5",
    counterUser: "110",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Interesting = () => {
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
        breakpoint: 1180,
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
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h2 className={cn("h2", styles.title)}>You may interested</h2>
          <div className={styles.wrap}>
            <Slider className="interesting-slider" {...settings}>
              {items.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <Card className={styles.card} item={x} />
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              Browse more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interesting;
