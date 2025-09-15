import { useEffect } from 'react';

const CruxChatbotScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://w0s4400g4gk8c0w840cc4o8g.crux-consulting.ai/embed-loader.js";
    script.setAttribute('data-api-endpoint', 'https://w0s4400g4gk8c0w840cc4o8g.crux-consulting.ai/chat');
    script.setAttribute('data-main-server', 'https://w0s4400g4gk8c0w840cc4o8g.crux-consulting.ai');
    script.async = true;

    document.body.appendChild(script);

    console.log("CruxChatbotScript loaded");

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default CruxChatbotScript;