"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Award, ShieldCheck, Clock, Headphones, Leaf, Sparkles, Plus, Home, Zap, Users, Calendar, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const numValue = parseFloat(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo for a smooth slowdown at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(easeProgress * numValue);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, numValue]);

  const formattedValue = value.includes(".") 
    ? displayValue.toFixed(1) 
    : Math.floor(displayValue).toString();

  return <span>{formattedValue}</span>;
}

export default function WhyChooseUs() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const reasons = [
    {
      icon: Award,
      title: "Équipe Certifiée",
      description: "Une installation professionnelle réalisée par des experts certifiés et expérimentés.",
    },
    {
      icon: ShieldCheck,
      title: "Garanties Étendues",
      description: "Tranquillité d'esprit avec 25 ans de garantie sur les panneaux et 10 ans sur les onduleurs.",
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Des délais d'installation optimisés et des équipes prêtes à intervenir en cas de besoin.",
    },
    {
      icon: Headphones,
      title: "Support Client 24/7",
      description: "Une équipe réactive à votre écoute à tout moment pour un suivi à long terme.",
    },
    {
      icon: Wrench,
      title: "Maintenance Gratuite",
      description: "Profitez d'une inspection technique et d'une maintenance gratuites pendant la première année.",
    },
    {
      icon: Sparkles,
      title: "Solutions Sur-Mesure",
      description: "Des systèmes adaptés à chaque besoin, que ce soit pour votre domicile ou votre entreprise.",
    },
  ];

  const stats = [
    { label: "Projets Réalisés", value: "150", icon: Home },
    { label: "kW/an Installés", value: "750", icon: Zap },
    { label: "Clients Satisfaits", value: "98", suffix: "%", icon: Users },
    { label: "Ans d'Expérience", value: "3", icon: Calendar },
  ];

  return (
    <section ref={ref} className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-volto-secondary uppercase tracking-widest">
            L'Excellence Voltogreen
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi Nous Faire Confiance ?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous ne nous contentons pas d'installer des panneaux. Nous construisons avec vous un avenir énergétique indépendant, fiable et durable.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-2 rounded-2xl bg-gray-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-volto-primary/10 transition-colors duration-300 group-hover:bg-volto-primary">
                    <Icon className="h-6 w-6 text-volto-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section with Glassmorphism */}
        <div 
          className={`relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 shadow-2xl sm:px-16 sm:py-24 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-volto-primary opacity-20 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-volto-secondary opacity-20 blur-[100px]" />
          
          <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-white/10 p-3 ring-1 ring-white/20">
                    <Icon className="h-6 w-6 text-volto-primary" />
                  </div>
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      <AnimatedCounter value={stat.value} isVisible={isVisible} />
                    </span>
                    {stat.suffix ? (
                      <span className="text-2xl font-semibold text-white">{stat.suffix}</span>
                    ) : (
                      <Plus className="h-6 w-6 text-volto-primary stroke-[3]" />
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-300 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
