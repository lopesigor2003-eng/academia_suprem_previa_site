import React, { useState } from 'react';
import { 
  Building2, 
  Flame, 
  Clock, 
  CreditCard, 
  Gift, 
  Check, 
  Sparkles, 
  ArrowRight,
  GraduationCap,
  CalendarDays
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/gymLogic.ts';

export const DifferentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diferenciais' | 'aulas' | 'planos'>('diferenciais');

  const differentialsList = [
    {
      icon: Building2,
      title: 'Estrutura Completa',
      tag: 'Alta Performance',
      description: 'Maquinário moderno com ergonomia e biomecânica avançada, ampla área de pesos livres, área cardiovascular e climatização inteligente.',
      bullets: ['Equipamentos importados de ponta', 'Ambiente 100% climatizado', 'Vestiários higienizados e confortáveis', 'Área de cardio com esteiras e elípticos'],
    },
    {
      icon: Flame,
      title: 'Aulas Coletivas Variadas',
      tag: 'Energia Coletiva',
      description: 'Modalidades dinâmicas orientadas por professores motivadores para queimar calorias, tonificar músculos e elevar seu astral diário.',
      bullets: ['Spinning Supreme (Ciclismo Indoor)', 'Treino Funcional de Alta Intensidade', 'Ritmos & FitDance contagiante', 'Pilates Solo e Mobilidade'],
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      tag: 'Liberdade na Rotina',
      description: 'Treine cedo pela manhã, no intervalo do almoço ou até tarde da noite. A Supreme se adapta ao seu ritmo e compromissos.',
      bullets: ['Segunda a Sexta: 06:00 às 23:00', 'Sábados: 09:00 às 18:00', 'Domingos: 15:00 às 18:00', 'Sem restrição de horário de acesso'],
    },
    {
      icon: CreditCard,
      title: 'Planos que Cabem na Rotina',
      tag: 'Transparência Total',
      description: 'Opções acessíveis e transparentes pensadas para seu bolso. Nada de taxas surpresas no final do mês ou contratos abusivos.',
      bullets: ['Planos mensais sem fidelidade', 'Condições para planos semestrais/anuais', 'Pagamento facilitado via PIX e cartão', 'Sem cobrança de manutenção anual'],
    },
    {
      icon: Gift,
      title: 'Benefícios Exclusivos',
      tag: 'Vantagens Reais',
      description: 'Na Supreme você tem vantagens que facilitam sua entrada e incentivam sua permanência rumo aos seus objetivos fitness.',
      bullets: ['Sem taxa de inscrição (Matrícula Grátis)', 'Sem fidelidade nos planos mensais', 'Descontos especiais para estudantes', 'Acompanhamento profissional permanente'],
    },
  ];

  const classSchedule = [
    { name: 'Spinning Supreme', time: '07:00 • 12:15 • 18:30 • 19:30', intensity: 'Alta Intensidade', days: 'Seg • Qua • Sex', focus: 'Cardio & Queima Calórica' },
    { name: 'Treino Funcional', time: '08:00 • 18:00 • 19:00', intensity: 'Moderada a Alta', days: 'Ter • Qui', focus: 'Resistência & Core' },
    { name: 'Ritmos & FitDance', time: '19:00 • 20:00', intensity: 'Divertida & Dinâmica', days: 'Seg • Qua', focus: 'Coordenação & Condicionamento' },
    { name: 'Pilates Solo & Mobilidade', time: '09:00 • 17:30', intensity: 'Leve a Moderada', days: 'Ter • Qui', focus: 'Postura & Flexibilidade' },
    { name: 'Musculação Acompanhada', time: 'Livre o dia todo (06h às 23h)', intensity: 'Personalizada', days: 'Todos os Dias', focus: 'Hipertrofia, Força & Definição' },
  ];

  const plans = [
    {
      name: 'Plano Mensal Livre',
      highlight: false,
      badge: 'Total Liberdade',
      description: 'Ideal para quem busca liberdade absoluta de renovação mês a mês.',
      price: 'R$ 139',
      period: '/mês',
      features: [
        'Sem fidelidade: cancele quando quiser',
        'Sem taxa de matrícula (R$ 0)',
        'Acesso total à Musculação e Cárdio',
        'Horários 100% livres (Seg a Dom)',
        'Acompanhamento de instrutores',
      ],
      whatsappMsg: 'Olá! Tenho interesse no Plano Mensal Livre sem fidelidade!',
    },
    {
      name: 'Plano Estudante Supreme',
      highlight: true,
      badge: 'Mais Popular • Desconto Especial',
      description: 'Desconto exclusivo comprovando matrícula escolar ou universitária (UFSM, etc).',
      price: 'R$ 119',
      period: '/mês',
      features: [
        'Desconto garantido para estudantes',
        'Sem taxa de inscrição ou matrícula',
        'Acesso a todas as áreas e equipamentos',
        'Aulas coletivas inclusas',
        'Treino estruturado com professores',
      ],
      whatsappMsg: 'Olá! Sou estudante e quero aproveitar o desconto no Plano Estudante Supreme!',
    },
    {
      name: 'Plano Semestral / Anual',
      highlight: false,
      badge: 'Melhor Custo-Benefício',
      description: 'Para quem tem foco no resultado a longo prazo e busca a melhor economia.',
      price: 'R$ 99',
      period: '/mês (fidelidade programada)',
      features: [
        'Menor valor mensal por treino',
        'Matrícula e avaliação física inclusas',
        'Avaliações físicas periódicas',
        'Acesso livre a todas as aulas coletivas',
        'Pausas programadas para viagens/férias',
      ],
      whatsappMsg: 'Olá! Gostaria de consultar os planos Semestral e Anual da Academia Supreme!',
    },
  ];

  return (
    <section
      id="diferenciais"
      aria-label="Diferenciais e Serviços da Academia Supreme"
      className="relative py-20 sm:py-28 bg-[#0b162c] overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1b4589]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por Que Escolher a Supreme</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight">
            Nossos <span className="text-[#00f0ff] neon-glow-text">Diferenciais</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Combinamos infraestrutura moderna, acompanhamento próximo e total respeito ao seu tempo e investimento.
          </p>

          {/* Navigation Pill Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#0e1e38] border border-[#238dc8]/30 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('diferenciais')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'diferenciais'
                  ? 'bg-gradient-to-r from-[#1b4589] to-[#238dc8] text-white shadow-lg shadow-[#238dc8]/30 border border-[#00f0ff]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              5 Diferenciais Supreme
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('aulas')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'aulas'
                  ? 'bg-gradient-to-r from-[#1b4589] to-[#238dc8] text-white shadow-lg shadow-[#238dc8]/30 border border-[#00f0ff]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Aulas Coletivas & Grade
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('planos')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'planos'
                  ? 'bg-gradient-to-r from-[#1b4589] to-[#238dc8] text-white shadow-lg shadow-[#238dc8]/30 border border-[#00f0ff]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Planos & Benefícios
            </button>
          </div>
        </div>

        {/* Tab 1: 5 Differentials Cards */}
        {activeTab === 'diferenciais' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentialsList.map((diff, index) => {
              const IconComp = diff.icon;
              return (
                <article
                  key={diff.title}
                  className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    index === 4 ? 'md:col-span-2 lg:col-span-1 border-[#00f0ff]/50 bg-gradient-to-b from-[#0e1e38] to-[#12284c]' : 'border-[#238dc8]/30 hover:border-[#00f0ff]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1b4589]/60 border border-[#238dc8]/40 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00f0ff] bg-[#0a1428] px-2.5 py-1 rounded-full border border-[#238dc8]/30">
                      {diff.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide mb-2.5 group-hover:text-[#00f0ff] transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {diff.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-700/50">
                    {diff.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Tab 2: Aulas Coletivas & Schedule */}
        {activeTab === 'aulas' && (
          <div className="space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#238dc8]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display uppercase">
                    Grade de Aulas Coletivas
                  </h3>
                  <p className="text-sm text-slate-300">
                    Todas as aulas contam com instrutores dedicados para correção de postura e alto astral.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00f0ff] bg-[#09152b] px-3 py-1.5 rounded-lg border border-[#238dc8]/30">
                  <CalendarDays className="w-4 h-4" />
                  <span>Inclusas nos Planos</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-[#238dc8]/30 text-xs uppercase tracking-wider text-[#00f0ff]">
                      <th className="py-3 px-4">Modalidade</th>
                      <th className="py-3 px-4">Dias</th>
                      <th className="py-3 px-4">Horários</th>
                      <th className="py-3 px-4">Foco Principal</th>
                      <th className="py-3 px-4">Intensidade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {classSchedule.map((cls) => (
                      <tr key={cls.name} className="hover:bg-[#1b4589]/20 transition-colors">
                        <td className="py-4 px-4 font-bold text-white font-display">
                          {cls.name}
                        </td>
                        <td className="py-4 px-4 text-xs font-semibold text-[#00f0ff]">
                          {cls.days}
                        </td>
                        <td className="py-4 px-4 text-slate-200">{cls.time}</td>
                        <td className="py-4 px-4 text-slate-300">{cls.focus}</td>
                        <td className="py-4 px-4">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-[#1b4589]/50 border border-[#238dc8]/30 text-white font-medium">
                            {cls.intensity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  * Horários sujeitos a atualizações sazonais. Consulte nossa recepção para reserva de bike no Spinning.
                </p>
                <a
                  href={buildWhatsAppLink('5555999156558', 'Olá! Gostaria de agendar uma aula experimental de Spinning/Funcional na Supreme!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1b4589] to-[#238dc8] hover:to-[#00f0ff] border border-[#00f0ff]/40 shadow flex items-center gap-2"
                >
                  <span>Agendar Aula Experimental</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3 / Section: Planos Supreme */}
        <div id="planos" className="mt-16 pt-12 border-t border-[#238dc8]/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Transparência Sem Pegadinhas
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mt-1">
              Escolha o Plano Ideal Para Sua Evolução
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Sem taxa de inscrição em nenhum plano. Liberdade de treinar todos os dias da semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`glass-panel p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'border-2 border-[#00f0ff] shadow-[0_0_30px_rgba(35,141,200,0.35)] scale-105 z-10 bg-[#0e2142]'
                    : 'border border-[#238dc8]/30 hover:border-[#238dc8]/60'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#238dc8] to-[#00f0ff] text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {!plan.highlight && (
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] block mb-2">
                      {plan.badge}
                    </span>
                  )}
                  <h4 className="text-xl font-bold text-white font-display uppercase">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 py-4 border-y border-slate-700/60 my-4">
                    <span className="text-3xl sm:text-4xl font-black text-white font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppLink('5555999156558', plan.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Garantir o ${plan.name} via WhatsApp`}
                  className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-[#1b4589] via-[#238dc8] to-[#00d4ff] text-white shadow-lg shadow-[#00f0ff]/30 hover:shadow-[#00f0ff]/50 hover:scale-[1.02]'
                      : 'bg-[#1b4589]/40 hover:bg-[#238dc8]/50 text-white border border-[#238dc8]/40'
                  }`}
                >
                  <span>Matricular via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>

          {/* Student Special Notice */}
          <div className="mt-8 glass-panel p-4 rounded-xl border border-[#00f0ff]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#238dc8]/20 text-[#00f0ff] border border-[#238dc8]/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display uppercase">
                  Atenção Estudantes de Santa Maria (UFSM, UFN, FISMA, Ulbra, etc)
                </h4>
                <p className="text-xs text-slate-300">
                  Basta apresentar seu comprovante de matrícula ativo para liberar o valor com desconto especial instantaneamente!
                </p>
              </div>
            </div>
            <a
              href={buildWhatsAppLink('5555999156558', 'Olá! Sou estudante universitário/escolar em Santa Maria e quero validar meu desconto Supreme!')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#00f0ff] text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Validar Desconto Estudante
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
