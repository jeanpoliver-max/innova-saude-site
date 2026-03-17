/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FlaskConical,
  Droplets,
  HeartPulse,
  Microscope,
  TestTubes,
  Syringe,
  Activity,
  Stethoscope,
} from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/services-bg-2hJ4WQKBwYKvxpYuwEgAE8.webp";

const solutions = [
  {
    icon: FlaskConical,
    title: "Bioquímica Clínica",
    desc: "Sistemas automatizados para análises bioquímicas com resultados rápidos e precisos, incluindo glicose, colesterol, triglicerídeos e muito mais.",
    color: "from-[#1B4F7A] to-[#5B9BD5]",
  },
  {
    icon: Droplets,
    title: "Hematologia",
    desc: "Analisadores automáticos de hematologia com mais de 20 parâmetros em menos de 5 minutos, utilizando punção digital.",
    color: "from-[#5B9BD5] to-[#7AB929]",
  },
  {
    icon: HeartPulse,
    title: "Marcadores Cardíacos",
    desc: "Diagnóstico rápido de marcadores cardíacos para tomada de decisão imediata em situações de emergência.",
    color: "from-[#1B4F7A] to-[#2B6A9E]",
  },
  {
    icon: Microscope,
    title: "Imunoensaio",
    desc: "Plataformas automáticas de imunoensaio por fluorescência para diagnósticos hormonais, infecciosos e inflamatórios.",
    color: "from-[#2B6A9E] to-[#5B9BD5]",
  },
  {
    icon: TestTubes,
    title: "Testes Rápidos",
    desc: "Ampla linha de testes rápidos para diagnósticos imediatos, incluindo doenças infecciosas e condições crônicas.",
    color: "from-[#7AB929] to-[#5A9A1F]",
  },
  {
    icon: Syringe,
    title: "Hemoglobina Glicada",
    desc: "Dispositivos portáteis para quantificação de hemoglobina e hemoglobina glicada com precisão laboratorial.",
    color: "from-[#5B9BD5] to-[#1B4F7A]",
  },
  {
    icon: Activity,
    title: "Coagulação",
    desc: "Equipamentos para monitoramento de coagulação no ponto de atendimento, essenciais para pacientes em terapia anticoagulante.",
    color: "from-[#1B4F7A] to-[#7AB929]",
  },
  {
    icon: Stethoscope,
    title: "Gasometria",
    desc: "Analisadores de gases sanguíneos e eletrólitos para unidades de terapia intensiva e emergências.",
    color: "from-[#2B6A9E] to-[#7AB929]",
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
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluções{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
              inovadoras e acessíveis
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            As melhores soluções em POCT do mundo ao seu alcance. Eficiência e agilidade 
            nos diagnósticos com volume reduzido de amostra e baixos tempos de incubação.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
