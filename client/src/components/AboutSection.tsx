/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL — Missão e Valores da apresentação comercial
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Award, Lightbulb, ShieldCheck, Users, Sparkles, TrendingUp } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/about-section-oWhiddu7QVFBsKRHGjFf6w.webp";

const values = [
  { icon: ShieldCheck, title: "Ética e Transparência" },
  { icon: Lightbulb, title: "Inovação com Propósito" },
  { icon: Award, title: "Compromisso com a Qualidade" },
  { icon: Heart, title: "Humanização no Atendimento" },
  { icon: TrendingUp, title: "Eficiência e Resultado" },
  { icon: Users, title: "Colaboração e Valorização da Equipe" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      <div className="container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1B4F7A]/10 text-[#1B4F7A] text-sm font-semibold rounded-full mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conheça a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4F7A] to-[#7AB929]">
              Innova Saúde
            </span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#5B9BD5]/20 to-[#7AB929]/20 rounded-[2rem] blur-lg" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMG}
                alt="Equipe de profissionais de saúde colaborando"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#1B4F7A] to-[#2B6A9E] text-white rounded-2xl p-5 shadow-xl"
            >
              <Award className="w-8 h-8 mb-1" />
              <div className="text-2xl font-extrabold">POCT</div>
              <div className="text-xs text-blue-200">Especialistas</div>
            </motion.div>
          </motion.div>

          {/* Text — Missão real da apresentação */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4F7A]">Nossa Missão</h3>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg">
              <p>
                A <strong className="text-slate-800">Innova Saúde</strong> nasceu para transformar a experiência assistencial 
                por meio de soluções inovadoras em diagnóstico Point of Care. Atuamos com tecnologia, 
                agilidade e segurança, garantindo tempo-resposta rápido, qualidade analítica e suporte 
                técnico especializado, sempre com ética, compromisso regulatório e humanização do cuidado.
              </p>
              <p>
                Comércio, importação e distribuição de produtos para saúde. Oferecemos um modelo completo 
                de locação com gestão integrada, permitido e recomendado para <strong className="text-slate-800">hospitais, UPAs, 
                ambulatórios e UBSs</strong>.
              </p>
              <p className="text-[#1B4F7A] font-semibold italic border-l-4 border-[#7AB929] pl-4">
                "Tecnologia, conformidade e cuidado a serviço da vida!"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Valores — reais da apresentação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#7AB929]" />
            <h3 className="text-2xl font-bold text-slate-900">Nossos Valores</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-5 border border-[#5B9BD5]/20 hover:border-[#5B9BD5]/40 hover:shadow-lg hover:shadow-[#5B9BD5]/10 transition-all duration-300 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center mb-3 shadow-md shadow-[#1B4F7A]/20 mx-auto group-hover:shadow-lg transition-shadow">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 leading-tight">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
