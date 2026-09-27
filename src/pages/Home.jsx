import Navbar from "@/components/scout/Navbar";
import Hero from "@/components/scout/Hero";
import Showreel from "@/components/scout/Showreel";
import Marquee from "@/components/scout/Marquee";
import About from "@/components/scout/About";
import Services from "@/components/scout/Services";
import WhyUs from "@/components/scout/WhyUs";
import Clients from "@/components/scout/Clients";
import Contact from "@/components/scout/Contact";
import Footer from "@/components/scout/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
