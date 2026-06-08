// components/ui/multi-step-form.tsx
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const multiStepFormVariants = cva(
  "flex flex-col",
  {
    variants: {
      size: {
        default: "md:w-[700px]",
        sm: "md:w-[550px]",
        lg: "md:w-[850px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface MultiStepFormProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof multiStepFormVariants> {
  currentStep: number;
  totalSteps: number;
  title: string;
  description: string;
  onBack: () => void;
  onNext: () => void;
  onClose?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  footerContent?: React.ReactNode;
}

const MultiStepForm = React.forwardRef<HTMLDivElement, MultiStepFormProps>(
  ({
    className,
    size,
    currentStep,
    totalSteps,
    title,
    description,
    onBack,
    onNext,
    onClose,
    backButtonText = "Retour",
    nextButtonText = "Étape suivante",
    footerContent,
    children,
    ...props
  }, ref) => {
    const progress = Math.round((currentStep / totalSteps) * 100);

    const variants = {
      hidden: { opacity: 0, x: 100 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    };

    return (
      <Card ref={ref} className={cn(multiStepFormVariants({ size }), className)} {...props}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-gray-900">{title}</CardTitle>
          </div>
          <CardDescription className="text-gray-500">{description}</CardDescription>
          <div className="flex items-center gap-4 pt-2">
            <Progress value={progress} className="w-full h-2.5 bg-gray-200 [&>div]:bg-volto-primary" />
            <p className="text-sm text-gray-500 whitespace-nowrap font-medium">
              Étape {currentStep}/{totalSteps}
            </p>
          </div>
        </CardHeader>

        <CardContent className="min-h-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div>{footerContent}</div>
          <div className="flex gap-3">
            {currentStep > 1 && (
              <button
                onClick={onBack}
                className="rounded-lg border-2 border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-volto-primary hover:text-volto-primary"
              >
                {backButtonText}
              </button>
            )}
            <button
              onClick={onNext}
              className="rounded-lg bg-volto-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-volto-secondary hover:shadow-lg"
            >
              {nextButtonText}
            </button>
          </div>
        </CardFooter>
      </Card>
    );
  }
);

MultiStepForm.displayName = "MultiStepForm";

export { MultiStepForm };
