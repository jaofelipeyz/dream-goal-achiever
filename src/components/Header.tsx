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

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("simulador")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5541984190707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Fale Conosco
            </a>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("simulador")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Simulador
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
