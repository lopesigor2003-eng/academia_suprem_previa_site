import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Dumbbell, ArrowRight } from 'lucide-react';
import { getGymStatus, buildWhatsAppLink } from '../utils/gymLogic.ts';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [gymStatus, setGymStatus] = useState(() => getGymStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Update gym status every minute
    const interval = setInterval(() => {
      setGymStatus(getGymStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Aulas & Planos', href: '#planos' },
    { label: 'Estrutura', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = buildWhatsAppLink(
    '5555999156558',
    'Olá, vim pelo site da Academia Supreme e quero agendar uma visita e conhecer os planos!'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a1428]/90 backdrop-blur-md border-b border-[#238dc8]/30 shadow-lg shadow-[#0a1428]/50 py-3'
          : 'bg-gradient-to-b from-[#0a1428]/95 via-[#0a1428]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            aria-label="Academia Supreme - Ir para o início"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b4589] via-[#238dc8] to-[#00f0ff] p-[1.5px] shadow-lg shadow-[#238dc8]/25 group-hover:shadow-[#00f0ff]/50 transition-shadow">
              <div className="w-full h-full bg-[#0a1428] rounded-[10px] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[#00f0ff] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-display uppercase flex items-center gap-1">
                Academia <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">Supreme</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#238dc8] font-semibold -mt-1">
                Santa Maria • RS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#0e1e38]/60 border border-[#238dc8]/20 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:text-[#00f0ff] px-3 py-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Gym Open Status */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live gym status pill */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${
                gymStatus.isOpen
                  ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                  : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
              }`}
              title={gymStatus.nextStatusMessage}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  gymStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <Clock className="w-3.5 h-3.5 inline opacity-80" />
              <span>{gymStatus.isOpen ? 'Aberto Agora' : 'Fechado'}</span>
            </div>

            {/* Neon CTA Button */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale Conosco pelo WhatsApp da Academia Supreme"
              className="relative inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-xl text-xs xl:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1b4589] via-[#238dc8] to-[#00d4ff] hover:to-[#00f0ff] shadow-lg shadow-[#238dc8]/30 hover:shadow-[#00f0ff]/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#00f0ff]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Supreme"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold uppercase bg-[#238dc8] text-white border border-[#00f0ff]/50 shadow-md shadow-[#238dc8]/30"
            >
              Contato
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-lg bg-[#0e1e38] text-slate-200 hover:text-white border border-[#238dc8]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1428]/95 backdrop-blur-xl border-b border-[#238dc8]/30 px-6 py-6 transition-all duration-300">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  gymStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="text-xs font-medium text-slate-300">
                {gymStatus.nextStatusMessage}
              </span>
            </div>
            <span className="text-xs text-[#00f0ff] font-semibold">{gymStatus.hoursToday}</span>
          </div>

          <nav aria-label="Navegação Mobile" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-slate-200 hover:text-[#00f0ff] py-2 px-3 rounded-lg hover:bg-[#1b4589]/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-700/50 flex flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Começar pelo WhatsApp"
              className="w-full text-center py-3 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1b4589] to-[#238dc8] hover:to-[#00f0ff] border border-[#00f0ff]/40 shadow-lg shadow-[#238dc8]/30 flex items-center justify-center gap-2"
            >
              <span>Comece Sua Evolução Agora!</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
