import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";

import Book from "./Book";

import About from "./About";

import Review from "../../components/Review";

import Offer from "../../components/Offer";
import Catalog from "../Class01/Catalog";
import Portfolio from "../../components/Portfolio/PortfolioProjects/Portfolio";

// import Portfolio from "../Features/Portfolio";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <About scrollToRef={scrollToRef} />
      {/* <Portfolio /> */}
      {/* <Catalog /> */}
      <Steps />
      {/* <Clients /> */}
      {/* <Portfolio /> */}
      <Review className="section" />
      <Book />
      {/* <Offer className="section-border-top" /> */}
      <div>
        {/* <Intro scrollToRef={scrollToRef} /> */}
        {/* <ValueProps className="section" /> */}
        {/* <About /> */}
        {/* <Team /> */}
        {/* <Quality /> */}
        {/* <Advantages /> */}
        {/* <Workouts /> */}
      </div>
    </>
  );
};

export default Home;
