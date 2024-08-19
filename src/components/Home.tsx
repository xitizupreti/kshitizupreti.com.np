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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold ">
          <span className="dynamic-text">Hello I&apos;m Kshitiz Upreti</span>
        </h1>
        <h1 className="text-2xl font-bold ">
          <span className="dynamic-text">CSIT Student</span>
        </h1>
        <div className="text">
          <h2 className="text-xl text-center mt-2">
            Web Dev turning coffee into code ☕️ <br /> JS, React, Next, MERN
            Stack
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
