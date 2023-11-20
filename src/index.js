import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import ServicesProvider from "./context/Service/ServicesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </HashRouter>
  </React.StrictMode>
);
