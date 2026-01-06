import { Activity, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';
import { macroFlowData } from '../data/macroFlowData';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const sentimentBorder = {
  Bullish: 'border-emerald-500',
  Bearish: 'border-rose-500',
  Neutral: 'border-slate-400',
  Fear: 'border-orange-500',
};

export default function MonthlyProgressRail() {
  const { monthlySteps } = macroFlowData;
  const { t } = useLanguage();

  return (
      <header className="w-full max-w-5xl mx-auto mb-8 relative z-20 mt-8 px-4">
          <div className="flex items-center justify-between relative">
              {/* Background Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0"></div>
              
              {monthlySteps.map((step, index) => {
                  const isActive = step.status === 'Active';
                  const isCompleted = step.status === 'Completed';
                  
                  return (
                      <div key={step.id} className="relative z-10 flex flex-col items-center group">
                          <div className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-black",
                              isActive ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] scale-110" :
                              isCompleted ? "border-slate-600 text-slate-400" :
                              "border-slate-800 border-dashed text-slate-700"
                          )}>
                              {isCompleted ? <CheckCircle2 size={20} className={cn(
                                  // @ts-ignore
                                  step.sentiment === 'Bullish' ? "text-emerald-500 drop-shadow-[0_0_5px_currentColor]" : 
                                  // @ts-ignore
                                  step.sentiment === 'Bearish' ? "text-rose-500 drop-shadow-[0_0_5px_currentColor]" : "text-slate-500"
                              )} /> : 
                               isActive ? <Activity size={20} className="text-cyan-500 animate-pulse" /> :
                               <span className="text-sm font-bold font-mono">{index + 1}</span>
                              }
                          </div>
                          
                          <div className="absolute top-14 flex flex-col items-center w-32 text-center">
                              <span className={cn(
                                  "text-xs font-bold uppercase tracking-wider mb-1 font-mono",
                                  isActive ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" : isCompleted ? "text-slate-400" : "text-slate-600"
                              )}>{step.name}</span>
                              
                              {isCompleted && (
                                  <span className={cn(
                                      "text-[10px] px-2 py-0.5 rounded-sm bg-black border font-mono uppercase tracking-tight",
                                      // @ts-ignore
                                      sentimentBorder[step.sentiment] || "border-slate-800",
                                      // @ts-ignore
                                      step.sentiment === 'Bullish' ? "text-emerald-400 border-emerald-500 shadow-[0_0_5px_rgba(52,211,153,0.3)]" : 
                                      // @ts-ignore
                                      step.sentiment === 'Bearish' ? "text-rose-500 border-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.3)]" : "text-slate-400"
                                  )}>{step.result}</span>
                              )}
                              
                              {isActive && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-sm bg-cyan-900/30 text-cyan-400 font-bold border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse font-mono">
                                      {t('dashboard.now')}
                                  </span>
                              )}

                              {!isCompleted && !isActive && (
                                  <span className="text-[10px] text-slate-600">{step.date}</span>
                              )}
                          </div>
                      </div>
                  )
              })}
          </div>
      </header>
  );
}
