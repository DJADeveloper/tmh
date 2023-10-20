import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";

const menu = [
  {
    title: "Blog",
    url: "/lifestyle",
  },
  {
    title: "Work",
    url: "/class01",
  },
  {
    title: "About",
    url: "/class02",
  },

  {
    title: "Contact",
    url: "/contact",
  },
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
    url: "https://www.instagram.com/themasteryhouse/",
  },
  {
    title: "linkedin",
    size: "16",
    url: "https://www.linkedin.com/in/the-mastery-house-727664204/",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link className={styles.logo} to="/">
                <div className={styles.logoContainer}>
                  <span className={styles.logoMainText}>The Mastery House</span>
                  <br />
                  <span className={styles.logoSubText}>
                    Creative Digital Agency
                  </span>
                </div>
              </Link>{" "}
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <NavLink
                    className={cn(styles.link, {
                      [styles.active]: pathname === x.url,
                    })}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                ))}
              </div>
              <Theme className={styles.theme} />
            </div>
            <div
              className={cn(styles.item, {
                [styles.active]: visible,
              })}
            >
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                footer nav
                <Icon name="arrow-bottom" size="9" />
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contact</div>
            <div className={styles.info}>
              <p>Tampa Florida</p>
              <p>New York</p>

              <p>813-670-2774</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Stay Updated</div>
            <div className={styles.info}>
              Join The Mastery House newsletter for exclusive insights, project
              showcases, and the latest digital trends.
            </div>
            <Subscription
              className={styles.subscription}
              placeholder="Your email address"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2023 THE MASTERY HOUSE LLC. All rights reserved
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
