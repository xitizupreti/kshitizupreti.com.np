import Card from "@/common/BlogTemplate";

export default function Blog() {
  return (
    <div id="blog" className=" flex-col  bg-[#f2f3f5] p-9 w-[100%] h-[auto]">
      <h1 className="uppercase text-[#ffa460] md:text-4xl text-4xl  p-4 md:p-6  text-center font-bold">
        Blog
      </h1>
      <h2 className="text-2xl font-bold ml-[10%]">
        You might enjoy reading these too...
      </h2>
      <h1 className="text-2xl font-bold w-fit ml-[10%]">
        <span className="dynamic-text">Personal Highlights & Life Events</span>
      </h1>
      <div className=" flex flex-col  items-center md:flex-row pt-8  md:justify-evenly space-y-4 md:space-y-0">
        <Card
          date="18 Nov"
          image="/blog-01.png"
          heading="Birthday"
          subHeading="by admin NOV 18, 2001"
          description="A special day — the beginning of my journey."
        />
        <Card
          date="18 Feb"
          image="/blog-02.jpg"
          heading="Bartabanda"
          subHeading="by admin FEB 18, 2016"
          description="My cultural coming-of-age ceremony — Bartabanda."
        />
        <Card
          date="DAY MONTH"
          image=""
          heading="Marriage"
          subHeading="by admin *** **, 20**"
          description="A placeholder for a future chapter yet to unfold."
        />
      </div>
    </div>
  );
}
