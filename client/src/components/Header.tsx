/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 * Header: Navbar fixa com blur, logo real da empresa
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/logo-transparent_57153529.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Equipamentos", href: "#equipamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1B4F7A] text-white/90 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="https://wa.me/5548991125309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>(48) 99112-5309</span>
            </a>
            <a href="mailto:gestao@innovasaude.com.br" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>gestao@innovasaude.com.br</span>
            </a>
          </div>
          <span className="text-white/70">Seg - Sex: 08h às 18h</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group shrink-0" onClick={() => handleNavClick("#inicio")}>
            <img
              src={LOGO_URL}
              alt="Innova Saúde - Gestão que cuida, compromisso que transforma"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#1B4F7A] rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contato")}
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-[#1B4F7A] to-[#2B6A9E] text-white text-sm font-semibold rounded-xl hover:from-[#163F62] hover:to-[#1B4F7A] transition-all duration-200 shadow-md shadow-[#1B4F7A]/25 hover:shadow-lg hover:shadow-[#1B4F7A]/35"
            >
              Solicitar Proposta
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-[#1B4F7A]" /> : <Menu className="w-6 h-6 text-[#1B4F7A]" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl shadow-xl border-b border-blue-100 lg:hidden"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-[#1B4F7A] hover:bg-blue-50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contato")}
                className="mt-3 w-full px-6 py-3 bg-gradient-to-r from-[#1B4F7A] to-[#2B6A9E] text-white font-semibold rounded-xl shadow-md"
              >
                Solicitar Proposta
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
