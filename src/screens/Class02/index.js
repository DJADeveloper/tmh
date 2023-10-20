import React, { useRef } from "react";
import Hero from "./Hero";
import Trainers from "./Trainers";

import Programs from "../../components/Programs";
import Offer from "../../components/Offer";

const Class02 = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <Programs
        scrollToRef={scrollToRef}
        classNameTitle="h4"
        title="Digital Solutions Tailored to Your Needs"
        description="Experience 1-on-1 consulting and project development to bring your visions to life. From software engineering to AI integration and digital marketing strategies, we ensure your brand stands out in the digital realm."
      />

      <Trainers />
      <Offer className="section-border-top" />
    </>
  );
};

export default Class02;
