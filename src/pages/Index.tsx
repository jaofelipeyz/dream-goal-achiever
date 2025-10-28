import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Simulator from "@/components/Simulator";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

// Função que remove elementos flutuantes com estilos específicos
const removeFloating = () => {
  document.querySelectorAll('[style^="position: fixed"][style*="bottom: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
};

// Executa a função imediatamente ao carregar
removeFloating();

// Observa mudanças no DOM e reaplica a função se novos elementos forem adicionados
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RemoveFloatingElements />
      <Header />
      <Hero />
      <Services />
      <Simulator />
      <Differentials />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
