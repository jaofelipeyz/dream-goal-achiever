import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConsortiumType {
  title: string;
  subtitle: string;
  icon: string;
  advantages: string[];
  highlight: string;
}

const consortiumData: Record<string, ConsortiumType> = {
  "Veículos Leves": {
    title: "Veículos Leves",
    subtitle: "Carros, motos e utilitários",
    icon: "ri-car-line",
    advantages: [
      "Sem juros abusivos",
      "Parcelas fixas que cabem no bolso",
      "Contemplação em até 12 meses",
      "Sem comprovação de renda",
      "Economia de até 40%",
    ],
    highlight: "Economia de até 40% comparado ao financiamento",
  },
  "Imóveis": {
    title: "Imóveis",
    subtitle: "Casas, apartamentos e terrenos",
    icon: "ri-home-4-line",
    advantages: [
      "Crédito de até R$ 500 mil",
      "Prazos de até 200 meses",
      "Contemplação estratégica",
      "Sem comprovação de renda",
      "Use FGTS na contemplação",
    ],
    highlight: "Sua casa própria sem burocracia bancária",
  },
  "Serviços": {
    title: "Serviços",
    subtitle: "Reformas, viagens e eventos",
    icon: "ri-tools-line",
    advantages: [
      "Múltiplas finalidades",
      "Aprovação em 24h",
      "Sem garantias exigidas",
      "Sem comprovação de renda",
      "Flexibilidade total",
    ],
    highlight: "Realize seus projetos sem comprometer o orçamento",
  },
  "Veículos Pesados": {
    title: "Veículos Pesados",
    subtitle: "Caminhões, máquinas e equipamentos",
    icon: "ri-truck-line",
    advantages: [
      "Equipamentos para trabalho",
      "Retorno do investimento garantido",
      "Parcelas compatíveis com a renda",
      "Sem comprovação de renda",
      "Financiamento inteligente",
    ],
    highlight: "Transforme seu trabalho em um grande negócio",
  },
};

const SimulatorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = (location.state?.type as string) || "Veículos Leves";
  const data = consortiumData[type];

  const [formData, setFormData] = useState({
    valorDesejado: "",
    prazo: "",
    valorEntrada: "",
    rendaMensal: "",
  });

  const handleSubmit = () => {
    const message = `Olá! Gostaria de fazer uma simulação de consórcio de *${type}*:\n\n` +
      `💰 Valor Desejado: R$ ${formData.valorDesejado}\n` +
      `📅 Prazo: ${formData.prazo} meses\n` +
      `💵 Entrada: R$ ${formData.valorEntrada || "0"}\n` +
      `📊 Renda Mensal: R$ ${formData.rendaMensal}\n\n` +
      `Podem me ajudar com mais detalhes?`;
    
    window.open(`https://wa.me/5541984190707?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Voltar
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <i className={`${data.icon} text-3xl text-white`}></i>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{data.title}</h1>
                <p className="text-primary font-medium">{data.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dados da Simulação
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="valorDesejado" className="text-foreground">
                    Valor Desejado
                  </Label>
                  <Input
                    id="valorDesejado"
                    type="text"
                    placeholder="R$ 50.000"
                    value={formData.valorDesejado}
                    onChange={(e) =>
                      setFormData({ ...formData, valorDesejado: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="prazo" className="text-foreground">
                    Prazo (meses)
                  </Label>
                  <Select
                    value={formData.prazo}
                    onValueChange={(value) =>
                      setFormData({ ...formData, prazo: value })
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o prazo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24">24 meses</SelectItem>
                      <SelectItem value="36">36 meses</SelectItem>
                      <SelectItem value="48">48 meses</SelectItem>
                      <SelectItem value="60">60 meses</SelectItem>
                      <SelectItem value="72">72 meses</SelectItem>
                      <SelectItem value="84">84 meses</SelectItem>
                      <SelectItem value="100">100 meses</SelectItem>
                      <SelectItem value="120">120 meses</SelectItem>
                      <SelectItem value="150">150 meses</SelectItem>
                      <SelectItem value="180">180 meses</SelectItem>
                      <SelectItem value="200">200 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="valorEntrada" className="text-foreground">
                    Valor de Entrada (opcional)
                  </Label>
                  <Input
                    id="valorEntrada"
                    type="text"
                    placeholder="R$ 5.000"
                    value={formData.valorEntrada}
                    onChange={(e) =>
                      setFormData({ ...formData, valorEntrada: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="rendaMensal" className="text-foreground">
                    Renda Mensal
                  </Label>
                  <Input
                    id="rendaMensal"
                    type="text"
                    placeholder="R$ 3.000"
                    value={formData.rendaMensal}
                    onChange={(e) =>
                      setFormData({ ...formData, rendaMensal: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Ver resultados
                </Button>
              </div>
            </div>

            {/* Vantagens */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Vantagens do Consórcio
              </h2>

              <ul className="space-y-4 mb-6">
                {data.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-accent-foreground text-sm"></i>
                    </div>
                    <span className="text-foreground font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/50 rounded-lg p-4 border border-accent">
                <p className="text-accent-foreground font-semibold text-center">
                  {data.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SimulatorPage;
