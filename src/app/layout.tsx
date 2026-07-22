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
import IntroSplash from "@/common/IntroSplash";
import FloatingBrandBall from "@/common/FloatingBrandBall";
import { ThemeProvider } from "@/common/ThemeProvider";

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var t;if(s==='light'||s==='dark'){t=s;}else{var f=new Intl.DateTimeFormat('en-US',{hour:'numeric',hour12:false,timeZone:'Asia/Kathmandu'}).format(new Date());var h=parseInt(f,10);if(h===24)h=0;t=(h>=18||h<6)?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){}})();`;
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <IntroSplash />
          <FloatingBrandBall />
          <Kofi />
          <Counter />
          <Header />
          <Hero />
          <Cloud />
          {children}
          <Footer />
          <Top />
        </ThemeProvider>
      </body>
    </html>
  );
}
