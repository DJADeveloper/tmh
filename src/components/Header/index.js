import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";

const navLinks = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Work",
    url: "/work",
  },
  {
    title: "Services",
    url: "/services",
    // content: {
    //   menu: [
    //     {
    //       title: "Software Development",
    //       url: "/class02-details",
    //       image: "/images/menu-video.svg",
    //     },
    //     {
    //       title: "Digital Marketing",
    //       url: "/class02-details",
    //       image: "/images/menu-class.svg",
    //     },
    //     {
    //       title: "Artificial Intelligence",
    //       url: "/class02-details",
    //       image: "/images/menu-class.svg",
    //     },
    //   ],
    //   links: [
    //     {
    //       title: "Backend Development",
    //       url: "/service-backend",
    //       image: "/images/content/header-pic-1.png",
    //       image2x: "/images/content/header-pic-1@2x.png",
    //       category: "black",
    //       categoryText: "featured class",
    //       avatar: "/images/content/avatar-1.png",
    //       trainer: "Zack Beier",
    //       content:
    //         "Sweet and Tone is a seven-day bodyweight training program designed to boost your strength and endurance over the course of a week.",
    //       level: "green",
    //       levelText: "beginner",
    //     },
    //     {
    //       title: "Frontend Development",
    //       url: "/service-frontend",
    //       image: "/images/content/header-pic-2.png",
    //       image2x: "/images/content/header-pic-2@2x.png",
    //       category: "green",
    //       categoryText: "yoga",
    //       avatar: "/images/content/avatar-2.png",
    //       trainer: "Zack Beier",
    //     },
    //     {
    //       title: "Chatbot Integration",
    //       url: "/service-chatbot",
    //       image: "/images/content/header-pic-3.png",
    //       image2x: "/images/content/header-pic-3@2x.png",
    //       category: "purple",
    //       categoryText: "mindfulness",
    //       avatar: "/images/content/avatar-3.png",
    //       trainer: "Zack Beier",
    //     },
    //     {
    //       title: "Social Media Marketing",
    //       url: "/service-social-media-marketing",
    //       image: "/images/content/header-pic-4.png",
    //       image2x: "/images/content/header-pic-4@2x.png",
    //       category: "red",
    //       categoryText: "fitness",
    //       avatar: "/images/content/avatar-4.png",
    //       trainer: "Zack Beier",
    //     },
    //   ],
    //   trainer: [
    //     {
    //       title: "Darryl Adams",
    //       avatar: "/images/content/avatar-1.png",
    //       type: "Personal trainer",
    //     },
    //     {
    //       title: "Emily Moran",
    //       avatar: "/images/content/avatar-2.png",
    //       type: "Personal trainer",
    //     },
    //     {
    //       title: "Lyu Fernandez",
    //       avatar: "/images/content/avatar-3.png",
    //       type: "Personal trainer",
    //     },
    //     {
    //       title: "Andre Restrepo",
    //       avatar: "/images/content/avatar-4.png",
    //       type: "Personal trainer",
    //     },
    //   ],
    // },
  },
  // {
  //   title: "Blog",
  //   url: "/lifestyle",
  // },
  {
    title: "Contact",
    url: "/contact",
  },
  //   {
  //     title: "Lifestyle",
  //     url: "/lifestyle",
  //   },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/themasteryhouse",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/themasteryh",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/themasteryhouse",
  },
  {
    title: "linkedin",
    size: "16",
    url: "https://www.linkedin.com/in/the-mastery-house-727664204/",
  },
];

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  const { pathname } = useLocation();

  const handleOpenCalendly = () => {
    // Open Calendly widget
    if (window.Calendly) {
      window.Calendly.showPopupWidget("https://calendly.com/themasteryhouse");
    }
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <div className={styles.logoContainer}>
            <span className={styles.logoMainText}>The Mastery House</span>
            <br />
            <span className={styles.logoSubText}>Creative Digital Agency</span>
          </div>
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : (
                <NavLink
                  className={cn(styles.link, {
                    [styles.active]: pathname === x.url,
                  })}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
            </div>
            <div className={styles.socials}>
              {socials.map((x, index) => (
                <a
                  className={styles.social}
                  href={x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Icon name={x.title} size={x.size} />
                </a>
              ))}
            </div>
            <div
              className={cn("button-stroke button-small", styles.button)}
              onClick={handleOpenCalendly}
            >
              Book a Call
            </div>
            {/* <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              Signin
            </Link> */}
          </div>
        </div>
        {/* <div style={{ marginInline: 15, display: "flex" }}>
          <Theme />
        </div> */}
        <Link
          className={cn("button button-small", styles.button)}
          to="/contact"
        >
          Let's Talk
        </Link>
        {/* <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/"
        >
          Signin
        </Link> */}
        <button
          className={cn(styles.burger, {
            [styles.active]: visibleNav,
          })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
