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
        </div>
      </div>
    </nav>
  );
}
