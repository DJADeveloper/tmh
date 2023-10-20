import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Icon from "../../../../../components/Icon";
import Image from "../../../../../components/Image";
import ScrollParallax from "../../../../../components/ScrollParallax";

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

const Hero = () => {
  // const projects = {
  //   row1: [
  //     {
  //       status: "NextNova (Marketing Agency)",
  //       name: "Dariana Hammes",
  //       position: "Lead Developer",
  //       avatar: work11,
  //       items: items,
  //       note: "A comprehensive software solution tailored to your needs, ",
  //     },
  //     {
  //       status: "TwoFi Exchange (NF)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work15,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //     // {
  //     //   status: "exclusive software project",
  //     //   name: "Dariana Hammes",
  //     //   position: "Lead Developer",
  //     //   avatar: work3,
  //     //   items: items,
  //     //   note: "A comprehensive software solution tailored to your needs, ",
  //     // },
  //   ],
  //   row2: [
  //     {
  //       status: "French Chateau Getaways (Airbnb / Event Hosting)",
  //       name: "Dariana Hammes",
  //       position: "Lead Developer",
  //       avatar: work1,
  //       items: items,
  //       note: "A comprehensive software solution tailored to your needs, ",
  //     },
  //     {
  //       status: "Northwood Manor (ALF)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work4,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //   ],
  //   row3: [
  //     {
  //       status: "Kind of a Big Dyl (Event Planning)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work3,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //     {
  //       status: "A+ Roofing Excellence (Roofing Company)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work6,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //   ],
  //   row4: [
  //     {
  //       status: "Inflight Cuisine (Food Delivery Service)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work7,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //     {
  //       status: "UniFit (Fitness App)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work8,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //   ],
  //   row5: [
  //     {
  //       status: "UniFit (Fitness Ecommerce Shop) ",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work9,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //     {
  //       status: "Personal Portfolio ",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work10,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //   ],
  //   row6: [
  //     {
  //       status: "Blessed Hands (Beauty Salon)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work2,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //     {
  //       status: "FinTech Solutions (Financial Dashboard)",
  //       name: "John Doe",
  //       position: "Lead Designer",
  //       avatar: work14,
  //       items: items,
  //       note: "Another project description and notes here.",
  //     },
  //   ],
  // };

  // You can add more project objects here as needed

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("status-green", styles.status)}>
            exclusive software project
          </div>
          <h1 className={cn("h1", styles.title)}>
            Software Development Services
          </h1>
          <div className={styles.info}>
            In today's digital era, your online presence plays a critical role
            in your business's success. With our top-notch software development
            services, we ensure that you remain at the forefront of innovation.
            Here's a closer look at our offerings:
          </div>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Hero;
