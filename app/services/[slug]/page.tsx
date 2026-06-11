"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// ─── Data ───────────────────────────────────────────────────────────────────
type ContentSection = {
  heading: string;
  text: string;
  list?: string[];
  imgSrc?: string;
  imgAlt?: string;
};

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  badge: string;
  stats: { label: string; value: string }[];
  content: ContentSection[];
};

const servicesData: Record<string, ServiceData> = {
  "installation-solaire": {
    title: "Installation Solaire",
    subtitle: "Conception et installation de systèmes photovoltaïques sur-mesure",
    description: "Passez à l'énergie solaire avec une installation robuste, conçue pour maximiser votre production et minimiser vos factures.",
    imgSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop",
    badge: "⚡ Notre service phare",
    stats: [
      { label: "Projets livrés", value: "150+" },
      { label: "Garantie panneaux", value: "25 ans" },
      { label: "Capacité installée", value: "750 kW" },
    ],
    content: [
      {
        heading: "Pourquoi passer au solaire ?",
        text: "L'installation de panneaux solaires est un investissement stratégique et écologique. Elle vous permet de devenir producteur de votre propre énergie, réduisant ainsi drastiquement votre dépendance au réseau électrique national tout en vous protégeant contre les augmentations futures des tarifs de l'électricité.",
        imgSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=550&fit=crop",
        imgAlt: "Vue de panneaux solaires",
      },
      {
        heading: "Notre Méthodologie en 4 étapes",
        text: "Chez Voltogreen, nous abordons chaque projet d'installation comme une infrastructure critique. Notre processus garantit une fiabilité optimale sur 25 ans.",
        list: [
          "Dimensionnement sur-mesure après analyse de votre toit et de votre consommation",
          "Sélection d'équipements Premium — panneaux Tier 1, onduleurs hybrides robustes",
          "Installation respectant les normes de sécurité électrique les plus strictes",
          "Mise en service, configuration du monitoring et formation de votre équipe",
        ],
        imgSrc: "/images/TechnicienSolaire.png",
        imgAlt: "Technicien Voltogreen installant des panneaux solaires",
      },
    ],
  },
  "audit-energetique": {
    title: "Audit Énergétique",
    subtitle: "Analyse approfondie de votre consommation",
    description: "Découvrez les failles de votre consommation énergétique et optimisez vos dépenses avant même de produire votre énergie.",
    imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop",
    badge: "🔍 L'étape fondatrice",
    stats: [
      { label: "Réduction gaspillage", value: "20%" },
      { label: "Délai rapport", value: "72h" },
      { label: "ROI moyen", value: "7 ans" },
    ],
    content: [
      {
        heading: "L'importance de l'Audit",
        text: "L'audit énergétique est la première étape vers une transition réussie. Avant de dimensionner une installation solaire, il est crucial de comprendre exactement comment, quand et pourquoi vous consommez de l'énergie. Cela permet d'éliminer le gaspillage et de réduire la taille (et donc le coût) du système photovoltaïque nécessaire.",
        imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=550&fit=crop",
        imgAlt: "Analyse de données énergétiques sur écran",
      },
      {
        heading: "Ce que comprend notre audit",
        text: "Nos experts se déplacent sur site pour une analyse granulaire de vos infrastructures.",
        list: [
          "Analyse détaillée des factures passées sur 12 à 24 mois",
          "Identification des pics de consommation et appareils énergivores",
          "Recommandations d'optimisation immédiates (sans solaire)",
          "Étude de faisabilité technico-économique complète avec simulation de ROI",
        ],
        imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=550&fit=crop",
        imgAlt: "Expert analysant les données de consommation",
      },
    ],
  },
  "maintenance-sav": {
    title: "Maintenance & SAV",
    subtitle: "Garantir la longévité de votre investissement",
    description: "Un système photovoltaïque a besoin d'entretien pour conserver 100% de son efficacité. Nous prenons soin de vos installations.",
    imgSrc: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&h=900&fit=crop",
    badge: "🛡️ Votre tranquillité d'esprit",
    stats: [
      { label: "Disponibilité SAV", value: "24/7" },
      { label: "Temps d'intervention", value: "<48h" },
      { label: "Gain production", value: "+15%" },
    ],
    content: [
      {
        heading: "Pourquoi l'entretien est critique",
        text: "Les panneaux solaires sont exposés aux intempéries, à la poussière, au sable et à la pollution. Une couche de saleté peut réduire la production de 10 à 20%. Notre service de maintenance inclut des nettoyages professionnels réguliers et des inspections thermographiques pour détecter les cellules défectueuses avant qu'elles ne tombent en panne.",
        imgSrc: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=900&h=550&fit=crop",
        imgAlt: "Technicien nettoyant des panneaux solaires",
      },
      {
        heading: "Nos services SAV complets",
        text: "Nous proposons des contrats d'entretien flexibles et une intervention rapide en cas de besoin.",
        list: [
          "Nettoyage professionnel par robotique spécialisée ou eau déminéralisée",
          "Inspection des onduleurs et serrage de toutes les connexions électriques",
          "Monitoring à distance 24/7 de la production en temps réel",
          "Intervention d'urgence en moins de 48h en cas de chute de rendement",
        ],
        imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=550&fit=crop",
        imgAlt: "Monitoring d'installation solaire",
      },
    ],
  },
  "demarches-administratives": {
    title: "Démarches Administratives",
    subtitle: "On s'occupe de la paperasse pour vous",
    description: "Les procédures pour se connecter au réseau STEG peuvent être complexes. Nous prenons tout en charge, de A à Z.",
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
    badge: "📋 Service clé en main",
    stats: [
      { label: "Dossiers traités", value: "150+" },
      { label: "Taux de succès", value: "100%" },
      { label: "Délai moyen", value: "4 sem." },
    ],
    content: [
      {
        heading: "Libérez-vous des contraintes",
        text: "L'intégration d'une centrale solaire au réseau national nécessite de nombreuses validations techniques et administratives. De l'approbation préliminaire à la mise en service finale avec les compteurs bidirectionnels, le processus peut décourager. Voltogreen possède l'expertise et les relations pour accélérer ces procédures.",
        imgSrc: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&h=550&fit=crop",
        imgAlt: "Expert en démarches administratives",
      },
      {
        heading: "Notre accompagnement complet",
        text: "Nous vous livrons une installation véritablement clé en main, côté technique comme administratif.",
        list: [
          "Préparation et dépôt du dossier complet auprès de la STEG",
          "Gestion des demandes de subventions et avantages fiscaux (ANME)",
          "Suivi rigoureux des validations et relances proactives",
          "Coordination complète pour l'installation du compteur de production",
        ],
        imgSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=550&fit=crop",
        imgAlt: "Signature de documents officiels",
      },
    ],
  },
};

