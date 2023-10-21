import React from "react";
import styles from "./MasteryStory.module.sass";
// import logo from "../../assets/images/logo/tmh-transparent-logo.png";
import Community from "../Community";

const MasteryStory = () => {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        <h1>The Story Behind The Mastery House</h1>
        <p>Where passion meets purpose in the digital realm.</p>
        <img src={logo} alt="the mastery house logo" />
      </header> */}
      <Community />
      {/* <section className={styles.story}>
        <div className={styles.leftColumn}>
          <p>
            Founded in 2019,The Mastery House began with a vision: harnessing
            the transformative power of technology for businesses. Beyond tasks
            and projects, we see the dreams and ambitions of our clients.
            Through our dedication, we light up the digital landscape, helping
            dreams turn into grand visions.
          </p>
        </div>
        <div className={styles.leftColumn}>
          <p>
            Storyscaping is our core. Instead of just creating websites or
            campaigns, we design immersive digital experiences. As we grow, our
            commitment remains: to give back. We dedicate a portion of our
            earnings to support autistic organizations, blending growth with
            purpose.
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default MasteryStory;
