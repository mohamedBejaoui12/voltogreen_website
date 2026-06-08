"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TreePine, Wind, BatteryCharging, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(easeProgress * value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, value]);

  const formattedValue = value % 1 !== 0 
    ? displayValue.toFixed(1) 
    : Math.floor(displayValue).toLocaleString('en-US');

  return <span>{formattedValue}</span>;
}

export default function SustainabilityImpact() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const metrics = [
    {
      value: 450,
      suffix: "",
      unit: "Tonnes",
      label: "CO₂ Évitées",
      description: "Une réduction directe des gaz à effet de serre",
      icon: CloudOffIcon, // Using a custom or different icon below
    },
    {
      value: 2.5,
      suffix: "M",
      unit: "kWh",
      label: "Énergie Verte Produite",
      description: "Injectée dans le réseau depuis notre création",
      icon: BatteryCharging,
    },
    {
      value: 7500,
      suffix: "",
      unit: "Arbres",
      label: "Équivalent Planté",
      description: "L'impact purificateur d'une petite forêt",
      icon: TreePine,
    },
  ];

  return (
    <section ref={ref} className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-[800px] w-[800px] rounded-full bg-volto-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[600px] w-[600px] rounded-full bg-volto-secondary/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-volto-primary uppercase tracking-widest">
            Notre Empreinte
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            L'Impact Environnemental
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Au-delà des économies financières, chaque panneau solaire installé est un pas de plus vers une Tunisie plus verte. Voici ce que nous avons accompli ensemble.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-white/5 px-8 py-10 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 inline-flex rounded-xl bg-volto-primary/20 p-4">
                  <Icon className="h-8 w-8 text-volto-primary" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    <AnimatedCounter value={metric.value} isVisible={isVisible} />{metric.suffix}
                  </span>
                  <span className="text-xl font-medium text-gray-400">{metric.unit}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* Vision Timeline */}
        <div 
          className={`relative rounded-3xl bg-gradient-to-r from-volto-primary to-volto-tertiary p-1 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="rounded-[23px] bg-slate-900/95 backdrop-blur-xl px-6 py-12 sm:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vision 2030 : Accélérer la Transition
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Notre objectif est de tripler notre impact d'ici 2030 en démocratisant l'accès à l'énergie solaire pour tous les foyers et entreprises tunisiennes, contribuant ainsi aux objectifs nationaux de neutralité carbone.
                </p>
                <button className="group inline-flex items-center gap-2 text-sm font-semibold text-volto-primary hover:text-white transition-colors">
                  Découvrir nos engagements
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <p className="text-sm text-gray-400 mb-1">2014</p>
                  <p className="font-bold text-white">Fondation</p>
                  <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-volto-primary w-full" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 relative">
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-volto-primary animate-ping" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-volto-primary" />
                  <p className="text-sm text-volto-primary mb-1">Aujourd'hui</p>
                  <p className="font-bold text-white">Expansion</p>
                  <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-volto-primary w-1/2" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 sm:col-span-1 col-span-2">
                  <p className="text-sm text-gray-400 mb-1">2030</p>
                  <p className="font-bold text-white">Objectif Zéro</p>
                  <div className="mt-3 h-1 w-full bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Quick custom icon for CO2
function CloudOffIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="M22 22 2 2" />
    </svg>
  );
}
