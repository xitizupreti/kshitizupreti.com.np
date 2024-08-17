import Card from "@/common/BlogTemplate";

export default function Blog() {
  return (
    <div id="blog" className="flex-col bg-[#f2f3f5] p-9 w-full h-[auto]">
      <h1 className="uppercase text-[#ffa460] md:text-4xl text-4xl  p-4 md:p-6  text-center font-bold">
        Blog
      </h1>
      <h2 className="text-2xl font-bold ml-[10%]">You must see this too..</h2>
      <h1 className="text-2xl font-bold w-fit ml-[10%]">
        <span className="dynamic-text">Some of my Life Events</span>
      </h1>
      <div className=" flex flex-col md:flex-row pt-8  md:justify-evenly space-y-4 md:space-y-0">
        <Card
          date="18 Nov"
          image="/blog-01.png"
          heading="Birthay"
          subHeading="by admin NOV 18, 2001"
          description="I was born on 2001 November 18(Sunday). The day where a beautiful nurse kissed me."
        />
        <Card
          date="18 Feb"
          image="/blog-02.jpg"
          heading="Bartabanda"
          subHeading="by admin FEB 18, 2016"
          description="My Bartabanda was successfully completed with my family members and my relatives."
        />
        <Card
          date="DAY MONTH"
          image=""
          heading="Marriage"
          subHeading="by admin *** **, 20**"
          description="404 Error: Marriage not found. I'm still single. I'm waiting for my soulmate."
        />
      </div>
    </div>
  );
}
