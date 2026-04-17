"use client";

import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
  { name: "Contacts", href: "/contact#contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex flex-shrink-0 items-center"
            >
              <Link href="/">
                <Image
                  alt="Logo"
                  src="/logo.jpg"
                  width={48}
                  height={48}
                  className="h-12 w-auto cursor-pointer rounded-xl border border-white/10 shadow-sm"
                />
              </Link>
            </motion.div>
          </div>

          <div className="hidden sm:block">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setActiveLink(item.href)}
                >
                  {item.name}
                  {activeLink === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-[-24px] left-0 right-0 h-[3px] bg-primary-500 rounded-t-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden border-t border-white/10 bg-dark-900/95 backdrop-blur-xl absolute w-full">
        <div className="space-y-2 px-4 pb-6 pt-4">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              className={classNames(
                activeLink === item.href
                  ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                  : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent",
                "block rounded-lg px-4 py-3 text-base font-medium transition-all"
              )}
              onClick={() => setActiveLink(item.href)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
