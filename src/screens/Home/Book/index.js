import React, { useEffect } from "react";
import cn from "classnames";

import styles from "./Book.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";
import techMeeting from "../../../assets/images/3DTech/4. Man With Calendar.png";

const items = [
  {
    title: "Initial Consultation",
    color: "#45B26B",
    images: "/images/content/user.svg",
    alt: "user",
    content:
      "Let's discuss how we can redefine the digital narrative together.",
  },
  {
    title: "Advanced Strategy Session",
    color: "#9757D7",
    images: "/images/content/medal-1.svg",
    alt: "medal",
    content: "Deep dive into your digital needs and plot the course ahead.",
  },
  {
    title: "Exclusive Partnership Meeting",
    color: "#3772FF",
    images: "/images/content/lightning.svg",
    alt: "lightning",
    content: "Let's collaborate and create digital excellence.",
  },
];

const Book = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://assets.calendly.com/assets/external/widget.js";
    script1.async = true;
    document.body.appendChild(script1);

    // const script2 = document.createElement("script");
    // script2.textContent = `
    //   window.onload = function() {
    //     Calendly.initBadgeWidget({
    //       url: 'https://calendly.com/themasteryhouse',
    //       text: 'Book a Call',
    //       color: '',
    //       textColor: '#FF4757',
    //       branding: true
    //     });
    //   };
    // `;
    // document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      // document.body.removeChild(script2);
    };
  }, []);

  const handleOpenCalendly = () => {
    // Open Calendly widget
    if (window.Calendly) {
      window.Calendly.showPopupWidget("https://calendly.com/themasteryhouse");
    }
  };
  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet={techMeeting}
              srcSetDark={techMeeting}
              src={techMeeting}
              srcDark={techMeeting}
              alt="Book pic"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            {/* <img
              srcSet="/images/tech/8 Smartphone.png"
              src="/images/tech/8 Smartphone.png"
              alt="Ball"
            /> */}
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/tech/8 Smartphone.png"
              src="/images/tech/8 Smartphone.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            offset={300}
          >
            <img
              srcSet="/images/tech/8 Smartphone.png"
              src="/images/tech/22 Wifi.png"
              alt="Dumbbells"
            />
          </ScrollParallax>
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Book a Call</h2>
          <div className={styles.info}>
            Join us at The Mastery House in Tampa. Let's set the benchmark in
            digital excellence.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.images} alt={x.alt} />
                </div>
                <div className={styles.details}>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.content}>{x.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.note}>
            <strong className={styles.red}>Lets Talk</strong> about how The
            Mastery House
            <strong className={styles.black}>can help</strong>
            you.
          </div>
          <div className={styles.btns}>
            <div
              className={cn("button", styles.button)}
              onClick={handleOpenCalendly}
            >
              <span>Book a Call</span>
              <Icon name="arrow-right" size="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
