import React from "react";
import Plan from "./Plan";
import Comment from "./Comment";
import Faq from "./Faq";

const Pricing = () => {
  const planData = [
    {
      title: "Starter",
      color: "#4CAF50",
      description: "Great for personal projects",
      price: "9.99",
      note: "per month",
      button: "Begin",
      options: [
        "true",
        "false",
        "true",
        "false",
        "false",
        "true",
        "false",
        "true",
        "false",
        "true",
      ],
    },
    {
      title: "Professional",
      color: "#FFC107",
      description: "Suited for business websites",
      price: "29.99",
      note: "per month",
      button: "Go Pro",
      options: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
      ],
    },
    {
      title: "Enterprise",
      color: "#E91E63",
      description: "For large scale applications",
      button: "Contact Us",
      options: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
      ],
    },
  ];

  const planOptions = [
    {
      title: "Web Development Features",
      items: [
        {
          title: "Responsive Design",
          description: "Looks great on all devices",
        },
        {
          title: "CMS Integration",
          description: "Manage your content easily",
        },
        {
          title: "SEO Optimization",
          description: "Get found on search engines",
        },
        {
          title: "E-commerce Solutions",
          description: "Sell products online",
        },
        {
          title: "Custom Themes",
          description: "Stand out with unique designs",
        },
        {
          title: "Plugin Development",
          description: "Expand functionality as needed",
        },
        {
          title: "Database Integration",
          description: "Store and retrieve data",
        },
        {
          title: "Progressive Web Apps",
          description: "Works offline and feels like an app",
        },
        {
          title: "API Integrations",
          description: "Connect to external services",
        },
        {
          title: "Maintenance & Support",
          description: "Keep your site running smoothly",
        },
      ],
    },
  ];
  return (
    <>
      <Plan data={planData} options={planOptions} />
      <Comment />
      <Faq />
      {/* <Testimonials className="section-bg" /> */}
    </>
  );
};

export default Pricing;
