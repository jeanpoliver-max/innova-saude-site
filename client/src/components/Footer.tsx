/*
 * Design: "Vital Flow" — Paleta da Logo Innova Saúde
 * Cores: Azul escuro (#1B4F7A), Azul ciano (#5B9BD5), Verde limão (#7AB929)
 */
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/logo-transparent_57153529.png";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Trabalhe Conosco", href: "#contato" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade", isRoute: true },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Bioquímica Clínica", href: "#solucoes" },
      { label: "Hematologia", href: "#solucoes" },
      { label: "Imunoensaio", href: "#solucoes" },
      { label: "Testes Rápidos", href: "#solucoes" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Assistência Técnica", href: "#contato" },
      { label: "Treinamento", href: "#contato" },
      { label: "Cotação", href: "#contato" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Wave top */}
      <div className="relative -mt-px">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="rgb(15,23,42)"/>
        </svg>
      </div>

      <div className="container py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={LOGO_URL}
                alt="Innova Saúde"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">
              Gestão que cuida, compromisso que transforma!
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Soluções inovadoras em diagnóstico Point-of-Care. Tecnologia de ponta 
              para resultados rápidos e precisos ao alcance das suas mãos.
            </p>
            <div className="space-y-2.5">
              <a href="https://wa.me/5548991125309" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#7AB929] transition-colors">
                <MessageCircle className="w-4 h-4" /> (48) 99112-5309
              </a>
              <a href="tel:+5548991125309" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#5B9BD5] transition-colors">
                <Phone className="w-4 h-4" /> (48) 99112-5309
              </a>
              <a href="mailto:gestao@innovasaude.com.br" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#5B9BD5] transition-colors">
                <Mail className="w-4 h-4" /> gestao@innovasaude.com.br
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 
                <span>Rua Victor Meirelles, 411<br />CEP: 88.133-370 - Palhoça - SC - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {('isRoute' in link && link.isRoute) ? (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-[#5B9BD5] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm text-slate-400 hover:text-[#5B9BD5] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Innova Saúde. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/innovasaude.lab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-all duration-200"
            >
              <Instagram className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>
            <a
              href="https://wa.me/5548991125309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
