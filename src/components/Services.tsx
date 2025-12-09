const services = [
  {
    icon: "ri-car-line",
    title: "Crédito de Veículos",
    description:
      "Realize o sonho do carro próprio com as melhores condições e estratégias de contemplação.",
    features: ["Sem juros", "Parcelas fixas", "Alta chance de contemplação"],
  },
  {
    icon: "ri-home-4-line",
    title: "Crédito Imobiliário",
    description:
      "Conquiste sua casa própria ou invista em imóveis com planejamento inteligente.",
    features: [
      "Crédito de até R$ 500 mil",
      "Prazos flexíveis",
      "Contemplação estratégica",
    ],
  },
  {
    icon: "ri-shopping-bag-line",
    title: "Crédito de Serviços",
    description:
      "Financie reformas, viagens, festas e muito mais com crédito de serviços.",
    features: ["Múltiplas finalidades", "Sem burocracia", "Aprovação rápida"],
  },
  {
    icon: "ri-line-chart-line",
    title: "Produtos Financeiros",
    description:
      "Soluções financeiras personalizadas para quem busca economia e tem restrições.",
    features: [
      "Análise consultiva",
      "Propostas sob medida",
      "Atendimento especializado",
    ],
  },
  {
    icon: "ri-trophy-line",
    title: "Contemplação Garantida",
    description:
      "Estratégias exclusivas para aumentar suas chances de contemplação.",
    features: [
      "Análise de perfil",
      "Lances estratégicos",
      "Acompanhamento contínuo",
    ],
  },
  {
    icon: "ri-shield-check-line",
    title: "Consultoria Especializada",
    description:
      "Atendimento consultivo com foco em propostas que realmente fazem sentido.",
    features: ["Sem compromisso", "Transparência total", "Suporte completo"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4 animate-fade-in">
            <span className="text-accent-foreground font-semibold text-sm">
              💼 Soluções Completas
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Seu Parceiro em <span className="text-gradient">Conquistas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Trabalhamos com atendimento 100% consultivo, analisando seu perfil para encontrar 
            a solução perfeita. Cada cliente recebe estratégias personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 group cursor-pointer hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`${service.icon} text-3xl text-white`} aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-accent-foreground text-sm" aria-hidden="true"></i>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5541984190707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg shadow-glow"
            aria-label="Falar com especialista pelo WhatsApp"
          >
            <i className="ri-whatsapp-line text-2xl" aria-hidden="true"></i>
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
