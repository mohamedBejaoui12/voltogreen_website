"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Sun, PenTool, ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      title: "Installation Solaire",
      slug: "installation-solaire",
      description: "Conception et installation de systèmes photovoltaïques sur-mesure pour maximiser votre rendement.",
      icon: Sun,
      imgSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    },
    {
      title: "Audit Énergétique",
      slug: "audit-energetique",
      description: "Analyse approfondie de votre consommation pour concevoir la solution la plus rentable.",
      icon: PenTool,
      imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Maintenance & SAV",
      slug: "maintenance-sav",
      description: "Entretien préventif et nettoyage professionnel pour garantir la longévité de vos panneaux.",
      icon: ShieldCheck,
      imgSrc: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    },
    {
      title: "Démarches Administratives",
      slug: "demarches-administratives",
      description: "Nous gérons pour vous toutes les autorisations STEG et dossiers de subventions.",
      icon: PhoneCall,
      imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section ref={ref} className="relative bg-gray-50 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-volto-secondary uppercase tracking-widest">
            Nos Domaines d'Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une Solution Clé en Main
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            De l'étude initiale à la maintenance de votre installation, nous vous accompagnons à chaque étape de votre projet solaire.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className={`group relative overflow-hidden flex flex-col rounded-3xl bg-white shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gray-900/20 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 right-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                    <Icon className="h-6 w-6 text-volto-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-volto-primary">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-base text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center mt-auto text-sm font-semibold text-volto-secondary transition-colors group-hover:text-volto-primary"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
