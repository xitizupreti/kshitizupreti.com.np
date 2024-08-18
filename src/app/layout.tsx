import { Inter } from "next/font/google";
import "./globals.css";
import Kofi from "@/common/KoFi";
import Counter from "@/common/Counter";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Hero from "@/components/Home";
import Footer from "@/components/Footer";
import Cloud from "@/common/Cloud";
import Top from "@/common/Top";
export const metadata = {
  title: "XiTiZ Upreti",
  description: "Portfolio of XiTiZ Upreti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
