import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Sparkles, 
  Dumbbell
} from 'lucide-react';

interface GalleryItem {
  id: number;
  imageSrc: string;
  backupSrc: string;
  originalAspectRatio: string;
}

export const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageSrc: '/images/estrutura-1.jpg',
      backupSrc: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrPIaHnfFBgC1SaNweHEOEMnZFcWHoHJnH2eKqWbgVUb68_l9o850ilTv63vuXyRWflF4V-Mx7LAX9cjtt9Ik6dpt74jMHvKtyYVrMFC-y8bcQDBWZutfD2mvB-5bk_ID4TnkZQqyHH1TT=w1200-h800-k-no',
      originalAspectRatio: '3264 × 2448',
    },
    {
      id: 2,
      // Nova 2ª foto do carrossel solicitada pelo usuário (3264 × 2448 formato original)
      imageSrc: '/images/estrutura-2.jpg',
      backupSrc: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q8dumEsXTSZqRyseqnNzrRHzQlPn7HClp_J-umjQErzLeNryAkaS8tgj_oRVz9ehWpBtZbCz3VLVJNNJ5VFrV_uvpfnb6TL8x4X_3JgQzYsGq9iHwlm8BUlRq7dHpAkoRUxH1VHW-Kdzpm=w1200-h900-k-no',
      originalAspectRatio: '3264 × 2448',
    },
    {
      id: 3,
      imageSrc: '/images/estrutura-3.jpg',
      backupSrc: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R2c-uJtxmLaV7HPFAPqjvAqXVg4jzSV8FAgjUiamE5Hg3N63qIVlMr6N5WwzILiHX5s6yFpS6YWfhvF8pfIgsQL7AZUFeCLvziARKPJ3nHTDRCjHk70aAaWeek-LJcOmdylY_Ba0MsoiG0=w1200-h800-k-no',
      originalAspectRatio: '3072 × 4096',
    },
    {
      id: 4,
      // Nova 4ª foto do carrossel solicitada pelo usuário (3024 × 4032 formato original)
      imageSrc: '/images/estrutura-4.jpg',
      backupSrc: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYAfPSANVs-nBAvRmBY9kCZ4AreOkNGRLP1c72D2-RmV_6jO1Lf5bR2KDtOCE4q7wXPEEk2vpJ4eOPWTsIDmjQhjAMwCDLABoHbCyudLqKLGnofl0kUP6oVjqPG8QTXtYcnsrd=w1200-h1600-k-no',
      originalAspectRatio: '3024 × 4032',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation every 5 seconds as required by prompt
  useEffect(() => {
    if (!isPaused && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, lightboxOpen, galleryItems.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section
      id="galeria"
      aria-label="Galeria da Estrutura da Academia Supreme"
      className="relative py-20 sm:py-28 bg-[#0a1324] overflow-hidden"
    >
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#238dc8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b4589]/40 border border-[#238dc8]/40 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tour Visual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight">
            Nossa <span className="text-[#00f0ff] neon-glow-text">Estrutura</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Ambiente completo, amplo e climatizado em Santa Maria - RS.
          </p>
        </div>

        {/* Carousel Container (Clean: Only Photos in their True Original Format, No Titles, No Descriptions) */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel border border-[#238dc8]/40 shadow-2xl shadow-[#0a1428]/60 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Image: True Original Aspect Ratio with zero distortion or crop */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#070e1c] flex items-center justify-center">
            <img
              src={currentItem.imageSrc}
              alt={`Foto ${currentIndex + 1} da Academia Supreme`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain transition-transform duration-500 ease-out"
            />

            {/* Quick fullscreen trigger icon in top right */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="Abrir foto em tela cheia"
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-[#0a1428]/80 text-white hover:text-[#00f0ff] hover:bg-[#0a1428] border border-[#238dc8]/40 transition-all backdrop-blur-md cursor-pointer z-20"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Prev / Next controls */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto anterior da galeria"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-[#0e1e38]/80 text-white hover:text-[#00f0ff] border border-[#238dc8]/40 hover:border-[#00f0ff] transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima foto da galeria"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-[#0e1e38]/80 text-white hover:text-[#00f0ff] border border-[#238dc8]/40 hover:border-[#00f0ff] transition-all backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Minimalist bottom bar (Navigation dots only) */}
          <div className="p-3.5 bg-[#0a1428] border-t border-[#238dc8]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-xs text-slate-400 font-medium">
                {currentIndex + 1} de {galleryItems.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {galleryItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir para a foto ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.7)]'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="text-xs text-slate-400 hidden sm:block">
              {isPaused ? 'Pausado' : 'Avanço a cada 5s'}
            </div>
          </div>
        </div>

        {/* Thumbnail Preview Strip: Just the photos in their true aspect ratio */}
        <div className="mt-6 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Selecionar foto ${idx + 1}`}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all cursor-pointer bg-[#070e1c] flex items-center justify-center p-1 ${
                idx === currentIndex
                  ? 'border-[#00f0ff] ring-2 ring-[#00f0ff]/50 scale-[1.02]'
                  : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
              }`}
            >
              <img
                src={item.imageSrc}
                alt={`Miniatura ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal: Pure Photo Only in Full Resolution */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da foto em tela cheia"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fechar visualização"
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#00f0ff] bg-slate-800/80 rounded-xl cursor-pointer z-30"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-[16/10] sm:aspect-video w-full rounded-2xl overflow-hidden border border-[#00f0ff]/40 shadow-2xl bg-[#070e1c] flex items-center justify-center">
              <img
                src={currentItem.imageSrc}
                alt={`Foto ${currentIndex + 1} ampliada`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
