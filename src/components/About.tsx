"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-800 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          
          <div className="flex flex-col md:w-1/2 order-2 md:order-1">
            <h2 className="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Who is <span className="text-primary-500">Kshitiz</span>?
            </h3>
            
            <div className="text-gray-400 space-y-4 text-lg leading-relaxed mb-8">
              <p>
                Hi, I'm Kshitiz Upreti — a Frontend Developer based
                in Nepal.
              </p>
              <p>
                I recently completed my B.Sc. in Computer Science and Information
                Technology (BSc.CSIT). Originally from Dhangadhi, I moved to Kathmandu
                to pursue my academic and professional journey in tech.
              </p>
              <p>
                I specialize in building modern, responsive web interfaces using{" "}
                <span className="text-primary-400 font-medium">React.js, Next.js, Tailwind CSS, TypeScript,</span> and{" "}
                <span className="text-primary-400 font-medium">WordPress with Elementor</span>. 
                I enjoy transforming design concepts into clean, scalable code.
              </p>
              <p>
                Previously, I worked as a NOC Engineer at 
                <span className="text-white font-medium"> Huawei</span>, where I monitored network systems, 
                handled incidents, and ensured service reliability in real-time environments.
              </p>
              <p>
                I enjoy turning ideas into real products and I’m currently focused on growing as a developer 
                while exploring opportunities to build and collaborate on meaningful projects.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-fit">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/20">
                  View Resume
                </button>
              </a>
            </motion.div>
          </div>

          <div className="md:w-1/2 w-full order-1 md:order-2 flex justify-center relative">
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image
                alt="Kshitiz Upreti"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="/about_04.jpg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 blur-[50px] -z-10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 blur-[50px] -z-10 rounded-full"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
