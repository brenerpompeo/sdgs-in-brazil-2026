import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const VenueLocation: React.FC = () => {
  return (
    <section id="local" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Localização do Evento</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Sede das Nações Unidas
              <span className="block text-blue-400 font-light text-2xl sm:text-3xl mt-1">Nova York, Estados Unidos</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light mb-8">
              O evento ocorre na sexta-feira que antecede o início da <strong>81ª Assembleia Geral da ONU</strong>. Este timing estratégico posiciona o setor privado brasileiro no centro do debate diplomático global antes da abertura dos trabalhos chefes de Estado.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Endereço Oficial</h4>
                  <p className="text-xs text-slate-300">405 E 45th St, New York, NY 10017, Estados Unidos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Clock className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Horário dos Trabalhos</h4>
                  <p className="text-xs text-slate-300">10h00 às 18h00 (EDT) | Coquetel a partir das 18h30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white">Segurança e Credenciamento Diplomático</h4>
                  <p className="text-xs text-slate-300">Recomenda-se chegada com 45 minutos de antecedência para inspeção de segurança nos portões da ONU.</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=United+Nations+Headquarters+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-lg hover:from-blue-500 hover:to-emerald-500 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-950">
              <iframe
                title="Sede da ONU em Nova York"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.378772395632!2d-73.96803712342371!3d40.74932977138761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590240d42637%3A0xb36ed4ea0b571120!2sUnited%20Nations%20Headquarters!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
