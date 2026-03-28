/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL DO PORTFÓLIO — 5 equipamentos reais com imagens reais
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Zap, Clock, Shield, Cpu } from "lucide-react";

const equipments = [
  {
    name: "Dri-Chem NX600 — FUJIFILM",
    category: "Bioquímica Seca",
    desc: "Sistema automatizado de bioquímica seca com até 120 testes/hora e mais de 30 parâmetros. Análises completas incluindo função renal, hepática, lipídeos, eletrólitos (Na, K, Cl) e PCR.",
    features: ["120 testes/hora", "+30 parâmetros", "Bioquímica completa", "Eletrólitos"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/drichem-nx600_d823c3c2.jpg",
    exams: "ALP, AMYL, CHE, LIP, CKMB, CPK, GGT, GOT/AST, GPT/ALT, LAP, LDH, ALB, BUN, CA, CRE, DBIL, GLU, HDL-C, IP, MG, NH3, TBIL, TCHO, TCO, TG, TP, UA, Na, K, CL, CRP",
  },
  {
    name: "URIVISION — WAMA",
    category: "Análise de Urina",
    desc: "Analisador de tiras de urina com até 300 testes/hora e 10 parâmetros. Utiliza tiras reagentes URI-COLOR CHECK para parcial de urina com padronização das leituras, confiabilidade e segurança.",
    features: ["300 testes/hora", "10 parâmetros", "Fácil operação", "Padronização"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/urivision_3e2c014d.webp",
    exams: "Parcial de Urina — 10 parâmetros com tiras reagentes URI-COLOR CHECK",
  },
  {
    name: "Leitor Fluorescente WF500 — WAMA",
    category: "Imunoensaio Fluorescente",
    desc: "Leitor de imunoensaio por fluorescência para testes quantitativos de alta precisão. Equipamento compacto com tela touchscreen, ideal para marcadores cardíacos, inflamatórios e hormonais.",
    features: ["Testes quantitativos", "Touchscreen", "Alta precisão", "Compacto"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/leitor-fluorescente_ae101993.jpg",
    exams: "Procalcitonina, PCR Ultrassensível, Hemoglobina Glicada, Dímero-D, Troponina I, HCG, Microalbuminúria",
  },
  {
    name: "Coagulômetro COAGMASTER — WAMA",
    category: "Coagulação",
    desc: "Coagulômetro semiautomático com tela touchscreen, impressora integrada e múltiplos canais de medição. Ideal para monitoramento de coagulação no ponto de atendimento.",
    features: ["Touchscreen", "Múltiplos canais", "Impressora integrada", "Semiautomático"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/coagmaster_b28a92b0.jpg",
    exams: "TP, TTPA, Fibrinogênio, Anticoagulante Lúpico",
  },
  {
    name: "Celltac Alpha — Nihon Kohden",
    category: "Hematologia — 3 Partes",
    desc: "Analisador hematológico automático de 3 partes com até 60 amostras/hora e 19 parâmetros. Hemograma completo com diferencial leucocitário para diagnóstico preciso e confiável.",
    features: ["60 amostras/hora", "19 parâmetros", "3 partes (WBC)", "Automático"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/celltac-alpha_c0dc6117.png",
    exams: "Hemograma completo com diferencial leucocitário de 3 partes — 19 parâmetros clínicos",
  },
  {
    name: "Celltac Es MEK-7300 — Nihon Kohden",
    category: "Hematologia — 5 Partes",
    desc: "Analisador hematológico automatizado de 5 partes com tecnologia laser patenteada. Até 60 amostras/hora, 23 parâmetros clínicos e 2 de pesquisa. Diferencial completo de leucócitos (neutrófilos, linfócitos, monócitos, eosinófilos e basófilos) com detecção de blastos. Tela touchscreen colorida de 10.4 polegadas e volume de amostra de apenas 55 µL.",
    features: ["60 amostras/hora", "23 parâmetros + 2 pesquisa", "5 partes (WBC)", "Tecnologia Laser"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/celltac-es-mek7300_a11365c0.webp",
    exams: "Hemograma completo com diferencial leucocitário de 5 partes — WBC, RBC, HGB, HCT, MCV, MCH, MCHC, PLT, RDW, MPV, PDW, PCT, NEUT, LYMPH, MONO, EOS, BASO, IG#, IG%, NRBC, LFR, MFR, HFR",
  },
];

export default function EquipmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const active = equipments[activeIdx];

  return (
    <section id="equipamentos" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#5B9BD5]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#7AB929]/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1B4F7A]/10 text-[#1B4F7A] text-sm font-semibold rounded-full mb-4">
            Equipamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tecnologia de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
              última geração
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Equipamentos com registro Anvisa, conformidade CE, ISO 9001 e ISO 13485 
            dos principais fabricantes mundiais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Active equipment showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl mb-6 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-[#5B9BD5]/15"
            >
              <div className="p-6 flex items-center justify-center min-h-[300px]">
                <img
                  src={active.image}
                  alt={active.name}
                  className="max-w-full max-h-[280px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[#1B4F7A] to-[#2B6A9E] text-white text-xs font-bold rounded-full shadow-md">
                  {active.category}
                </span>
              </div>
            </motion.div>

            {/* Exams list */}
            <motion.div
              key={`exams-${activeIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-blue-50/60 rounded-xl p-4 border border-[#5B9BD5]/15"
            >
              <p className="text-xs font-bold text-[#1B4F7A] uppercase tracking-wider mb-2">Exames Realizados</p>
              <p className="text-sm text-slate-600 leading-relaxed">{active.exams}</p>
            </motion.div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: Zap, label: "Resultados Rápidos", sub: "Em minutos" },
                { icon: Clock, label: "Baixa Incubação", sub: "Tempo otimizado" },
                { icon: Shield, label: "Registro Anvisa", sub: "CE, ISO 9001/13485" },
                { icon: Cpu, label: "Fácil Operação", sub: "Equipe de enfermagem" },
              ].map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-3 border border-[#5B9BD5]/15"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center shrink-0">
                    <feat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">{feat.label}</div>
                    <div className="text-[11px] text-[#5B9BD5]">{feat.sub}</div>
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
                    ? "bg-gradient-to-r from-[#1B4F7A] to-[#2B6A9E] border-[#1B4F7A] shadow-lg shadow-[#1B4F7A]/20"
                    : "bg-white border-[#5B9BD5]/20 hover:border-[#5B9BD5]/40 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h4 className={`text-base font-bold ${activeIdx === i ? "text-white" : "text-slate-900"}`}>
                      {eq.name}
                    </h4>
                    <span className={`text-xs font-medium ${activeIdx === i ? "text-blue-200" : "text-[#5B9BD5]"}`}>
                      {eq.category}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeIdx === i ? "text-white/80 rotate-90" : "text-[#5B9BD5] group-hover:translate-x-1"
                  }`} />
                </div>

                {activeIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-blue-100 leading-relaxed mb-3 mt-2">{eq.desc}</p>
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
