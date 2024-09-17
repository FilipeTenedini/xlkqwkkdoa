"use client";

// components/GoogleTag.js
import { useEffect } from "react";

const GooglePixel = () => {
  useEffect(() => {
    // Adiciona o script do Google Tag ao DOM
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-16705811863";
    scriptTag.async = true;
    document.head.appendChild(scriptTag);

    // Inicializa o Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-16705811863");
  }, []);

  return null; // Não precisa de <noscript> neste caso
};

export default GooglePixel;
