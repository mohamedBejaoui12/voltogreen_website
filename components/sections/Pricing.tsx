"use client";

import { PricingCard } from "@/components/ui/pricing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Info, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
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
          <span className="inline-block rounded-full bg-volto-primary/10 px-4 py-1.5 text-sm font-semibold text-volto-primary mb-4">
            💰 Tarifs & Financement
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-gray-900 leading-tight">
            Plans Résidentiels Clé en Main
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Investissez une fois, produisez votre électricité pendant des décennies, réduisez votre dépendance à la STEG, et bénéficiez de notre support 24/7.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-volto-primary" />
              <span>Garantie Panneaux 25 Ans</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-volto-primary" />
              <span>Garantie Onduleurs 10 Ans</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Wrench className="h-4 w-4 text-volto-primary" />
              <span>1ère Année de Maintenance Gratuite</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid gap-8 md:grid-cols-2 max-w-5xl mx-auto transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <PricingCard
            title="Système 2 kW"
            price="7 500 DT"
            description="Paiement Comptant (Cash)"
            buttonVariant="outline"
            features={[
              "Ou Financement : 42 Tranches",
              "Paiement : 241 DT / 2 Mois",
              "Durée : 7 Ans",
              "Garantie Panneaux 25 ans",
              "Garantie Onduleur 10 ans",
              "1 Visite Technique Gratuite",
              "Maintenance gratuite (1ère année)",
              "Assistance et support 24/7",
            ]}
          />

          <PricingCard
            title="Système 3 kW"
            price="10 000 DT"
            description="Paiement Comptant (Cash)"
            highlight
            buttonVariant="default"
            features={[
              "Ou Financement : 42 Tranches",
              "Paiement : 321 DT / 2 Mois",
              "Durée : 7 Ans",
              "Garantie Panneaux 25 ans",
              "Garantie Onduleur 10 ans",
              "1 Visite Technique Gratuite",
              "Maintenance gratuite (1ère année)",
              "Assistance et support 24/7",
            ]}
          />
        </div>

        {/* Info & Commercial / Industrial Note */}
        <div
          className={`mt-16 mx-auto max-w-5xl grid md:grid-cols-2 gap-8 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Notes importantes */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <Info className="h-5 w-5 text-volto-primary" />
              Informations sur le Financement
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-volto-primary font-bold">•</span>
                Les plans de financement sur 7 ans sont exclusivement réservés aux installations résidentielles.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-volto-primary font-bold">•</span>
                Les projets industriels, commerciaux et d'usine exigent un paiement intégral comptant (Cash).
              </li>
            </ul>
          </div>

          {/* CTA Custom */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-volto-primary to-volto-secondary text-white shadow-lg flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3">Besoin d'une solution sur-mesure ?</h3>
            <p className="text-sm text-white/90 mb-6">
              Pour des installations industrielles, commerciales, ou des systèmes résidentiels plus grands ou plus petits, contactez-nous pour une étude personnalisée.
            </p>
            <Link
              href="/#contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-volto-primary transition-transform hover:scale-105"
            >
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
