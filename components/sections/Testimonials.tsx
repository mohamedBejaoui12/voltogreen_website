"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "بصراحة، من نهار ركّبنا الألواح الشمسية مع فولتوغرين، الفاتورة هبطت برشة والخدمة كانت ممتازة من البداية للنهاية.",
    name: "محمد التونسي",
    role: "حريف فولتوغرين",
  },
  {
    text: "فريق محترف وخدمة سريعة. التركيب تم في الوقت المتفق عليه وكل شيء كان واضح ومنظم.",
    name: "أمينة بن سالم",
    role: "حريف فولتوغرين",
  },
  {
    text: "كنت متردد في الأول، أما بعد التجربة اكتشفت قداش الطاقة الشمسية تنجم توفر مصاريف كبيرة على المدى الطويل.",
    name: "وليد الجبالي",
    role: "حريف فولتوغرين",
  },
  {
    text: "الخدمة ما وقفتش عند التركيب، حتى بعد ما كملوا المشروع بقوا متابعين ويجاوبوا على أي استفسار.",
    name: "ريم العياري",
    role: "حريف فولتوغرين",
  },
  {
    text: "تعامل راقي، جودة ممتازة، وأسعار منافسة. ننصح أي شخص يحب يستثمر في الطاقة الشمسية يتعامل مع فولتوغرين.",
    name: "سفيان بن حسين",
    role: "حريف فولتوغرين",
  },
  {
    text: "من أحسن القرارات اللي عملتها. التوفير في استهلاك الكهرباء كان واضح من الأشهر الأولى.",
    name: "إيمان الزواري",
    role: "حريف فولتوغرين",
  },
  {
    text: "الفريق شرحلي كل المراحل بالتفصيل وخدمته كانت نظيفة واحترافية. تجربة ممتازة.",
    name: "هيثم بن عمر",
    role: "حريف فولتوغرين",
  },
  {
    text: "عجبتني برشة الجدية والالتزام بالمواعيد. المشروع تسلّم في الوقت المحدد وبدون أي مشاكل.",
    name: "سارة القاسمي",
    role: "حريف فولتوغرين",
  },
  {
    text: "فولتوغرين وفرتلنا حل متكامل من الدراسة للتركيب وحتى الصيانة. شركة تستحق الثقة.",
    name: "مروان الشابي",
    role: "حريف فولتوغرين",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-white py-20 relative" id="maintenance">
      <div className="container z-10 mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-volto-primary/30 py-2 px-4 rounded-full bg-volto-primary/5">
              <span className="text-volto-primary font-semibold text-sm">
                TÉMOIGNAGES
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900">
            Ce que nos clients disent
          </h2>
          <p className="text-center mt-6 text-gray-600 text-lg">
            Plus de 150 clients satisfaits qui ont transformé leur consommation énergétique avec Voltogreen.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className="w-full md:w-1/3"
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block w-1/3"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block w-1/3"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
