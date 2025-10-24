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
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold text-sm">
              Referência em Contemplações
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Realize Seus <span className="text-primary">Objetivos</span> com
            Consórcios
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Atendimento consultivo com estratégias personalizadas para
            contemplação. Propostas que fazem sentido para você alcançar seus
            sonhos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToSimulator}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-glow"
            >
              <i className="ri-calculator-line text-2xl"></i>
              Simular Consórcio
            </button>
            <a
              href="https://wa.me/5541984190707"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <i className="ri-whatsapp-line text-2xl text-green-500"></i>
              Falar com Consultor
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+5000</div>
              <div className="text-gray-300 font-medium">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-300 font-medium">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+15</div>
              <div className="text-gray-300 font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
