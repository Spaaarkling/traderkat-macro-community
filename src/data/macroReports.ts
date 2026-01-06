import type { SignalReport, ExpertView, Driver, Falsifier, NextCheck, SignalKey, HorizonKey, SignalState } from '../types/macro';

const createDrivers = (prefix: string, prefixKo: string): Driver[] => [
  { 
    title: { en: `${prefix} Driver 1`, ko: `${prefixKo} 동인 1` }, 
    detail: { en: "Major indicator showing positive momentum", ko: "주요 지표가 긍정적 모멘텀을 보임" }, 
    impact: "up", 
    weight: 0.4 
  },
  { 
    title: { en: `${prefix} Driver 2`, ko: `${prefixKo} 동인 2` }, 
    detail: { en: "Secondary indicator showing resistance", ko: "보조 지표에서 저항이 확인됨" }, 
    impact: "down", 
    weight: 0.3 
  },
  { 
    title: { en: `${prefix} Driver 3`, ko: `${prefixKo} 동인 3` }, 
    detail: { en: "External market forces aligned", ko: "외부 시장 요인이 부합함" }, 
    impact: "mixed", 
    weight: 0.3 
  },
];

const createFalsifiers = (prefix: string, prefixKo: string): Falsifier[] => [
  { 
    condition: { en: `${prefix} Condition A`, ko: `${prefixKo} 조건 A` }, 
    whyItMatters: { en: "Would invalidate the core thesis", ko: "핵심 논리를 무효화할 수 있음" } 
  },
  { 
    condition: { en: `${prefix} Condition B`, ko: `${prefixKo} 조건 B` }, 
    whyItMatters: { en: "Suggests structural shift", ko: "구조적 변화를 시사함" } 
  },
];

const createNextChecks = (prefix: string, prefixKo: string): NextCheck[] => [
  { 
    item: { en: `${prefix} Report`, ko: `${prefixKo} 리포트` }, 
    timing: { en: "Next Tuesday", ko: "다음주 화요일" } 
  },
  { 
    item: { en: `${prefix} Meeting`, ko: `${prefixKo} 회의` }, 
    timing: { en: "End of Month", ko: "월말" } 
  },
];

const createExpertViews = (baseStance: SignalState): ExpertView[] => {
  return [
    {
      role: "macroeconomist",
      stance: baseStance,
      confidence: 0.8,
      summary: { 
        en: "Macro conditions suggest continuation of current trends.", 
        ko: "거시경제 여건상 현재 추세가 지속될 것으로 보입니다." 
      },
      drivers: createDrivers("Macro", "매크로"),
      falsifiers: createFalsifiers("Macro", "매크로"),
      nextChecks: createNextChecks("Macro", "매크로"),
    },
    {
      role: "rates",
      stance: baseStance === "bullish" ? "neutral" : "bearish",
      confidence: 0.7,
      summary: { 
        en: "Yield curve behavior indicates caution despite headline numbers.", 
        ko: "헤드라인 수치와 달리 수익률 곡선은 주의를 요하고 있습니다." 
      },
      drivers: createDrivers("Rates", "금리"),
      falsifiers: createFalsifiers("Rates", "금리"),
      nextChecks: createNextChecks("Rates", "금리"),
    },
    {
      role: "fx",
      stance: "neutral",
      confidence: 0.6,
      summary: { 
        en: "Dollar strength provides a headwind to this thesis.", 
        ko: "달러 강세가 이 논리에 역풍으로 작용하고 있습니다." 
      },
      drivers: createDrivers("FX", "환율"),
      falsifiers: createFalsifiers("FX", "환율"),
      nextChecks: createNextChecks("FX", "환율"),
    },
    {
      role: "risk",
      stance: baseStance,
      confidence: 0.9,
      summary: { 
        en: "Risk metrics are currently favorable for this exposure.", 
        ko: "현재 리스크 지표들은 투자에 우호적입니다." 
      },
      drivers: createDrivers("Risk", "리스크"),
      falsifiers: createFalsifiers("Risk", "리스크"),
      nextChecks: createNextChecks("Risk", "리스크"),
    },
    {
      role: "crypto",
      stance: "bullish",
      confidence: 0.75,
      summary: { 
        en: "On-chain data supports a high-beta move here.", 
        ko: "온체인 데이터가 하이베타 움직임을 지지하고 있습니다." 
      },
      drivers: createDrivers("Crypto", "크립토"),
      falsifiers: createFalsifiers("Crypto", "크립토"),
      nextChecks: createNextChecks("Crypto", "크립토"),
    },
  ];
};

const signals: SignalKey[] = ["policy", "liquidity", "inflation", "growth", "risk"];
const horizons: HorizonKey[] = ["1D", "1W", "1M"];

const signalTitles: Record<SignalKey, string> = {
  policy: "Monetary Policy",
  liquidity: "Global Liquidity",
  inflation: "Inflation Outlook",
  growth: "Economic Growth",
  risk: "Risk Sentiment"
};

const signalTitlesKo: Record<SignalKey, string> = {
  policy: "통화 정책",
  liquidity: "글로벌 유동성",
  inflation: "인플레이션 전망",
  growth: "경제 성장",
  risk: "리스크 심리"
};

const generateReport = (key: SignalKey, horizon: HorizonKey): SignalReport => {
  let state: SignalState = "neutral";
  let score = 50;

  if (key === "liquidity" || key === "risk") {
    state = "bullish";
    score = 75;
  } else if (key === "inflation") {
    state = "bearish";
    score = 30;
  }

  return {
    key,
    title: signalTitles[key], // Kept as string ID, will use translation key in UI
    horizon,
    score,
    state,
    confidence: 0.7 + (Math.random() * 0.2),
    topDrivers: createDrivers(signalTitles[key], signalTitlesKo[key]),
    whatChanged: [
      { en: "Central bank dovish pivot signals", ko: "중앙은행의 비둘기파적 전환 신호" },
      { en: "Unexpected rise in services PMI", ko: "서비스업 PMI의 예상 밖 상승" },
      { en: "Oil prices dropping below support", ko: "유가가 지지선 아래로 하락" }
    ],
    expertViews: createExpertViews(state)
  };
};

export const macroReports: SignalReport[] = [];

signals.forEach(signal => {
  horizons.forEach(horizon => {
    macroReports.push(generateReport(signal, horizon));
  });
});

// Helper to get specific report
export const getReport = (key: SignalKey, horizon: HorizonKey = "1W") => {
  return macroReports.find(r => r.key === key && r.horizon === horizon) || macroReports[0];
};
