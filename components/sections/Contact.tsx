"use client";

import * as React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Sun,
  CheckCircle2,
  User,
  Home,
  MessageSquare,
} from "lucide-react";

import { MultiStepForm } from "@/components/ui/multi-step-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    adresse: "",
    typeInstallation: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleNext = () => {
    setErrorMsg("");

    if (currentStep === 1) {
      if (!formData.nom || !formData.prenom || !formData.telephone) {
        setErrorMsg("Veuillez remplir tous les champs obligatoires (Nom, Prénom, Téléphone).");
        return;
      }
      const digits = formData.telephone.replace(/\D/g, "");
      if (digits.length < 8) {
        setErrorMsg("Le numéro de téléphone doit contenir au moins 8 chiffres.");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.adresse || !formData.typeInstallation) {
        setErrorMsg("Veuillez remplir l'adresse et sélectionner un type d'installation.");
        return;
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getInstallationLabel = (value: string) => {
    const map: Record<string, string> = {
      residential: "Résidentiel",
      commercial: "Commercial",
      industrial: "Industriel",
      agricultural: "Agricole",
    };
    return map[value] || "—";
  };

  if (submitted) {
    return (
      <section className="section-padding relative bg-gray-50" id="contact">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-volto-primary/10">
              <CheckCircle2 className="h-10 w-10 text-volto-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Demande envoyée avec succès !
            </h2>
            <p className="mb-8 max-w-md text-gray-600">
              Notre équipe vous contactera dans les 24 heures pour planifier
              votre installation solaire.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  nom: "",
                  prenom: "",
                  telephone: "",
                  adresse: "",
                  typeInstallation: "",
                  message: "",
                });
              }}
              className="rounded-lg bg-volto-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-volto-secondary hover:shadow-lg"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding relative bg-gray-50" id="contact">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Demande d&apos;Installation
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Remplissez ce formulaire pour envoyer votre demande d&apos;installation solaire
        </p>

        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          {/* Multi-Step Form */}
          <div className="flex w-full items-start justify-center">
            <MultiStepForm
              currentStep={currentStep}
              totalSteps={totalSteps}
              title="Demande d'Installation Solaire"
              description="Complétez les 3 étapes pour envoyer votre demande."
              onBack={handleBack}
              onNext={handleNext}
              backButtonText="Retour"
              nextButtonText={
                currentStep === totalSteps
                  ? "Envoyer la demande"
                  : "Étape suivante"
              }
              size="lg"
              className="w-full border-volto-primary/20 bg-white shadow-lg"
              footerContent={
                errorMsg ? <div className="text-red-500 font-medium text-sm">{errorMsg}</div> : null
              }
            >
              {/* ─── Étape 1 : Informations personnelles ─── */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-volto-primary/10">
                      <User className="h-4 w-4 text-volto-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Vos Informations
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="nom"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Nom
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-volto-primary focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Prénom
                      </label>
                      <input
                        id="prenom"
                        name="prenom"
                        placeholder="Votre prénom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-volto-primary focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Numéro de téléphone
                      </label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="+216 XX XXX XXX"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-volto-primary focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="rounded-lg border border-volto-primary/20 bg-volto-primary/5 px-4 py-3">
                    <p className="flex items-center gap-2 text-sm text-volto-secondary">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Vos informations sont sécurisées et ne seront jamais partagées.
                    </p>
                  </div>
                </div>
              )}

              {/* ─── Étape 2 : Détails de l'installation ─── */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-volto-primary/10">
                      <Home className="h-4 w-4 text-volto-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Détails de l&apos;Installation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="adresse"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Adresse complète
                      </label>
                      <input
                        id="adresse"
                        name="adresse"
                        placeholder="Rue, ville, code postal"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-volto-primary focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="typeInstallation"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Type d&apos;installation
                      </label>
                      <Select
                        value={formData.typeInstallation}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            typeInstallation: value,
                          }))
                        }
                      >
                        <SelectTrigger
                          id="typeInstallation"
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 h-auto text-sm text-gray-900 transition-colors focus:border-volto-primary focus:outline-none focus:ring-0 data-[placeholder]:text-gray-400"
                        >
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4 text-volto-primary" />
                            <SelectValue placeholder="Sélectionner le type d'installation..." />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Résidentiel</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industriel</SelectItem>
                          <SelectItem value="agricultural">Agricole</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="rounded-lg border border-volto-primary/20 bg-volto-primary/5 px-4 py-3">
                    <p className="flex items-center gap-2 text-sm text-volto-secondary">
                      <Sun className="h-4 w-4 shrink-0" />
                      Nous proposons des installations pour tous types de projets solaires.
                    </p>
                  </div>
                </div>
              )}

              {/* ─── Étape 3 : Message + Récapitulatif ─── */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-volto-primary/10">
                      <MessageSquare className="h-4 w-4 text-volto-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Message &amp; Confirmation
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Message <span className="text-gray-400 font-normal">(optionnel)</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ajoutez des détails ou des questions sur votre projet..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-none rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-volto-primary focus:outline-none focus:ring-0"
                    />
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl border-2 border-volto-primary/20 bg-gradient-to-br from-volto-primary/5 to-volto-secondary/5 p-5">
                    <h4 className="mb-4 text-sm font-bold text-volto-secondary uppercase tracking-wide">
                      Récapitulatif
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-volto-primary/10 pb-2">
                        <span className="text-gray-500">Nom</span>
                        <span className="font-medium text-gray-900">
                          {formData.nom || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-volto-primary/10 pb-2">
                        <span className="text-gray-500">Prénom</span>
                        <span className="font-medium text-gray-900">
                          {formData.prenom || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-volto-primary/10 pb-2">
                        <span className="text-gray-500">Téléphone</span>
                        <span className="font-medium text-gray-900">
                          {formData.telephone || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-volto-primary/10 pb-2">
                        <span className="text-gray-500">Adresse</span>
                        <span className="font-medium text-gray-900 text-right max-w-[60%]">
                          {formData.adresse || "—"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Installation</span>
                        <span className="font-medium text-gray-900">
                          {getInstallationLabel(formData.typeInstallation)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-volto-primary/20 bg-volto-primary/5 px-4 py-3">
                    <p className="flex items-center gap-2 text-sm text-volto-secondary">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      Vérifiez vos informations puis cliquez sur &quot;Envoyer la demande&quot;.
                    </p>
                  </div>
                </div>
              )}
            </MultiStepForm>
          </div>

          {/* Contact Info Side Panel */}
          <div className="space-y-8 md:w-72">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Nous Contacter
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-volto-primary/10">
                    <Phone className="h-5 w-5 text-volto-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone & WhatsApp</p>
                    <p className="text-gray-600">+216 55 062 167</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-volto-primary/10">
                    <Mail className="h-5 w-5 text-volto-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@voltogreen.tn</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-volto-primary/10">
                    <MapPin className="h-5 w-5 text-volto-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Localisation</p>
                    <a href="https://maps.app.goo.gl/576NNUEn468DFT328" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-volto-primary transition">
                      El Mnihla, Ettadhamen Mnihla, Tunisia, 1001
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-volto-primary/10 to-volto-secondary/10 p-8 border border-volto-primary/20">
              <p className="mb-4 font-semibold text-gray-700">
                ⚡ Réponse rapide garantie
              </p>
              <p className="text-sm text-gray-600">
                Notre équipe vous répondra dans les 24 heures pour planifier
                votre installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
