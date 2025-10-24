const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5541984190707"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer group-hover:scale-110">
          <i className="ri-whatsapp-line text-white text-3xl"></i>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
