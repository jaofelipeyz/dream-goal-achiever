import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, valorDesejado, prazo } = location.state || {};

  const [contactData, setContactData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  // Cálculos simplificados
  const valor = parseFloat(valorDesejado?.replace(/[^0-9]/g, "") || "50000");
  const meses = parseInt(prazo || "60");
  
  const parcelaConsorcio = (valor / meses) * 1.02; // 2% taxa administrativa
  const totalConsorcio = parcelaConsorcio * meses;
  
  const parcelaFinanciamento = (valor / meses) * 1.4; // 40% de juros
  const totalFinanciamento = parcelaFinanciamento * meses;
  
  const economia = totalFinanciamento - totalConsorcio;

  const handleContact = () => {
    const message = `Olá! Vi os resultados da simulação de *${type}*:\n\n` +
      `💰 Valor: R$ ${valorDesejado}\n` +
      `📅 Prazo: ${prazo} meses\n` +
      `💵 Parcela Consórcio: R$ ${parcelaConsorcio.toFixed(2)}\n` +
      `✅ Economia: R$ ${economia.toFixed(2)}\n\n` +
      `*Meus dados:*\n` +
      `Nome: ${contactData.nome}\n` +
      `Telefone: ${contactData.telefone}\n` +
      `Email: ${contactData.email}\n\n` +
      `Gostaria de falar com um especialista!`;
    
    window.open(`https://wa.me/5541984190707?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate("/simulador", { state: { type } })}
              className="mb-6"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Voltar para Simulação
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              Resultado da Sua Simulação
            </h1>
          </div>

          {/* Comparação */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Consórcio Connecta */}
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
                <h3 className="text-xl font-bold text-green-700">
                  Consórcio Connecta
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-medium">Parcela mensal:</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {parcelaConsorcio.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-green-200">
                  <span className="text-green-700 font-medium">Total a pagar:</span>
                  <span className="text-xl font-bold text-green-600">
                    R$ {totalConsorcio.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </div>
              </div>
            </div>

            {/* Financiamento Bancário */}
            <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-bank-line text-red-600 text-2xl"></i>
                <h3 className="text-xl font-bold text-red-700">
                  Financiamento Bancário
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-red-700 font-medium">Parcela mensal:</span>
                  <span className="text-2xl font-bold text-red-600">
                    R$ {parcelaFinanciamento.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-red-200">
                  <span className="text-red-700 font-medium">Total a pagar:</span>
                  <span className="text-xl font-bold text-red-600">
                    R$ {totalFinanciamento.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Economia */}
          <div className="bg-primary rounded-2xl p-6 text-center mb-8">
            <p className="text-primary-foreground text-2xl md:text-3xl font-bold mb-2">
              Você economiza R$ {economia.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Escolhendo o consórcio ao invés do financiamento bancário
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dados para Contato */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Seus Dados para Contato
              </h2>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={contactData.nome}
                  onChange={(e) =>
                    setContactData({ ...contactData, nome: e.target.value })
                  }
                />
                <Input
                  type="tel"
                  placeholder="(41) 99999-9999"
                  value={contactData.telefone}
                  onChange={(e) =>
                    setContactData({ ...contactData, telefone: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Próximos Passos */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Próximos Passos
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Análise do seu perfil</p>
                    <p className="text-muted-foreground text-sm">
                      Vamos entender suas necessidades
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Estratégia personalizada</p>
                    <p className="text-muted-foreground text-sm">
                      Criamos um plano sob medida para você
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Acompanhamento até a contemplação</p>
                    <p className="text-muted-foreground text-sm">
                      Estamos com você em cada etapa
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/simulador", { state: { type } })}
              className="flex-1"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Voltar
            </Button>
            <Button
              onClick={handleContact}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={!contactData.nome || !contactData.telefone || !contactData.email}
            >
              <i className="ri-user-star-line mr-2"></i>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ResultsPage;
