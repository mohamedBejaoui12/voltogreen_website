"use client";

import { HorizontalImageStack } from "@/components/ui/horizontal-image-stack";

export default function RealizationsGallery() {
  const projects = [
    {
      id: 1,
      title: "Villa Résidentielle - Tunis",
      location: "Tunis",
      capacity: "5 kW",
      src: "/images/1.png",
      alt: "Projet Tunis - Installation résidentielle de 5 kW",
    },
    {
      id: 2,
      title: "Maison d'Hôtes - Hammamet",
      location: "Hammamet",
      capacity: "8 kW",
      src: "/images/2.png",
      alt: "Projet Hammamet - Installation solaire 8 kW",
    },
    {
      id: 3,
      title: "Ferme Agricole - Bizerte",
      location: "Bizerte",
      capacity: "15 kW",
      src: "/images/3.jpg",
      alt: "Projet Bizerte - Système agricole de 15 kW",
    },
    {
      id: 4,
      title: "Local Commercial - Sousse",
      location: "Sousse",
      capacity: "20 kW",
      src: "/images/4.jpg",
      alt: "Projet Sousse - Installation commerciale 20 kW",
    },
    {
      id: 5,
      title: "Complexe Industriel - Sfax",
      location: "Sfax",
      capacity: "45 kW",
      src: "/images/5.jpg",
      alt: "Projet Sfax - Système industriel massif",
    },
    {
      id: 6,
      title: "Résidence Moderne - Djerba",
      location: "Djerba",
      capacity: "10 kW",
      src: "/images/6.jpg",
      alt: "Projet Djerba - Installation résidentielle 10 kW",
    },
  ];

  return (
    <section
      className="w-full bg-white overflow-hidden"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 pt-16 md:pt-20 pb-4 text-center">
        <div className="mb-4">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Nos Réalisations
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez nos projets les plus remarquables à travers la Tunisie
          </p>
        </div>
      </div>

      <HorizontalImageStack
        images={projects}
        onImageChange={() => {}}
      />
    </section>
  );
}
