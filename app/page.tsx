import Hero from "@/components/sections/Hero";
import { FloatingHeader } from "@/components/ui/floating-header";
import IndependanceEnergetique from "@/components/sections/IndependanceEnergetique";
import Storytelling from "@/components/sections/Storytelling";
import TunisiaPotential from "@/components/sections/TunisiaPotential";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import SolarCalculator from "@/components/sections/SolarCalculator";
import Pricing from "@/components/sections/Pricing";
import FinancingSimulator from "@/components/sections/FinancingSimulator";
import RealizationsGallery from "@/components/sections/RealizationsGallery";
import Testimonials from "@/components/sections/Testimonials";
import SustainabilityImpact from "@/components/sections/SustainabilityImpact";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <FloatingHeader />
      <Hero />
      <IndependanceEnergetique />
      <Storytelling />
      <TunisiaPotential />
      <WhyChooseUs />
      <Services />
      <SolarCalculator />
      <Pricing />
      <RealizationsGallery />
      <Testimonials />
      <SustainabilityImpact />
      <Contact />
      <Footer />
    </main>
  );
}