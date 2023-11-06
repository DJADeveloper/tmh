import React, { useEffect } from "react";

const MetaPixel = ({ pixelId }) => {
  useEffect(() => {
    // Define the fbq function setup
    const setupFBQ = () => {
      if (window.fbq) return;
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = !0;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
    };

    // Initialize the fbq function
    setupFBQ();

    // Create the script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.onload = () => {
      // Call fbq functions after the script has loaded.
      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    };

    // Insert the script tag into the document
    document.head.appendChild(script);

    return () => {
      // Remove the script tag on cleanup
      document.head.removeChild(script);
    };
  }, [pixelId]);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt="pixel"
      />
    </noscript>
  );
};

export default MetaPixel;
