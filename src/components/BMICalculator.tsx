import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, CheckCircle, Sparkles } from 'lucide-react';
import { calculateBMI, buildWhatsAppLink, BMICalculationResult } from '../utils/gymLogic.ts';

export const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('72');
  const [height, setHeight] = useState<string>('175');
  const [result, setResult] = useState<BMICalculationResult | null>(() => calculateBMI(72, 175));

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!isNaN(w) && !isNaN(h)) {
      setResult(calculateBMI(w, h));
    }
  };

  const whatsappMessage = result
    ? `Olá Academia Supreme! Fiz o cálculo do meu IMC no site (Peso: ${weight}kg, Altura: ${height}cm, IMC: ${result.bmi} - ${result.category}) e gostaria de agendar uma avaliação física!`
    : 'Olá! Gostaria de agendar uma avaliação física na Academia Supreme!';

  const whatsappUrl = buildWhatsAppLink('5555999156558', whatsappMessage);

  return (
    <section
      id="calculadora"
      aria-label="Simulador de Treino e Calculadora de IMC"
      className="relative py-16 bg-[#0b162c] border-y border-[#238dc8]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#238dc8]/40 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Form Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ferramenta Interativa</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                Simulador de <span className="text-[#00f0ff]">Evolução Física</span>
              </h3>
              <p className="text-slate-300 text-sm mt-2 mb-6">
                Descubra seu Índice de Massa Corporal (IMC) e receba a recomendação de modalidades ideais na Academia Supreme.
              </p>

              <form onSubmit={handleCalculate} className="space-y-4">
                <div>
                  <label htmlFor="weight-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Seu Peso (kg)
                  </label>
                  <input
                    id="weight-input"
                    type="number"
                    min="30"
                    max="250"
                    step="0.5"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    aria-label="Peso em quilogramas"
                    className="w-full px-4 py-3 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]"
                    placeholder="Ex: 75"
                  />
                </div>

                <div>
                  <label htmlFor="height-input" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Sua Altura (cm)
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    min="100"
                    max="230"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    aria-label="Altura em centímetros"
                    className="w-full px-4 py-3 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]"
                    placeholder="Ex: 175"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Calcular IMC e gerar recomendação"
                  className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-[#1b4589] via-[#238dc8] to-[#00d4ff] hover:to-[#00f0ff] border border-[#00f0ff]/40 shadow-lg shadow-[#238dc8]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calcular Perfil Supreme</span>
                </button>
              </form>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7">
              {result ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#081326] border border-[#00f0ff]/40 relative">
                  <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-4">
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                        Resultado do Cálculo
                      </span>
                      <h4 className="text-xl font-black text-white font-display uppercase flex items-center gap-2 mt-0.5">
                        <Activity className="w-5 h-5 text-[#00f0ff]" />
                        Categoria: <span className="text-[#00f0ff]">{result.category}</span>
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-xs uppercase font-semibold text-slate-400">IMC Estimado</span>
                      <div className="text-3xl font-black text-[#00f0ff] font-display">
                        {result.bmi}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {result.advice}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#00f0ff] block">
                      Modalidades Supreme Mais Recomendadas Para Você:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {result.recommendedModalities.map((mod) => (
                        <div key={mod} className="flex items-center gap-2 text-xs text-slate-200 bg-[#0e1e38] p-2.5 rounded-lg border border-[#238dc8]/20">
                          <CheckCircle className="w-4 h-4 text-[#00f0ff] shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar meu resultado de IMC pelo WhatsApp"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm text-slate-950 bg-[#00f0ff] hover:bg-cyan-300 transition-colors shadow-lg shadow-[#00f0ff]/20"
                  >
                    <span>Quero Meu Plano Personalizado no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-[#09152b] border border-slate-800 text-center text-slate-400">
                  Preencha os campos para visualizar a recomendação personalizada.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
