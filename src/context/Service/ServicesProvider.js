// servicesProvider.js
import React, { useState } from "react";
import ServicesContext from "./ServicesContext";

const ServicesProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <ServicesContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
