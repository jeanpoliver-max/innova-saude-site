/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Footer: Escuro com gradiente, links organizados, redes sociais
 */
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Trabalhe Conosco", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
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
      { label: "FAQ", href: "#" },
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>i</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Innova Saúde
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-teal-400 font-medium">
                  Point-of-Care
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Soluções inovadoras em diagnóstico Point-of-Care. Tecnologia de ponta 
              para resultados rápidos e precisos ao alcance das suas mãos.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+5500000000000" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4" /> (00) 0000-0000
              </a>
              <a href="mailto:contato@innovasaude.com.br" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4" /> contato@innovasaude.com.br
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 shrink-0" /> São Paulo - SP, Brasil
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
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
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
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors duration-200"
              >
                <social.icon className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
