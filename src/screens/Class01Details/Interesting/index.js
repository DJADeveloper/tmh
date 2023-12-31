import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Interesting.module.sass";
import Icon from "../../../components/Icon";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const items = [
  {
    url: "/service-search-engine-optimization",
    title: "SEO Optimization",
    description:
      "Enhance your website's visibility on search engines, driving more organic traffic and potential customers to your site.",
    image: "/images/content/services/seo.png",
    image2x: "/images/content/services/seo.png",
    category: "blue",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  // {
  //   url: "/service-social-media-management",
  //   title: "Social Media Campaigns",
  //   image: "/images/content/services/seo.png",
  //   image2x: "/images/content/services/seo.png",
  //   category: "blue",
  //   categoryText: "Digital Marketing",
  //   avatar: "/images/content/services/seo.png",
  //   level: "red",
  //   levelText: "Advanced",
  //   counterVideo: "7",
  //   counterUser: "160",
  //   play: true,
  // },
  {
    url: "/service-pwa",
    title: "Progressive Web Applications (PWA)",
    description:
      "Build responsive web apps that offer a native-like experience, ensuring seamless performance across all devices.",
    image: "/images/content/services/pwa.png",
    image2x: "/images/content/services/pwa.png",
    category: "orange",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-mobile",
    title: "Mobile Development",
    description:
      "Create robust mobile applications tailored to your business needs, ensuring a top-notch user experience.",
    image: "/images/content/services/mobile.png",
    image2x: "/images/content/services/mobile.png",
    category: "orange",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-story-branding",
    title: "Storybranding",
    description:
      "Craft compelling brand stories that resonate with your target audience, enhancing brand recall and loyalty.",
    image: "/images/content/services/storybranding.png",
    image2x: "/images/content/services/storybranding.png",
    category: "blue",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "green",
    levelText: "Beginner",
    counterVideo: "18",
    counterUser: "270",
  },
  {
    url: "/service-frontend",
    title: "Frontend Development",
    description:
      "Design and develop user interfaces that are intuitive, responsive, and visually appealing, ensuring user engagement.",

    image: "/images/content/services/blog.png",
    image2x: "/images/content/services/blog.png",
    category: "orange",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
    level: "green",
    levelText: "beginner",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-chatbot",
    title: "Chatbot Integration",
    description:
      "Implement AI-driven chatbots to enhance customer support, answer queries in real-time, and improve user satisfaction.",

    image: "/images/content/services/chatbot.png",
    image2x: "/images/content/services/chatbot.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-recommendation-systems",
    title: "Recommendation Systems",
    description:
      "Personalize user experiences by suggesting products or content based on individual preferences and browsing history.",
    image: "/images/content/services/recommended.png",
    image2x: "/images/content/services/recommended.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-natural-language-processing",
    title: "Natural Language Processing",
    description:
      "Leverage AI to analyze and understand human language, improving interactions and gaining deeper insights.",
    image: "/images/content/services/nlp.png",
    image2x: "/images/content/services/nlp.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-computer-vision",
    title: "Computer Vision",
    description:
      "Enable machines to interpret and act on visual data, automating tasks like image recognition and object detection.",

    image: "/images/content/services/computer-vision.png",
    image2x: "/images/content/services/computer-vision.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-machine-learning",
    title: "Machine Learning",
    description:
      "Implement intelligent systems that can learn from data, improving accuracy and efficiency over time.",
    image: "/images/content/services/ml.png",
    image2x: "/images/content/services/ml.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },
  {
    url: "/service-process-automation",
    title: "Process Automation",
    description:
      "Streamline and automate repetitive tasks, boosting productivity and reducing errors.",
    image: "/images/content/services/automation.png",
    image2x: "/images/content/services/automation.png",
    category: "green",
    categoryText: "Artificial Intelliegence",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "7",
    counterUser: "160",
  },

  {
    url: "/service-ecommerce",
    title: "E-commerce Development",
    description:
      "Design and develop online storefronts that offer seamless shopping experiences, driving sales and customer retention.",

    image: "/images/content/services/ecommerce.png",
    image2x: "/images/content/services/ecommerce.png",
    category: "purple",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
    level: "red",
    levelText: "Advanced",
    counterVideo: "5",
    counterUser: "100",
  },

  {
    url: "/service-content-creation",
    title: "Content Creation",
    description:
      "Generate engaging and relevant content that resonates with your target audience, driving brand engagement and conversions.",

    image: "/images/content/services/content-creation.png",
    image2x: "/images/content/services/content-creation2.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-social-media-ads",
    title: "Social Media Advertising",
    description:
      "Run targeted ad campaigns on social platforms to reach a wider audience and drive leads, conversions, and sales.",

    image: "/images/content/services/social-ads.png",
    image2x: "/images/content/services/social-ads.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Strategically engage with your audience on social platforms to build brand awareness and loyalty.",
    image: "/images/content/services/social-marketing.png",
    image2x: "/images/content/services/social-marketing.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },
  {
    url: "/service-email-marketing",
    title: "Email Marketing & Management",
    description:
      "Craft and deliver personalized email campaigns to nurture leads, promote offerings, and maintain customer relationships.",
    image: "/images/content/services/email-marketing.png",
    image2x: "/images/content/services/email-marketing.png",
    category: "orange",
    categoryText: "Digital Marketing",
    avatar: "/images/content/services/seo.png",
    level: "purple",
    levelText: "Intermediate",
    counterVideo: "6",
    counterUser: "140",
  },

  {
    url: "/service-backend",
    title: "Backend Development",
    description:
      "Develop robust backend infrastructures that support your applications, ensuring scalability and reliability.",
    image: "/images/content/services/backend.png",
    image2x: "/images/content/services/backend.png",
    category: "blue",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
    level: "green",
    levelText: "Beginner",
    counterVideo: "5",
    counterUser: "110",
  },
  {
    url: "/service-cms",
    title: "CMS",
    description:
      "Implement content management systems that allow easy content creation, management, and delivery to end-users.",

    image: "/images/content/services/cms.png",
    image2x: "/images/content/services/cms.png",
    category: "blue",
    categoryText: "Software Development",
    avatar: "/images/content/services/seo.png",
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
  // State to hold the selected category
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to filter services by category
  // const filterByCategory = (category) => {
  //   setSelectedCategory(category);
  // };

  // Filter the items based on the selected category
  // const filteredItems = selectedCategory
  // ? items.filter((item) => item.categoryText === selectedCategory)
  //   : items;

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
          <h2 className={cn("h2", styles.title)}>You may be interested</h2>
          {/* Buttons to select category */}
          {/* <button
            className={cn("button-stroke", styles.button)}
            onClick={() => filterByCategory("Digital Marketing")}
          >
            Digital Marketing
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => filterByCategory("Software Development")}
          >
            Software Development
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => filterByCategory("Artificial Intelliegence")}
          >
            Artificial Intelligence
          </button>
          <button
            className={cn("button-stroke", styles.button)}
            onClick={() => setSelectedCategory(null)}
          >
            Show All
          </button> */}
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
            <Link to="/services" className={cn("button-stroke", styles.button)}>
              Browse more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interesting;
