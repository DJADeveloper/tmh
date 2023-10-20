import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Class01 from "./screens/Class01";
import Class01Details from "./screens/Class01Details";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import BackendService from "./screens/Services/SoftwareDevelopment/BackendDevelopment";
import FrontendService from "./screens/Services/SoftwareDevelopment/FrontendDevelopment";
import EcommerceService from "./screens/Services/SoftwareDevelopment/EcommerceDevelopment";
import CMSService from "./screens/Services/SoftwareDevelopment/CMSDevelopment";
import PWAService from "./screens/Services/SoftwareDevelopment/PWADevelopment";
import WebMaintenanceService from "./screens/Services/SoftwareDevelopment/WebMaintenance";
import ChatBotService from "./screens/Services/ArtificialIntelliegence/ChatBot";
import RecommendationSystemsService from "./screens/Services/ArtificialIntelliegence/RecommendationSys";
import MachineLearningService from "./screens/Services/ArtificialIntelliegence/MachineLearning";
import NLPService from "./screens/Services/ArtificialIntelliegence/NLP";
import ComputerVisionService from "./screens/Services/ArtificialIntelliegence/ComputerVision";
import ProcessAutomationService from "./screens/Services/ArtificialIntelliegence/ProcessAutomation";
import StoryBrandingService from "./screens/Services/DigitalMarketing/StoryBranding";
import ContentCreationService from "./screens/Services/DigitalMarketing/ContentCreation";
import SMMService from "./screens/Services/DigitalMarketing/SocialMediaManagement";
import SMAService from "./screens/Services/DigitalMarketing/SocialMediaAds";
import SEOService from "./screens/Services/DigitalMarketing/SEO";
import EmailMarketingService from "./screens/Services/DigitalMarketing/EmailMarketing";
import SoftwareService from "./screens/Services/Class02Details copy/ServicePage";
import ServiceComponent from "./screens/Services";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page>
            <Home />
          </Page>
        }
      />
      <Route
        path="/features"
        element={
          <Page>
            <Features />
          </Page>
        }
      />
      <Route
        path="/pricing"
        element={
          <Page>
            <Pricing />
          </Page>
        }
      />
      <Route
        path="/contact"
        element={
          <Page>
            <Download />
          </Page>
        }
      />
      <Route
        path="/services"
        element={
          <Page>
            <Class01 />
          </Page>
        }
      />
      <Route
        path="/class01-details"
        element={
          <Page>
            <Class01Details />
          </Page>
        }
      />
      <Route
        path="/about"
        element={
          <Page>
            <Class02 />
          </Page>
        }
      />
      <Route
        path="/work"
        element={
          <Page>
            <Class02Details />
          </Page>
        }
      />
      <Route
        path="/lifestyle"
        element={
          <Page>
            <Lifestyle />
          </Page>
        }
      />
      <Route
        path="/article"
        element={
          <Page>
            <Article />
          </Page>
        }
      />
      <Route
        path="/service-frontend"
        element={
          <Page>
            <FrontendService />
          </Page>
        }
      />
      <Route
        path="/service-backend"
        element={
          <Page>
            <BackendService />
          </Page>
        }
      />
      <Route
        path="/service-ecommerce"
        element={
          <Page>
            <EcommerceService />
          </Page>
        }
      />
      <Route
        path="/service-cms"
        element={
          <Page>
            <CMSService />
          </Page>
        }
      />
      <Route
        path="/service-pwa"
        element={
          <Page>
            <PWAService />
          </Page>
        }
      />
      <Route
        path="/service-web-maintenance"
        element={
          <Page>
            <WebMaintenanceService />
          </Page>
        }
      />
      <Route
        path="/service-chatbot"
        element={
          <Page>
            <ChatBotService />
          </Page>
        }
      />
      <Route
        path="/service-recommendation-systems"
        element={
          <Page>
            <RecommendationSystemsService />
          </Page>
        }
      />
      <Route
        path="/service-machine-learning"
        element={
          <Page>
            <MachineLearningService />
          </Page>
        }
      />
      <Route
        path="/service-natural-language-processing"
        element={
          <Page>
            <NLPService />
          </Page>
        }
      />
      <Route
        path="/service-computer-vision"
        element={
          <Page>
            <ComputerVisionService />
          </Page>
        }
      />
      <Route
        path="/service-process-automation"
        element={
          <Page>
            <ProcessAutomationService />
          </Page>
        }
      />
      <Route
        path="/service-story-branding"
        element={
          <Page>
            <StoryBrandingService />
          </Page>
        }
      />
      <Route
        path="/service-content-creation"
        element={
          <Page>
            <ContentCreationService />
          </Page>
        }
      />
      <Route
        path="/service-social-media-marketing"
        element={
          <Page>
            <SMMService />
          </Page>
        }
      />
      <Route
        path="/service-social-media-ads"
        element={
          <Page>
            <SMAService />
          </Page>
        }
      />
      <Route
        path="/service-search-engine-optimization"
        element={
          <Page>
            <SEOService />
          </Page>
        }
      />
      <Route
        path="/service-email-marketing"
        element={
          <Page>
            <EmailMarketingService />
          </Page>
        }
      />

      <Route path="/class/:serviceId" element={<Class01Details />} />
    </Routes>
  );
}

export default App;
