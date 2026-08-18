"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/common/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/#blog" },
  { name: "Contacts", href: "/contact#contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only the homepage has a fixed dark hero photo directly under the
  // transparent header, so that's the only place nav content needs to stay
  // light regardless of the site's light/dark theme.
  const overHero = pathname === "/" && !scrolled;
  const navLinkClass = overHero
    ? "text-gray-200 hover:text-white"
    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
  const menuIconClass = overHero
    ? "text-gray-200 hover:text-white hover:bg-white/10"
    : "text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white";

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-dark-900/70 backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className={`group inline-flex items-center justify-center rounded-md p-2 transition-colors ${menuIconClass}`}>
              <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Theme Toggle (mobile, top-right) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <ThemeToggle variant={overHero ? "transparent" : "solid"} />
          </div>

          {/* Logo (center on mobile, left on desktop) */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

          {/* CENTERED NAV (desktop) */}
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${navLinkClass}`}
                >
                  {item.name}
                  {activeLink === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-[-24px] left-0 right-0 h-[3px] bg-primary-500 rounded-t-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA + Theme Toggle (desktop, nav right) */}
          {/* Extra right margin at xl+ keeps this clear of the fixed VisitorCounter widget pinned to the viewport edge */}
          <div className="hidden sm:flex items-center gap-3 xl:mr-32">
            <Link
              href="/contact#contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold shadow-lg shadow-primary-500/30 transition-colors"
            >
              Hire Me
            </Link>
            <ThemeToggle variant={overHero ? "transparent" : "solid"} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl absolute w-full">
        <div className="space-y-2 px-4 pb-6 pt-4">
          <DisclosureButton
            as={Link}
            href="/contact#contact"
            className="block w-full text-center rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 mb-2 shadow-lg shadow-primary-500/30 transition-colors"
          >
            Hire Me
          </DisclosureButton>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className={classNames(
                activeLink === item.href
                  ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                  : "text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white border border-transparent",
                "block rounded-lg px-4 py-3 text-base font-medium transition-all"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}