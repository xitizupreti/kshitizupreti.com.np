"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CardProps {
  date: string;
  image: string;
  heading: string;
  subHeading: string;
  description: string;
  delay?: number;
}

const Card = ({ date, image, heading, subHeading, description, delay = 0 }: CardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="relative flex flex-col w-full md:w-[350px] bg-dark-800 rounded-2xl overflow-hidden border border-white/10 shadow-lg group"
    >
      <div className="absolute top-4 right-4 z-10 backdrop-blur-md bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
        {date}
      </div>
      
      <div className="relative h-[250px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-500 z-[1] mix-blend-overlay"></div>
        {image ? (
          <Image
            src={image}
            alt={heading}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-dark-700 flex items-center justify-center">
            <span className="text-gray-500 italic">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <h4 className="text-2xl text-primary-500 font-bold mb-2 group-hover:text-primary-400 transition-colors">
          {heading}
        </h4>
        <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-4">
          {subHeading}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
