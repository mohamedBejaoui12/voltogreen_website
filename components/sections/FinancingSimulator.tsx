"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

export default function FinancingSimulator() {
  const { ref, isVisible } = useIntersectionObserver();
  const [tab, setTab] = useState("cash");
  const [duration, setDuration] = useState(36);

  const equipmentCost = 15000;
  const installationCost = 3000;
  const totalCost = equipmentCost + installationCost;

  const monthlyPayment = (totalCost / duration).toFixed(2);
  const totalAmount = (Number(monthlyPayment) * duration).toFixed(2);

  const durations = [12, 24, 36, 48, 60];

  return (
    <section ref={ref} className="section-padding relative bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Simulateur de Financement
        </h2>
        <p className="mb-12 text-center text-gray-600 text-lg">
          Choisissez la formule de paiement qui vous convient
        </p>

        <div className="mb-8 flex gap-4 rounded-full border-2 border-gray-200 bg-white p-2">
          <button
            onClick={() => setTab("cash")}
            className={`flex-1 rounded-full py-3 font-semibold transition-all ${
              tab === "cash"
                ? "bg-volto-primary text-white"
                : "text-gray-700 hover:text-volto-primary"
            }`}
          >
            Paiement Comptant
          </button>
          <button
            onClick={() => setTab("installment")}
            className={`flex-1 rounded-full py-3 font-semibold transition-all ${
              tab === "installment"
                ? "bg-volto-primary text-white"
                : "text-gray-700 hover:text-volto-primary"
            }`}
          >
            Paiement Échelonné
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {tab === "cash" ? (
            <>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Détails du Devis
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Équipement</span>
                    <span className="font-semibold">
                      {equipmentCost.toLocaleString("fr-TN")} TND
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Installation</span>
                    <span className="font-semibold">
                      {installationCost.toLocaleString("fr-TN")} TND
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-2xl font-bold text-volto-primary">
                    <span>Total</span>
                    <span>{totalCost.toLocaleString("fr-TN")} TND</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 text-center mb-4">
                  Payez en une seule fois et économisez sur les intérêts.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Durée du financement
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`rounded-lg px-4 py-2 font-semibold transition-all ${
                        duration === d
                          ? "bg-volto-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {d} mois
                    </button>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t-2 border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Montant total</span>
                    <span className="font-semibold">
                      {totalAmount} TND
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Durée</span>
                    <span className="font-semibold">{duration} mois</span>
                  </div>
                  <div className="rounded-xl bg-gradient-to-r from-volto-primary/10 to-volto-secondary/10 p-4 mt-4">
                    <p className="text-sm text-gray-600 mb-1">
                      Paiement mensuel
                    </p>
                    <p className="text-3xl font-bold text-volto-primary">
                      {monthlyPayment} TND
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 text-center mb-4">
                  Répartissez vos paiements sur {duration} mois sans intérêt.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
