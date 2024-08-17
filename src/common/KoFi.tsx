"use client"; // Only use this in components that need to run client-side code

import { useEffect } from "react";

export default function Kofi() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).kofiWidgetOverlay) {
        (window as any).kofiWidgetOverlay.draw("kshitizupreti", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support Us",
          "floating-chat.donateButton.background-color": "#ffa460",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
