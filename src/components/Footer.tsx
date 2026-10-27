import React from 'react';
import { Dumbbell, Instagram, MessageCircle, MapPin, Clock, ArrowUp, Navigation } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/gymLogic.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Aulas & Planos', href: '#planos' },
    { label: 'Galeria da Estrutura', href: '#galeria' },
    { label: 'Simulador de Treino', href: '#calculadora' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização & Contato', href: '#localizacao' },
  ];

  const whatsappHref = buildWhatsAppLink(
    '5555999156558',
    'Olá Academia Supreme! Vim pelo rodapé do site e gostaria de agendar uma visita!'
  );

  const googleMapsUrl =
    'https://www.google.com/maps/place/Academia+Supreme/@-29.6948027,-53.8129698,17z';

  return (
    <footer
      aria-label="Rodapé Institucional Academia Supreme"
      className="bg-[#070e1c] border-t border-[#238dc8]/30 pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b4589] via-[#238dc8] to-[#00f0ff] p-[1.5px] shadow-lg shadow-[#238dc8]/25">
                <div className="w-full h-full bg-[#0a1428] rounded-[10px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-[#00f0ff]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white font-display uppercase">
                  Academia <span className="text-[#00f0ff]">Supreme</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#238dc8] font-semibold -mt-1">
                  Santa Maria • RS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Não é só sobre treinar. É sobre evolução. 💙 Estrutura moderna, aulas dinâmicas e planos acessíveis sem pegadinhas.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp da Academia Supreme"
                className="w-9 h-9 rounded-xl bg-[#0e1e38] border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/academiasupreme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram da Academia Supreme"
                className="w-9 h-9 rounded-xl bg-[#0e1e38] border border-pink-500/40 text-pink-400 hover:bg-pink-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil da Supreme no Google Maps"
                className="w-9 h-9 rounded-xl bg-[#0e1e38] border border-[#238dc8]/40 text-[#00f0ff] hover:bg-[#238dc8] hover:text-white flex items-center justify-center transition-all"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-4 border-l-2 border-[#00f0ff] pl-2.5">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#238dc8]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-4 border-l-2 border-[#00f0ff] pl-2.5">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>Av. Pres. Vargas, 1607 - Nossa Sra. de Fátima, Santa Maria - RS, 97015-512</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  WhatsApp: (55) 99915-6558
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00f0ff] hover:underline font-semibold"
                >
                  <span>Abrir no Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-4 border-l-2 border-[#00f0ff] pl-2.5">
              Horários de Funcionamento
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-[#0e1e38]/70 border border-[#238dc8]/25">
                <span className="block font-semibold text-slate-200">Segunda a Sexta:</span>
                <span className="text-[#00f0ff] font-bold font-display text-sm">06:00 às 23:00</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e1e38]/70 border border-[#238dc8]/25">
                <span className="block font-semibold text-slate-200">Sábados:</span>
                <span className="text-white font-bold font-display text-sm">09:00 às 18:00</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e1e38]/70 border border-[#238dc8]/25">
                <span className="block font-semibold text-slate-200">Domingos:</span>
                <span className="text-white font-bold font-display text-sm">15:00 às 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Academia Supreme. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Santa Maria - RS • Brasil</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-2 rounded-lg bg-[#0e1e38] text-slate-300 hover:text-[#00f0ff] hover:bg-[#1b4589]/40 border border-[#238dc8]/30 transition-all flex items-center gap-1.5"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
