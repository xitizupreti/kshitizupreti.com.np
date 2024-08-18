interface CardProps {
  date: string;
  image: string;
  heading: string;
  subHeading: string;
  description: string;
}

const Card = ({ date, image, heading, subHeading, description }: CardProps) => {
  return (
    <div className="relative h-auto w-[350px] bg-white p-3">
      <h1 className=" absolute top-3 right-3 text-white bg-black bg-opacity-50 p-2 rounded z-[2]">
        {date}
      </h1>
      <div className="relative">
        <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all animate-pulse "></div>
        <img
          src={image}
          className="w-[350px] min-h-[350px] "
          alt="wait for this photo"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-xl text-[#ffa460] font-bold mb-[10px]">
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
