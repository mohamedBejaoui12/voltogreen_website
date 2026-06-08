"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Sun, CloudOff, MapPin, Zap, ThermometerSun } from "lucide-react";

export default function TunisiaPotential() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-volto-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="text-sm font-semibold leading-7 text-volto-secondary uppercase tracking-widest mb-2">
              Une Ressource Inépuisable
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Le Potentiel Solaire de la Tunisie
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bénéficiant d'une situation géographique privilégiée, la Tunisie est l'un des pays les mieux exposés au rayonnement solaire dans le monde. C'est l'environnement parfait pour rentabiliser rapidement votre installation photovoltaïque.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Sun className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Ensoleillement Exceptionnel</h4>
                  <p className="mt-1 text-sm text-gray-600">Plus de 300 jours et 3 000 heures de soleil pur chaque année.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-volto-primary/10">
                    <Zap className="h-5 w-5 text-volto-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">Rendement Optimal</h4>
                  <p className="mt-1 text-sm text-gray-600">Une irradiation globale atteignant 1 800 à 2 600 kWh/m²/an selon les régions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Right */}
          <div 
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Big Card */}
            <div className="col-span-2 rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/50 ring-1 ring-gray-900/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="relative z-10">
                <ThermometerSun className="h-8 w-8 text-amber-500 mb-4" />
                <p className="text-5xl font-bold tracking-tight text-gray-900 mb-2">5.5 <span className="text-2xl font-medium text-gray-500">kWh/m²</span></p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Rayonnement moyen journalier</p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="rounded-3xl bg-gradient-to-br from-volto-primary to-volto-secondary p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <CloudOff className="h-6 w-6 text-white/80 mb-3" />
                <p className="text-3xl font-bold text-white mb-1">300+</p>
                <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Jours de soleil</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="rounded-3xl bg-white p-6 shadow-xl shadow-gray-200/50 ring-1 ring-gray-900/5 group">
              <MapPin className="h-6 w-6 text-volto-primary mb-3" />
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Sud</span>
                  <span className="font-bold text-gray-900">330j</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full w-[95%]" />
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-gray-600">Nord</span>
                  <span className="font-bold text-gray-900">300j</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-amber-400 h-1.5 rounded-full w-[85%]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
