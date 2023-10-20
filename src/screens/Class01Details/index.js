import React from "react";

import servicesData from "../../Data/serivcesData";
import ServiceComponent from "../Services";
import { useParams } from "react-router";

const Class01Details = () => {
  const { serviceId } = useParams();
  console.log("Extracted serviceId from URL:", serviceId);
  // Find the service matching the serviceId from the URL
  const service = servicesData.digitalMarketingServices.find(
    (service) => service.id === serviceId
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <ServiceComponent serviceId={serviceId} />
    </>
  );
};

export default Class01Details;
