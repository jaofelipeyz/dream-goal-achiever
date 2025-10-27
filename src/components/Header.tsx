import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Connecta Investimento Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold text-foreground">
                Connecta <span className="text-primary">Investimento</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Ir para seção Início"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Ir para seção Serviços"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("simulador")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Ir para simulador de consórcio"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Ir para depoimentos de clientes"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              aria-label="Ir para seção de contato"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5541984190707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2"
              aria-label="Falar conosco pelo WhatsApp"
            >
              <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
              Fale Conosco
            </a>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`} aria-hidden="true"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-fade-in" aria-label="Menu mobile">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              aria-label="Ir para seção Início"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              aria-label="Ir para seção Serviços"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("simulador")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              aria-label="Ir para simulador de consórcio"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              aria-label="Ir para depoimentos de clientes"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              aria-label="Ir para seção de contato"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5541984190707"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center mt-4"
              aria-label="Falar conosco pelo WhatsApp"
            >
              <i className="ri-whatsapp-line mr-2" aria-hidden="true"></i>
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
