/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL — FAQ baseado no portfólio e modelo de negócio real
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é Point of Care Testing (POCT)?",
    a: "Point of Care Testing (POCT) refere-se a exames laboratoriais realizados próximo ao paciente, fora do ambiente tradicional de laboratório. Os resultados são obtidos em minutos, permitindo diagnósticos rápidos e tomadas de decisão imediatas. É permitido e recomendado para hospitais, UPAs, ambulatórios e UBSs, conforme RDC ANVISA nº 786/2023.",
  },
  {
    q: "Como funciona o modelo de locação de equipamentos?",
    a: "A Innova Saúde oferece um modelo completo de locação com gestão integrada, sem necessidade de investimento inicial em aquisição de equipamentos. O pacote inclui: locação dos equipamentos, fornecimento de insumos e reagentes, manutenção preventiva e corretiva, treinamento presencial, suporte técnico remoto 24h, responsabilidade técnica com Farmacêutico Bioquímico e controle de qualidade (CQI/CQE).",
  },
  {
    q: "Quais equipamentos fazem parte do portfólio?",
    a: "Nosso portfólio inclui 5 equipamentos de alta performance: Dri-Chem NX600 (FUJIFILM) para bioquímica seca, URIVISION (WAMA) para análise de urina, Leitor Fluorescente WF500 (WAMA) para imunoensaio, Coagulômetro COAGMASTER (WAMA) para coagulação e Celltac Alpha (Nihon Kohden) para hematologia. Juntos, cobrem mais de 80 parâmetros laboratoriais.",
  },
  {
    q: "Quais exames podem ser realizados com os equipamentos?",
    a: "Os equipamentos permitem realizar: bioquímica completa (glicose, colesterol, triglicerídeos, função renal, hepática, eletrólitos, PCR), parcial de urina com 10 parâmetros, hemograma completo com diferencial leucocitário, coagulação (TP, TTPA, Fibrinogênio), e imunoensaio fluorescente (Procalcitonina, PCR Ultrassensível, HbA1c, Dímero-D, Troponina I, HCG, Microalbuminúria).",
  },
  {
    q: "Os equipamentos possuem registro na Anvisa?",
    a: "Sim. Todos os equipamentos do nosso portfólio possuem registro Anvisa, conformidade CE, e certificações ISO 9001 e ISO 13485. Os resultados são validados e liberados por Farmacêutico Bioquímico legalmente habilitado, assegurando total conformidade regulatória.",
  },
  {
    q: "A equipe de enfermagem pode operar os equipamentos?",
    a: "Sim! Os equipamentos possuem interface simples e intuitiva, projetada para operação por equipe de enfermagem. A Innova Saúde oferece treinamento presencial completo para capacitação da equipe operacional, garantindo a operação correta e a qualidade dos resultados.",
  },
  {
    q: "Como funciona o suporte técnico?",
    a: "Oferecemos suporte técnico remoto disponível 24 horas por dia, garantindo resolução ágil de dúvidas e problemas operacionais. Além disso, realizamos manutenção preventiva e corretiva com técnicos especializados, e a gestão informatizada permite rastreabilidade completa dos resultados.",
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen ? "bg-white border-[#5B9BD5]/30 shadow-lg shadow-[#5B9BD5]/10" : "bg-white border-[#5B9BD5]/15 hover:border-[#5B9BD5]/30"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
      >
        <span className={`text-base lg:text-lg font-semibold pr-4 ${isOpen ? "text-[#1B4F7A]" : "text-slate-800"}`}>
          {faq.q}
        </span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-[#5B9BD5]" : "text-slate-400"
        }`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{faq.a}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-blue-50/30 to-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1B4F7A]/10 text-[#1B4F7A] text-sm font-semibold rounded-full mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
              frequentes
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso modelo de locação com gestão integrada e soluções POCT.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
