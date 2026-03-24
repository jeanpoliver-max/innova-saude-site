/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL — Apenas os 3 parceiros reais do portfólio
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "FUJIFILM",
    desc: "Dri-Chem NX600 — Bioquímica Seca",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fujifilm_logo.svg/320px-Fujifilm_logo.svg.png",
  },
  {
    name: "WAMA Diagnóstica",
    desc: "URIVISION, COAGMASTER, WF500",
    logo: "https://www.wamadiagnostica.com.br/wp-content/uploads/2021/03/logo-wama.png",
  },
  {
    name: "Nihon Kohden",
    desc: "Celltac Alpha — Hematologia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Nihon_Kohden_logo.svg/320px-Nihon_Kohden_logo.svg.png",
  },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-white border-y border-[#5B9BD5]/15" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#1B4F7A] uppercase tracking-wider mb-1">
            Nossos Parceiros
          </p>
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
            Tecnologia dos líderes mundiais em diagnóstico
          </h3>
        </motion.div>

        {/* 3 partner cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 border border-[#5B9BD5]/15 hover:border-[#5B9BD5]/30 hover:shadow-lg hover:shadow-[#5B9BD5]/10 transition-all duration-300 text-center"
            >
              <div className="h-16 flex items-center justify-center mb-5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <h4 className="text-base font-bold text-slate-800 mb-1">{partner.name}</h4>
              <p className="text-sm text-slate-500">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
