import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  timeWithGym: string;
  rating: number;
  quote: string;
  avatarText: string;
  highlightTag: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Gabriel Menezes',
      role: 'Musculação & Treino de Força',
      timeWithGym: 'Aluno há 1 ano e 3 meses',
      rating: 5,
      avatarText: 'GM',
      highlightTag: 'Estrutura & Aparelhos',
      quote:
        'A estrutura da Supreme é sensacional em Santa Maria! Aparelhos novos e bem conservados, ar-condicionado sempre no ponto perfeito e os professores realmente circulam corrigindo a postura. Não troco por nenhuma outra.',
    },
    {
      name: 'Camila Dornelles',
      role: 'Spinning & Treino Funcional',
      timeWithGym: 'Aluna há 8 meses',
      rating: 5,
      avatarText: 'CD',
      highlightTag: 'Aulas & Flexibilidade',
      quote:
        'Adoro a flexibilidade de horários. Faço funcional logo de manhã antes do trabalho e aos sábados aproveito o spinning. Sem taxa de matrícula e sem a prisão de fidelidade foi o que me fez assinar sem receio nenhum.',
    },
    {
      name: 'Rodrigo Fontoura',
      role: 'Estudante de Engenharia UFSM',
      timeWithGym: 'Aluno há 11 meses',
      rating: 5,
      avatarText: 'RF',
      highlightTag: 'Desconto Estudante',
      quote:
        'O desconto para estudantes é o melhor da cidade e a localização na Presidente Vargas é muito prática para quem depende de transporte. O ambiente é muito focado, sem filas eternas nos aparelhos nos horários de pico.',
    },
    {
      name: 'Mariana Silveira',
      role: 'Condicionamento & Emagrecimento',
      timeWithGym: 'Aluna há 2 anos',
      rating: 5,
      avatarText: 'MS',
      highlightTag: 'Evolução & Acolhimento',
      quote:
        'A Supreme me fez ter gosto por treinar de verdade. Não é aquele clima intimidador de outras academias; aqui você se sente motivada e acolhida por todos desde o primeiro dia. Minha disposição diária mudou completamente!',
    },
  ];

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de Alunos da Academia Supreme"
      className="relative py-20 sm:py-28 bg-[#0b162c] overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#1b4589]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados Comprovados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight">
            O Que Dizem <span className="text-[#00f0ff] neon-glow-text">Nossos Alunos</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Mais de 230 histórias reais de transformação física, saúde mental e consistência na Supreme.
          </p>
        </div>

        {/* Google Reviews Banner Seal */}
        <div className="max-w-4xl mx-auto mb-12 glass-panel p-6 rounded-2xl border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0a1428]/50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0e1e38] border border-amber-400/40 flex items-center justify-center text-amber-400 text-2xl font-black font-display shrink-0">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white font-bold text-sm sm:text-base">
                Avaliação 4.9 de 5 estrelas no Google Maps
              </p>
              <p className="text-xs text-slate-400">
                Baseado em mais de 230 avaliações verificadas de quem treina conosco todos os dias.
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/zoiuwWKDweWV3gZn8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir todas as avaliações da Academia Supreme no Google Maps"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md shadow-amber-500/20"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Testimonials Grid using semantic <article> elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#238dc8]/30 hover:border-[#00f0ff]/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00f0ff] bg-[#09152b] px-3 py-1 rounded-full border border-[#238dc8]/30">
                    {item.highlightTag}
                  </span>
                </div>

                <div className="relative mb-5">
                  <MessageSquareQuote className="w-8 h-8 text-[#238dc8]/30 absolute -top-3 -left-2 -z-0" />
                  <p className="relative z-10 text-slate-200 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info Footer */}
              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b4589] to-[#238dc8] border border-[#00f0ff]/40 flex items-center justify-center text-white font-bold text-xs font-display">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                      {item.name}
                      <span title="Avaliação Verificada">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
