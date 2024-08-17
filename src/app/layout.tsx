import { Inter } from "next/font/google";
import "./globals.css";
import Kofi from "@/common/KoFi";
const inter = Inter({ subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
