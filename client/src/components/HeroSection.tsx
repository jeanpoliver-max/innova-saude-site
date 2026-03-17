/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Hero: Split-screen assimétrico com imagem e texto
 * Animação: Fade-in com slide up, parallax sutil
 */
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/hero-banner-CsM2HB8W8ttgjkYGjdhtnm.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-white">
      {/* Decorative blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-15%] w-[500px] h-[500px] rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-0">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100/80 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-sm font-medium text-teal-700">Soluções Point-of-Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Diagnósticos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                rápidos e precisos
              </span>{" "}
              ao alcance das suas mãos
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              A Innova Saúde oferece as melhores soluções em equipamentos Point-of-Care, 
              proporcionando agilidade e eficiência nos diagnósticos laboratoriais com 
              tecnologia de ponta e suporte especializado.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#solucoes")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 hover:from-teal-700 hover:to-teal-600 transition-all duration-300"
              >
                Conheça Nossas Soluções
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#sobre")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-teal-700 font-semibold rounded-2xl border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50 transition-all duration-300 shadow-sm"
              >
                <Play className="w-4 h-4" />
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 lg:gap-12">
              {[
                { value: "500+", label: "Equipamentos Instalados" },
                { value: "98%", label: "Satisfação dos Clientes" },
                { value: "24h", label: "Suporte Técnico" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-extrabold text-teal-700">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-[2rem] blur-xl" />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-teal-900/15">
                <img
                  src={HERO_IMG}
                  alt="Profissional de saúde utilizando equipamento Point-of-Care em laboratório moderno"
                  className="w-full h-auto object-cover aspect-[16/10]"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-slate-900/10 border border-teal-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Resultados em minutos</div>
                    <div className="text-xs text-teal-600">Diagnóstico POCT</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
