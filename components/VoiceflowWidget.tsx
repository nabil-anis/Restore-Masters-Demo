import React, { useEffect } from 'react';

const VoiceflowWidget: React.FC = () => {
  useEffect(() => {
    const scriptUrl = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    
    // Function to initialize Voiceflow
    const initVoiceflow = () => {
      if (window.voiceflow?.chat?.load) {
        window.voiceflow.chat.load({
          verify: { projectID: '69303c3106df42f33f9ea41e' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };

    // Check if script is already present to prevent duplicates
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.type = "text/javascript";
      script.onload = initVoiceflow;
      // Insert before the first script tag as per snippet, or append to body
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.body.appendChild(script);
      }
    } else {
      // If script exists, just try to load
      initVoiceflow();
    }
  }, []);

  return null;
};

export default VoiceflowWidget;