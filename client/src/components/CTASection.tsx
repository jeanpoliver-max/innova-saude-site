/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * CTA: Seção de chamada para ação com imagem de fundo e overlay
 */
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/85 to-cyan-900/80" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Pronto para revolucionar seus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-200">
              diagnósticos?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-teal-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções Point-of-Care 
            podem transformar a eficiência do seu laboratório ou clínica.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-teal-700 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all duration-300"
            >
              Solicitar Cotação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+5500000000000"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
