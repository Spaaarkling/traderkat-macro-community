import { useState } from 'react';
import MacroFlowDashboard from './components/MacroFlowDashboard';
import RightPanel from './components/RightPanel';
import MonthlyProgressRail from './components/MonthlyProgressRail';
import HistoricalTimeline from './components/HistoricalTimeline';
import { MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { macroFlowData } from './data/macroFlowData';

function App() {
  const [isPanelOpen, setPanelOpen] = useState(false); // Mobile only
  const [hoveredScenario, setHoveredScenario] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();

  // Calculate dynamic rate probability based on hover
  const activeScenario = macroFlowData.upcomingEvent.scenarios.find(s => s.id === hoveredScenario);
  const currentProbability = activeScenario?.rateProbability ?? 65;

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      
      {/* Left Container (Main Content) */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto relative bg-slate-900 scrollbar-thin scrollbar-thumb-slate-700">
        
        {/* Top Controls (Mobile Menu & Language) */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-3">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ko' : 'en')}
            className="bg-slate-800/80 backdrop-blur text-slate-300 px-3 py-1.5 rounded-full border border-slate-700 text-xs font-bold hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-lg"
          >
            <Globe size={14} />
            {language === 'en' ? 'KO' : 'EN'}
          </button>
        </div>

        {/* 1. Rail */}
        <MonthlyProgressRail />

        {/* 2. Chart (Compacted) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
           <MacroFlowDashboard 
             hoveredScenario={hoveredScenario} 
             setHoveredScenario={setHoveredScenario} 
           />
        </div>

        {/* 3. Timeline */}
        <div className="w-full max-w-5xl mx-auto p-8 pt-0 mt-8">
           <HistoricalTimeline />
        </div>
      </div>

      {/* Right Container (Sidebar - Fixed Width) */}
      <div className="hidden lg:block w-[320px] flex-shrink-0 border-l border-slate-700 bg-slate-900 h-full z-20">
         <RightPanel probability={currentProbability} />
      </div>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPanelOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[320px] z-50 shadow-2xl lg:hidden"
            >
              <RightPanel 
                probability={currentProbability} 
                onClose={() => setPanelOpen(false)} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button (Floating FAB) */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setPanelOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg z-30 hover:bg-blue-600 transition-colors"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}

export default App;
