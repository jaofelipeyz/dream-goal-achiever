import logo from "@/assets/logo.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Connecta Investimento Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">
                Connecta <span className="text-primary">Investimento</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Referência em contemplações de consórcio. Ajudamos pessoas a
              realizarem seus objetivos com atendimento consultivo e propostas que
              fazem sentido.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5541984190707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Connecta Investimento"
              >
                <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/connectainvestimento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram da Connecta Investimento"
              >
                <i className="ri-instagram-line text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/connectainvestimento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook da Connecta Investimento"
              >
                <i className="ri-facebook-fill text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("simulador")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Simulador
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Consórcio de Veículos</li>
              <li className="text-gray-400">Consórcio Imobiliário</li>
              <li className="text-gray-400">Consórcio de Serviços</li>
              <li className="text-gray-400">Produtos Financeiros</li>
              <li className="text-gray-400">Consultoria Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-primary text-xl flex-shrink-0 mt-1" aria-hidden="true"></i>
                <span className="text-gray-400">Marechal Deodoro, 220</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-phone-line text-primary text-xl flex-shrink-0 mt-1" aria-hidden="true"></i>
                <a
                  href="tel:+5541984190707"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  (41) 98419-0707
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-primary text-xl flex-shrink-0 mt-1" aria-hidden="true"></i>
                <a
                  href="mailto:connectainvestimento@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors break-all"
                >
                  connectainvestimento@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-6 mb-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <i className="ri-bank-line text-primary" aria-hidden="true"></i>
                <span>Autorizado pelo Banco Central</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line text-primary" aria-hidden="true"></i>
                <span>Representante Autorizada Multimarcas</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Connecta Investimento. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
