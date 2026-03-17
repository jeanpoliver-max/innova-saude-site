/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * About: Layout assimétrico com imagem e texto, badges de valores
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Award } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/about-section-oWhiddu7QVFBsKRHGjFf6w.webp";

const values = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer soluções inovadoras em diagnóstico Point-of-Care, com assessoria técnica e científica de excelência, zelando pela satisfação dos nossos clientes e pela saúde da população.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional em soluções Point-of-Care, reconhecida pela distribuição eficiente de produtos e serviços com qualidade e inovação.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Comprometimento, ética, proatividade, inovação, eficiência, empatia e sustentabilidade guiam todas as nossas ações.",
  },
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
          <span className="inline-block px-4 py-1.5 bg-teal-100/80 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conheça a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
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
            <div className="absolute -inset-3 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-[2rem] blur-lg" />
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
              className="absolute -bottom-5 -right-5 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-5 shadow-xl"
            >
              <Award className="w-8 h-8 mb-1" />
              <div className="text-2xl font-extrabold">POCT</div>
              <div className="text-xs text-teal-100">Especialistas</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-snug">
              Tecnologia e inovação a favor da saúde
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg">
              <p>
                A Innova Saúde é uma empresa especializada em soluções Point-of-Care (POCT), 
                oferecendo equipamentos de diagnóstico rápido que revolucionam a forma como 
                os profissionais de saúde atendem seus pacientes.
              </p>
              <p>
                Nosso foco está em fornecer as melhores soluções em diagnóstico laboratorial 
                descentralizado, com equipamentos portáteis e automatizados que permitem 
                resultados precisos em minutos, diretamente no ponto de atendimento.
              </p>
              <p>
                Com parcerias estratégicas com os principais fabricantes mundiais de tecnologia 
                POCT, oferecemos um portfólio completo e em constante atualização, garantindo 
                acesso às mais avançadas tecnologias de diagnóstico disponíveis no mercado.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="group relative bg-gradient-to-br from-white to-teal-50/50 rounded-2xl p-7 border border-teal-100/60 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4 shadow-md shadow-teal-500/20 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
