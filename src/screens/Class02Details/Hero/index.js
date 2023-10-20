import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

import work1 from "../../../assets/images/portfolio/1.png";
import work2 from "../../../assets/images/portfolio/2.png";
import work3 from "../../../assets/images/portfolio/3.png";
import work4 from "../../../assets/images/portfolio/4.png";
import work5 from "../../../assets/images/portfolio/5.png";
import work6 from "../../../assets/images/portfolio/6.png";
import work7 from "../../../assets/images/portfolio/7.png";
import work8 from "../../../assets/images/portfolio/8.png";
import work9 from "../../../assets/images/portfolio/9.png";
import work10 from "../../../assets/images/portfolio/10.png";
import work11 from "../../../assets/images/portfolio/11.png";
import work12 from "../../../assets/images/portfolio/12.png";
import work13 from "../../../assets/images/portfolio/13.png";
import work14 from "../../../assets/images/portfolio/14.png";
import work15 from "../../../assets/images/portfolio/15.png";

const items = [
  {
    title: "Project Duration",
    content: "3 months",
    icon: "calendar",
    size: "16",
  },
  {
    title: "Team Size",
    content: "5 developers",
    icon: "user-group",
    size: "16",
  },
  {
    title: "Tech Stack",
    content: "React, Node.js, MongoDB",
    icon: "code",
    size: "20",
  },
  {
    title: "Project Type",
    content: "Web Application",
    icon: "desktop",
    size: "18",
  },
];

const ProjectLead = ({ status, name, position, avatar, items, note }) => {
  return (
    <div className={styles.wrap}>
      <div className={cn("status-green", styles.status)}>{status}</div>
      <div className={styles.card}>
        <img src={avatar} alt={name} className={styles.avatar} />
      </div>
      <div className={styles.info}>
        {/* <div className={styles.man}>{name}</div>
        <div className={styles.position}>{position}</div> */}
        {/* <div className={styles.list}>
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
        </div> */}
        {/* <div className={styles.note}>{note}</div> */}
      </div>
    </div>
  );
};

const Hero = () => {
  const projects = {
    row1: [
      {
        status: "NextNova (Marketing Agency)",
        name: "Dariana Hammes",
        position: "Lead Developer",
        avatar: work11,
        items: items,
        note: "A comprehensive software solution tailored to your needs, ",
      },
      {
        status: "TwoFi Exchange (NF)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work15,
        items: items,
        note: "Another project description and notes here.",
      },
      // {
      //   status: "exclusive software project",
      //   name: "Dariana Hammes",
      //   position: "Lead Developer",
      //   avatar: work3,
      //   items: items,
      //   note: "A comprehensive software solution tailored to your needs, ",
      // },
    ],
    row2: [
      {
        status: "French Chateau Getaways (Airbnb / Event Hosting)",
        name: "Dariana Hammes",
        position: "Lead Developer",
        avatar: work1,
        items: items,
        note: "A comprehensive software solution tailored to your needs, ",
      },
      {
        status: "Northwood Manor (ALF)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work4,
        items: items,
        note: "Another project description and notes here.",
      },
    ],
    row3: [
      {
        status: "Kind of a Big Dyl (Event Planning)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work3,
        items: items,
        note: "Another project description and notes here.",
      },
      {
        status: "A+ Roofing Excellence (Roofing Company)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work6,
        items: items,
        note: "Another project description and notes here.",
      },
    ],
    row4: [
      {
        status: "Inflight Cuisine (Food Delivery Service)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work7,
        items: items,
        note: "Another project description and notes here.",
      },
      {
        status: "UniFit (Fitness App)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work8,
        items: items,
        note: "Another project description and notes here.",
      },
    ],
    row5: [
      {
        status: "UniFit (Fitness Ecommerce Shop) ",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work9,
        items: items,
        note: "Another project description and notes here.",
      },
      {
        status: "Personal Portfolio ",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work10,
        items: items,
        note: "Another project description and notes here.",
      },
    ],
    row6: [
      {
        status: "Blessed Hands (Beauty Salon)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work2,
        items: items,
        note: "Another project description and notes here.",
      },
      {
        status: "FinTech Solutions (Financial Dashboard)",
        name: "John Doe",
        position: "Lead Designer",
        avatar: work14,
        items: items,
        note: "Another project description and notes here.",
      },
    ],
  };

  // You can add more project objects here as needed

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("status-green", styles.status)}>
            exclusive software project
          </div>
          <h1 className={cn("h1", styles.title)}>CREATIVE DIGITAL PORTFOLIO</h1>
          <div className={styles.info}>
            Bridging Dreams and Reality With Mastery House, witness the art of
            blending imagination with technology. Discover projects that
            resonate with excellence and innovation.
          </div>
        </div>
        <div className={styles.gallery}>
          {/* Image sections remain unchanged as per your instructions */}
        </div>

        <div className={styles.row}>
          {projects["row1"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
        <div className={styles.row}>
          {projects["row2"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
        <div className={styles.row}>
          {projects["row3"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
        <div className={styles.row}>
          {projects["row4"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
        <div className={styles.row}>
          {projects["row5"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
        <div className={styles.row}>
          {projects["row6"].map((project, idx) => (
            <ProjectLead key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
