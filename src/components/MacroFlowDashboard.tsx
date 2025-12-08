import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Activity, 
  Calendar,
  ArrowRight,
  Clock,
  Lightbulb
} from 'lucide-react';
import { macroFlowData } from '../data/macroFlowData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sentimentColors = {
  Bullish: 'text-emerald-500 border-emerald-500 bg-emerald-500/10',
  Bearish: 'text-rose-500 border-rose-500 bg-rose-500/10',
  Neutral: 'text-slate-400 border-slate-400 bg-slate-400/10',
  Fear: 'text-orange-500 border-orange-500 bg-orange-500/10',
};

const sentimentBorder = {
  Bullish: 'border-emerald-500',
  Bearish: 'border-rose-500',
  Neutral: 'border-slate-400',
  Fear: 'border-orange-500',
};

interface MacroFlowDashboardProps {
  hoveredScenario: string | null;
  setHoveredScenario: (id: string | null) => void;
}

export default function MacroFlowDashboard({ hoveredScenario, setHoveredScenario }: MacroFlowDashboardProps) {
  const { currentContext, upcomingEvent } = macroFlowData;
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-center gap-6 relative pt-4 pb-8">
      
      {/* 1. Context Card (Left) */}
      <div className="w-full md:w-80 shrink-0 md:sticky md:top-8 z-20">
         <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2 text-center">{t('dashboard.marketContext')}</h2>
         <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className={cn(
             "relative p-4 rounded-xl border-2 bg-slate-800 shadow-xl w-full text-center",
             // @ts-ignore
             sentimentBorder[currentContext.sentiment] || 'border-slate-700',
             "shadow-[0_0_30px_rgba(244,63,94,0.1)]"
           )}
         >
            <div className="flex justify-center mb-2">
                <AlertTriangle size={24} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{currentContext.status}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
                {currentContext.description}
            </p>
         </motion.div>
      </div>

      {/* Arrow (Desktop) */}
      <div className="hidden md:flex mt-16 text-slate-600 shrink-0">
          <ArrowRight size={24} />
      </div>

      {/* 2. Event & Scenarios Column (Right) */}
      <div className="flex flex-col items-center w-full max-w-[800px]">
         
         {/* Upcoming Event */}
         <div className="w-full max-w-[450px] relative z-20">
             <div className="bg-slate-800 border-2 border-blue-500 rounded-xl p-4 flex items-center gap-4 shadow-2xl cursor-default group hover:shadow-blue-500/20 transition-all">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Calendar className="text-blue-500" size={24} />
                </div>
                <div>
                    <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wide flex items-center gap-2">
                        {t('dashboard.upcoming')}
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                    </div>
                    <div className="text-lg font-bold text-white">{t('dashboard.data.upcoming.name')}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1"><Clock size={10}/> {upcomingEvent.date}</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                        <span>{t('dashboard.consensus')}: <span className="text-white font-mono">{t('dashboard.data.upcoming.consensus')}</span></span>
                    </div>
                </div>
             </div>
         </div>

         {/* Connector SVG */}
         <div className="w-full h-8 relative hidden md:block z-0 pointer-events-none -mt-1">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 32" preserveAspectRatio="none">
                <path d="M400 0 C 400 16, 133 16, 133 32" stroke="#334155" strokeWidth="2" fill="none" />
                <path d="M400 0 V 32" stroke="#334155" strokeWidth="2" fill="none" />
                <path d="M400 0 C 400 16, 666 16, 666 32" stroke="#334155" strokeWidth="2" fill="none" />
            </svg>
         </div>

         {/* Scenarios Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mt-4 md:mt-0">
            {upcomingEvent.scenarios.map((scenario, index) => {
              const isHovered = hoveredScenario === scenario.id;
              const isDimmed = hoveredScenario !== null && hoveredScenario !== scenario.id;
              
              const parts = scenario.id.split('-');
              const tKey = (parts[0] + parts[1].toUpperCase()) as 'caseA' | 'caseB' | 'caseC';

              return (
                  <motion.div 
                      key={scenario.id}
                      onMouseEnter={() => setHoveredScenario(scenario.id)}
                      onMouseLeave={() => setHoveredScenario(null)}
                      className={cn(
                          "relative transition-all duration-300 flex flex-col h-full",
                          isDimmed ? "opacity-30 blur-[1px]" : "opacity-100 scale-100"
                      )}
                  >
                      {/* Top Connector Dot (Desktop) */}
                      <div className={cn("hidden md:block absolute top-[-16px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-4 border-slate-900 z-20", 
                          // @ts-ignore
                          scenario.sentiment === 'Bullish' ? 'bg-emerald-500' : 
                          // @ts-ignore
                          scenario.sentiment === 'Bearish' ? 'bg-rose-500' : 'bg-slate-400'
                      )} />
                      
                      {/* Mobile Line */}
                      <div className="md:hidden absolute left-1/2 -top-12 w-[2px] h-12 bg-slate-700 -translate-x-1/2"></div>

                      <div className={cn(
                          "p-5 rounded-xl border transition-all cursor-default flex-1 flex flex-col",
                          // @ts-ignore
                          sentimentColors[scenario.sentiment] || 'bg-slate-800 border-slate-700',
                          isHovered ? "shadow-2xl scale-[1.02]" : "bg-slate-800/50"
                      )}>
                          <div className="flex items-center justify-between mb-3">
                              <span className="font-mono text-xs font-bold uppercase opacity-80">{t(`dashboard.data.${tKey}.condition`)}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/30 border border-white/10">
                                  Case {String.fromCharCode(65 + index)}
                              </span>
                          </div>
                          <div className="font-bold text-xl mb-1">{t(`dashboard.data.${tKey}.outcome`)}</div>
                          <div className="text-sm opacity-90 mb-4 flex items-center gap-2">
                              <Activity size={14} />
                              {t(`dashboard.data.${tKey}.target`)}
                          </div>

                          {scenario.logic && (
                              <div className="mt-auto pt-4 border-t border-white/10 flex gap-3 text-sm text-slate-300">
                                  <Lightbulb size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                                  <p className="text-xs leading-relaxed">{t(`dashboard.data.${tKey}.logic`)}</p>
                              </div>
                          )}
                      </div>
                  </motion.div>
              );
            })}
         </div>

      </div>
    </div>
  );
}
