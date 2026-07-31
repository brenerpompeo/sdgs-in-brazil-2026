import React from 'react';

export const AboutPacto: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Institucional
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Sobre o Pacto Global da ONU
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              Como uma iniciativa especial do Secretário-Geral da ONU, o <strong>Pacto Global das Nações Unidas</strong> é uma convocação para que empresas de todo o mundo alinhem suas operações e estratégias a dez princípios universais nas áreas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              A <strong>Rede Brasil</strong> foi criada em 2003 e hoje é a <strong>2ª maior rede local do mundo</strong>, contando com mais de <strong>2.000 participantes</strong> e mais de 60 projetos em andamento abarcando temas críticos como Água, Clima, Oceano, Florestas e Direitos Humanos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-blue-400 mb-1">20.000+</div>
                <div className="text-xs text-slate-400">Participantes no Mundo (160+ países)</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400 mb-1">2.000+</div>
                <div className="text-xs text-slate-400">Empresas Engajadas no Brasil (2ª maior rede)</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800/90 flex flex-col items-center justify-center text-center space-y-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-xs">
              <img 
                src="./assets/marca_vertical.png" 
                alt="Pacto Global Rede Brasil" 
                className="w-full h-auto object-contain max-h-48"
              />
            </div>

            <div className="max-w-sm">
              <img 
                src="./assets/marcas.png" 
                alt="Marcas Parceiras SDGs in Brazil" 
                className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
