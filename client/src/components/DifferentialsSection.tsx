/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL DO PORTFÓLIO — serviços e diferenciais reais
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Headphones,
  GraduationCap,
  Wrench,
  Package,
  Monitor,
  ShieldCheck,
  FlaskConical,
  Building2,
} from "lucide-react";

const differentials = [
  {
    icon: Building2,
    title: "Locação de Equipamentos",
    desc: "Modelo completo de locação de todos os equipamentos POCT, sem necessidade de investimento inicial em aquisição. Flexibilidade e previsibilidade orçamentária.",
  },
  {
    icon: Monitor,
    title: "Gestão Informatizada",
    desc: "Liberação dos resultados por software de gestão laboratorial, com rastreabilidade completa, controle de acessos, histórico de exames e segurança da informação.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidade Técnica",
    desc: "Resultados validados e liberados por Farmacêutico Bioquímico legalmente habilitado, assegurando conformidade regulatória e segurança assistencial.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva e Corretiva",
    desc: "Manutenção completa realizada por técnicos especializados, garantindo a longevidade, precisão e funcionamento contínuo dos equipamentos.",
  },
  {
    icon: Package,
    title: "Fornecimento de Insumos",
    desc: "Fornecimento de insumos, reagentes, calibradores e controles sob demanda, garantindo abastecimento contínuo sem interrupção das análises.",
  },
  {
    icon: GraduationCap,
    title: "Treinamento Presencial",
    desc: "Capacitação completa da equipe operacional para operação correta dos equipamentos. Interface simples e intuitiva, operável por equipe de enfermagem.",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Remoto 24h",
    desc: "Acompanhamento técnico remoto disponível 24 horas por dia, garantindo resolução ágil de dúvidas e problemas operacionais a qualquer momento.",
  },
  {
    icon: FlaskConical,
    title: "Controle de Qualidade (CQI/CQE)",
    desc: "Execução rotineira de controles internos (CQI) e participação em programas de ensaio de proficiência externos (CQE), assegurando precisão e conformidade.",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}{suffix}
        </motion.span>
      ) : "0"}
    </motion.span>
  );
}

export default function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative overflow-hidden">
      {/* Stats banner */}
      <div className="bg-gradient-to-r from-[#1B4F7A] via-[#2B6A9E] to-[#5B9BD5] py-14 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 5, suffix: "", label: "Equipamentos no Portfólio" },
              { value: 80, suffix: "+", label: "Parâmetros Disponíveis" },
              { value: 24, suffix: "h", label: "Suporte Técnico Remoto" },
              { value: 100, suffix: "%", label: "Conformidade Regulatória" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm lg:text-base text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Differentials */}
      <div className="section-padding bg-gradient-to-b from-slate-50 to-white" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-[#7AB929]/15 text-[#5A9A1F] text-sm font-semibold rounded-full mb-4">
              Modelo de Locação com Gestão Integrada
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
                diferenciais
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mais do que equipamentos, oferecemos um modelo completo de locação com gestão integrada. 
              Atendimento integral às exigências da RDC ANVISA nº 786/2023 para serviços POCT.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group relative bg-white rounded-2xl p-6 border border-[#5B9BD5]/15 hover:border-[#5B9BD5]/30 shadow-sm hover:shadow-xl hover:shadow-[#1B4F7A]/8 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-3 right-4 text-5xl font-extrabold text-blue-50 select-none pointer-events-none group-hover:text-[#5B9BD5]/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center mb-4 shadow-md shadow-[#1B4F7A]/20 group-hover:shadow-lg group-hover:shadow-[#1B4F7A]/30 transition-shadow">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
