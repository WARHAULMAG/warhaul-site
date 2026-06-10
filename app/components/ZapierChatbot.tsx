"use client";

import { useEffect } from "react";

const CHATBOT_ID = "cmq7rjuii0033b6kusic1lequ";
const SCRIPT_ID = "warhaul-zapier-chatbot-script";
const EMBED_ID = "warhaul-zapier-chatbot";

export default function ZapierChatbot() {
  useEffect(() => {
    const addChatbot = () => {
      const existingMainChatbot = document.getElementById(EMBED_ID);

      if (existingMainChatbot) {
        return;
      }

      const oldChatbots = document.querySelectorAll(
        "zapier-interfaces-chatbot-embed"
      );

      oldChatbots.forEach((chatbot) => {
        chatbot.remove();
      });

      const chatbot = document.createElement(
        "zapier-interfaces-chatbot-embed"
      );

      chatbot.id = EMBED_ID;
      chatbot.setAttribute("is-popup", "true");
      chatbot.setAttribute("chatbot-id", CHATBOT_ID);

      document.body.appendChild(chatbot);
    };

    const existingScript = document.getElementById(SCRIPT_ID);

    if (existingScript) {
      addChatbot();
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.type = "module";
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";

    script.onload = addChatbot;

    document.body.appendChild(script);
  }, []);

  return null;
}