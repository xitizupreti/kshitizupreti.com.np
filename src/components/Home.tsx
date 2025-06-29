import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        alt="cover"
        fill
        src="/banner-01.jpg"
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
      <div className="absolute mt-20 md:mt-0 inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-3xl font-bold ">
          <span className="dynamic-text">Hi, I’m Kshitiz Upreti</span>
        </h1>
        <h1 className="text-xl sm:text-2xl font-bold px-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="dynamic-text">
            Frontend Developer & NOC Engineer
          </span>
        </h1>
        <div className="text scale-[0.75] sm:scale-100 text-center px-4 sm:px-0">
          <h2 className="text-lg mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
            Building responsive interfaces & stable networks 💻📡
          </h2>
          <h2 className="text-lg mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
            React, Next.js, TypeScript, WordPress, Elementor, Tailwind
          </h2>
          <span className="vertical first"></span>
          <span className="vertical second"></span>
          <span className="horizontal first"></span>
          <span className="horizontal second"></span>
        </div>
      </div>
    </div>
  );
}
