"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-dark-900 pt-20">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero Background"
          fill
          src="/banner-01.jpg"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/70 to-dark-900" />
      </div>
      
      {/* Decorative blurred background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] z-[1]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 w-full max-w-4xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
        >
          Hi, I’m <span className="text-primary-500">Kshitiz Upreti</span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-3xl font-medium text-gray-200 mb-8 drop-shadow-md"
        >
          Frontend Developer
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="max-w-2xl mx-auto backdrop-blur-md bg-dark-900/40 border border-white/10 rounded-2xl p-6 shadow-2xl"
        >
          <p className="text-gray-300 text-lg mb-4">
            Building responsive interfaces & scalable web applications 💻
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TypeScript", "WordPress", "Elementor", "Tailwind"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30 backdrop-blur-md">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
