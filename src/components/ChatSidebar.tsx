import { Send, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  id: number;
  user: string;
  text: string;
  initials: string;
  color: string;
  isMe?: boolean;
}

const mockMessages: Message[] = [
  { id: 1, user: "CryptoKing", text: "Anyone watching the PPI tonight?", initials: "CK", color: "bg-blue-500" },
  { id: 2, user: "BearMarket", text: "Shorting if it hits 2.5% lol", initials: "BM", color: "bg-rose-500" },
  { id: 3, user: "MoonBoi", text: "Bitcoin looking strong tbh", initials: "MB", color: "bg-emerald-500" },
  { id: 4, user: "TraderCat_Official", text: "Remember to check the historical data below! 👇", initials: "TC", color: "bg-orange-500" },
  { id: 5, user: "SatoshiFan", text: "Stagflation fears are real though...", initials: "SF", color: "bg-purple-500" },
  { id: 6, user: "CryptoKing", text: "Yeah but priced in?", initials: "CK", color: "bg-blue-500" },
];

interface ChatSidebarProps {
  className?: string;
  onClose?: () => void; // For mobile
}

export default function ChatSidebar({ className, onClose }: ChatSidebarProps) {
  const { t } = useLanguage();

  return (
    <aside className={cn("flex flex-col h-full bg-slate-800 border-l border-slate-700 shadow-xl", className)}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700 bg-slate-800/95 backdrop-blur flex justify-between items-center sticky top-0 z-10">
        <div>
          <h2 className="font-bold text-white text-sm tracking-wide">{t('chat.title')}</h2>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-400 font-mono">1,243 {t('chat.online')}</span>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((msg) => (
          <div key={msg.id} className="flex gap-3">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm",
              msg.color
            )}>
              {msg.initials}
            </div>
            <div className="flex flex-col max-w-[80%]">
              <span className="text-[10px] text-slate-400 font-bold mb-0.5 ml-1">{msg.user}</span>
              <div className="bg-slate-700/50 text-slate-200 text-sm px-3 py-2 rounded-2xl rounded-tl-none border border-slate-700/50">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-700 bg-slate-800 sticky bottom-0 z-10">
        <div className="relative">
          <input 
            type="text" 
            placeholder={t('chat.placeholder')}
            className="w-full bg-slate-900/50 border border-slate-600 rounded-full py-2.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
          />
          <button className="absolute right-1.5 top-1.5 p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg">
            <Send size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
