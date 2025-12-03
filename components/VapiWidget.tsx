import React, { useEffect } from 'react';

const VapiWidget: React.FC = () => {
  useEffect(() => {
    // Prevent multiple initializations which cause "Meeting ended due to ejection"
    if (window.vapiInstance) return;

    const assistantId = "856b42a3-5c06-4511-b3d0-d124081c675f";
    const apiKey = "c67177dc-9ee2-4ba0-a69d-beacc25a56ff";

    const buttonConfig = {
      position: "bottom-left", 
      offset: "40px",
      width: "60px",
      height: "60px",
      idle: {
        color: "#1c1917", // Stone-900 (Dark)
        type: "round", // Changed from 'pill' to 'round' to match chat widget
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
      },
      loading: {
        color: "#57534e", // Stone-600
        type: "round"
      },
      active: {
        color: "#ef4444", // Red to indicate active call state
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
      }
    };

    const scriptUrl = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    
    const initVapi = () => {
      if (window.vapiSDK && !window.vapiInstance) {
        window.vapiInstance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistantId,
          config: buttonConfig,
        });
      }
    };

    // Check if script is already present
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.defer = true;
        script.async = true;
        script.onload = initVapi;
        document.body.appendChild(script);
    } else {
        // If script is already loaded (or loading), try to init
        initVapi();
    }
  }, []);

  return null;
};

export default VapiWidget;