"use client";

import { PricingCard } from "@/components/ui/pricing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
      id="pricing"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-volto-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-volto-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-gray-900">
            Plans d'Installation Solaire
          </h2>
          <p className="text-gray-600 text-lg">
            Choisissez le forfait qui correspond à vos besoins énergétiques et budgétaires
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid gap-8 md:grid-cols-2 max-w-6xl mx-auto transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <PricingCard
            title="Résidentiel"
            price="À partir de 15 000 TND"
            description="Pour les petits et moyens foyers"
            buttonVariant="outline"
            features={[
              "Puissance 3 à 5 kW",
              "12 à 20 panneaux solaires",
              "Production annuelle ~6,000 kWh",
              "Économies 50 à 80% sur l'électricité",
              "Garantie 25 ans sur panneaux",
              "Monitoring en temps réel",
              "Support technique 24/7",
              "Installation rapide (2-3 jours)",
            ]}
          />

          <PricingCard
            title="Commercial"
            price="À partir de 45 000 TND"
            description="Pour les petites et moyennes entreprises"
            highlight
            buttonVariant="default"
            features={[
              "Puissance 8 à 15 kW",
              "30 à 50 panneaux solaires",
              "Production annuelle ~20,000 kWh",
              "Économies sur facture énergétique",
              "Garantie 25 ans sur panneaux",
              "Monitoring avancé et analytics",
              "Support technique prioritaire",
              "Maintenance préventive",
              "Audit énergétique complet",
              "ROI généralement 7-8 ans",
            ]}
          />
        </div>

        {/* Industrial Info */}
        <div
          className={`mt-16 mx-auto max-w-4xl p-8 rounded-2xl bg-gradient-to-r from-volto-primary/10 to-volto-secondary/10 border border-volto-primary/20 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Solution Industrielle</h3>
          <p className="text-gray-700 mb-4">
            Besoin d'une solution personnalisée pour votre usine ou complexe commercial ?
          </p>
          <p className="text-gray-600 text-sm">
            Voltogreen propose des installations solaires sur mesure de 50 kW et plus.
            Contactez-nous pour un audit énergétique gratuit et une étude de faisabilité complète.
          </p>
        </div>
      </div>
    </section>
  );
}
