import React, { useRef, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Users, 
  Zap
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/gymLogic.ts';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const whatsappHeroHref = buildWhatsAppLink(
    '5555999156558',
    'Olá! Assisti ao vídeo da Academia Supreme e quero começar minha evolução hoje!'
  );

  // Guarantee that the video is strictly muted (volume 0), plays automatically and runs continuously forever
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0;
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry autoplay if initially blocked by browser policy
        video.muted = true;
        video.play();
      });
    }

    const ensurePlaying = () => {
      if (video.paused) {
        video.volume = 0;
        video.muted = true;
        video.play().catch(() => {});
      }
    };

    // Auto resume on loop completion, pause attempt, or document tab visibility change
    video.addEventListener('ended', ensurePlaying);
    video.addEventListener('pause', ensurePlaying);
    document.addEventListener('visibilitychange', ensurePlaying);

    return () => {
      video.removeEventListener('ended', ensurePlaying);
      video.removeEventListener('pause', ensurePlaying);
      document.removeEventListener('visibilitychange', ensurePlaying);
    };
  }, []);

  return (
    <section
      id="inicio"
      aria-label="Apresentação Academia Supreme"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0b162c]"
    >
      {/* Background Cyber Accents & Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b162c] via-[#0d1d3a] to-[#0b162c]" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#238dc8]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Side-by-side Layout: Title on Left, Original Format Borderless Video on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Description, and Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1e38]/90 border border-[#00f0ff]/40 text-[#00f0ff] text-xs font-semibold tracking-wide uppercase mb-5 shadow-[0_0_15px_rgba(35,141,200,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>A Sua Melhor Versão Começa Aqui • Santa Maria, RS</span>
            </div>

            {/* Sole H1 Requirement */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight uppercase font-display leading-[1.12]">
              Academia Supreme:{' '}
              <span className="block mt-1.5 bg-gradient-to-r from-white via-cyan-100 to-[#00f0ff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Não é só sobre treinar.
              </span>
              <span className="block mt-1 text-[#238dc8] drop-shadow-[0_0_20px_rgba(35,141,200,0.7)]">
                É sobre evolução. 💙
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
              Na Supreme você encontra estrutura completa, aulas coletivas, horários flexíveis, planos que cabem na sua rotina e benefícios que fazem a diferença.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={whatsappHeroHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comece Sua Evolução Agora pelo WhatsApp da Academia Supreme"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1b4589] via-[#238dc8] to-[#00d4ff] hover:to-[#00f0ff] shadow-[0_0_20px_rgba(35,141,200,0.45)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#00f0ff]/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00f0ff]/60"
              >
                <span>Comece Sua Evolução Agora!</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#planos"
                aria-label="Conheça os Planos e Diferenciais da Academia Supreme"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-[#0e1e38]/90 hover:bg-[#1b4589]/40 border border-[#238dc8]/40 hover:border-[#00f0ff]/60 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              >
                <Zap className="w-4 h-4 text-[#00f0ff]" />
                <span>Conheça Nossos Planos</span>
              </a>
            </div>

            {/* Quick mini-badges below CTAs */}
            <div className="mt-8 pt-6 border-t border-[#238dc8]/20 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span className="text-xs font-semibold text-slate-300">Taxa Zero</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Zap className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span className="text-xs font-semibold text-slate-300">Sem Fidelidade</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Users className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span className="text-xs font-semibold text-slate-300">Desconto Estudante</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-300">+230 Avaliações 5★</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Format (720x1280 9:16), Borderless, Endless Loop, Volume 0 */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            {/* 
              Zero border container:
              - Aspect ratio: exactly 9/16 (720x1280)
              - No border, no stroke, no outline
              - Continuously playing endlessly at volume 0
            */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1428]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Vídeo oficial da estrutura da Academia Supreme rodando em formato original e sem bordas"
                className="w-full h-full object-cover rounded-2xl block"
              >
                <source src="/videos/academia-supreme.mp4" type="video/mp4" />
                <source src="https://drive.usercontent.google.com/download?id=1_WKE4K274EF9h1MhU3pkp4B6gn1APJg_&export=download" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo HTML5.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
