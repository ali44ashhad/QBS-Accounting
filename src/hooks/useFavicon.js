

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useFavicon() {
  const location = useLocation();

  // Map routes to favicon paths
  const iconMap = {
    "/services": "/qbssolutions.png",
    "/about-second": "/qbssolutions.png",
    "/contact-us-second": "/qbssolutions.png",
    "product": "/qbssolutions.png",
    "/privacy-policy-second": "/qbssolutions.png",
    "/refund-policy": "/qbssolutions.png",
    "/faq": "/qbssolutions.png",
    "/downloads": "/qbssolutions.png",
    "/authenticity": "/qbssolutions.png",
    "terms-conditions": "/qbssolutions.png"
  };

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");

    if (!favicon) return;

    // Find icon for current route or fallback to default
    const icon = iconMap[location.pathname] || "/default-icon.png";
    favicon.href = icon;
  }, [location.pathname]);
}
