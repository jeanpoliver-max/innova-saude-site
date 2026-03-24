/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * CONTEÚDO REAL — CTA focado no modelo de locação com gestão integrada
 */
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/cta-section-Lp3MUMoPpa45Ez2d8hwdk2.webp";

export default function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CTA_IMG} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4F7A]/92 via-[#2B6A9E]/88 to-[#1B4F7A]/85" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#5B9BD5]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#7AB929]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Locação com gestão integrada para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7AB929] to-[#5B9BD5]">
              sua instituição
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Hospitais, UPAs, ambulatórios e UBSs. Sem investimento inicial em equipamentos. 
            Modelo completo com insumos, manutenção, treinamento, suporte 24h e responsabilidade técnica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#1B4F7A] font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300"
            >
              Solicitar Proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/5548991125309"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp (48) 99112-5309
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
