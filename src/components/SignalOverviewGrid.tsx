import { motion } from 'framer-motion';
import type { SignalReport } from '../types/macro';
import ConsensusBar from './ConsensusBar';
import { Activity, Shield, TrendingUp, DollarSign, Globe } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SignalOverviewGridProps {
  reports: SignalReport[];
  selectedSignalKey: string | null;
  onSelectSignal: (report: SignalReport) => void;
}

const icons = {
  policy: Shield,
  liquidity: DollarSign,
  inflation: TrendingUp,
  growth: Activity,
  risk: Globe
};

const stateColors = {
  bullish: "text-emerald-400 border-emerald-500/50 bg-emerald-950/30 hover:bg-emerald-900/40",
  neutral: "text-slate-400 border-slate-600/50 bg-slate-900/40 hover:bg-slate-800/60",
  bearish: "text-rose-400 border-rose-500/50 bg-rose-950/30 hover:bg-rose-900/40"
};

const activeBorder = "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950";

export default function SignalOverviewGrid({ reports, selectedSignalKey, onSelectSignal }: SignalOverviewGridProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
      {reports.map((report, index) => {
        const Icon = icons[report.key] || Activity;
        const isSelected = selectedSignalKey === report.key;

        return (
          <motion.button
            key={report.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectSignal(report)}
            className={cn(
              "relative p-4 rounded-xl border text-left transition-all group flex flex-col gap-3 h-full",
              stateColors[report.state],
              isSelected ? activeBorder : "hover:scale-[1.02]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">{t(`dashboard.signals.titles.${report.key}`)}</span>
              </div>
              <span className="text-[10px] font-mono opacity-60">
                {Math.round(report.confidence * 100)}% {t('dashboard.signals.conf')}
              </span>
            </div>

            {/* Score & State */}
            <div className="mt-1">
              <div className="text-2xl font-black tracking-tight flex items-baseline gap-2">
                {report.score}
                <span className="text-xs font-bold uppercase opacity-60 font-sans tracking-normal">
                  / 100
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-90 mt-1">
                {t(`dashboard.signals.states.${report.state}`)}
              </div>
            </div>

            {/* Consensus */}
            <div className="mt-auto w-full pt-3 border-t border-white/5">
              <div className="flex justify-between text-[10px] text-slate-400 mb-1.5 uppercase font-bold tracking-wider">
                <span>{t('dashboard.signals.consensus')}</span>
                <span>{report.expertViews.length} {t('dashboard.signals.experts')}</span>
              </div>
              <ConsensusBar views={report.expertViews} />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
