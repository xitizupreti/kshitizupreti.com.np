import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-900/50 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 text-sm font-medium">
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
            Contacts
          </Link>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} XiTiZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
