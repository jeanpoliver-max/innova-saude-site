/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Equipamentos: Showcase com imagem central e lista de equipamentos
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Zap, Clock, Shield, Cpu } from "lucide-react";

const EQUIP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/equipment-showcase-9QxE3LUhbu6QxfDLJktiwu.webp";

const equipments = [
  {
    name: "Analisadores de Imunoensaio",
    desc: "Plataformas automáticas e semiautomáticas de imunoensaio por fluorescência, ideais para diagnósticos hormonais, infecciosos e inflamatórios com alta precisão.",
    features: ["Incubação automática", "Leitura por fluorescência", "Múltiplos parâmetros"],
  },
  {
    name: "Bioquímica Clínica POCT",
    desc: "Sistemas totalmente automatizados para bioquímica clínica no ponto de atendimento, oferecendo resultados rápidos para glicose, colesterol, triglicerídeos e mais.",
    features: ["Totalmente automatizado", "Sangue total", "Resultados em minutos"],
  },
  {
    name: "Analisadores de Hematologia",
    desc: "Equipamentos automáticos que fornecem mais de 20 parâmetros hematológicos em menos de 5 minutos, utilizando apenas uma gota de sangue por punção digital.",
    features: ["20+ parâmetros", "Punção digital", "Menos de 5 min"],
  },
  {
    name: "Hemoglobina e HbA1c",
    desc: "Dispositivos portáteis de alta precisão para quantificação de hemoglobina total e hemoglobina glicada, essenciais para monitoramento de diabetes.",
    features: ["Portátil", "Alta precisão", "Monitoramento contínuo"],
  },
  {
    name: "Testes Rápidos e Reagentes",
    desc: "Ampla linha de testes rápidos, calibradores, controles e reagentes para todos os equipamentos, garantindo resultados confiáveis e rastreáveis.",
    features: ["Linha completa", "Rastreabilidade", "Qualidade certificada"],
  },
];

export default function EquipmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="equipamentos" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-50/50 blur-3xl pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-100/80 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Equipamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tecnologia de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              última geração
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Equipamentos portáteis, semiautomáticos e automatizados dos principais 
            fabricantes mundiais de tecnologia POCT.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image + features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={EQUIP_IMG}
                alt="Equipamento Point-of-Care moderno em laboratório"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent" />
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: "Resultados Rápidos", sub: "Em minutos" },
                { icon: Clock, label: "Baixa Incubação", sub: "Tempo otimizado" },
                { icon: Shield, label: "Alta Precisão", sub: "Qualidade certificada" },
                { icon: Cpu, label: "Automatizado", sub: "Fácil operação" },
              ].map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 bg-teal-50/80 rounded-xl p-3.5 border border-teal-100/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shrink-0">
                    <feat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{feat.label}</div>
                    <div className="text-xs text-teal-600">{feat.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Equipment list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3"
          >
            {equipments.map((eq, i) => (
              <div
                key={eq.name}
                onClick={() => setActiveIdx(i)}
                className={`group rounded-2xl p-5 border transition-all duration-300 cursor-pointer ${
                  activeIdx === i
                    ? "bg-gradient-to-r from-teal-600 to-teal-500 border-teal-500 shadow-lg shadow-teal-500/20"
                    : "bg-white border-teal-100/60 hover:border-teal-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-base font-bold ${activeIdx === i ? "text-white" : "text-slate-900"}`}>
                    {eq.name}
                  </h4>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeIdx === i ? "text-white/80 rotate-90" : "text-teal-400 group-hover:translate-x-1"
                  }`} />
                </div>

                {activeIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-teal-100 leading-relaxed mb-3">{eq.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {eq.features.map((f) => (
                        <span key={f} className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
