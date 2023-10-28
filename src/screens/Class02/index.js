import React, { useRef } from "react";
import Hero from "./Hero";

import Offer from "../../components/Offer";

import Features from "../Features";

const Class02 = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      {/* <Advantages /> */}
      {/* <Workouts /> */}
      <Features />
      {/* <Trainers /> */}

      <Offer className="section-border-top" />
    </>
  );
};

export default Class02;
