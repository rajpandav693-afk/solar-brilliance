import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton = ({ message }: WhatsAppButtonProps) => {
  const phoneNumber = "918799183646";
  const defaultMessage = "Hello Agnisun Solar 👋\nI'm interested in solar installation for my property. Please contact me.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp Us</span>
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-destructive rounded-full animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
