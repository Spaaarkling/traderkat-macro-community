import type { ExpertView } from '../types/macro';

interface ConsensusBarProps {
  views: ExpertView[];
}

export default function ConsensusBar({ views }: ConsensusBarProps) {
  const total = views.length;
  if (total === 0) return null;

  const counts = views.reduce(
    (acc, view) => {
      acc[view.stance]++;
      return acc;
    },
    { bullish: 0, neutral: 0, bearish: 0 }
  );

  const getPercent = (count: number) => (count / total) * 100;

  return (
    <div className="w-full flex h-2 rounded-full overflow-hidden bg-slate-800">
      {counts.bullish > 0 && (
        <div 
          style={{ width: `${getPercent(counts.bullish)}%` }} 
          className="bg-emerald-500 h-full"
          title={`Bullish: ${counts.bullish}`}
        />
      )}
      {counts.neutral > 0 && (
        <div 
          style={{ width: `${getPercent(counts.neutral)}%` }} 
          className="bg-slate-500 h-full"
          title={`Neutral: ${counts.neutral}`}
        />
      )}
      {counts.bearish > 0 && (
        <div 
          style={{ width: `${getPercent(counts.bearish)}%` }} 
          className="bg-rose-500 h-full"
          title={`Bearish: ${counts.bearish}`}
        />
      )}
    </div>
  );
}
