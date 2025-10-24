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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
