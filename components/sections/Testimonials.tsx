"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Voltogreen a transformé ma facture d'électricité. Les panneaux solaires fonctionnent parfaitement et l'équipe de support est exceptionnelle.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Ahmed Ben Ali",
    role: "Propriétaire Résidentiel",
  },
  {
    text: "Service professionnel et installation rapide. Dès le premier mois, j'ai remarqué des économies significatives sur ma facture.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Fatima Khaled",
    role: "Gérant Commercial",
  },
  {
    text: "L'équipe Voltogreen a compris nos besoins exactement. Un excellent investissement pour notre entreprise avec ROI remarquable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Mohamed Samir",
    role: "Directeur d'Usine",
  },
  {
    text: "Installation de qualité, professionnalisme et support continu. Je recommande vivement Voltogreen à tous.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Leila Ramzi",
    role: "Propriétaire Résidentiel",
  },
  {
    text: "Les panneaux solaires de Voltogreen amortissent déjà leur coût. Excellent service client et maintenance réactive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Hassan Omar",
    role: "Gérant Commercial",
  },
  {
    text: "Démarches simplifiées, transparence totale et résultats exceptionnels. C'est vraiment le partenaire de confiance pour l'énergie solaire.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Sana Tunisia",
    role: "Chef de Projet",
  },
  {
    text: "Notre consommation électrique a baissé de 80%. L'investissement dans les panneaux solaires Voltogreen était judicieux.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Rached Bouali",
    role: "Propriétaire Résidentiel",
  },
  {
    text: "Voltogreen offre une solution complète : étude, installation, maintenance et support. Vraiment impressionné par leur professionnalisme.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Nadia Slama",
    role: "Directrice Administratif",
  },
  {
    text: "Les technologies solaires dernière génération, l'expertise tunisienne, et un service après-vente incomparable. Bravo Voltogreen!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Karim Zahra",
    role: "PDG PME",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-white py-20 relative" id="maintenance">
      <div className="container z-10 mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-volto-primary/30 py-2 px-4 rounded-full bg-volto-primary/5">
              <span className="text-volto-primary font-semibold text-sm">
                TÉMOIGNAGES
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900">
            Ce que nos clients disent
          </h2>
          <p className="text-center mt-6 text-gray-600 text-lg">
            Plus de 150 clients satisfaits qui ont transformé leur consommation énergétique avec Voltogreen.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className="w-full md:w-1/3"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block w-1/3"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block w-1/3"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
