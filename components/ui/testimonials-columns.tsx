"use client";
import React from "react";
import { motion } from "motion/react";
import { User } from "lucide-react";

function ProfilePlaceholder() {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 ring-2 ring-gray-200"
      aria-hidden="true"
    >
      <User className="h-5 w-5 text-gray-400" />
    </div>
  );
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  dir="rtl"
                  lang="ar"
                  className="w-full max-w-xs rounded-2xl border border-gray-200 bg-white p-8 text-right shadow-lg transition-all duration-300 hover:border-volto-primary hover:shadow-xl"
                  key={i}
                >
                  <div className="mb-3 flex justify-end gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-volto-accent">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="leading-relaxed text-gray-700">{text}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <ProfilePlaceholder />
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900">{name}</div>
                      <div className="text-sm text-gray-600">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
