import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "../../Services.module.sass";
import Icon from "../../../../components/Icon";
import data from "../../../../Data/serivcesData";
import Interesting from "../../../Class01Details/Interesting";

const ChatBotService = () => {
  const chatBotData = data.aiMachineLearningServices[0];
  const { title, info, features, benefits, status, items } = chatBotData;
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  };

  const photos = [
    {
      image: "/images/content/workout-pic.png",
      image2x: "/images/content/workout-pic@2x.png",
      play: true,
    },
    {
      image: "/images/content/workout-pic.png",
      image2x: "/images/content/workout-pic@2x.png",
    },
    {
      image: "/images/content/workout-pic.png",
      image2x: "/images/content/workout-pic@2x.png",
      play: true,
    },
    {
      image: "/images/content/workout-pic.png",
      image2x: "/images/content/workout-pic@2x.png",
    },
  ];

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.details}>
              {status.map((x, index) => (
                <div
                  className={cn(
                    { "status-red": x.status === "red" },
                    {
                      "status-green": x.status === "green",
                    },
                    styles.status
                  )}
                  key={index}
                >
                  {x.statusContent}
                </div>
              ))}
            </div>
            <h2 className={cn("h2", styles.title)}>{title}</h2>
            <div className={styles.info}>{info}</div>
            <div className={styles.wrap}>
              <Slider className="workout-slider" {...settings}>
                {photos?.map((x, index) => (
                  <div className={styles.slide} key={index}>
                    <div className={cn("workout-item", styles.item)}>
                      <div className={styles.preview}>
                        <img
                          src={x.image}
                          srcSet={`${x.image2x} 2x`}
                          alt="Workout"
                        />
                        {x.play && (
                          <button className={cn("play", styles.play)}>
                            <Icon name="play" size="21" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.group}>
              {items.map((x, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.icon}>
                    <Icon name={x.icon} size={x.size} />
                  </div>
                  <div className={styles.parameter}>{x.title}</div>
                  <div className={styles.content} style={{ color: x.color }}>
                    {x.content}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.text}>
              <p>{benefits.title}</p>
              <p>{benefits.content}</p>
            </div>
            <div className={styles.list}>
              {features.map((x, index) => (
                <div className={styles.box} key={index}>
                  {x}
                </div>
              ))}
            </div>
            <div className={styles.btns}>
              <button className={cn("button-circle-stroke", styles.button)}>
                <Icon name="lock" size="22" />
              </button>
              <button className={cn("button", styles.button)}>
                Start my free trial
              </button>
            </div>
          </div>
        </div>
      </div>
      <Interesting />
    </div>
  );
};

export default ChatBotService;
