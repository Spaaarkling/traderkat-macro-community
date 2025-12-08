import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function PredictionWidget() {
  const { t } = useLanguage();
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: 'high',
      label: t('dashboard.voting.optionHigh'),
      percent: 25,
      color: 'bg-rose-500',
      hoverColor: 'hover:bg-rose-500/20 hover:border-rose-500',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-500'
    },
    {
      id: 'match',
      label: t('dashboard.voting.optionMatch'),
      percent: 30,
      color: 'bg-slate-400',
      hoverColor: 'hover:bg-slate-400/20 hover:border-slate-400',
      borderColor: 'border-slate-400',
      textColor: 'text-slate-400'
    },
    {
      id: 'low',
      label: t('dashboard.voting.optionLow'),
      percent: 45,
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-500/20 hover:border-emerald-500',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-500'
    }
  ];

  const handleVote = (id: string) => {
    setSelectedOption(id);
    setHasVoted(true);
  };

  return (
    <div className="w-full bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-5 shadow-lg relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
          {t('dashboard.voting.title')}
        </h3>
        {hasVoted && (
          <span className="text-xs text-slate-500 animate-fade-in">
            {t('dashboard.voting.voted')} 1,240 {t('dashboard.voting.participants')}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div key={option.id} className="relative">
            {!hasVoted ? (
              // Voting Mode Buttons
              <button
                onClick={() => handleVote(option.id)}
                className={cn(
                  "w-full py-3 px-4 rounded-lg border-2 border-slate-700 bg-slate-900/50 transition-all duration-300 text-left font-bold text-slate-300",
                  option.hoverColor,
                  "group relative overflow-hidden"
                )}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </button>
            ) : (
              // Results Mode Bars
              <div className={cn(
                "relative w-full h-12 rounded-lg bg-slate-900/50 border border-slate-800 overflow-hidden flex items-center px-4",
                selectedOption === option.id ? `ring-1 ring-offset-1 ring-offset-slate-900 ${option.borderColor}` : "opacity-80"
              )}>
                {/* Background Bar Animation */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${option.percent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={cn(
                    "absolute left-0 top-0 bottom-0 opacity-20",
                    option.color
                  )}
                />
                
                {/* Content */}
                <div className="relative z-10 flex justify-between items-center w-full">
                  <span className={cn(
                    "font-bold text-sm",
                    option.textColor
                  )}>
                    {option.label}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {selectedOption === option.id && (
                       <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded border border-slate-600">
                         {t('dashboard.voting.voted')}
                       </span>
                    )}
                    <span className="font-mono font-bold text-white">
                      {option.percent}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
