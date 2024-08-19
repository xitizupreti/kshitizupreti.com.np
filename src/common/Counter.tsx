"use client"; // Only use this in components that need to run client-side code

import Image from "next/image";
import { useEffect } from "react";

export default function Counter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.freevisitorcounters.com/en/home/counter/733734/t/0";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Image
      alt="Counter"
      width={102}
      height={88}
      src="https://www.freevisitorcounters.com/en/counter/render/733734/t/0"
      className="absolute logo cursor-pointer right-[15px] xl:top-[15px] top-[65px] md:block z-[30]"
    />
  );
}
