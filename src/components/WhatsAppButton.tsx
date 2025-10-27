const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5541984190707"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-scale-in"
      aria-label="Conversar pelo WhatsApp"
    >
      <div className="relative">
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all cursor-pointer group-hover:scale-110 animate-float">
          <i className="ri-whatsapp-line text-white text-3xl group-hover:scale-110 transition-transform" aria-hidden="true"></i>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" aria-hidden="true"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
