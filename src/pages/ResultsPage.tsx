import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { type, valorDesejado, prazo, valorEntrada, rendaMensal } = location.state || {};

  const [contactData, setContactData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, "");
    return numbers.length >= 10;
  };

  const validateContact = () => {
    const newErrors = {
      nome: "",
      telefone: "",
      email: "",
    };

    if (!contactData.nome || contactData.nome.length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!contactData.telefone || !validatePhone(contactData.telefone)) {
      newErrors.telefone = "Telefone inválido (mínimo 10 dígitos)";
    }

    if (!contactData.email || !validateEmail(contactData.email)) {
      newErrors.email = "E-mail inválido";
    }

    setErrors(newErrors);
    return !newErrors.nome && !newErrors.telefone && !newErrors.email;
  };

  // Cálculos corrigidos
  const valor = parseFloat(valorDesejado?.replace(/[^0-9]/g, "") || "50000") / 100;
  const meses = parseInt(prazo || "60");
  
  // Cálculo Consórcio
  // Taxa administrativa: 20% do crédito total dividido pelo prazo
  // Fundo de reserva: 4% do crédito total dividido pelo prazo
  const taxaAdmin = (valor * 0.20) / meses;
  const fundoReserva = (valor * 0.04) / meses;
  const parcelaBase = valor / meses;
  const parcelaConsorcio = parcelaBase + taxaAdmin + fundoReserva;
  const totalConsorcio = parcelaConsorcio * meses;
  
  // Cálculo Financiamento (Tabela Price)
  // Taxa de juros mensal: 1.99% ao mês (aproximadamente 26% ao ano)
  const taxaJurosMensal = 0.0199;
  const parcelaFinanciamento = valor * (taxaJurosMensal * Math.pow(1 + taxaJurosMensal, meses)) / (Math.pow(1 + taxaJurosMensal, meses) - 1);
  const totalFinanciamento = parcelaFinanciamento * meses;
  
  const economia = totalFinanciamento - totalConsorcio;
  const percentualEconomia = ((economia / totalFinanciamento) * 100);

  const handleContact = () => {
    if (!validateContact()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    const message = `📩 Novo Lead — Simulação de (Connecta)\n\n` +
      `🏠 Tipo de bem: ${type || 'Não informado'}\n` +
      `💰 Valor do bem: R$ ${valorDesejado || 'Não informado'}\n` +
      `📅 Prazo desejado: ${prazo ? `${prazo} meses` : 'Não informado'}\n` +
      `💵 Entrada disponível: ${valorEntrada || 'Não informada'}\n` +
      `👔 Renda mensal: ${rendaMensal || 'Não informada'}\n\n` +
      `Comparativo de condições:\n\n` +
      `Parcela Crédito: R$ ${parcelaConsorcio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n\n` +
      `Parcela Financiamento: R$ ${parcelaFinanciamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n\n` +
      `💸 Economia estimada: R$ ${economia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${percentualEconomia.toFixed(1)}%)\n\n\n` +
      `🧍Dados do cliente:\n\n` +
      `Nome: ${contactData.nome}\n\n` +
      `Telefone: ${contactData.telefone}\n\n` +
      `E-mail: ${contactData.email}\n\n\n` +
      `🗣️ Observação:\n` +
      `O cliente demonstrou interesse em falar com um especialista para entender melhor as condições e dar andamento à simulação`;
    
    window.open(`https://wa.me/5541984190707?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp em instantes.",
    });
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
            {/* Crédito Connecta */}
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
                <h3 className="text-xl font-bold text-green-700">
                  Crédito Connecta
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-medium">Parcela mensal:</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {parcelaConsorcio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-green-200">
                  <span className="text-green-700 font-medium">Total a pagar:</span>
                  <span className="text-xl font-bold text-green-600">
                    R$ {totalConsorcio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="pt-2 text-center">
                  <span className="text-xs text-green-600 font-medium">
                    Taxa administrativa: 20% | Fundo de reserva: 4%
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
                    R$ {parcelaFinanciamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-red-200">
                  <span className="text-red-700 font-medium">Total a pagar:</span>
                  <span className="text-xl font-bold text-red-600">
                    R$ {totalFinanciamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="pt-2 text-center">
                  <span className="text-xs text-red-600 font-medium">
                    Taxa de juros: 1,99% ao mês (Tabela Price)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Economia */}
          <div className="bg-primary rounded-2xl p-6 text-center mb-8">
            <p className="text-primary-foreground text-2xl md:text-3xl font-bold mb-2">
              Você economiza R$ {economia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-primary-foreground/90 text-lg font-semibold mb-1">
              Isso representa {percentualEconomia.toFixed(1)}% de economia!
            </p>
            <p className="text-primary-foreground/80 text-sm md:text-base">
              Escolhendo o crédito ao invés do financiamento bancário
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dados para Contato */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Seus Dados para Contato
              </h2>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome completo *"
                    value={contactData.nome}
                    onChange={(e) => {
                      setContactData({ ...contactData, nome: e.target.value });
                      if (errors.nome) setErrors({ ...errors, nome: "" });
                    }}
                    className={errors.nome ? "border-red-500" : ""}
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="(41) 99999-9999 *"
                    value={contactData.telefone}
                    onChange={(e) => {
                      setContactData({ ...contactData, telefone: e.target.value });
                      if (errors.telefone) setErrors({ ...errors, telefone: "" });
                    }}
                    className={errors.telefone ? "border-red-500" : ""}
                  />
                  {errors.telefone && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="seu@email.com *"
                    value={contactData.email}
                    onChange={(e) => {
                      setContactData({ ...contactData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
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
