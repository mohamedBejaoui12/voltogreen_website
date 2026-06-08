"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Home,
  TrendingDown,
  TrendingUp,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

// ── Benefit Card ──────────────────────────────────────────────────────────────
interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  text: string;
  delay: number;
}

function BenefitCard({ icon: Icon, title, text, delay }: BenefitCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          import("animejs").then(({ animate }) => {
            animate(el, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 600,
              delay,
              easing: "easeOutExpo",
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group relative flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-volto-primary/30 hover:-translate-y-1"
    >
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-volto-primary/10 to-volto-secondary/10 text-volto-primary group-hover:from-volto-primary group-hover:to-volto-secondary group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function IndependanceEnergetique() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [imageRef.current, rightRef.current, comparisonRef.current, quoteRef.current];
    els.forEach((el) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(32px)";
      }
    });

    const observers: IntersectionObserver[] = [];

    const animate = (el: HTMLElement, delay = 0) => {
      import("animejs").then(({ animate: animeAnimate }) => {
        animeAnimate(el, {
          opacity: [0, 1],
          translateY: [32, 0],
          duration: 800,
          delay,
          easing: "easeOutExpo",
        });
      });
    };

    [imageRef, rightRef, comparisonRef, quoteRef].forEach((ref, i) => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate(ref.current!, i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref.current);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Production autonome",
      text: "Produisez votre électricité directement depuis votre toiture.",
    },
    {
      icon: TrendingDown,
      title: "Moins de dépendance",
      text: "Réduisez considérablement votre dépendance aux fournisseurs d'énergie.",
    },
    {
      icon: TrendingUp,
      title: "Économies durables",
      text: "Transformez vos dépenses mensuelles en investissement rentable.",
    },
    {
      icon: Home,
      title: "Valorisation de votre bien",
      text: "Augmentez la valeur de votre maison ou de votre entreprise.",
    },
  ];

  const withoutItems = [
    "Factures mensuelles",
    "Dépendance énergétique",
    "Hausse des tarifs",
    "Dépenses continues",
  ];

  const withItems = [
    "Production personnelle",
    "Énergie renouvelable",
    "Économies à long terme",
    "Investissement rentable",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-volto-primary/5 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-volto-secondary/5 blur-[100px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #14C3B3 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 sm:px-6 lg:px-8">
        {/* ── Two‑column layout ── */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
              <Image
                src="/images/steg.jpg"
                alt="Facture d'électricité STEG — Libérez-vous de la dépendance énergétique"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay — bill fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

              {/* Floating "bill" badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/80">
                    <X className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/70">Facture STEG — Avant</p>
                    <p className="text-sm font-bold text-white line-through opacity-70">
                      Dépendance totale aux tarifs
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-volto-secondary/30 blur-2xl" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 z-10 rounded-2xl border border-volto-primary/20 bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-volto-primary">
                Économies moyennes
              </p>
              <p className="mt-1 text-3xl font-black text-gray-900">
                80<span className="text-volto-primary">%</span>
              </p>
              <p className="text-xs text-gray-500">sur votre facture annuelle</p>
            </div>
          </div>

          {/* RIGHT — content */}
          <div ref={rightRef} className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-volto-primary/30 bg-volto-primary/5 px-4 py-2">
              <span className="text-base">⚡</span>
              <span className="text-sm font-semibold text-volto-primary">
                Indépendance Énergétique
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Produisez votre propre énergie et{" "}
              <span className="bg-gradient-to-r from-volto-primary to-volto-secondary bg-clip-text text-transparent">
                libérez-vous des factures d'électricité.
              </span>
            </h2>

            {/* Supporting text */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Pourquoi dépendre des augmentations tarifaires et des fournisseurs d'énergie lorsque vous pouvez produire votre propre électricité grâce au soleil tunisien&nbsp;?
            </p>

            {/* Highlighted statement */}
            <div className="relative rounded-2xl border-l-4 border-volto-primary bg-gradient-to-r from-volto-primary/5 to-transparent px-5 py-4">
              <p className="text-sm font-medium text-gray-700 leading-relaxed">
                <span className="font-bold text-volto-primary">Avec Voltogreen</span>, vous investissez une seule fois et profitez de plusieurs décennies d'énergie propre et renouvelable.
              </p>
            </div>

            {/* Benefit cards grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <BenefitCard
                  key={b.title}
                  icon={b.icon}
                  title={b.title}
                  text={b.text}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Comparison component ── */}
        <div ref={comparisonRef} className="mt-20 md:mt-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            {/* Without solar */}
            <div className="rounded-3xl border border-red-100 bg-red-50/60 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sans solaire</h3>
              </div>
              <ul className="space-y-3">
                {withoutItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3.5 w-3.5 text-red-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transition arrow */}
            <div className="flex items-center justify-center md:flex-col">
              <div className="group flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-volto-primary to-volto-secondary shadow-lg shadow-volto-primary/30 transition-transform duration-300 hover:scale-110">
                <ArrowRight className="h-7 w-7 text-white md:rotate-0 rotate-90 md:rotate-none transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <span className="mt-2 hidden text-xs font-semibold uppercase tracking-widest text-volto-primary md:block">
                Transition
              </span>
            </div>

            {/* With Voltogreen */}
            <div className="rounded-3xl border border-volto-primary/20 bg-gradient-to-br from-volto-primary/5 to-volto-secondary/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-volto-primary/10">
                  <Check className="h-5 w-5 text-volto-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Avec Voltogreen</h3>
              </div>
              <ul className="space-y-3">
                {withItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volto-primary/15">
      <Check className="h-3.5 w-3.5 text-volto-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Quote + CTA ── */}
        <div ref={quoteRef} className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-12 shadow-2xl relative overflow-hidden">
            {/* Glow decorations */}
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-volto-primary/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-volto-secondary/20 blur-3xl" />

            <div className="relative z-10">
              <span className="text-4xl">☀️</span>
              <blockquote className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
                "Investissez aujourd'hui. Produisez votre énergie demain.{" "}
                <span className="bg-gradient-to-r from-volto-primary to-volto-secondary bg-clip-text text-transparent">
                  Profitez-en pendant plus de 25 ans.
                </span>"
              </blockquote>
              <div className="mt-8">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-volto-primary to-volto-secondary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-volto-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-volto-primary/40 hover:scale-105"
                >
                  Demander mon étude gratuite
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
