import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";

import Steps from "./Steps";

import Book from "./Book";

import About from "./About";

import Review from "../../components/Review";
import Catalog from "../Class01/Catalog";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <About scrollToRef={scrollToRef} />
      <Catalog />
      <Steps />
      <Review className="section" />
      <Book />
      <div></div>
    </>
  );
};

export default Home;
