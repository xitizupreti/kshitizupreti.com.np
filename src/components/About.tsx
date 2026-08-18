"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-800 w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex flex-col md:w-1/2 order-2 md:order-1">
            <h2 className="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2">
              About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Who is <span className="text-primary-500">Kshitiz</span>?
            </h3>

            <div className="text-gray-600 dark:text-gray-400 space-y-4 text-lg leading-relaxed mb-8">
              <p>
                Hi, I&apos;m Kshitiz Upreti — a Frontend Developer based in
                Nepal.
              </p>

              <p>
                I build{" "}
                <span className="text-primary-400 font-medium">
                  fast, responsive, and user-focused web applications
                </span>{" "}
                using React, Next.js, Tailwind CSS, and TypeScript. I enjoy
                turning ideas and designs into clean, scalable interfaces.
              </p>

              <p>
                Currently, I work as an{" "}
                <span className="text-gray-900 dark:text-white font-medium">IT Officer</span> in
                the financial sector, where I manage systems, infrastructure,
                and performance-critical applications. This experience helps me
                build solutions that are not just visually polished, but also
                reliable in real-world environments.
              </p>

              <p>
                I also have experience with{" "}
                <span className="text-primary-400 font-medium">
                  WordPress and Elementor
                </span>
                , developing custom websites, landing pages, and WooCommerce
                solutions.
              </p>

              <p>
                Previously, I worked as a{" "}
                <span className="text-gray-900 dark:text-white font-medium">
                  NOC Engineer at Huawei
                </span>{" "}
                on the Ncell project, handling network monitoring, incident
                management, and system operations.
              </p>

              <p>
                I enjoy solving practical problems, improving user experience,
                and continuously learning to build better, more efficient web
                applications.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary-500/20">
                  View Resume
                </button>
              </a>
            </motion.div>
          </div>

          <div className="md:w-1/2 w-full order-1 md:order-2 flex justify-center relative">
            {/* Pink card frame around the photo, kept clear/HD instead of tinted */}
            <div className="relative w-full max-w-[400px] rounded-[2rem] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-700 dark:to-dark-800 p-3 shadow-[0_30px_60px_-15px_rgba(244,84,138,0.35)] group">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-white/40 dark:border-white/5">
                <Image
                  alt="Kshitiz Upreti"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/about_04.jpg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/25 blur-[50px] -z-10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-300/30 blur-[50px] -z-10 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
