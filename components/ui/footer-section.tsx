"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Phone, Mail, MapPin } from "lucide-react"

// Inline brand SVG icons since lucide-react no longer ships brand icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function Footerdemo() {
  return (
    <footer className="relative border-t bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info with Logo */}
          <div className="relative">
            <Link href="/" className="mb-4 flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/voltogreenlogo.jpg"
                alt="Voltogreen Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <h2 className="text-2xl font-bold tracking-tight text-volto-primary">
                Voltogreen
              </h2>
            </Link>
            <p className="mb-6 text-gray-400 text-sm">
              Votre partenaire de confiance pour l&apos;énergie solaire en Tunisie.
              Solutions photovoltaïques durables et innovantes.
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-volto-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens Rapides</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/#hero" className="block text-gray-400 transition-colors hover:text-volto-primary">
                Accueil
              </Link>
              <Link href="/#services" className="block text-gray-400 transition-colors hover:text-volto-primary">
                Services
              </Link>
              <Link href="/#realisations" className="block text-gray-400 transition-colors hover:text-volto-primary">
                Nos Réalisations
              </Link>
              <Link href="/#pricing" className="block text-gray-400 transition-colors hover:text-volto-primary">
                Tarifs
              </Link>
              <Link href="/#contact" className="block text-gray-400 transition-colors hover:text-volto-primary">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-3 text-sm not-italic text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-volto-primary flex-shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/576NNUEn468DFT328" target="_blank" rel="noreferrer" className="hover:text-volto-primary transition leading-relaxed">
                  El Mnihla, Ettadhamen Mnihla, <br/> Tunisia, 1001
                </a>
              </div>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-volto-primary flex-shrink-0" />
                <a href="https://wa.me/21655062167" target="_blank" rel="noreferrer" className="hover:text-volto-primary transition">
                  +216 55 062 167
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-volto-primary flex-shrink-0" />
                <a href="mailto:contact@voltogreen.tn" className="hover:text-volto-primary transition">
                  contact@voltogreen.tn
                </a>
              </p>
            </address>
          </div>

          {/* Follow Us */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Suivez-Nous</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/voltogreen" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full border-gray-700 text-gray-400 hover:border-volto-primary hover:text-volto-primary hover:bg-volto-primary/10">
                        <InstagramIcon className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Suivez-nous sur Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.youtube.com/@voltogreen" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full border-gray-700 text-gray-400 hover:border-volto-primary hover:text-volto-primary hover:bg-volto-primary/10">
                        <YoutubeIcon className="h-4 w-4" />
                        <span className="sr-only">YouTube</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Découvrez nos vidéos YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.tiktok.com/@voltogreen" target="_blank" rel="noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full border-gray-700 text-gray-400 hover:border-volto-primary hover:text-volto-primary hover:bg-volto-primary/10">
                        <TiktokIcon className="h-4 w-4" />
                        <span className="sr-only">TikTok</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Rejoignez-nous sur TikTok</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 Voltogreen. Tous droits réservés.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-gray-400 transition-colors hover:text-volto-primary">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-volto-primary">
              Conditions d&apos;utilisation
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-volto-primary">
              Paramètres des cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
