import React from 'react';
import { X, Calendar, Clock, MapPin, Download, UserCheck, Tag, ExternalLink } from 'lucide-react';
import { SessionItem } from '../data/scheduleData';
import { SPEAKERS_DATA, Speaker } from '../data/speakersData';
import { downloadICS } from '../utils/icsGenerator';

interface SessionModalProps {
  session: SessionItem | null;
  onClose: () => void;
  onSelectSpeaker?: (speaker: Speaker) => void;
}

export const SessionModal: React.FC<SessionModalProps> = ({
  session,
  onClose,
  onSelectSpeaker
}) => {
  if (!session) return null;

  const sessionSpeakers = session.speakers
    .map(spId => SPEAKERS_DATA.find(s => s.id === spId))
    .filter(Boolean) as Speaker[];

  const handleDownloadCalendar = () => {
    downloadICS({
      title: session.title,
      description: `${session.description}\n\nPalestrantes:\n${session.speakerNamesRaw?.join('\n') || ''}`,
      location: 'Sede da ONU - 405 E 45th St, New York, NY 10017, Estados Unidos',
      startTime: session.timeStart,
      endTime: session.timeEnd
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0A1628] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-100">
        
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-400 text-xs font-semibold uppercase">
              {session.type}
            </span>
            {session.highlight && (
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                Destaque
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 mb-4">
          <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-white font-bold">{session.timeStart} - {session.timeEnd} (EST)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>18 de Setembro, 2026</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span>Sede da ONU NY</span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
          {session.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
          {session.description}
        </p>

        {session.ods && session.ods.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span>Objetivos de Desenvolvimento Sustentável (ODS)</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {session.ods.map(odsNum => (
                <span 
                  key={odsNum} 
                  className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 border border-slate-700 text-blue-300"
                >
                  ODS {odsNum}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8 pt-6 border-t border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Palestrantes e Moderadores</span>
          </h4>

          {sessionSpeakers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sessionSpeakers.map(sp => (
                <div
                  key={sp.id}
                  onClick={() => {
                    if (onSelectSpeaker) onSelectSpeaker(sp);
                  }}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-colors flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow">
                    {sp.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 truncate">
                      {sp.name}
                    </div>
                    <div className="text-xs text-slate-400 truncate">{sp.role}</div>
                    <div className="text-[10px] text-blue-400 font-medium truncate">{sp.company}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {session.speakerNamesRaw?.map((rawName, idx) => (
                <div key={idx} className="text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                  • {rawName}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Adicionar ao Calendário (.ics)</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-sm font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
