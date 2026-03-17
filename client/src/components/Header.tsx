/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Header: Navbar fixa com blur, transição de fundo ao scroll
 * Cores: teal-600 como primary, fundo translúcido
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

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
      <div className="hidden lg:block bg-teal-800 text-white/90 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+5500000000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(00) 0000-0000</span>
            </a>
            <a href="mailto:contato@innovasaude.com.br" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>contato@innovasaude.com.br</span>
            </a>
          </div>
          <span className="text-white/70">Seg - Sex: 08h às 18h</span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-teal-900/5"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group" onClick={() => handleNavClick("#inicio")}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>i</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-teal-800 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Innova Saúde
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-teal-600/70 font-medium">
                Point-of-Care
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 rounded-lg hover:bg-teal-50 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contato")}
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-semibold rounded-xl hover:from-teal-700 hover:to-teal-600 transition-all duration-200 shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35"
            >
              Solicitar Cotação
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6 text-teal-700" />}
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
            className="fixed inset-x-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl shadow-xl border-b border-teal-100 lg:hidden"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contato")}
                className="mt-3 w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-xl shadow-md"
              >
                Solicitar Cotação
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
