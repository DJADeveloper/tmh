import React from "react";

import FrontendService from "./SoftwareDevelopment/FrontendDevelopment";
import BackendService from "./SoftwareDevelopment/BackendDevelopment";
import EcommerceService from "./SoftwareDevelopment/EcommerceDevelopment";
import CMSService from "./SoftwareDevelopment/CMSDevelopment";
import PWAService from "./SoftwareDevelopment/PWADevelopment";
import WebMaintenanceService from "./SoftwareDevelopment/WebMaintenance";
import ChatBotService from "./ArtificialIntelliegence/ChatBot";
import RecommendationSystemsService from "./ArtificialIntelliegence/RecommendationSys";
import MachineLearningService from "./ArtificialIntelliegence/MachineLearning";
import NLPService from "./ArtificialIntelliegence/NLP";
import ComputerVisionService from "./ArtificialIntelliegence/ComputerVision";
import StoryBrandingService from "./DigitalMarketing/StoryBranding";
import ContentCreationService from "./DigitalMarketing/ContentCreation";
import SMMService from "./DigitalMarketing/SocialMediaManagement";
import SMAService from "./DigitalMarketing/SocialMediaAds";
import SEOService from "./DigitalMarketing/SEO";
import EmailMarketingService from "./DigitalMarketing/EmailMarketing";
import Catalog from "../Class01/Catalog";
import SoftwareService from "./Class02Details copy/ServicePage";

const servicesMapping = {
  "frontend-development": FrontendService,
  "backend-development": BackendService,
  "ecommerce-development": EcommerceService,
  "cms-development": CMSService,
  "pwa-development": PWAService,
  "web-maintenance": WebMaintenanceService,
  chatbot: ChatBotService,
  "recommendation-systems": RecommendationSystemsService,
  "machine-learning": MachineLearningService,
  "natural-language-processing": NLPService,
  "computer-vision": ComputerVisionService,
  "process-automation": ComputerVisionService,
  "story-branding": StoryBrandingService,
  "content-creation": ContentCreationService,
  "social-media-marketing": SMMService,
  "social-media-ads": SMAService,
  "search-engine-optimization": SEOService,
  "email-marketing": EmailMarketingService,
};

const ServiceComponent = () => {
  <>
    <SoftwareService />
    <Catalog />
  </>;
};

export default ServiceComponent;
