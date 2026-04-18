"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Contacts() {
  const contacts = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/kshitizupreti/",
      imgSrc: "/contacts/Linkedin.png",
      alt: "Linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/xitizupreti",
      imgSrc: "/contacts/GitHub.png",
      alt: "GitHub",
    },
    {
      name: "Gmail",
      href: "mailto:upreti.kshitiz.ku@gmail.com",
      imgSrc: "/contacts/Gmail.png",
      alt: "Gmail",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/xitizupreti",
      imgSrc: "/contacts/Facebook.png",
      alt: "Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kshitizupreti",
      imgSrc: "/contacts/Instagram.png",
      alt: "Instagram",
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/kshitizupreti",
      imgSrc: "/contacts/Twitter.png",
      alt: "Twitter",
    },
    {
      name: "Call",
      href: "tel:009779812648042",
      imgSrc: "/contacts/Call.png",
      alt: "Call",
    },
    {
      name: "ConfessOut",
      href: "https://www.confessout.com/kshitizupreti",
      imgSrc: "/contacts/confessout.jpg",
      alt: "ConfessOut",
    },
    {
      name: "Discord",
      href: "https://discord.gg/cvrz7gHSuk",
      imgSrc: "/contacts/Discord.png",
      alt: "Discord",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@kshitizupreti",
      imgSrc: "/contacts/Youtube.png",
      alt: "Youtube",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@xitizupreti",
      imgSrc: "/contacts/TikTok.png",
      alt: "TikTok",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/kz8su8g0dffcesiyf6e1lgqe3",
      imgSrc: "/contacts/Spotify.png",
      alt: "Spotify",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-800 min-h-screen w-full relative overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-block mb-8 text-gray-400 hover:text-primary-500 transition-colors"
          >
            ← Back to Home
          </Link>
          <h2 className="text-primary-500 text-sm font-bold tracking-widest uppercase mb-2">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-primary-500">Connect</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing web development work or
            partnership opportunities. Find me on any of these platforms!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
        >
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 w-full h-full bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-500/50 hover:-translate-y-2 transition-all group shadow-lg"
              >
                <div className="relative w-16 h-16 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform">
                  <Image
  src={contact.imgSrc}
  alt={contact.alt}
  fill
  className={`object-contain ${
    contact.name === "GitHub" ? "invert" : ""
  }`}
/>
                </div>
                <h2 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {contact.name}
                </h2>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
