import maria from "@/assets/testimonial-maria.jpg";
import joao from "@/assets/testimonial-joao.jpg";
import ana from "@/assets/testimonial-ana.jpg";
import carlos from "@/assets/testimonial-carlos.jpg";
import fernanda from "@/assets/testimonial-fernanda.jpg";
import roberto from "@/assets/testimonial-roberto.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Contemplada em 8 meses",
    image: maria,
    text: "Estava com o nome restrito e achei que nunca conseguiria comprar meu carro. A Connecta me mostrou que o consórcio era a solução perfeita! Fui contemplada em apenas 8 meses e realizei meu sonho.",
  },
  {
    name: "João Santos",
    role: "Contemplado em 6 meses",
    image: joao,
    text: "O atendimento consultivo fez toda a diferença. Eles analisaram meu perfil e criaram uma estratégia personalizada. Consegui minha casa própria muito mais rápido do que imaginava!",
  },
  {
    name: "Ana Paula Costa",
    role: "Contemplada em 12 meses",
    image: ana,
    text: "Transparência e honestidade do início ao fim. A equipe sempre disponível para tirar dúvidas. Recomendo de olhos fechados! Hoje tenho meu imóvel graças à Connecta.",
  },
  {
    name: "Carlos Eduardo",
    role: "Contemplado em 10 meses",
    image: carlos,
    text: "Excelente experiência! A Connecta me ajudou a entender todo o processo e me deu segurança para investir. As estratégias de contemplação realmente funcionam.",
  },
  {
    name: "Fernanda Lima",
    role: "Contemplada em 7 meses",
    image: fernanda,
    text: "Estava desacreditada, mas a Connecta me mostrou que era possível. O atendimento é impecável e as propostas fazem sentido. Conquistei meu veículo e estou muito feliz!",
  },
  {
    name: "Roberto Alves",
    role: "Contemplado em 9 meses",
    image: roberto,
    text: "Profissionalismo e comprometimento em cada etapa. A Connecta não é apenas uma empresa, é uma parceira que realmente quer ver você realizar seus objetivos.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4 animate-fade-in">
            <span className="text-accent-foreground font-semibold text-sm">
              ⭐ Depoimentos Reais
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Histórias de <span className="text-gradient">Conquistas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Clientes reais que confiaram em nosso atendimento consultivo e realizaram seus sonhos
          </p>
        </div>

        {/* Vídeo de Depoimento */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://imgur.com/GnirSnD/embed"
              frameBorder="0"
              allowFullScreen
              aria-label="Vídeo de depoimento de cliente"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-muted/30 to-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  alt={`Foto de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  src={testimonial.image}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary font-medium text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-primary text-lg" aria-hidden="true"></i>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-primary rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seja o Próximo a Realizar Seu Sonho!
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 5.000 clientes satisfeitos que conquistaram seus
            objetivos com a Connecta
          </p>
          <a
            href="https://wa.me/5541984190707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg"
            aria-label="Começar agora pelo WhatsApp"
          >
            <i className="ri-whatsapp-line text-2xl" aria-hidden="true"></i>
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
