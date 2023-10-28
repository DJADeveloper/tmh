import React, { useRef } from "react";
import styles from "../../styles/global.sass";
import Hero from "./Hero";

// import Steps from "./Steps";

import Book from "./Book";

// import About from "./About";

import Program from "../Features/Program";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <div className={styles.container}>
      <Hero scrollToRef={scrollToRef} />
      <Program className="section" />
      {/* <Review /> */}
      <Book className="section" />
    </div>
  );
};

export default Home;
