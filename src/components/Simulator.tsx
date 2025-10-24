import veiculosLevesImg from "@/assets/veiculos-leves.jpg";
import imoveisImg from "@/assets/imoveis.jpg";
import servicosImg from "@/assets/servicos.jpg";
import veiculosPesadosImg from "@/assets/veiculos-pesados.jpg";

const consortiumTypes = [
  {
    title: "Veículos Leves",
    subtitle: "Carros, motos e utilitários",
    description:
      "Realize o sonho do veículo próprio com as melhores condições do mercado.",
    highlight: "Economia de até 40% comparado ao financiamento",
    features: [
      "Sem juros abusivos",
      "Parcelas fixas que cabem no bolso",
      "Contemplação em até 12 meses",
    ],
    icon: "ri-car-line",
    image: veiculosLevesImg,
  },
  {
    title: "Imóveis",
    subtitle: "Casas, apartamentos e terrenos",
    description:
      "Conquiste sua casa própria ou invista em imóveis com planejamento inteligente.",
    highlight: "Sua casa própria sem burocracia bancária",
    features: [
      "Crédito de até R$ 500 mil",
      "Prazos de até 200 meses",
      "Contemplação estratégica",
    ],
    icon: "ri-home-4-line",
    image: imoveisImg,
  },
  {
    title: "Serviços",
    subtitle: "Reformas, viagens e eventos",
    description:
      "Financie reformas, viagens, festas e muito mais com total flexibilidade.",
    highlight: "Realize seus projetos sem comprometer o orçamento",
    features: [
      "Múltiplas finalidades",
      "Aprovação em 24h",
      "Sem garantias exigidas",
    ],
    icon: "ri-tools-line",
    image: servicosImg,
  },
  {
    title: "Veículos Pesados",
    subtitle: "Caminhões, máquinas e equipamentos",
    description:
      "Invista no seu negócio com caminhões e máquinas para impulsionar seus resultados.",
    highlight: "Transforme seu trabalho em um grande negócio",
    features: [
      "Equipamentos para trabalho",
      "Retorno do investimento garantido",
      "Parcelas compatíveis com a renda",
    ],
    icon: "ri-truck-line",
    image: veiculosPesadosImg,
  },
];

const Simulator = () => {
  return (
    <section id="simulador" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4">
            <span className="text-accent-foreground font-semibold text-sm">
              Simulador
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simule Seu <span className="text-primary">Consórcio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra quanto você pode economizar e realize seus sonhos com as
            melhores condições
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Escolha o tipo de consórcio ideal para você
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consortiumTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-border hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={type.image}
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <i className={`${type.icon} text-2xl text-white`}></i>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {type.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-3">
                    {type.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="bg-accent rounded-lg p-3 mb-4">
                    <p className="text-accent-foreground font-semibold text-sm text-center">
                      {type.highlight}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-foreground text-sm"
                      >
                        <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-accent-foreground text-xs"></i>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Simular Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
