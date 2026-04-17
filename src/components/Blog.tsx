"use client";

import Card from "@/common/BlogTemplate";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-dark-900 w-full overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start mb-16"
        >
          <h2 className="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2">My Stories</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Highlights & <span className="text-primary-500">Life Events</span>
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-stretch gap-8">
          <Card
            delay={0.1}
            date="18 Nov"
            image="/blog-01.png"
            heading="Birthday"
            subHeading="by admin • NOV 18, 2001"
            description="A special day — the beginning of my journey."
          />
          <Card
            delay={0.2}
            date="18 Feb"
            image="/blog-02.jpg"
            heading="Bartabanda"
            subHeading="by admin • FEB 18, 2016"
            description="My cultural coming-of-age ceremony — Bartabanda."
          />
          <Card
            delay={0.3}
            date="TBD"
            image=""
            heading="Marriage"
            subHeading="by admin • *** **, 20**"
            description="A placeholder for a future chapter yet to unfold."
          />
        </div>
      </div>
    </section>
  );
}
