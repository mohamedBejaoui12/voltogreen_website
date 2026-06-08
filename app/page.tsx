import Hero from "@/components/sections/Hero";
import { FloatingHeader } from "@/components/ui/floating-header";
import dynamic from "next/dynamic";

const IndependanceEnergetique = dynamic(() => import("@/components/sections/IndependanceEnergetique"));
const Storytelling = dynamic(() => import("@/components/sections/Storytelling"));
const TunisiaPotential = dynamic(() => import("@/components/sections/TunisiaPotential"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Services = dynamic(() => import("@/components/sections/Services"));
const SolarCalculator = dynamic(() => import("@/components/sections/SolarCalculator"));
const Pricing = dynamic(() => import("@/components/sections/Pricing"));
const RealizationsGallery = dynamic(() => import("@/components/sections/RealizationsGallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const SustainabilityImpact = dynamic(() => import("@/components/sections/SustainabilityImpact"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

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