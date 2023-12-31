import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.sass";

const items = [
  {
    url: "/",
    text: "Home",
  },
  {
    text: "Services",
  },
];

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Our Digital Services</h2>
          <div className={styles.info}>
            Dive into the range of digital solutions we offer to empower your
            business.
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                {x.url ? (
                  <Link className={styles.link} to={x.url}>
                    {x.text}
                  </Link>
                ) : (
                  <>{x.text}</>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
