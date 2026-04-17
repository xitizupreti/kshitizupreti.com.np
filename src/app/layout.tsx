import { Outfit } from "next/font/google";
import "./globals.css";
import Kofi from "@/common/KoFi";
import Counter from "@/common/Counter";
const outfit = Outfit({ subsets: ["latin"] });
import Header from "@/components/Header";
import Hero from "@/components/Home";
import Footer from "@/components/Footer";
import Cloud from "@/common/Cloud";
import Top from "@/common/Top";
export const metadata = {
  title: "XiTiZ Upreti | Portfolio",
  description: "Portfolio of XiTiZ Upreti - Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-dark-900 text-white`}>
        <Kofi />
        <Counter />
        <Header />
        <Hero />
        <Cloud />
        {children}
        <Footer />
        <Top />
      </body>
    </html>
  );
}
