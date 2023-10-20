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
import MobibleDevelopmentService from "./screens/Services/SoftwareDevelopment/MobilDevelopment";

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
      {/* SERVICES */}
      <Route
        path="/service-frontend"
        element={
          <Page>
            <FrontendService service="frontend" />
          </Page>
        }
      />
      <Route
        path="/service-backend"
        element={
          <Page>
            <BackendService service="backend" />
          </Page>
        }
      />
      <Route
        path="/service-ecommerce"
        element={
          <Page>
            <EcommerceService service="ecommerce" />
          </Page>
        }
      />
      <Route
        path="/service-mobile"
        element={
          <Page>
            <MobibleDevelopmentService service="mobile" />
          </Page>
        }
      />
      <Route
        path="/service-cms"
        element={
          <Page>
            <CMSService service="cms" />
          </Page>
        }
      />
      <Route
        path="/service-pwa"
        element={
          <Page>
            <PWAService service="pwa" />
          </Page>
        }
      />
      <Route
        path="/service-web-maintenance"
        element={
          <Page>
            <WebMaintenanceService service="web-maintenance" />
          </Page>
        }
      />
      <Route
        path="/service-chatbot"
        element={
          <Page>
            <ChatBotService service="chatbot" />
          </Page>
        }
      />
      <Route
        path="/service-recommendation-systems"
        element={
          <Page>
            <RecommendationSystemsService service="recommended" />
          </Page>
        }
      />
      <Route
        path="/service-machine-learning"
        element={
          <Page>
            <MachineLearningService service="ml" />
          </Page>
        }
      />
      <Route
        path="/service-natural-language-processing"
        element={
          <Page>
            <NLPService service="nlp" />
          </Page>
        }
      />
      <Route
        path="/service-computer-vision"
        element={
          <Page>
            <ComputerVisionService service="computer-vision" />
          </Page>
        }
      />
      <Route
        path="/service-process-automation"
        element={
          <Page>
            <ProcessAutomationService service="process-automation" />
          </Page>
        }
      />
      <Route
        path="/service-story-branding"
        element={
          <Page>
            <StoryBrandingService service="storybranding" />
          </Page>
        }
      />
      <Route
        path="/service-content-creation"
        element={
          <Page>
            <ContentCreationService service="content-creation" />
          </Page>
        }
      />
      <Route
        path="/service-social-media-marketing"
        element={
          <Page>
            <SMMService service="social-media-marketing" />
          </Page>
        }
      />
      <Route
        path="/service-social-media-ads"
        element={
          <Page>
            <SMAService service="social-ads" />
          </Page>
        }
      />
      <Route
        path="/service-search-engine-optimization"
        element={
          <Page>
            <SEOService service="seo" />
          </Page>
        }
      />
      <Route
        path="/service-email-marketing"
        element={
          <Page>
            <EmailMarketingService service="email-marketing" />
          </Page>
        }
      />

      <Route path="/class/:serviceId" element={<Class01Details />} />
    </Routes>
  );
}

export default App;
