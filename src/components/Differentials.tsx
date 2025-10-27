const differentials = [
  {
    icon: "ri-user-star-line",
    title: "Atendimento Consultivo",
    description:
      "Análise personalizada do seu perfil para encontrar a melhor solução de consórcio",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Estratégias de Contemplação",
    description:
      "Técnicas exclusivas para aumentar suas chances de ser contemplado rapidamente",
  },
  {
    icon: "ri-shield-check-line",
    title: "Sem Restrições",
    description:
      "Soluções para quem tem nome restrito e busca economia inteligente",
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Sem Juros",
    description:
      "Consórcio não tem juros, apenas taxa administrativa fixa e transparente",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Parcelas Fixas",
    description:
      "Planejamento financeiro facilitado com parcelas que não aumentam",
  },
  {
    icon: "ri-team-line",
    title: "Suporte Completo",
    description:
      "Acompanhamento em todas as etapas até a conquista do seu objetivo",
  },
];

const Differentials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4">
            <span className="text-accent-foreground font-semibold text-sm">
              Diferenciais
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a <span className="text-primary">Connecta</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos referência em contemplações com propostas que realmente fazem
            sentido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border group cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors" aria-hidden="true">
                <i
                  className={`${item.icon} text-3xl text-accent-foreground group-hover:text-white transition-colors`}
                ></i>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
