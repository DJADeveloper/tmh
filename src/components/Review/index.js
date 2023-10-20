import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import Icon from "../Icon";
import styles from "./Review.module.sass";

const items = [
  {
    author: "UniFit",
    position: "Reviewed recently",
    logo: "./images/content/velocity9.svg", // Placeholder image; replace with actual logo if available
    comment:
      "From the moment I first engaged with The Mastery House, I knew I was in the hands of true professionals. Their unparalleled expertise in merging technology and creativity is evident in every project they undertake. They don't just offer …More.",
  },
  {
    author: "Hip Gnosis Productions",
    position: "Reviewed recently",
    logo: "./images/content/travelers.svg", // Placeholder image; replace with actual logo if available
    comment:
      "We recently collaborated with The Mastery House on a crucial project. Their team is remarkably professional and delivered exceptional quality. Their understanding of our vision and the ease of communication truly set them apart. Highly recommended!",
  },
  {
    author: "Shereve L Smith",
    position: "Reviewed 2 years ago",
    logo: "./images/content/goldlines.svg", // Placeholder image; replace with actual logo if available
    comment:
      "The Mastery House has done an amazing job at building my website and helping my business grow. They are detailed and patient. They really engaged to ensure my company got visibility to succeed. Thanks to The Mastery House.",
  },
  {
    author: "Lydell Graves",
    position: "Reviewed 2 years ago",
    logo: "./images/content/velocity9.svg", // Placeholder image; replace with actual logo if available
    comment:
      "Positive: Professionalism, Quality, Responsiveness, Value. The Mastery House has not only provided an excellent touch to all that they've done for my business but they continually monitor and come up with new ideas and strategies as well as adding to the suggestions of the clients... Superb Service.",
  },
  {
    author: "dylan reback",
    position: "Reviewed Recently",
    logo: "./images/content/travelers.svg", // Placeholder image; replace with actual logo if available
    comment:
      "I had a very pleasant experience with The Mastery House! Dj is super helpful, and responsive when you have a question. He was able to bring my vision to life quickly & understood exactly what I wanted to execute my website. I highly recommend his services.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Review = ({ className }) => {
  const settings = {
    infinite: false,
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
  };

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="review-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={cn("review-item", styles.item)}>
                  <div className={styles.logo}>
                    <img src={x.logo} alt="Logo" />
                  </div>
                  <div className={styles.title}>{x.comment}</div>
                  <div className={styles.author}>{x.author}</div>
                  <div className={styles.position}>{x.position}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
