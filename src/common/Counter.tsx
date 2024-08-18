"use client"; // Only use this in components that need to run client-side code

import { useEffect } from "react";

export default function Counter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.freevisitorcounters.com/en/home/counter/733734/t/0";
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

  return (
    <img
      src="https://www.freevisitorcounters.com/en/counter/render/733734/t/0"
      className="absolute  z-[30]"
    />
  );
}
