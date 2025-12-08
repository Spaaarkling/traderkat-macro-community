import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TrendingDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FedMonitorWidgetProps {
  probability?: number;
}

export default function FedMonitorWidget({ probability = 65 }: FedMonitorWidgetProps) {
  const { t } = useLanguage();

  return (
    <div className="w-64 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl p-4 shadow-2xl relative overflow-hidden group">
      {/* Glow Effect based on probability */}
      <div className={cn(
        "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] transition-all duration-700 opacity-20",
        probability > 70 ? "bg-emerald-500" : probability < 40 ? "bg-rose-500" : "bg-blue-500"
      )} />

      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
        <TrendingDown size={14} />
        {t('dashboard.fedMonitor.title')}
      </h3>

      {/* Main Gauge Area */}
      <div className="relative mb-4">
        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500">
          <span>{t('dashboard.fedMonitor.freeze')}</span>
          <span>{t('dashboard.fedMonitor.cut')}</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700 relative">
          {/* Animated Bar */}
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${probability}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className={cn(
              "h-full absolute right-0 top-0 bottom-0 rounded-full",
              probability > 70 ? "bg-gradient-to-l from-emerald-500 to-emerald-700" : 
              probability < 40 ? "bg-gradient-to-l from-rose-500 to-rose-700" : 
              "bg-gradient-to-l from-blue-500 to-blue-700"
            )}
          />
        </div>

        {/* Big Number Display */}
        <div className="flex justify-end mt-2 items-baseline gap-1">
          <span className="text-[10px] text-slate-500 uppercase font-bold">{t('dashboard.fedMonitor.probability')}</span>
          <motion.span 
             key={probability}
             initial={{ scale: 1.2, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className={cn(
               "text-3xl font-black font-mono tracking-tighter",
               probability > 70 ? "text-emerald-400" : 
               probability < 40 ? "text-rose-400" : 
               "text-blue-400"
             )}
          >
            {probability}%
          </motion.span>
        </div>
      </div>

      {/* Insight Section */}
      <div className="pt-3 border-t border-slate-800 flex gap-2 items-start">
        <AlertCircle size={12} className="text-slate-500 mt-0.5 shrink-0" />
        <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
          {t('dashboard.fedMonitor.insight')}
        </p>
      </div>
    </div>
  );
}
