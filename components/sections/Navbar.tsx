"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Accueil", id: "hero" },
    { label: "Services", id: "services" },
    { label: "Projets", id: "projects" },
    { label: "Témoignages", id: "maintenance" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-4 flex items-center justify-center gap-12">
        {/* Logo */}
        <div
          className="absolute left-4 md:left-8 lg:left-16 flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/voltogreenlogo.jpg"
            alt="Voltogreen Logo"
            width={60}
            height={60}
            className="rounded-lg shadow-md transition-all duration-300"
          />
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <button
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="text-gray-700 font-medium transition-all duration-300 pb-2 relative text-base"
              >
                <span className="relative">
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-volto-primary to-volto-secondary rounded-full transition-all duration-500 ease-out ${
                      hoveredLink === link.id ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          ))}
          
          <a href="tel:+21655062167" className="hidden lg:flex items-center gap-2 font-bold text-volto-primary hover:text-volto-secondary transition-colors bg-volto-primary/10 px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +216 55 062 167
          </a>
        </div>
      </div>
    </nav>
  );
}
