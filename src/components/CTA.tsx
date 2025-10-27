import ctaImage from "@/assets/cta-bg.jpg";

const CTA = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url(${ctaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 gradient-hero"></div>

          <div className="relative z-10 px-8 md:px-16 py-20 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
                <span className="text-primary font-semibold">
                  Atendimento Especializado
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Pronto Para Realizar Seus <span className="text-primary">Objetivos</span>?
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Nossa equipe de consultores está pronta para criar uma estratégia
                personalizada para você. Atendimento consultivo com propostas que
                fazem sentido.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5541984190707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-bold text-lg flex items-center justify-center gap-2 shadow-glow"
                  aria-label="Falar com consultor pelo WhatsApp"
                >
                  <i className="ri-whatsapp-line text-2xl" aria-hidden="true"></i>
                  Falar com Consultor
                </a>
                <button
                  onClick={scrollToSimulator}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-lg flex items-center justify-center gap-2"
                  aria-label="Ir para o simulador"
                >
                  <i className="ri-calculator-line text-xl" aria-hidden="true"></i>
                  Fazer Simulação
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pt-12 border-t border-white/20">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-300 font-medium">Transparente</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <div className="text-gray-300 font-medium">Juros</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
