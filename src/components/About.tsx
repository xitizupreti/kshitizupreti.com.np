export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row relative top-[-100px] p-9 w-full h-[auto]"
    >
      <div className="flex flex-col md:w-1/2">
        <h1 className="uppercase text-[#ffa460] md:text-4xl  text-4xl p-4 md:p-6 text-center font-bold">
          About me
        </h1>
        <p className="text-left p-4 md:p-6 text-lg  leading-relaxed">
          My name is Kshitiz Upreti, and I have completed my B.Sc. in Computer
          Science and Information Technology (BSC.CSIT) in Nepal. I am
          originally from Dhangadhi, but I lived in Kathmandu to pursue my
          studies.
          <br />
          <br />
          My fascination with computers and electronic devices began at a young
          age. I was always eager to open and explore any device I could find,
          captivated by the intricate workings inside. This curiosity fueled my
          passion for technology and led me to pursue a degree in computer
          science.
          <br />
          <br />
          With a strong passion for technology and a keen interest in how things
          work, I have honed my skills as a{" "}
          <em>
            <b>Frontend Developer</b>
          </em>
          . I specialize in working with{" "}
          <em>
            <b>React.js</b>
          </em>{" "}
          and{" "}
          <em>
            <b>Next.js</b>
          </em>
          . My experience also includes working with the{" "}
          <em>MERN stack and various other web development technologies.</em>
          <br />
          <br />
          If you have any questions or if there&apos;s anything you&apos;d like
          to discuss, please feel free to reach out. Thank you for visiting my
          website, and I look forward to connecting with you!
        </p>
        <div className="flex justify-center">
          <a href="/Resume.pdf" target="_blank" className="w-fit">
            <button className="border-black border-2 p-3  hover:bg-gray-400">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className=" uppercase flex justify-center p-4 mt-9 md:w-1/2 w-[100%] h-[720px]">
        <div className=" bg-[#110227] w-[540px] h-[720px] ">
          <img
            className="relative bottom-4 right-4 w-full h-[720px]"
            src="/about_04.jpg"
          />
        </div>
      </div>
    </div>
  );
}
