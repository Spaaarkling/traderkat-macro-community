import FedMonitorWidget from './FedMonitorWidget';
import PredictionWidget from './PredictionWidget';
import ChatSidebar from './ChatSidebar';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RightPanelProps {
  probability: number;
  onClose?: () => void;
  className?: string;
}

export default function RightPanel({ probability, onClose, className }: RightPanelProps) {
  return (
    <aside className={cn("flex flex-col h-full bg-black/80 backdrop-blur-xl border-l border-slate-800 shadow-2xl z-40", className)}>
      
      {/* Top Section: Fed Monitor & Prediction */}
      <div className="p-4 bg-transparent border-b border-slate-800 shrink-0 flex flex-col gap-2 overflow-y-auto max-h-[60%] relative">
         {/* HUD Corner Accents */}
         <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
         <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>

         {/* Fed Monitor */}
         <div className="w-full flex justify-center">
            <FedMonitorWidget probability={probability} />
         </div>

         {/* Prediction Widget */}
         <div className="w-full flex justify-center my-4">
            <PredictionWidget />
         </div>
      </div>

      {/* Middle Divider */}
      <div className="h-[1px] bg-slate-800 w-full shrink-0 shadow-sm" />

      {/* Bottom Section: Chat */}
      {/* We pass 'flex-1' via className to ChatSidebar to make it fill remaining space */}
      <div className="flex-1 min-h-0 overflow-hidden relative flex flex-col">
         {/* We can hide the ChatSidebar header or keep it. The prompt says "Remove... or merge it nicely". 
             The ChatSidebar header has the "Online" count. That's useful. 
             We'll keep it for now.
         */}
         <ChatSidebar className="border-l-0 h-full shadow-none bg-transparent" onClose={onClose} />
      </div>

    </aside>
  );
}
