/**
 * Business and utility logic for Academia Supreme
 */

export interface GymStatus {
  isOpen: boolean;
  todayLabel: string;
  hoursToday: string;
  nextStatusMessage: string;
}

export interface BMICalculationResult {
  bmi: number;
  category: 'Abaixo do peso' | 'Peso ideal' | 'Sobrepeso' | 'Obesidade';
  recommendedModalities: string[];
  advice: string;
}

/**
 * Checks if the gym is currently open based on America/Sao_Paulo (Santa Maria - RS) time
 * Seg-Sex: 06:00 - 23:00
 * Sab: 09:00 - 18:00
 * Dom: 15:00 - 18:00
 */
export function getGymStatus(date: Date = new Date()): GymStatus {
  // Convert or get local day and hour in Brazil (Santa Maria - RS UTC-3)
  // For safety with different client machine timezones, compute using UTC offset or Intl
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  let dayName = '';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') dayName = part.value.toLowerCase().replace('.', '');
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  const currentMinutes = hour * 60 + minute;

  // Weekday mapping
  // seg, ter, qua, qui, sex -> Seg a Sex
  // sáb / sab -> Sábado
  // dom -> Domingo
  const isSunday = dayName.startsWith('dom');
  const isSaturday = dayName.startsWith('s') && !dayName.startsWith('sex') && !dayName.startsWith('seg');
  const isWeekday = !isSunday && !isSaturday;

  let isOpen = false;
  let hoursToday = '';
  let todayLabel = '';
  let nextStatusMessage = '';

  if (isWeekday) {
    todayLabel = 'Segunda a Sexta';
    hoursToday = '06:00 - 23:00';
    const openTime = 6 * 60; // 06:00
    const closeTime = 23 * 60; // 23:00
    isOpen = currentMinutes >= openTime && currentMinutes < closeTime;
    if (isOpen) {
      const remainingMinutes = closeTime - currentMinutes;
      const remHours = Math.floor(remainingMinutes / 60);
      nextStatusMessage = `Aberto agora (fecha às 23:00 • resta ${remHours}h)`;
    } else if (currentMinutes < openTime) {
      nextStatusMessage = 'Fechado no momento (abre hoje às 06:00)';
    } else {
      nextStatusMessage = 'Fechado no momento (abre amanhã às 06:00)';
    }
  } else if (isSaturday) {
    todayLabel = 'Sábado';
    hoursToday = '09:00 - 18:00';
    const openTime = 9 * 60;
    const closeTime = 18 * 60;
    isOpen = currentMinutes >= openTime && currentMinutes < closeTime;
    if (isOpen) {
      nextStatusMessage = 'Aberto agora (fecha às 18:00)';
    } else if (currentMinutes < openTime) {
      nextStatusMessage = 'Fechado no momento (abre hoje às 09:00)';
    } else {
      nextStatusMessage = 'Fechado no momento (abre domingo às 15:00)';
    }
  } else {
    // Sunday
    todayLabel = 'Domingo';
    hoursToday = '15:00 - 18:00';
    const openTime = 15 * 60;
    const closeTime = 18 * 60;
    isOpen = currentMinutes >= openTime && currentMinutes < closeTime;
    if (isOpen) {
      nextStatusMessage = 'Aberto agora (fecha às 18:00)';
    } else if (currentMinutes < openTime) {
      nextStatusMessage = 'Fechado no momento (abre hoje às 15:00)';
    } else {
      nextStatusMessage = 'Fechado no momento (abre segunda às 06:00)';
    }
  }

  return {
    isOpen,
    todayLabel,
    hoursToday,
    nextStatusMessage,
  };
}

/**
 * Encodes a clean WhatsApp direct link
 */
export function buildWhatsAppLink(
  phoneNumber = '5555999156558',
  message = 'Olá! Gostaria de mais informações sobre os planos da Academia Supreme.'
): string {
  const sanitizedPhone = phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Calculates BMI (Índice de Massa Corporal) and provides personalized recommendations
 */
export function calculateBMI(weightKg: number, heightCm: number): BMICalculationResult | null {
  if (weightKg <= 20 || weightKg >= 300 || heightCm <= 90 || heightCm >= 250) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  if (bmi < 18.5) {
    return {
      bmi,
      category: 'Abaixo do peso',
      recommendedModalities: ['Musculação com Foco em Hipertrofia', 'Acompanhamento Nutricional', 'Pilates para Postura'],
      advice: 'Recomendamos um plano focado em ganho de massa magra e fortalecimento muscular progressivo.',
    };
  }

  if (bmi < 25) {
    return {
      bmi,
      category: 'Peso ideal',
      recommendedModalities: ['Treino de Força & Musculação', 'Spinning Supreme', 'Treino Funcional'],
      advice: 'Excelente! Mantenha a consistência combinando musculação de alta intensidade com treinos cardiovasculares.',
    };
  }

  if (bmi < 30) {
    return {
      bmi,
      category: 'Sobrepeso',
      recommendedModalities: ['Circuito Funcional', 'Musculação Biomecânica', 'Spinning & Ritmos'],
      advice: 'A combinação de musculação e aulas coletivas acelera o metabolismo e promove queima calórica contínua.',
    };
  }

  return {
    bmi,
    category: 'Obesidade',
    recommendedModalities: ['Musculação Adaptada com Instrutor', 'Cárdio de Baixo Impacto', 'Alongamento & Mobilidade'],
    advice: 'Nossa equipe de instrutores montará uma periodização segura, protegendo articulações e priorizando saúde.',
  };
}
