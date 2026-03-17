/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * FAQ: Accordion com perguntas frequentes sobre POCT
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é Point-of-Care (POCT)?",
    a: "Point-of-Care Testing (POCT) refere-se a exames laboratoriais realizados próximo ao paciente, fora do ambiente tradicional de laboratório. Os resultados são obtidos em minutos, permitindo diagnósticos rápidos e tomadas de decisão imediatas pelos profissionais de saúde.",
  },
  {
    q: "Quais são as vantagens dos equipamentos Point-of-Care?",
    a: "Os equipamentos POCT oferecem diversas vantagens: resultados em minutos (não horas), volume reduzido de amostra (geralmente sangue total por punção digital), operação simplificada, portabilidade, descentralização do diagnóstico e redução de custos operacionais.",
  },
  {
    q: "Quais tipos de exames podem ser realizados com POCT?",
    a: "Nossa linha de equipamentos permite realizar exames de bioquímica clínica (glicose, colesterol, triglicerídeos), hematologia completa, hemoglobina glicada, marcadores cardíacos, hormônios, coagulação, gasometria e diversos testes rápidos para doenças infecciosas.",
  },
  {
    q: "A Innova Saúde oferece treinamento para os equipamentos?",
    a: "Sim! Oferecemos programas completos de treinamento e capacitação para sua equipe. Nossos consultores especializados acompanham todo o processo, desde a instalação até a operação diária, garantindo que sua equipe esteja preparada para utilizar os equipamentos com máxima eficiência.",
  },
  {
    q: "Como funciona a assistência técnica?",
    a: "Contamos com uma equipe de assistência técnica especializada disponível para manutenção preventiva e corretiva. Nosso suporte inclui atendimento remoto, visitas técnicas programadas e atendimento emergencial para garantir o funcionamento contínuo dos seus equipamentos.",
  },
  {
    q: "É possível alugar os equipamentos ao invés de comprar?",
    a: "Sim, oferecemos tanto a venda quanto a locação de equipamentos, com planos flexíveis que se adaptam às necessidades do seu laboratório ou clínica. Entre em contato para conhecer as opções disponíveis e encontrar a melhor solução para o seu caso.",
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
            Tire suas dúvidas sobre nossas soluções Point-of-Care e serviços.
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
