import Header from "@/components/Header";
import Hero from "@/components/Home";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import Top from "@/common/Top";
import Cloud from "@/common/Cloud";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cloud />
      <About />
      <Blog />
      <Footer />
      <Top />
      <Contacts />
    </>
  );
}
