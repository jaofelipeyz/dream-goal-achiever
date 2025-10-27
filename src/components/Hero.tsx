import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 gradient-hero"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <span className="text-primary font-semibold text-sm">
              ✨ Referência em Contemplações
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Realize Seus <span className="text-gradient">Objetivos</span> com
            Consórcios Inteligentes
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Atendimento consultivo exclusivo com estratégias personalizadas para sua contemplação. 
            Propostas que realmente fazem sentido para você alcançar seus sonhos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={scrollToSimulator}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-glow hover:shadow-2xl hover:-translate-y-1 group"
              aria-label="Abrir simulador de consórcio"
            >
              <i className="ri-calculator-line text-2xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
              Simular Meu Consórcio
            </button>
            <a
              href="https://wa.me/5541984190707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
              aria-label="Falar com especialista pelo WhatsApp"
            >
              <i className="ri-whatsapp-line text-2xl text-green-500 group-hover:scale-110 transition-transform" aria-hidden="true"></i>
              Falar com Especialista
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">+5000</div>
              <div className="text-gray-300 font-medium">Clientes Atendidos</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-300 font-medium">Satisfação</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">+15</div>
              <div className="text-gray-300 font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
