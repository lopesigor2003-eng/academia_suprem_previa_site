/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { DifferentialsSection } from './components/DifferentialsSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { BMICalculator } from './components/BMICalculator.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { LocationAndContactSection } from './components/LocationAndContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b162c] text-white flex flex-col selection:bg-[#238dc8] selection:text-white relative">
      {/* Global Header & Nav */}
      <Header />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (Contains sole H1) */}
        <Hero />

        {/* 2. Sobre Nós */}
        <AboutSection />

        {/* 3. Diferenciais e Serviços / Planos */}
        <DifferentialsSection />

        {/* 4. Galeria de Imagens (5s auto-rotating carousel) */}
        <GallerySection />

        {/* 5. Simulador Interativo de Perfil & IMC */}
        <BMICalculator />

        {/* 6. Depoimentos dos Alunos (+230 avaliações Google) */}
        <TestimonialsSection />

        {/* 7. Localização (Mapa Interativo) & Contato */}
        <LocationAndContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
