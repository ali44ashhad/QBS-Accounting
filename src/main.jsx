import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import Router
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
