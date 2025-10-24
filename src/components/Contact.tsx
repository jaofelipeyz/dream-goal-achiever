import contactImage from "@/assets/contact-team.jpg";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent rounded-full px-6 py-2 mb-4">
            <span className="text-accent-foreground font-semibold text-sm">
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a realizar seus sonhos. Fale conosco
            agora mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <i className="ri-whatsapp-line text-2xl text-accent-foreground"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">(41) 98419-0707</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-2xl text-accent-foreground"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(41) 3333-4444</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-2xl text-accent-foreground"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground break-all">
                      connectainvestimento@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-2xl text-accent-foreground"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Horário de Atendimento
                    </h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <a
                  href="https://wa.me/5541984190707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg flex items-center justify-center gap-2"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              alt="Equipe de atendimento Connecta"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              src={contactImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
