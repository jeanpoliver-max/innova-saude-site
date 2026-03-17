/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Headphones, GraduationCap, Wrench, Users, BarChart3 } from "lucide-react";

const differentials = [
  {
    icon: Headphones,
    title: "Suporte Técnico 24h",
    desc: "Equipe de assistência técnica disponível para garantir o funcionamento contínuo dos seus equipamentos, com atendimento ágil e especializado.",
  },
  {
    icon: GraduationCap,
    title: "Assessoria Científica",
    desc: "Consultores treinados e especializados que acompanham todo o processo, desde a escolha do equipamento até a interpretação dos resultados.",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica",
    desc: "Manutenção preventiva e corretiva realizada por técnicos certificados, garantindo a longevidade e precisão dos equipamentos.",
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    desc: "Estoque bem dimensionado e acondicionado, com rigoroso sistema de rastreabilidade por lotes e entregas pontuais em todo o Brasil.",
  },
  {
    icon: Users,
    title: "Treinamento Especializado",
    desc: "Programas de capacitação para sua equipe, garantindo a operação correta dos equipamentos e a qualidade dos resultados.",
  },
  {
    icon: BarChart3,
    title: "Portfólio Completo",
    desc: "Linha completa de equipamentos, reagentes, calibradores e controles em constante atualização com as mais recentes inovações do mercado.",
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
              { value: 500, suffix: "+", label: "Equipamentos Instalados" },
              { value: 1000, suffix: "+", label: "Clientes Atendidos" },
              { value: 50, suffix: "+", label: "Parâmetros Disponíveis" },
              { value: 98, suffix: "%", label: "Satisfação dos Clientes" },
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
              Por Que Nos Escolher
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
                diferenciais
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mais do que equipamentos, oferecemos uma experiência completa em diagnóstico 
              Point-of-Care com suporte integral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 border border-[#5B9BD5]/15 hover:border-[#5B9BD5]/30 shadow-sm hover:shadow-xl hover:shadow-[#1B4F7A]/8 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-extrabold text-blue-50 select-none pointer-events-none group-hover:text-[#5B9BD5]/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center mb-5 shadow-md shadow-[#1B4F7A]/20 group-hover:shadow-lg group-hover:shadow-[#1B4F7A]/30 transition-shadow">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
