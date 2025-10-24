import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é consórcio?",
    answer: "Consórcio é uma modalidade de compra programada, onde você e outros participantes formam um grupo para adquirir bens (veículos, imóveis, serviços) sem pagar juros. Todos contribuem mensalmente e são contemplados por sorteio ou lance até que todos tenham recebido suas cartas de crédito.",
  },
  {
    question: "Como funciona a contemplação?",
    answer: "A contemplação pode acontecer de duas formas: por sorteio (realizado mensalmente pela administradora) ou por lance (quando você oferece um valor para antecipar sua contemplação). Nossa equipe consultiva te ajuda a escolher a melhor estratégia para seu perfil.",
  },
  {
    question: "Quais são as vantagens do consórcio?",
    answer: "O consórcio não tem juros, apenas taxa administrativa fixa. As parcelas são menores que financiamentos, você pode usar FGTS na contemplação (imóveis), não há IOF, e é uma forma mais econômica de realizar seus objetivos. Pode economizar até 40% comparado ao financiamento bancário.",
  },
  {
    question: "Posso participar com nome restrito?",
    answer: "Sim! Uma das grandes vantagens do consórcio é que não há análise de crédito rigorosa como nos bancos. Mesmo com restrições no CPF, você pode participar e realizar seus sonhos. Nossa consultoria é especializada em atender esse público.",
  },
  {
    question: "Quanto tempo leva para ser contemplado?",
    answer: "O prazo varia conforme o grupo e a estratégia escolhida. Com nosso atendimento consultivo, desenvolvemos estratégias personalizadas que aumentam significativamente suas chances de contemplação rápida. Muitos clientes são contemplados entre 6 e 12 meses.",
  },
  {
    question: "Posso usar o FGTS?",
    answer: "Sim! Para consórcios imobiliários, você pode utilizar seu FGTS tanto para dar lance quanto para amortizar parcelas após a contemplação. Nossa equipe te orienta sobre a melhor forma de usar esse benefício.",
  },
  {
    question: "O que acontece se eu não puder pagar uma parcela?",
    answer: "Você tem algumas opções: pode renegociar, fazer um acordo de pagamento ou até transferir sua cota. O importante é manter o diálogo com a administradora. Nossa equipe te acompanha e ajuda a encontrar soluções em momentos de dificuldade.",
  },
  {
    question: "Como funciona o atendimento consultivo da Connecta?",
    answer: "Analisamos seu perfil completo, suas necessidades e objetivos. Com base nisso, desenvolvemos uma estratégia personalizada de contemplação, indicamos os melhores grupos e acompanhamos você em todas as etapas. Nosso foco é criar propostas que realmente fazem sentido para você.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4 animate-fade-in">
            <span className="text-accent-foreground font-semibold text-sm">
              ❓ Perguntas Frequentes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Tire Suas <span className="text-gradient">Dúvidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Respondemos as principais questões sobre consórcios e nosso atendimento consultivo
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para te atender!
          </p>
          <a
            href="https://wa.me/5541984190707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-glow hover:shadow-2xl hover:-translate-y-1 group"
          >
            <i className="ri-whatsapp-line text-2xl group-hover:scale-110 transition-transform"></i>
            Falar com Especialista
          </a>
        </div>

        {/* Certificações */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bank-line text-3xl text-primary"></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Autorizado pelo Banco Central
              </h3>
              <p className="text-muted-foreground text-sm">
                Operamos dentro das normas e regulamentações do Banco Central do Brasil
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-primary"></i>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Representante Autorizada Multimarcas
              </h3>
              <p className="text-muted-foreground text-sm">
                Representamos as principais administradoras de consórcio do país
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
