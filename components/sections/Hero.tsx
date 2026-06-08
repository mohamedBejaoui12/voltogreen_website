"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ChevronDown, Sun } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the background image
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  // Subtle fade for content on scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], ["0%", "20%"]);

  // Generate random particles only on the client to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{id: number, size: number, x: number, y: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative flex h-[100dvh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-gray-900" 
      id="hero"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/solar.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle radial gradient overlay behind text only (centered) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_60%,transparent_100%)] mix-blend-multiply" />
      
      {/* Golden sunlight glow from top right (simulating sunrise) */}
      <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#FFD54F]/20 blur-[120px]" />

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#FFD54F] shadow-[0_0_10px_#FFD54F]"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.6,
            }}
            animate={{
              y: ["0%", "-1000%"],
              x: ["0%", `${Math.random() * 200 - 100}%`], // Drift left/right
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-20 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center"
        style={{ opacity, y: contentY }}
      >
        {/* Animated Sun Icon & Headline */}
        <div className="relative mb-6">
          <motion.div 
            className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD54F] opacity-20 blur-[40px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Sun className="mx-auto mb-4 h-8 w-8 text-[#FFD54F]" strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            className="text-center text-6xl text-white drop-shadow-lg md:text-7xl lg:text-[6rem] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-lalezar), sans-serif", fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dir="rtl"
          >
            انسى فاتورة الضو
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p 
          className="mx-auto mb-10 max-w-2xl text-center text-lg font-light text-white/90 drop-shadow-md md:text-xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Produisez votre propre énergie et réduisez durablement vos dépenses.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/#contact"
            className="group relative flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#14C3B3] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(20,195,179,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(20,195,179,1)]"
          >
            <span className="relative z-10">Demander un devis gratuit</span>
            <div className="absolute inset-0 -z-10 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
          
          <Link
            href="/#calculator"
            className="group relative flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <span className="relative z-10">Calculer mes économies</span>
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 text-sm font-medium text-white/90 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#14C3B3]" />
            <span>Installation professionnelle</span>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#14C3B3]" />
            <span>Maintenance garantie</span>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#14C3B3]" />
            <span>Solutions photovoltaïques</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Smooth Scroll Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex h-12 w-8 flex-col items-center justify-start rounded-full border-2 border-white/30 bg-white/5 p-1 backdrop-blur-sm transition-colors hover:bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        aria-label="Scroll down"
      >
        <motion.div 
          className="h-2 w-2 rounded-full bg-white"
          animate={{
            y: [0, 16, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </section>
  );
}
