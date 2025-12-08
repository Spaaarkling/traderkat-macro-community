import { useState } from 'react';
import { realHistory, type RealHistoryItem } from '../data/realHistory';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HistoricalTimeline() {
  const [yearFilter, setYearFilter] = useState<'All' | '2025' | '2024'>('2025');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useLanguage();

  // 1. Filter by Year
  const filteredData = realHistory.filter(item => {
    if (yearFilter === 'All') return true;
    return item.date.startsWith(yearFilter);
  });

  // 2. Sort by Date Descending
  const sortedData = [...filteredData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 3. Group by Month-Year
  const groupedData: { [key: string]: RealHistoryItem[] } = {};
  sortedData.forEach(item => {
    const dateObj = new Date(item.date);
    const monthYear = dateObj.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (!groupedData[monthYear]) {
      groupedData[monthYear] = [];
    }
    groupedData[monthYear].push(item);
  });

  // Helper to determine badge color
  const getResultColor = (result: string) => {
    const r = result.toLowerCase();
    if (r.includes('beat') || r.includes('good')) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    if (r.includes('miss') || r.includes('bad') || r.includes('shock')) return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    if (r.includes('pending')) return 'bg-slate-700/50 text-slate-400 border-slate-600';
    return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  };

  // Helper for BTC Impact Color
  const getImpactColor = (impact: string) => {
    if (impact.includes('+')) return 'text-emerald-400';
    if (impact.includes('-')) return 'text-rose-400';
    return 'text-slate-400';
  };

  return (
    <div className="w-full bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Header & Filter */}
      <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Clock className="text-blue-500" size={20} />
          <h3 className="font-bold text-lg text-white">{t('timeline.title')}</h3>
        </div>
        
        <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-700">
          {(['All', '2025', '2024'] as const).map((year) => (
            <button
              key={year}
              onClick={() => setYearFilter(year)}
              className={cn(
                "px-4 py-1.5 rounded-md text-xs font-bold transition-all",
                yearFilter === year 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              {year === 'All' ? t('timeline.filterAll') : year}
            </button>
          ))}
        </div>
      </div>

      {/* List Area */}
      <div className="max-h-[600px] overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {Object.keys(groupedData).length === 0 ? (
          <div className="p-8 text-center text-slate-500">No data found for this period.</div>
        ) : (
          Object.entries(groupedData).map(([monthYear, events]) => (
            <div key={monthYear} className="mb-0">
              <div className="sticky top-0 z-10 bg-slate-800/95 backdrop-blur py-2 px-4 border-y border-slate-700/50 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">{monthYear}</h4>
              </div>
              
              <div>
                {events.map((event) => {
                  const isPending = event.result.includes("Pending");
                  const uniqueId = `${event.date}-${event.event}`;
                  const isExpanded = expandedId === uniqueId;

                  return (
                    <div 
                      key={uniqueId}
                      className={cn(
                        "border-b border-slate-700/30 last:border-0 transition-colors",
                        isPending ? "opacity-50" : "hover:bg-slate-700/20 cursor-pointer"
                      )}
                      onClick={() => !isPending && setExpandedId(isExpanded ? null : uniqueId)}
                    >
                      {/* Main Row */}
                      <div className="flex items-center justify-between p-4 py-3">
                        {/* Left: Date & Event */}
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className="flex flex-col items-center justify-center w-10 shrink-0">
                            <span className="text-xs font-bold text-slate-500">{event.date.split('-')[2]}</span>
                            <span className="text-[10px] text-slate-600 uppercase">{new Date(event.date).toLocaleString('en-US', { weekday: 'short' })}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-slate-200 text-sm truncate pr-2">{event.event}</div>
                            <div className="flex items-center gap-2 mt-0.5">
                               {/* Result Badge */}
                               <span className={cn(
                                 "text-[10px] px-1.5 py-0.5 rounded border font-mono font-bold uppercase",
                                 getResultColor(event.result)
                               )}>
                                 {event.result}
                               </span>
                               {/* Actual/Consensus if available */}
                               {event.actual && !isPending && (
                                 <span className="text-[10px] text-slate-500 hidden sm:inline-block">
                                   Act: {event.actual} / Est: {event.consensus}
                                 </span>
                               )}
                            </div>
                          </div>
                        </div>

                        {/* Right: Impacts */}
                        <div className="flex items-center gap-6 shrink-0">
                          {/* BTC */}
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">BTC</span>
                            <span className={cn("font-mono text-sm font-bold", getImpactColor(event.btcPriceAfter24h))}>
                              {event.btcPriceAfter24h}
                            </span>
                          </div>
                          
                          {/* Nasdaq */}
                          <div className="flex flex-col items-end w-16 hidden sm:flex">
                            <span className="text-[10px] text-slate-600 font-bold uppercase mb-0.5">NQ</span>
                            <span className={cn("font-mono text-xs", getImpactColor(event.nasdaqPriceAfter24h))}>
                              {event.nasdaqPriceAfter24h}
                            </span>
                          </div>

                          {/* Expand Icon */}
                          {!isPending && (
                            <div className="text-slate-500">
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-900/30"
                          >
                            <div className="p-4 pt-2 pl-16 flex flex-col gap-3 pb-6">
                               {event.note && (
                                 <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                   <div className="text-[10px] uppercase font-bold text-slate-500 flex items-center gap-1.5 mb-1.5">
                                     <span>🗣️</span> {t('timeline.noteLabel')}
                                   </div>
                                   <p className="text-sm text-slate-300 leading-relaxed">{event.note}</p>
                                 </div>
                               )}
                               
                               <div className="flex items-center gap-2 text-xs font-mono px-1">
                                  <span className="text-slate-500 uppercase font-bold">{t('timeline.impactLevel')}:</span>
                                  <span className={cn(
                                    "px-2 py-0.5 rounded border text-[10px]", 
                                    event.impactLevel === 'High' || event.impactLevel === 'Extreme' 
                                      ? "bg-rose-500/10 text-rose-400 border-rose-500/20" 
                                      : "bg-slate-700/50 text-slate-300 border-slate-600"
                                  )}>{event.impactLevel}</span>
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
