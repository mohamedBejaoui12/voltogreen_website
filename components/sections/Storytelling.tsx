"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TrendingDown, SunMedium, PiggyBank } from "lucide-react";

export default function Storytelling() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const steps = [
    {
      title: "Le Constat",
      description: "Vos factures d'électricité ne cessent d'augmenter, pesant lourdement sur votre budget face à la hausse continue des coûts énergétiques.",
      icon: TrendingDown,
      iconColor: "text-orange-500",
      numberColor: "text-orange-500",
    },
    {
      title: "La Solution",
      description: "Nous concevons et installons un système photovoltaïque sur-mesure, exploitant le potentiel d'ensoleillement exceptionnel de notre pays.",
      icon: SunMedium,
      iconColor: "text-amber-500",
      numberColor: "text-amber-500",
    },
    {
      title: "L'Avenir",
      description: "Vous produisez votre propre énergie propre. Résultat : jusqu'à 80% d'économies immédiates et une empreinte carbone drastiquement réduite.",
      icon: PiggyBank,
      iconColor: "text-volto-primary",
      numberColor: "text-volto-primary",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-volto-secondary uppercase tracking-widest">
            Le Processus
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Votre Transition Solaire en Toute Simplicité
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            De la prise de conscience à l'indépendance énergétique, découvrez comment nous transformons l'énergie du soleil en économies concrètes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col group transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Connecting Line for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200 z-0" />
                  )}

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Icon className={`h-10 w-10 ${step.iconColor}`} aria-hidden="true" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center text-center">
                    <div className="mb-3 flex items-center justify-center space-x-2">
                      <span className={`text-sm font-bold ${step.numberColor}`}>
                        {index + 1}.
                      </span>
                      <h3 className="text-xl font-semibold leading-7 text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 flex-auto text-base leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
