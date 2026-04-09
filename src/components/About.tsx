import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row relative top-[-100px] p-9 w-full h-[auto]"
    >
      <div className="flex flex-col md:w-1/2">
        <h1 className="uppercase text-[#ffa460] md:text-4xl  text-4xl p-4 md:p-6 text-center font-bold animate-pulse">
          About me
        </h1>
        <p className="text-left p-4 md:p-6 text-lg leading-relaxed">
          Hi, I&#39;m Kshitiz Upreti — a Frontend Developer & NOC Engineer based
          in Nepal.
          <br />
          <br />
          I recently completed my B.Sc. in Computer Science and Information
          Technology (BSc.CSIT). Originally from Dhangadhi, I moved to Kathmandu
          to pursue my academic and professional journey in tech.
          <br />
          <br />I specialize in building modern, responsive web interfaces using{" "}
          <em>
            <b>React.js</b>
          </em>
          ,{" "}
          <em>
            <b>Next.js</b>
          </em>
          ,{" "}
          <em>
            <b>Tailwind CSS</b>
          </em>
          ,{" "}
          <em>
            <b>TypeScript</b>
          </em>
          ,{" "}
          <em>
            <b>Sass/SCSS</b>
          </em>
          , and{" "}
          <em>
            <b>WordPress</b> with <b>Elementor</b>
          </em>
          . I enjoy transforming design concepts into clean, scalable code.
          <br />
          <br />
           Alongside development, I have professional experience as a NOC Engineer at
  <b> Huawei</b>, where I monitor network systems, handle incidents, and ensure
  service reliability in real-time environments.
          <br />
          <br />
          I enjoy turning ideas into real products — whether it’s a website, a UI system,
  or something scalable. I’m currently focused on growing as a developer while
  exploring opportunities to build and collaborate on meaningful projects.
  <br />
  <br />
  If you’re working on something interesting, feel free to connect.
        </p>
        <div className="flex justify-center">
          <a href="/Resume.pdf" target="_blank" className="w-fit">
            <button className="border-black border-2 p-3  hover:bg-gray-400 animate-pulse">
              View Resume
            </button>
          </a>
        </div>
      </div>
      <div className=" uppercase flex justify-center p-4 mt-9 md:w-1/2 w-[100%] ">
        <div className=" bg-[#110227]  ">
          <Image
            alt="About"
            width={540}
            height={720}
            className="relative bottom-4 right-4 w-full "
            src="/about_04.jpg"
          />
        </div>
      </div>
    </div>
  );
}
