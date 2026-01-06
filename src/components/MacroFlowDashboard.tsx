import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  ArrowRight,
  Info
} from 'lucide-react';
import { macroFlowData } from '../data/macroFlowData';
import { useLanguage } from '../context/LanguageContext';

import { macroReports, getReport } from '../data/macroReports';
import type { SignalReport } from '../types/macro';

import SignalOverviewGrid from './SignalOverviewGrid';
import SignalDetailPanel from './SignalDetailPanel';
import ExpertPanel from './ExpertPanel';

interface MacroFlowDashboardProps {
  hoveredScenario: string | null;
  setHoveredScenario: (id: string | null) => void;
}

export default function MacroFlowDashboard({ hoveredScenario: _hoveredScenario, setHoveredScenario: _setHoveredScenario }: MacroFlowDashboardProps) {
  const { currentContext } = macroFlowData;
  const { t, language } = useLanguage();
  
  // State for selected signal
  const [selectedSignalKey, setSelectedSignalKey] = useState<string | null>("policy");
  const [selectedReport, setSelectedReport] = useState<SignalReport>(getReport("policy"));

  const handleSelectSignal = (report: SignalReport) => {
    setSelectedSignalKey(report.key);
    setSelectedReport(report);
  };

  return (
    <div className="w-full max-w-6xl flex flex-col gap-8 relative pt-4 pb-12">
      
      {/* 1. Top Section: Regime & Product Copy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
         
         {/* Context/Regime Card */}
         <motion.div 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           className="md:col-span-1 relative p-6 rounded-xl border border-slate-800 bg-slate-900/50 shadow-xl"
         >
            <h2 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle size={14} className="text-orange-500" />
              {t('dashboard.marketContext')}
            </h2>
            <h3 className="text-xl font-bold mb-2 text-white">{currentContext.status[language]}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {currentContext.description[language]}
            </p>
         </motion.div>

         {/* Product Value Props (Copy) */}
         <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center h-full px-4"
         >
            <div className="flex flex-wrap gap-4 md:gap-8">
              {[
                { title: t('dashboard.product.whatChanged'), desc: t('dashboard.product.whatChangedDesc') },
                { title: t('dashboard.product.whyMatters'), desc: t('dashboard.product.whyMattersDesc') },
                { title: t('dashboard.product.nextChecks'), desc: t('dashboard.product.nextChecksDesc') }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Info size={16} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-200">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
         </motion.div>
      </div>

      {/* 2. Middle Section: Signal Grid */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">{t('dashboard.signals.matrix')}</h3>
          <div className="text-xs text-slate-500 font-mono">{t('dashboard.signals.live')}</div>
        </div>
        <SignalOverviewGrid 
          reports={macroReports.filter(r => r.horizon === '1W')} 
          selectedSignalKey={selectedSignalKey}
          onSelectSignal={handleSelectSignal}
        />
      </div>

      {/* 3. Bottom Section: Deep Dive & Experts */}
      <AnimatePresence mode="wait">
        {selectedReport && (
          <motion.div 
            key={selectedReport.key}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Signal Detail (Left - Wider) */}
            <div className="lg:col-span-7 h-full">
              <SignalDetailPanel report={selectedReport} />
            </div>

            {/* Arrow Connector (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-20 text-slate-700">
              <ArrowRight size={24} />
            </div>

            {/* Expert Views (Right) */}
            <div className="lg:col-span-4 h-full">
               <ExpertPanel expertViews={selectedReport.expertViews} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
