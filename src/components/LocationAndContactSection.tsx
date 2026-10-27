import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Send, 
  CheckCircle, 
  Navigation, 
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';
import { getGymStatus, buildWhatsAppLink } from '../utils/gymLogic.ts';

export const LocationAndContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    modality: 'Musculação',
    message: '',
  });

  const gymStatus = getGymStatus();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const openInWhatsApp = () => {
    const text = `Olá Academia Supreme! Meu nome é ${formData.name}. Gostaria de informações sobre ${formData.modality}. Mensagem: ${formData.message || 'Quero agendar uma visita!'}`;
    const url = buildWhatsAppLink('5555999156558', text);
    window.open(url, '_blank');
  };

  const fullAddress = 'Av. Pres. Vargas, 1607 - Nossa Sra. de Fátima, Santa Maria - RS, 97015-512';
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Academia Supreme, Av. Pres. Vargas, 1607 - Nossa Sra. de Fátima, Santa Maria - RS, 97015-512'
  )}`;

  return (
    <section
      id="localizacao"
      aria-label="Localização e Contato da Academia Supreme"
      className="relative py-20 sm:py-28 bg-[#0a1428] overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#238dc8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fácil Acesso & Contato Direto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight">
            Onde <span className="text-[#00f0ff] neon-glow-text">Estamos</span> & Fale Conosco
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Localização privilegiada na Avenida Presidente Vargas, com estacionamento facilitado e atendimento ágil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#238dc8]/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1b4589]/60 text-[#00f0ff] border border-[#238dc8]/40 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display uppercase">
                    Endereço Completo
                  </h3>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    {fullAddress}
                  </p>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir rota no Google Maps para a Academia Supreme"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Como Chegar (Abrir no GPS)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#238dc8]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#1b4589]/60 text-[#00f0ff] border border-[#238dc8]/40 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-display uppercase">
                      Horários de Treino
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        gymStatus.isOpen
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {gymStatus.isOpen ? 'Aberto' : 'Fechado Agora'}
                    </span>
                  </div>
                  <p className="text-xs text-[#00f0ff] mt-0.5">{gymStatus.nextStatusMessage}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm border-t border-slate-700/60 pt-4">
                <div className="flex justify-between items-center text-slate-200">
                  <span className="font-semibold">Segunda a Sexta-feira:</span>
                  <span className="font-bold text-[#00f0ff] font-display">06:00 às 23:00</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span className="font-semibold">Sábados:</span>
                  <span className="font-bold text-white font-display">09:00 às 18:00</span>
                </div>
                <div className="flex justify-between items-center text-slate-200">
                  <span className="font-semibold">Domingos:</span>
                  <span className="font-bold text-white font-display">15:00 às 18:00</span>
                </div>
              </div>
            </div>

            {/* Direct Channels (WhatsApp & Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={buildWhatsAppLink('5555999156558', 'Olá! Gostaria de falar com a equipe da Academia Supreme!')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp da Academia Supreme"
                className="glass-panel p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/30 transition-all flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                    WhatsApp Direto
                  </span>
                  <span className="text-xs font-bold text-white">(55) 99915-6558</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/academiasupreme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar o perfil no Instagram da Academia Supreme"
                className="glass-panel p-4 rounded-xl border border-pink-500/30 hover:border-pink-400 bg-pink-950/20 hover:bg-pink-950/30 transition-all flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/40 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-pink-400 block tracking-wider">
                    Instagram Oficial
                  </span>
                  <span className="text-xs font-bold text-white">@academiasupreme</span>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Map & Contact Form Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Google Maps Embed */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-[#238dc8]/40 shadow-xl relative aspect-[16/10] sm:aspect-[16/9] w-full">
              <iframe
                title="Localização da Academia Supreme em Santa Maria - RS"
                src="https://maps.google.com/maps?q=Av.+Pres.+Vargas,+1607+-+Nossa+Sra.+de+F%C3%A1tima,+Santa+Maria+-+RS,+97015-512&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105 brightness-95"
              />
              <div className="absolute top-3 left-3 bg-[#0a1428]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#238dc8]/40 text-xs font-semibold text-white shadow">
                📍 Academia Supreme • Pres. Vargas, 1607
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#238dc8]/30">
              <h3 className="text-lg font-bold text-white font-display uppercase mb-1">
                Envie uma Mensagem Rápida
              </h3>
              <p className="text-xs text-slate-300 mb-5">
                Tire suas dúvidas sobre treinos, convênios ou agende seu primeiro dia experimental.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Obrigado, {formData.name}! Nossa equipe de atendimento entrará em contato em breve pelo telefone/WhatsApp informado.
                  </p>
                  <button
                    type="button"
                    onClick={openInWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continuar Atendimento Imediato no WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1">
                        Seu Nome *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp ou Telefone *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(55) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1">
                        E-mail (opcional)
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="carlos@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-modality" className="block text-xs font-semibold text-slate-300 mb-1">
                        Interesse Principal
                      </label>
                      <select
                        id="contact-modality"
                        name="modality"
                        value={formData.modality}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white text-xs focus:outline-none focus:border-[#00f0ff]"
                      >
                        <option value="Musculação">Musculação & Hipertrofia</option>
                        <option value="Plano Estudante">Plano Especial para Estudante</option>
                        <option value="Spinning Supreme">Spinning Supreme (Bike Indoor)</option>
                        <option value="Treino Funcional">Treino Funcional</option>
                        <option value="Pilates Solo">Pilates Solo & Mobilidade</option>
                        <option value="Aula Experimental">Quero Agendar Aula Experimental</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte um pouco sobre seus objetivos ou dúvidas..."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#09152b] border border-[#238dc8]/40 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      aria-label="Enviar formulário de contato"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-gradient-to-r from-[#1b4589] via-[#238dc8] to-[#00d4ff] hover:to-[#00f0ff] border border-[#00f0ff]/40 shadow-lg shadow-[#238dc8]/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Mensagem</span>
                    </button>

                    <button
                      type="button"
                      onClick={openInWhatsApp}
                      aria-label="Abrir conversa direto no WhatsApp"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ou Chame Direto no WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
