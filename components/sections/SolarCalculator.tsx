"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";
import { useState } from "react";
import { Battery, Sun, Coins, Zap } from "lucide-react";

export default function SolarCalculator() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [billAmount, setBillAmount] = useState(150);

  // Simplified calculation logic for UI purposes
  const calculateResults = (bill: number) => {
    const powerNeeded = (bill / 0.3) * 12 / 1200;
    const panelCount = Math.ceil(powerNeeded / 0.4);
    const annualProduction = powerNeeded * 1200;
    const savings = bill * 12 * 0.8; // Assuming 80% savings

    return {
      power: powerNeeded.toFixed(1),
      panels: panelCount,
      production: annualProduction.toFixed(0),
      savings: savings.toFixed(0),
    };
  };

  const results = calculateResults(billAmount);

  return (
    <section ref={ref} className="relative bg-white py-24 sm:py-32" id="calculator">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-volto-primary/5 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-volto-secondary uppercase tracking-widest">
            Simulateur
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculez Vos Économies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estimez instantanément le potentiel de votre toit. Ajustez votre facture mensuelle pour découvrir votre future installation solaire.
          </p>
        </div>

        <div 
          className={`mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-900 shadow-2xl transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-5">
            {/* Left side: Interactive Slider */}
            <div className="relative p-10 lg:col-span-2 lg:p-12 overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-volto-primary/20 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-8">
                  Votre Facture Mensuelle
                </h3>
                
                <div className="mb-12 text-center">
                  <span className="text-6xl font-bold tracking-tight text-white">{billAmount}</span>
                  <span className="text-2xl text-volto-primary ml-2 font-medium">TND</span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={billAmount}
                    onChange={(e) => setBillAmount(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-volto-primary"
                    aria-label="Facture mensuelle"
                  />
                  <div className="flex justify-between mt-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <span>50 TND</span>
                    <span>1000+ TND</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Results Dashboard */}
            <div className="bg-white p-10 lg:col-span-3 lg:p-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                Votre Installation Idéale
              </h3>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Result Card 1 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-volto-primary/30 hover:bg-volto-primary/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-volto-primary/10">
                      <Zap className="h-6 w-6 text-volto-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Puissance Recommandée</p>
                      <p className="text-2xl font-bold text-gray-900">{results.power} <span className="text-base font-medium text-gray-500">kWc</span></p>
                    </div>
                  </div>
                </div>

                {/* Result Card 2 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-volto-secondary/30 hover:bg-volto-secondary/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-volto-secondary/10">
                      <Sun className="h-6 w-6 text-volto-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Nombre de Panneaux</p>
                      <p className="text-2xl font-bold text-gray-900">{results.panels} <span className="text-base font-medium text-gray-500">Unités</span></p>
                    </div>
                  </div>
                </div>

                {/* Result Card 3 */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-amber-500/30 hover:bg-amber-50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                      <Battery className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Production Annuelle</p>
                      <p className="text-2xl font-bold text-gray-900">{results.production} <span className="text-base font-medium text-gray-500">kWh</span></p>
                    </div>
                  </div>
                </div>

                {/* Result Card 4 (Highlight) */}
                <div className="rounded-2xl border-2 border-volto-primary bg-gradient-to-br from-volto-primary/5 to-transparent p-6 relative overflow-hidden group">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-volto-primary/10 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-volto-primary">
                      <Coins className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-volto-primary uppercase tracking-wide">Économies par an</p>
                      <p className="text-3xl font-black text-gray-900">{results.savings} <span className="text-lg font-medium text-gray-500">TND</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/#contact"
                  className="block w-full rounded-xl bg-gray-900 px-8 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-volto-primary"
                >
                  Demander une étude détaillée
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
