const servicesData = {
  //   Software Development Data
  webDevelopmentServices: [
    // FRONTEND - 0
    {
      id: "frontend-development",
      title: "Frontend Development",
      info: "Crafting dynamic digital experiences tailored for your vision. Responsive designs, interactive UI/UX, and robust web applications. Elevate with a brand-driven platform.",
      features: [
        "Customized web designs tailored to your brand",
        "Optimized for all devices including mobile, tablet, and desktop",
        "Utilizing the latest technologies for fast and efficient websites",
        "High-quality code ensuring longevity and ease of maintenance",
      ],
      benefits: {
        title: "Build Your Next Frontend App With Us",
        content:
          "Elevate your digital presence with cutting-edge designs, tailor-made to amplify your brand's impact.",
      },
      status: [
        {
          status: "green",
          statusContent: "React",
        },
        {
          status: "grey",
          statusContent: "Vue.js",
        },
      ],
      items: [
        {
          title: "Interface Type",
          content: "Interactive Web Interfaces",
          icon: "design",
          size: "16",
        },
        {
          title: "Framework",
          content: "React/Vue.js",
          icon: "framework",
          size: "16",
        },
        {
          title: "Compatibility",
          content: "Cross-browser Compatibility",
          icon: "browser",
          size: "20",
        },
      ],
    },
    // BACKEND - 1
    {
      title: "Supercharge Your Backend Operations",
      info: "Delivering robust, scalable, and efficient backend solutions for a powerful digital experience.",
      features: [
        "End-to-End Data Management",
        "Highly Secure and Compliant Architectures",
        "Scalable Microservices and API Development",
        "Real-time Data Processing and Analytics",
        "Optimized Cloud Deployments",
        "Advanced Backend Frameworks Expertise",
      ],
      benefits: {
        title: "Supercharge Your Backend: Power & Efficiency",
        content:
          "A robust backend ensures your application runs smoothly, securely, and efficiently.",
      },
      status: [
        {
          status: "green",
          statusContent: "Node.js",
        },
        {
          status: "grey",
          statusContent: "Django",
        },
      ],
      items: [
        {
          title: "Server",
          content: "Node.js/Django",
          icon: "server",
          size: "16",
        },
        {
          title: "Database",
          content: "SQL/NoSQL",
          icon: "database",
          size: "16",
        },
        {
          title: "Architecture",
          content: "Microservices/APIs",
          icon: "architecture",
          size: "20",
        },
      ],
    },
    // ECOMMERCE - 2
    {
      id: "ecommerce-development",
      title: "E-commerce Development",
      info: "Building tailored e-commerce platforms that drive sales and provide seamless user experiences. From product management to secure payment integrations, we cover it all.",
      features: [
        "Custom product management solutions",
        "Integrated and secure payment gateways",
        "User-friendly designs to boost conversions",
        "SEO-optimized platforms for better online visibility",
        "Responsive design ensuring smooth shopping experiences on all devices",
        "Robust backend ensuring high-speed and secure transactions",
      ],
      benefits: {
        title: "Revolutionize Online Sales with E-commerce Solutions",
        content:
          "Craft an unparalleled online shopping experience for your customers with a secure, fast, and user-friendly platform.",
      },
      status: [
        {
          status: "green",
          statusContent: "Magento",
        },
        {
          status: "grey",
          statusContent: "Shopify",
        },
      ],
      items: [
        {
          title: "Shop Type",
          content: "B2C/B2B/E-marketplace",
          icon: "shop",
          size: "16",
        },
        {
          title: "Payment",
          content: "Secure Payment Gateways",
          icon: "payment",
          size: "16",
        },
        {
          title: "Integration",
          content: "CRM, ERP, Analytics",
          icon: "integration",
          size: "20",
        },
      ],
    },
    // CMS - 3
    {
      id: "cms-development",
      title: "CMS Development",
      info: "Creating user-friendly content management systems that allow you to manage, modify, and publish content with ease. Our CMS solutions are intuitive and customizable to your specific needs.",
      features: [
        "Customizable CMS platforms tailored to business needs",
        "Easy content publishing and management functionalities",
        "SEO-friendly structures to enhance web visibility",
        "Intuitive UI/UX ensuring seamless content updates",
        "Secure user roles and permissions",
        "Extensive plugin and theme support",
      ],
      benefits: {
        title: "Empower Your Content Strategy with Our CMS",
        content:
          "Streamline your content management process with a CMS that is easy-to-use, flexible, and geared for optimal web performance.",
      },
      status: [
        {
          status: "green",
          statusContent: "WordPress",
        },
        {
          status: "grey",
          statusContent: "Drupal",
        },
      ],
      items: [
        {
          title: "Platform",
          content: "WordPress/Drupal",
          icon: "platform",
          size: "16",
        },
        {
          title: "Customization",
          content: "Themes & Plugins",
          icon: "customize",
          size: "16",
        },
        {
          title: "Content",
          content: "SEO-Optimized & Responsive",
          icon: "content",
          size: "20",
        },
      ],
    },
    // PWA - 4
    {
      id: "progressive-web-apps",
      title: "Progressive Web Apps (PWAs)",
      info: "Development of web applications with offline capabilities, push notifications, and fast load times.",
      features: [
        "Offline Capabilities",
        "Push Notifications",
        "Fast Load Times",
      ],
      benefits: {
        title: "Progressive Web Apps: Future of Web Development",
        content:
          "PWAs provide the flexibility and features of both websites and native apps, ensuring consistent performance.",
      },
      status: [
        {
          status: "green",
          statusContent: "Service Workers",
        },
        {
          status: "grey",
          statusContent: "App Shell Model",
        },
      ],
      items: [
        {
          title: "Offline Mode",
          content: "Service Workers",
          icon: "offline",
          size: "16",
        },
        {
          title: "Engagement",
          content: "Push Notifications",
          icon: "notification",
          size: "16",
        },
        {
          title: "Performance",
          content: "Fast Load Times",
          icon: "performance",
          size: "20",
        },
      ],
    },
    // WEB MAINTENANCE - 5
    {
      id: "web-maintenance-support",
      title: "Web Maintenance & Support",
      info: "Ensuring your web assets remain in optimal condition through bug fixes, performance optimization, and regular updates.",
      features: ["Bug Fixes", "Performance Optimization", "Regular Updates"],
      benefits: {
        title: "Web Maintenance & Support: Always at Your Service",
        content:
          "Continuous support ensures your website remains updated, secure, and bug-free.",
      },

      status: [
        {
          status: "green",
          statusContent: "WordPress",
        },
        {
          status: "grey",
          statusContent: "Joomla",
        },
      ],
      items: [
        {
          title: "Bug Fixes",
          content: "Regular Code Reviews",
          icon: "bug",
          size: "16",
        },
        {
          title: "Updates",
          content: "CMS/Plugin Updates",
          icon: "update",
          size: "16",
        },
        {
          title: "Performance",
          content: "Server & Database Optimization",
          icon: "performance",
          size: "20",
        },
      ],
    },
  ],
  //  Artificial Intelligence Data
  aiMachineLearningServices: [
    // CHATBOT - 0
    {
      id: "chatbots-virtual-assistants",
      title: "Chatbots & Virtual Assistants",
      info: "Integration of chatbots and virtual assistants with web platforms and multi-platform support.",
      features: [
        "Web Integration",
        "Conversational Flows",
        "Multi-platform Support",
      ],
      benefits: {
        title: "Chatbots & Virtual Assistants: Your 24/7 Support",
        content:
          "Automate customer interactions, providing quick and efficient responses.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "Dialogflow",
        },
      ],
      items: [
        {
          title: "Platform",
          content: "Facebook Messenger, Slack, etc.",
          icon: "platform",
          size: "16",
        },
        {
          title: "Tech Stack",
          content: "Python, Rasa, Dialogflow",
          icon: "stack",
          size: "16",
        },
        {
          title: "Integration",
          content: "CRM, Email, Databases",
          icon: "integration",
          size: "20",
        },
      ],
    },
    // RECOMMENDATION-SYSTEMS - 1
    {
      id: "recommendation-systems",
      title: "Recommendation Systems",
      info: "Developing personalized content and product recommendation engines to enhance user experience.",
      features: [
        "Content Personalization",
        "Product Recommendations",
        "Behavioral Analysis",
      ],
      benefits: {
        title: "Recommendation Systems: Tailored Experiences",
        content:
          "Enhance user retention with personalized content and product suggestions.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "TensorFlow",
        },
      ],
      items: [
        {
          title: "Type",
          content: "Collaborative Filtering, Content-Based",
          icon: "type",
          size: "16",
        },
        {
          title: "Implementation",
          content: "E-commerce, Media Platforms",
          icon: "implementation",
          size: "16",
        },
        {
          title: "Analytics",
          content: "User Behavior, Conversion Rates",
          icon: "analytics",
          size: "20",
        },
      ],
    },
    // PROCESS AUTOMATION - 2
    {
      id: "process-automation",
      title: "Process Automation",
      info: "Automating repetitive tasks, enhancing efficiency, and minimizing errors with state-of-the-art solutions.",
      features: [
        "Task Automation",
        "Workflow Optimization",
        "Data Extraction & Processing",
      ],
      benefits: {
        title: "Process Automation: Efficiency & Accuracy",
        content:
          "Streamline operations, reduce costs, and enhance productivity.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "RPA Tools",
        },
      ],
      items: [
        {
          title: "Tools",
          content: "UiPath, Blue Prism, etc.",
          icon: "tools",
          size: "16",
        },
        {
          title: "Use Cases",
          content: "Data Entry, Invoice Processing, Report Generation",
          icon: "usecase",
          size: "16",
        },
        {
          title: "ROI",
          content: "Reduced Labor Costs, Faster Processing",
          icon: "roi",
          size: "20",
        },
      ],
    },
    // MACHINE-LEARNING - 3
    {
      id: "machine-learning",
      title: "Machine Learning",
      info: "Implementing data-driven solutions by training models on large datasets to make predictions or decisions.",
      features: [
        "Predictive Analysis",
        "Data Modeling & Training",
        "Deep Learning Implementations",
      ],
      benefits: {
        title: "Machine Learning: Unlock Data-Driven Decisions",
        content:
          "Harness the power of data to derive actionable insights and make intelligent business decisions.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "Scikit-Learn",
        },
      ],
      items: [
        {
          title: "Type",
          content: "Supervised, Unsupervised, Reinforcement",
          icon: "type",
          size: "16",
        },
        {
          title: "Implementation",
          content: "Classification, Regression, Clustering",
          icon: "implementation",
          size: "16",
        },
        {
          title: "Use Cases",
          content: "Forecasting, Anomaly Detection, Image Recognition",
          icon: "usecase",
          size: "20",
        },
      ],
    },
    // NLP - 4
    {
      id: "natural-language-processing",
      title: "Natural Language Processing (NLP)",
      info: "Developing systems that can understand, interpret, and respond to human language in a valuable way.",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
      ],
      benefits: {
        title: "NLP: Understand & Interpret Human Language",
        content:
          "Harness the capability to process and analyze large amounts of natural language data.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "NLTK",
        },
      ],
      items: [
        {
          title: "Techniques",
          content: "Tokenization, POS Tagging, Named Entity Recognition",
          icon: "techniques",
          size: "16",
        },
        {
          title: "Applications",
          content: "Chatbots, Search Engines, Speech Recognition",
          icon: "applications",
          size: "16",
        },
        {
          title: "Frameworks",
          content: "TensorFlow, PyTorch, SpaCy",
          icon: "frameworks",
          size: "20",
        },
      ],
    },
    //COMPUTER VISION - 5
    {
      id: "computer-vision",
      title: "Computer Vision",
      info: "Building systems that can gain high-level understanding from digital images or videos.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition"],
      benefits: {
        title: "Computer Vision: Visual Understanding at Scale",
        content:
          "Automate tasks that require visual cognition, enhancing efficiency and accuracy.",
      },
      status: [
        {
          status: "green",
          statusContent: "Python",
        },
        {
          status: "grey",
          statusContent: "OpenCV",
        },
      ],
      items: [
        {
          title: "Techniques",
          content: "Segmentation, Feature Extraction, Image Enhancement",
          icon: "techniques",
          size: "16",
        },
        {
          title: "Applications",
          content: "Surveillance, Healthcare, Automotive",
          icon: "applications",
          size: "16",
        },
        {
          title: "Frameworks",
          content: "TensorFlow, PyTorch",
          icon: "frameworks",
          size: "20",
        },
      ],
    },
  ],
  //   Digital Marketing Data
  digitalMarketingServices: [
    //STORYBRANING - 0
    {
      id: "storybranding",
      title: "Storybranding",
      info: "Crafting compelling brand narratives that resonate with your audience.",
      features: [
        "Brand-focused storytelling",
        "Content that connects emotionally",
        "Narratives for various platforms (video, text, podcast)",
      ],
      benefits: {
        title: "Storybranding: Narrate Your Brand's Tale",
        content:
          "Craft compelling narratives that resonate with your audience, building brand identity and trust.",
      },
      status: [
        {
          status: "green",
          statusContent: "SEO Optimization",
        },
        {
          status: "grey",
          statusContent: "Content Creation",
        },
      ],
      items: [
        {
          title: "Content Type",
          content: "Videos, Articles, Infographics",
          icon: "content",
          size: "16",
        },
        {
          title: "Platform",
          content: "Facebook, Instagram, LinkedIn",
          icon: "platform",
          size: "16",
        },
        {
          title: "Audience",
          content: "B2B, B2C, Custom Audience Segments",
          icon: "audience",
          size: "20",
        },
      ],
    },
    //CONTENT CREATION - 1
    {
      id: "content-creation",
      title: "Content Creation",
      info: "Generating audience-tailored content that drives engagement and value.",
      features: [
        "Content strategy development",
        "Multimedia content (blogs, videos, infographics)",
        "SEO-optimized content creation",
      ],
      benefits: {
        title: "Content Creation: Value for Your Audience",
        content:
          "Produce high-quality, tailored content that educates, engages, and drives traffic.",
      },
      status: [
        {
          status: "green",
          statusContent: "Blog Writing",
        },
        {
          status: "grey",
          statusContent: "Video Production",
        },
      ],
      items: [
        {
          title: "Medium",
          content: "Blogs, Videos, Podcasts",
          icon: "medium",
          size: "16",
        },
        {
          title: "SEO Level",
          content: "Keyword Optimization, Backlinking",
          icon: "seo",
          size: "16",
        },
        {
          title: "Audience",
          content: "Target Demographics, Buyer Personas",
          icon: "audience",
          size: "20",
        },
      ],
    },
    // SOCIAL MEDIA MARKETING - 2
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      info: "Building brand presence and engagement on social platforms organically.",
      features: [
        "Social media strategy formulation",
        "Regular posting & engagement",
        "Influencer collaboration & partnerships",
      ],
      benefits: {
        title: "Social Media Marketing: Cultivate a Digital Community",
        content:
          "Boost brand awareness and foster relationships with your audience organically on the platforms they frequent.",
      },
      status: [
        {
          status: "green",
          statusContent: "Active Engagement",
        },
        {
          status: "grey",
          statusContent: "Content Planning",
        },
      ],
      items: [
        {
          title: "Social Platforms",
          content: "Facebook, Instagram, Twitter, LinkedIn, Pinterest, TikTok",
          icon: "platform",
          size: "16",
        },
        {
          title: "Content Types",
          content: "Posts, Stories, Reels, Live Sessions",
          icon: "content",
          size: "16",
        },
        {
          title: "Audience Analysis",
          content: "Engagement Metrics, Audience Insights",
          icon: "analysis",
          size: "20",
        },
      ],
    },

    //SOCIAL MEDIA ADS - 3
    {
      id: "social-media-advertising",
      title: "Social Media Advertising",
      info: "Amplifying your brand's reach through targeted social media campaigns.",
      features: [
        "Platform-specific ad strategies",
        "Target audience segmentation",
        "Performance analytics & reporting",
      ],
      benefits: {
        title: "Social Media Advertising: Amplify Your Message",
        content:
          "Promote your brand on platforms where your audience hangs out, using targeted strategies for maximum impact.",
      },
      status: [
        {
          status: "green",
          statusContent: "Ad Design",
        },
        {
          status: "grey",
          statusContent: "Campaign Analysis",
        },
      ],
      items: [
        {
          title: "Ad Platform",
          content: "Facebook, Instagram, LinkedIn, Twitter",
          icon: "platform",
          size: "16",
        },
        {
          title: "Budgeting",
          content: "Ad Spend, ROI Predictions",
          icon: "budget",
          size: "16",
        },
        {
          title: "Metrics",
          content: "Clicks, Impressions, Conversions",
          icon: "metrics",
          size: "20",
        },
      ],
    },
    //SEO - 4
    {
      id: "seo",
      title: "SEO",
      info: "Optimizing content for search engines to boost organic traffic and online visibility.",
      features: [
        "On-page & Off-page optimization",
        "Keyword research & targeting",
        "Site speed & mobile optimization",
      ],
      benefits: {
        title: "SEO: Visibility Where It Counts",
        content:
          "Optimize your online content to rank higher on search engines, drawing organic and high-intent traffic.",
      },
      status: [
        {
          status: "green",
          statusContent: "On-page SEO",
        },
        {
          status: "grey",
          statusContent: "Backlink Strategy",
        },
      ],
      items: [
        {
          title: "Tools",
          content: "Google Analytics, SEMrush, Ahrefs",
          icon: "tools",
          size: "16",
        },
        {
          title: "Strategy",
          content: "Keyword Mapping, Content Planning",
          icon: "strategy",
          size: "16",
        },
        {
          title: "Improvements",
          content: "Site Speed, Mobile Optimization, UX",
          icon: "improvements",
          size: "20",
        },
      ],
    },
    //EMAIL MARKETING - 5
    {
      id: "email-marketing",
      title: "Email Marketing",
      info: "Designing engaging email campaigns tailored to your audience's preferences.",
      features: [
        "Segmented email campaigns",
        "Responsive email design",
        "Open rate & CTR tracking",
      ],
      benefits: {
        title: "Email Marketing: Direct Channel to Customers",
        content:
          "Engage your subscribers with personalized content, offers, and news, driving conversions and loyalty.",
      },
      status: [
        {
          status: "green",
          statusContent: "Campaign Design",
        },
        {
          status: "grey",
          statusContent: "Analytics",
        },
      ],
      items: [
        {
          title: "Platforms",
          content: "Mailchimp, SendGrid, ConvertKit",
          icon: "platform",
          size: "16",
        },
        {
          title: "Metrics",
          content: "Open Rate, Click Rate, Unsubscribe Rate",
          icon: "metrics",
          size: "16",
        },
        {
          title: "List Management",
          content: "Segmentation, List Hygiene",
          icon: "management",
          size: "20",
        },
      ],
    },
  ],
};

export default servicesData;
