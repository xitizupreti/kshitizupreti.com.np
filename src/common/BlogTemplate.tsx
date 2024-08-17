interface CardProps {
  date: string;
  image: string;
  heading: string;
  subHeading: string;
  description: string;
}

const Card = ({ date, image, heading, subHeading, description }: CardProps) => {
  return (
    <div style={{ width: "350px" }} className="relative h-[auto] bg-white p-3">
      <h1 className=" absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded">
        {date}
      </h1>
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div> */}
      <img
        src={image}
        style={{ width: "350px", minHeight: "350px" }}
        alt="wait for this photo"
      />

      {/* Content */}
      <div className="p-4">
        <h4
          style={{ marginBottom: "10px" }}
          className="text-xl text-[#ffa460] font-bold"
        >
          {heading}
        </h4>
        <p className="text-sm text-center font-bold">{subHeading}</p>
        <br />
        <p className="text-[#726a61]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
