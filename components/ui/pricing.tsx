import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  highlightLabel?: string;
  buttonVariant?: "default" | "outline";
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlight = false,
  buttonVariant = "outline",
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col justify-between p-8 space-y-6 rounded-2xl border transition-all duration-300 ${
        highlight
          ? "border-volto-primary bg-gradient-to-br from-volto-primary/5 to-volto-secondary/5 shadow-lg md:scale-105"
          : "border-gray-200 bg-white hover:shadow-lg"
      }`}
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="font-bold text-lg text-gray-900">{title}</h2>
            {highlight && (
              <span className="bg-volto-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Populaire
              </span>
            )}
          </div>
          <span className="my-4 block text-4xl font-bold text-gray-900">{price}</span>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <Button
          render={<Link href="/#contact" />}
          className="w-full"
          variant={highlight ? "default" : "outline"}
        >
          {highlight ? "Commencer maintenant" : "Demander un devis"}
        </Button>
      </div>

      <ul className="space-y-3 text-sm">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700">
            <Check className={`size-4 flex-shrink-0 ${highlight ? "text-volto-primary" : "text-gray-400"}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
