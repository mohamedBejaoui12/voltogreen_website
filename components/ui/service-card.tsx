import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-8 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-xl",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900 border border-gray-200",
        primary: "bg-volto-primary text-white",
        secondary: "bg-volto-secondary text-white",
        tertiary: "bg-volto-tertiary text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends Omit<import("framer-motion").HTMLMotionProps<"div">, "ref">,
    VariantProps<typeof cardVariants> {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  description?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href, imgSrc, imgAlt, description, ...props }, ref) => {
    const cardAnimation: Variants = {
      hover: {
        scale: 1.03,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation: Variants = {
      hover: {
        scale: 1.15,
        rotate: 5,
        x: 15,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };

    const arrowAnimation: Variants = {
      hover: {
        x: 6,
        transition: { duration: 0.3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" as const },
      },
    };

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
          {description && (
            <p className="text-sm opacity-90 mb-4 flex-grow">{description}</p>
          )}
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto inline-flex items-center text-sm font-semibold group-hover:underline transition-all duration-300"
          >
            EN SAVOIR PLUS
            <motion.div variants={arrowAnimation}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </a>
        </div>

        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className="absolute -right-12 -bottom-12 w-48 h-48 object-contain opacity-70 group-hover:opacity-100"
          variants={imageAnimation}
        />
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
