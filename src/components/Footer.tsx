import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900/50 backdrop-blur-md py-8 mb-14 md:mb-0">
      <div className="container mx-auto px-6 flex flex-col gap-6">
        
        {/* Links */}
        <div className="w-full flex justify-between md:justify-center md:gap-12 text-sm font-medium">
          <Link className="text-gray-400 hover:text-primary-500 transition-colors" href="/">
            Home
          </Link>
          <Link className="text-gray-400 hover:text-primary-500 transition-colors" href="/#about">
            About
          </Link>
          <Link className="text-gray-400 hover:text-primary-500 transition-colors" href="/#blog">
            Blog
          </Link>
          <Link className="text-gray-400 hover:text-primary-500 transition-colors" href="/contact#contact">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} XiTiZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}