import React from 'react';
import { Target, Compass, Award, Star, CheckCircle2, TrendingUp, Sparkles, HeartHandshake } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/gymLogic.ts';

export const AboutSection: React.FC = () => {
  const whatsappHref = buildWhatsAppLink(
    '5555999156558',
    'Olá! Li sobre a essência da Academia Supreme e gostaria de saber mais sobre a matrícula sem taxa!'
  );

  const valuesList = [
    { name: 'Inovação', desc: 'Aparelhos modernos e metodologia de treino contemporânea para maximizar cada minuto do seu treino.' },
    { name: 'Respeito', desc: 'Ambiente inclusivo, seguro e acolhedor para pessoas de todas as idades, biotipos e níveis de aptidão.' },
    { name: 'Disciplina', desc: 'Incentivo contínuo e acompanhamento dedicado para transformar o hábito do exercício em estilo de vida.' },
    { name: 'Comunidade', desc: 'Energia contagiante onde alunos e instrutores torcem juntos por cada vitória conquistada.' },
    { name: 'Excelência', desc: 'Profissionais qualificados e estrutura de alto padrão voltados ao seu resultado sustentável.' },
  ];

  return (
    <section
      id="sobre"
      aria-label="Sobre a Academia Supreme"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#0b162c] via-[#0f2142] to-[#0b162c] overflow-hidden"
    >
      {/* Background cyber accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#238dc8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1b4589]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Essência & Propósito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight">
            Quem <span className="text-[#00f0ff] neon-glow-text">Somos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1b4589] via-[#00f0ff] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Brand Manifest Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Manifest Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-l-4 border-l-[#00f0ff] shadow-xl shadow-[#0a1428]/40 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#238dc8]/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed mb-4">
                &ldquo;Não é só sobre treinar. É sobre evolução. 💙&rdquo;
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Na Supreme você encontra estrutura completa, aulas coletivas, horários flexíveis, planos que cabem na sua rotina e benefícios que fazem a diferença. Sem taxa de inscrição, sem fidelidade nos planos mensais e com descontos especiais para estudantes e acompanhamento profissional.
              </p>

              <div className="mt-5 p-4 rounded-xl bg-[#09152b]/90 border border-[#238dc8]/30 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#00f0ff] shrink-0" />
                <p className="text-sm font-semibold text-white">
                  Seu resultado começa com uma decisão: <span className="text-[#00f0ff] uppercase tracking-wide">começar. 🚀</span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Sem taxa de inscrição</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Sem fidelidade mensal</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Desconto para estudantes</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Acompanhamento profissional</span>
                </div>
              </div>
            </div>

            {/* Quick CTA button */}
            <div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1b4589] to-[#238dc8] hover:to-[#00f0ff] border border-[#00f0ff]/40 shadow-lg shadow-[#238dc8]/25 hover:scale-[1.02] transition-all"
              >
                <span>Conheça Nossos Espaços</span>
                <HeartHandshake className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Trust Seal & Metric Badge Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Trust Seal Card */}
            <article className="glass-panel p-6 sm:p-7 rounded-2xl relative border border-[#238dc8]/40 hover:border-[#00f0ff]/60 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#00f0ff]">
                  Selo de Credibilidade
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Google Verified
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 text-slate-950 font-black text-2xl font-display">
                  4.9
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    +230 Avaliações Positivas
                  </h3>
                  <p className="text-xs text-slate-300">
                    Média de 4.9 estrelas no Google Maps de Santa Maria
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 border-t border-slate-700/60 pt-3">
                Reconhecimento comprovado pelos alunos: atendimento atencioso, aparelhos impecáveis, energia contagiante e estrutura de alto rendimento.
              </p>

              <a
                href="https://maps.app.goo.gl/zoiuwWKDweWV3gZn8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff] hover:underline"
              >
                <span>Conferir avaliações no Google Maps</span>
                <Award className="w-4 h-4" />
              </a>
            </article>

            {/* Pillar highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-[#238dc8]/25 text-center">
                <span className="block text-2xl font-black text-[#00f0ff] font-display">100%</span>
                <span className="text-xs text-slate-300 font-medium">Foco no Seu Progresso</span>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-[#238dc8]/25 text-center">
                <span className="block text-2xl font-black text-white font-display">0 R$</span>
                <span className="text-xs text-slate-300 font-medium">Taxa de Matrícula</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Values Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Missão Card */}
          <article className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#238dc8]/30 relative overflow-hidden group hover:border-[#00f0ff]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1b4589]/50 border border-[#238dc8]/40 flex items-center justify-center text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide mb-3">
              Nossa Missão
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Capacitar indivíduos a transcenderem seus limites, promovendo saúde, bem-estar e uma jornada de evolução contínua através de um ambiente inspirador e suporte profissional de excelência.
            </p>
          </article>

          {/* Valores Card */}
          <article className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#238dc8]/30 relative overflow-hidden group hover:border-[#00f0ff]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1b4589]/50 border border-[#238dc8]/40 flex items-center justify-center text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide mb-3">
              Nossos Valores
            </h3>
            <div className="flex flex-col gap-2.5">
              {valuesList.map((val) => (
                <div key={val.name} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <span className="font-bold text-[#00f0ff] shrink-0 font-display uppercase">
                    {val.name}:
                  </span>
                  <span className="text-slate-300">{val.desc}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
