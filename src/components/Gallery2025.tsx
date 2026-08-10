import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: 'Plenária' | 'Painéis' | 'Discursos' | 'Debates';
  tag: string;
  desc: string;
}

const EVENT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: './assets/sdgs_2025_2.jpg',
    title: 'Plenária Principal',
    subtitle: 'Sede da ONU em Nova York',
    category: 'Plenária',
    tag: 'Sede ONU NY',
    desc: 'Visão geral do auditório principal reunindo 300 lideranças C-Suite, diplomacia e autoridades internacionais.',
  },
  {
    id: 'g2',
    src: './assets/sdgs_2025_3.jpg',
    title: 'Governança ESG',
    subtitle: 'Painel C-Suite de Sustentabilidade',
    category: 'Painéis',
    tag: 'Painel no Palco',
    desc: 'Debate executivo sobre a transição das metas declaratórias para a rastreabilidade verificável.',
  },
  {
    id: 'g3',
    src: './assets/sdgs_2025_19.jpg',
    title: 'Bioeconomia & Clima',
    subtitle: 'Painel de Transição Energética',
    category: 'Debates',
    tag: 'Palco de Debates',
    desc: 'Estratégias de investimento em ativos de natureza, biodiversidade e conservação ambiental no Brasil.',
  },
  {
    id: 'g4',
    src: './assets/sdgs_2025_10.jpg',
    title: 'Discurso Institucional',
    subtitle: 'Abertura da Plenária em NY',
    category: 'Discursos',
    tag: 'Keynote Speaker',
    desc: 'Pronunciamento oficial estabelecendo o comprometimento da liderança privada brasileira na Agenda 2030.',
  },
  {
    id: 'g5',
    src: './assets/sdgs_2025_18.jpg',
    title: 'Métricas & Compliance',
    subtitle: 'Painel C.A.S.E. de Inovação',
    category: 'Painéis',
    tag: 'Métricas de Impacto',
    desc: 'Grandes corporações brasileiras apresentam cases reais de aceleração socioambiental e integridade.',
  },
  {
    id: 'g6',
    src: './assets/sdgs_2025_11.jpg',
    title: 'Direitos Humanos',
    subtitle: 'Responsabilidade Corporativa',
    category: 'Discursos',
    tag: 'Direitos Humanos',
    desc: 'Apresentação aprofundada sobre governança de dados, igualdade e inclusão nas cadeias globais.',
  },
  {
    id: 'g7',
    src: './assets/sdgs_2025_13.jpg',
    title: 'Diplomacia Corporativa',
    subtitle: 'Pacto Global Multilateral',
    category: 'Painéis',
    tag: 'Governança Global',
    desc: 'Encontro com representantes da diplomacia e lideranças globais na sede das Nações Unidas.',
  },
  {
    id: 'g8',
    src: './assets/sdgs_2025_14.jpg',
    title: 'Liderança Feminina',
    subtitle: 'Avanço da Agenda 2030',
    category: 'Debates',
    tag: 'Mulheres no Comando',
    desc: 'Debate sobre equidade de gênero e liderança responsável nas maiores corporações do país.',
  },
  {
    id: 'g9',
    src: './assets/sdgs_2025_15.jpg',
    title: 'Finanças Sustentáveis',
    subtitle: 'Taxonomia Verde e Mercado',
    category: 'Painéis',
    tag: 'Finanças ESG',
    desc: 'Discussão sobre atração de capital internacional para projetos de transição ecológica no Brasil.',
  },
  {
    id: 'g10',
    src: './assets/sdgs_2025_16.jpg',
    title: 'IA e Ética',
    subtitle: 'Tecnologia Responsável',
    category: 'Discursos',
    tag: 'Inovação Ética',
    desc: 'Reflexão sobre governança de inteligência artificial e prevenção de vieses nas corporações.',
  },
];

export const Gallery2025: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = ['Todos', 'Plenária', 'Painéis', 'Discursos', 'Debates'] as const;

  const filteredItems = activeCategory === 'Todos'
    ? EVENT_GALLERY_ITEMS
    : EVENT_GALLERY_ITEMS.filter(item => item.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo('.gallery-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.seamless-gallery-card', 
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.seamless-gallery-container',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, [activeCategory]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#5F3469]/10 blur-[200px] pointer-events-none" />

      {/* Centered Editorial Header (Matching Image Reference) */}
      <div className="gallery-header text-center max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
          ACERVO OFICIAL · SEDE DA ONU NY
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          A Arte da Prova.<br />
          <span className="text-white/80 font-light">Registros de Impacto.</span>
        </h2>
        <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
          Imagens reais da plenária, discursos e painéis C-Suite proferidos pelas lideranças empresariais brasileiras na Sede das Nações Unidas em Nova York.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex gap-2 justify-center flex-wrap mb-10 px-4">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`min-h-[40px] px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 border flex items-center justify-center ${
              activeCategory === cat
                ? 'bg-white text-black border-white shadow-xl'
                : 'bg-white/5 text-white/75 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {cat === 'Todos' ? 'Todos os Painéis' : cat}
          </motion.button>
        ))}
      </div>

      {/* Seamless Carousel Container (0px Gap Aesthetic) */}
      <div className="seamless-gallery-container relative w-full">
        
        {/* Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-3 mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/10'
                : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
            }`}
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-white text-black hover:bg-gray-100 shadow-xl'
                : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
            }`}
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* 0px Gap Seamless Strip */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="seamless-gallery-card snap-start flex-shrink-0 w-full sm:w-[50%] md:w-[33.333%] lg:w-[25%] h-[520px] sm:h-[580px] relative overflow-hidden group cursor-pointer border-r border-white/10 last:border-r-0 bg-black"
            >
              {/* Full-Bleed Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Seamless Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 z-[1]" />

              {/* Content Overlay matching Reference Image */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8 z-10 flex flex-col justify-end">
                {/* Minified Tag */}
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/60 uppercase block mb-2">
                  0{index + 1} · {item.tag}
                </span>

                {/* Main Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-bold text-white/90 leading-snug mt-1">
                  {item.subtitle}
                </p>

                {/* Expandable Hover Description */}
                <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden mt-3 pt-3 border-t border-white/20">
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-[-44px] right-0 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center font-mono text-sm transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>

              <img
                src={filteredItems[selectedPhotoIndex].src}
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
              />

              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/60 uppercase block mb-1">
                  {filteredItems[selectedPhotoIndex].tag} · SEDE DA ONU NY
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  {filteredItems[selectedPhotoIndex].title} — {filteredItems[selectedPhotoIndex].subtitle}
                </h4>
                <p className="text-xs text-white/80 max-w-md mx-auto mt-1 font-light">
                  {filteredItems[selectedPhotoIndex].desc}
                </p>
              </div>

              {filteredItems.length > 1 && (
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase rounded-full transition-colors"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase rounded-full transition-colors"
                  >
                    Próxima →
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
