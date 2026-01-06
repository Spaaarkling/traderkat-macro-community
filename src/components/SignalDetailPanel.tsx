import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, CheckCircle, RefreshCw, Users } from 'lucide-react';
import type { SignalReport } from '../types/macro';
import { useLanguage } from '../context/LanguageContext';

interface SignalDetailPanelProps {
  report: SignalReport;
}

export default function SignalDetailPanel({ report }: SignalDetailPanelProps) {
  const { t, language } = useLanguage();

  // Extract common falsifiers (naive approach: take first falsifier from first 3 experts)
  const commonFalsifiers = report.expertViews
    .slice(0, 3)
    .map(v => v.falsifiers[0])
    .filter(Boolean);

  // Extract next checks (naive approach: take first nextCheck from first 3 experts)
  const nextChecks = report.expertViews
    .slice(0, 3)
    .map(v => v.nextChecks[0])
    .filter(Boolean);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      key={report.key}
      className="bg-slate-900/40 rounded-xl border border-white/5 p-6 h-full"
    >
      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <span className="text-cyan-400">#</span> {t('detail.deepDive')}: {t(`dashboard.signals.titles.${report.key}`)}
      </h3>

      <div className="space-y-8">
        
        {/* Consensus Breakdown */}
        <div>
           <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
             <Users size={12} /> {t('detail.expertConsensus')}
           </h4>
           <div className="flex flex-wrap gap-2">
             {report.expertViews.map((view, i) => (
               <div 
                  key={i} 
                  className={`
                    px-3 py-1.5 rounded-lg border text-xs font-bold uppercase flex items-center gap-2
                    ${view.stance === 'bullish' ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' : 
                      view.stance === 'bearish' ? 'bg-rose-950/40 border-rose-500/30 text-rose-400' : 
                      'bg-slate-900/40 border-slate-600/30 text-slate-400'}
                  `}
               >
                 <span className="opacity-70">{t(`expert.roles.${view.role}`)}</span>
                 <div className={`w-1.5 h-1.5 rounded-full ${
                    view.stance === 'bullish' ? 'bg-emerald-500' : 
                    view.stance === 'bearish' ? 'bg-rose-500' : 'bg-slate-500'
                 }`} />
               </div>
             ))}
           </div>
        </div>

        {/* Top Drivers */}
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
            <TrendingUp size={12} /> {t('detail.topDrivers')}
          </h4>
          <ul className="space-y-2">
            {report.topDrivers.map((driver, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="text-cyan-500 font-bold mt-1">•</span>
                <span>
                  <strong className="text-white">{driver.title[language]}:</strong> {driver.detail[language]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What Changed */}
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
            <RefreshCw size={12} /> {t('detail.whatChanged')}
          </h4>
          <ul className="space-y-2 bg-white/5 p-3 rounded-lg border border-white/5">
            {report.whatChanged.map((change, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                 <div className="w-1 h-1 bg-cyan-400 rounded-full shrink-0" />
                 {change[language]}
              </li>
            ))}
          </ul>
        </div>

        {/* Falsification (Aggregated) */}
        <div>
           <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
             <AlertTriangle size={12} /> {t('detail.whatWouldChangeMind')}
           </h4>
           <div className="space-y-2">
              {commonFalsifiers.map((f, i) => (
                <div key={i} className="text-xs text-slate-400 pl-3 border-l-2 border-slate-700">
                   <strong className="text-slate-300">{f.condition[language]}</strong> - {f.whyItMatters[language]}
                </div>
              ))}
           </div>
        </div>

        {/* Next Checks (Aggregated) */}
        <div>
           <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
             <CheckCircle size={12} /> {t('detail.nextChecks')}
           </h4>
           <div className="flex flex-wrap gap-2">
              {nextChecks.map((check, i) => (
                <span key={i} className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 font-mono border border-slate-700">
                   {check.item[language]}
                </span>
              ))}
           </div>
        </div>

      </div>
    </motion.div>
  );
}
