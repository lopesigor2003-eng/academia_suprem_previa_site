import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/gymLogic.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = buildWhatsAppLink(
    '5555999156558',
    'Olá! Estou navegando no site da Academia Supreme e gostaria de saber mais sobre a matrícula e aulas!'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="relative bg-[#0e1e38] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#00f0ff]/40 backdrop-blur-md flex items-center gap-2 max-w-xs animate-bounce">
          <span>Tire suas dúvidas ou agende uma visita! 🚀</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar dica do WhatsApp"
            className="text-slate-400 hover:text-white p-0.5 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0e1e38] border-b border-r border-[#00f0ff]/40 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco pelo WhatsApp da Academia Supreme"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-[#00f0ff] text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00f0ff]"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
      </a>
    </div>
  );
};
