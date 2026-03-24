/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL DO PORTFÓLIO — apenas equipamentos e áreas reais
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FlaskConical,
  Droplets,
  HeartPulse,
  Activity,
  Microscope,
} from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/services-bg-2hJ4WQKBwYKvxpYuwEgAE8.webp";

const solutions = [
  {
    icon: FlaskConical,
    title: "Bioquímica Seca",
    desc: "Dri-Chem NX600 (FUJIFILM) — Até 120 testes/hora com mais de 30 parâmetros. Análises bioquímicas completas incluindo glicose, colesterol, triglicerídeos, função renal, hepática, eletrólitos e PCR.",
    color: "from-[#1B4F7A] to-[#5B9BD5]",
  },
  {
    icon: Droplets,
    title: "Análise de Urina",
    desc: "URIVISION (WAMA) — Até 300 testes/hora com 10 parâmetros. Parcial de urina com tiras reagentes URI-COLOR CHECK. Padronização das leituras com confiabilidade e segurança.",
    color: "from-[#5B9BD5] to-[#7AB929]",
  },
  {
    icon: HeartPulse,
    title: "Imunoensaio Fluorescente",
    desc: "Leitor Fluorescente WF500 (WAMA) — Testes quantitativos de Procalcitonina, PCR Ultrassensível, Hemoglobina Glicada, Dímero-D, Troponina I, HCG e Microalbuminúria.",
    color: "from-[#1B4F7A] to-[#2B6A9E]",
  },
  {
    icon: Activity,
    title: "Coagulação",
    desc: "Coagulômetro COAGMASTER (WAMA) — Análises de TP, TTPA, Fibrinogênio e Anticoagulante Lúpico. Equipamento com tela touchscreen, impressora integrada e múltiplos canais.",
    color: "from-[#2B6A9E] to-[#5B9BD5]",
  },
  {
    icon: Microscope,
    title: "Hematologia",
    desc: "Celltac Alpha (Nihon Kohden) — Analisador hematológico de 3 partes com até 60 amostras/hora e 19 parâmetros. Hemograma completo com diferencial leucocitário.",
    color: "from-[#7AB929] to-[#5A9A1F]",
  },
];

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucoes" className="relative section-padding overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={SERVICES_BG} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-blue-50/90 to-white/95" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1B4F7A]/10 text-[#1B4F7A] text-sm font-semibold rounded-full mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluções{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
              Point-of-Care
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Equipamentos de alta performance para diagnóstico no ponto de cuidado. 
            Resultados em minutos, apoio imediato à decisão clínica e maior resolutividade assistencial.
          </p>
        </motion.div>

        {/* Cards grid — 5 items, 3+2 layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-[#5B9BD5]/15 hover:border-[#5B9BD5]/30 shadow-sm hover:shadow-xl hover:shadow-[#1B4F7A]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