// ─── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ─── Client Component ────────────────────────────────────────────────────────
function ServicePageClient({ slug }: { slug: string }) {
  const service = servicesData[slug];
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      router.replace("/");
    }
  }, [service, router]);

  if (!service) return null;

  return (
    <main className="bg-white min-h-screen">
      <FloatingHeader />

      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-volto-primary/5 blur-[100px] -translate-y-1/4 translate-x-1/4" />

        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          {/* Back link */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:text-volto-primary mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux services
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <span className="inline-block rounded-full bg-volto-primary/10 px-4 py-1.5 text-sm font-semibold text-volto-primary mb-6">
              {service.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            {service.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-500 max-w-2xl mx-auto mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            {service.subtitle}
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl bg-white px-8 py-6 shadow-lg ring-1 ring-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            {service.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-volto-primary">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Banner Image ─────────────────────────────────────────── */}
      <motion.div
        className="mx-auto max-w-6xl px-6 lg:px-8 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10">
          <Image
            src={service.imgSrc}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
        </div>
      </motion.div>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 mb-24">
        {/* Lead paragraph */}
        <motion.p
          className="text-xl leading-9 text-gray-600 mb-16 font-medium border-l-4 border-volto-primary pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {service.description}
        </motion.p>

        {/* Content sections */}
        <div className="space-y-24">
          {service.content.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              {/* Alternating layout: text left / image right, then image left / text right */}
              <div className={`grid gap-12 lg:grid-cols-2 items-center ${idx % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}>
                {/* Text column */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-volto-primary/10 text-sm font-bold text-volto-primary">
                      {idx + 1}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-lg leading-8 text-gray-600 mb-8">
                    {section.text}
                  </p>

                  {section.list && (
                    <ul className="space-y-4">
                      {section.list.map((item, listIdx) => (
                        <motion.li
                          key={listIdx}
                          className="flex gap-x-3 items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: listIdx * 0.1 }}
                        >
                          <CheckCircle2 className="h-6 w-6 flex-none text-volto-primary mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image column */}
                {section.imgSrc && (
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] w-full">
                    <Image
                      src={section.imgSrc}
                      alt={section.imgAlt || section.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                )}
              </div>

              {/* Divider */}
              {idx < service.content.length - 1 && (
                <div className="mt-24 border-t border-gray-100" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── CTA Block ───────────────────────────────────────────────────── */}
        <motion.div
          className="mt-24 overflow-hidden rounded-3xl bg-gray-900 px-8 py-12 text-center sm:px-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-volto-primary/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-volto-secondary/20 blur-[80px]" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
              Contactez nos experts pour une consultation gratuite et découvrez comment nous pouvons transformer votre avenir énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex justify-center rounded-full bg-volto-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-volto-secondary transition-all hover:scale-105"
              >
                Obtenir un devis gratuit
              </Link>
              <Link
                href="/#services"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
              >
                Voir tous les services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </article>

      <Footer />
    </main>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────
import { use } from "react";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <ServicePageClient slug={slug} />;
}
