/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Partners: Logos de parceiros com scroll infinito
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Boditech Med",
  "Abbott",
  "Roche",
  "Siemens Healthineers",
  "Beckman Coulter",
  "Bio-Rad",
  "Alere",
  "Quidel",
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-14 bg-white border-y border-teal-100/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-1">
            Parceiros e Fornecedores
          </p>
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
            Trabalhamos com os melhores do mundo
          </h3>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-[scroll_30s_linear_infinite] gap-12 items-center">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="shrink-0 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300"
              >
                <span className="text-base font-semibold text-slate-400 whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
