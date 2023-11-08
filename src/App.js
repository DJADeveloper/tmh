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
import { useEffect, useState } from "react";
import ScrollButton from "./components/ScrollButton";
import MetaPixel from "./components/MetaPixel/Index";
import SeoAIBlog from "./screens/Article/Post/SeoAIBlog";
import DigitalTransformation from "./screens/Article/Post/DigitalTransformation";
import AIInnovation from "./screens/Article/Post/AIInnovations";
import QuantumComputingBreakthroughs from "./screens/Article/Post/QuantumComputing";
import AugmentedRealityTrends from "./screens/Article/Post/ARTrends";
import CybersecurityEssentials from "./screens/Article/Post/CyberSecurity";
import SustainableTechInnovation from "./screens/Article/Post/SustainableTech";

function App() {
  // Function to initialize Tawk.to
  // const initTawkTo = () => {
  //   // Check if Tawk_API is already defined, if not, define it
  //   if (!window.Tawk_API) {
  //     window.Tawk_API = {};
  //     window.Tawk_LoadStart = new Date();

  //     const s1 = document.createElement("script"),
  //       s0 = document.getElementsByTagName("script")[0];

  //     s1.async = true;
  //     s1.src = "https://embed.tawk.to/6534fef0f2439e1631e6fc6b/1hdbg7mvn";
  //     s1.charset = "UTF-8";
  //     s1.setAttribute("crossorigin", "*");

  //     s0.parentNode.insertBefore(s1, s0);
  //   }
  // };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Here, 10 is an arbitrary number to provide a slight buffer.
      // Adjust as needed.
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Function to initialize Tawk.to

  // Chatbot initialization
  useEffect(() => {
    // initTawkTo();
  }, []);
  return (
    <>
      <MetaPixel pixelId="855079152604334" />
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
        {/* Blog Routes */}
        <Route
          path="/article-seo-ai"
          element={
            <Page>
              <SeoAIBlog />
            </Page>
          }
        />
        <Route
          path="/article-digital-transformation"
          element={
            <Page>
              <DigitalTransformation />
            </Page>
          }
        />
        <Route
          path="/article-ai-innovation"
          element={
            <Page>
              <AIInnovation />
            </Page>
          }
        />
        <Route
          path="/article-quantum-computing"
          element={
            <Page>
              <QuantumComputingBreakthroughs />
            </Page>
          }
        />
        <Route
          path="/article-ar-trends"
          element={
            <Page>
              <AugmentedRealityTrends />
            </Page>
          }
        />
        <Route
          path="/article-cyber-security-essentials"
          element={
            <Page>
              <CybersecurityEssentials />
            </Page>
          }
        />
        <Route
          path="/article-sustainable-tech"
          element={
            <Page>
              <SustainableTechInnovation />
            </Page>
          }
        />

        <Route path="/class/:serviceId" element={<Class01Details />} />
      </Routes>
      {showButton && (
        <ScrollButton
          onScroll={handleScrollToTop}
          arrowDirection="up"
          className="scroll-btn"
        />
      )}
    </>
  );
}

export default App;
