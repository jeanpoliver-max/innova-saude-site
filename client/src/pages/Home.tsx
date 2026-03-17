/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Home: Página principal com todas as seções do site
 * Tipografia: Plus Jakarta Sans (headings) + DM Sans (body)
 * Paleta: Teal/Cyan primary, Coral accent, Slate neutrals
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import EquipmentSection from "@/components/EquipmentSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <SolutionsSection />
        <EquipmentSection />
        <DifferentialsSection />
        <CTASection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
