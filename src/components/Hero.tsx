import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-bg.jpg";
import natalPromoBg from "@/assets/natal-promo-bg.png";
interface HeroSlide {
  id: number;
  badge: string;
  title: React.ReactNode;
  description: string;
  backgroundImage: string;
  isChristmas?: boolean;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    badge: "✨ Referência em Contemplações",
    title: (
      <>
        Realize Seus <span className="text-orange-500">Objetivos</span> com
        Créditos Inteligentes
      </>
    ),
    description:
      "Atendimento consultivo exclusivo com estratégias personalizadas para sua contemplação. Propostas que realmente fazem sentido para você alcançar seus sonhos.",
    backgroundImage: heroImage,
  },
  {
    id: 2,
    badge: "🎄 Promoção Especial",
    title: (
      <>
        Promoção de <span className="text-orange-500">Natal</span>
      </>
    ),
    description:
      "Todas as parcelas com 15% de desconto! Aproveite esta oportunidade única para realizar seus sonhos com condições especiais de fim de ano.",
    backgroundImage: natalPromoBg,
    isChristmas: true,
  },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSimulator = () => {
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="inicio" className="relative min-h-screen pt-20">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-h-screen flex items-center justify-center flex-[0_0_100%]"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 gradient-hero"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                  <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
                    <span className="text-primary font-semibold text-sm">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.isChristmas ? (
                      <a
                        href="https://wa.me/5541984190707?text=Olá! Quero garantir a promoção de Natal com 15% de desconto!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-glow hover:shadow-2xl hover:-translate-y-1 group border-2 border-white/20"
                        aria-label="Garantir promoção de Natal"
                      >
                        <i
                          className="ri-gift-line text-2xl group-hover:scale-110 transition-transform"
                          aria-hidden="true"
                        ></i>
                        🎁 Garantir a Promoção
                      </a>
                    ) : (
                      <>
                        <button
                          onClick={scrollToSimulator}
                          className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-glow hover:shadow-2xl hover:-translate-y-1 group"
                          aria-label="Abrir simulador de crédito"
                        >
                          <i
                            className="ri-calculator-line text-2xl group-hover:scale-110 transition-transform"
                            aria-hidden="true"
                          ></i>
                          Simular Meu Crédito
                        </button>
                        <a
                          href="https://wa.me/5541984190707"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
                          aria-label="Falar com especialista pelo WhatsApp"
                        >
                          <i
                            className="ri-whatsapp-line text-2xl text-green-500 group-hover:scale-110 transition-transform"
                            aria-hidden="true"
                          ></i>
                          Falar com Especialista
                        </a>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 pt-16 border-t border-white/20">
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                        +5000
                      </div>
                      <div className="text-gray-300 font-medium">
                        Clientes Atendidos
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                        98%
                      </div>
                      <div className="text-gray-300 font-medium">
                        Satisfação
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                        +15
                      </div>
                      <div className="text-gray-300 font-medium">
                        Anos de Experiência
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Slide anterior"
      >
        <i className="ri-arrow-left-s-line text-2xl" aria-hidden="true"></i>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Próximo slide"
      >
        <i className="ri-arrow-right-s-line text-2xl" aria-hidden="true"></i>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              selectedIndex === index
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
