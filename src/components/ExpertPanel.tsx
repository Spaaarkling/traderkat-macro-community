import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { ExpertView, ExpertRole } from '../types/macro';
import { useLanguage } from '../context/LanguageContext';

interface ExpertPanelProps {
  expertViews: ExpertView[];
}

const sentimentColors = {
  bullish: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
  neutral: "text-slate-400 border-slate-600/30 bg-slate-900/20",
  bearish: "text-rose-400 border-rose-500/30 bg-rose-950/20"
};

export default function ExpertPanel({ expertViews }: ExpertPanelProps) {
  const [selectedRole, setSelectedRole] = useState<ExpertRole>("macroeconomist");
  const { t, language } = useLanguage();

  const currentView = expertViews.find(v => v.role === selectedRole) || expertViews[0];

  return (
    <div className="w-full bg-slate-900/40 rounded-xl border border-white/5 overflow-hidden">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-white/5 scrollbar-thin scrollbar-thumb-slate-700">
        {expertViews.map((view) => (
          <button
            key={view.role}
            onClick={() => setSelectedRole(view.role)}
            className={`
              flex-1 min-w-[80px] px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors
              flex flex-col items-center gap-1 border-r border-white/5 last:border-r-0 hover:bg-white/5
              ${selectedRole === view.role ? 'bg-white/5 text-cyan-400 border-b-2 border-b-cyan-400' : 'text-slate-500 border-b-2 border-b-transparent'}
            `}
          >
            <span>{t(`expert.roles.${view.role}`)}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${
              view.stance === 'bullish' ? 'bg-emerald-500' : 
              view.stance === 'bearish' ? 'bg-rose-500' : 'bg-slate-500'
            }`} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header / Summary */}
            <div className={`p-4 rounded-lg border mb-6 ${sentimentColors[currentView.stance]}`}>
              <div className="flex items-center gap-3 mb-2">
                <User size={16} />
                <span className="font-mono text-xs uppercase opacity-70">{t('expert.viewpoint')}</span>
                <span className="ml-auto text-xs font-bold uppercase px-2 py-0.5 rounded bg-black/20 border border-white/10">
                  {t(`dashboard.signals.states.${currentView.stance}`)}
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                "{currentView.summary[language]}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Drivers */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
                  <TrendingUp size={12} /> {t('expert.keyDrivers')}
                </h4>
                <div className="space-y-2">
                  {currentView.drivers.map((driver, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs p-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
                      {driver.impact === 'up' && <TrendingUp size={14} className="text-emerald-400 mt-0.5 shrink-0" />}
                      {driver.impact === 'down' && <TrendingDown size={14} className="text-rose-400 mt-0.5 shrink-0" />}
                      {driver.impact === 'mixed' && <Minus size={14} className="text-slate-400 mt-0.5 shrink-0" />}
                      <div>
                        <div className="font-bold text-slate-200">{driver.title[language]}</div>
                        <div className="text-slate-400">{driver.detail[language]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Falsifiers & Next Checks */}
              <div className="space-y-6">
                
                {/* Falsifiers */}
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
                    <AlertTriangle size={12} /> {t('expert.whatWouldChangeMind')}
                  </h4>
                  <ul className="space-y-2">
                    {currentView.falsifiers.map((f, i) => (
                      <li key={i} className="text-xs text-slate-300 pl-3 border-l-2 border-orange-500/50">
                        <span className="font-bold text-orange-200">{f.condition[language]}:</span> {f.whyItMatters[language]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next Checks */}
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 flex items-center gap-2">
                    <CheckCircle size={12} /> {t('expert.nextChecks')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentView.nextChecks.map((check, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                        {check.item[language]} <span className="text-slate-500">({check.timing[language]})</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
