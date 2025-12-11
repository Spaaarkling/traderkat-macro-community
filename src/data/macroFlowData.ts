export interface PastEvent {
  id: string;
  name: string;
  result: string;
  sentiment: string;
  status: 'Bullish' | 'Bearish' | 'Neutral';
}

export interface CurrentContext {
  status: string;
  description: string;
  sentiment: 'Bullish' | 'Bearish' | 'Neutral' | 'Fear';
}

export interface Scenario {
  id: string;
  condition: string;
  outcome: string;
  sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  rateProbability?: number; // % chance of rate cut
  analysis: {
    summary: { en: string; ko: string };
    logicChain: { en: string[]; ko: string[] };
    deepDive: { en: string; ko: string };
  };
}

export interface UpcomingEvent {
  name: string;
  date: string;
  consensus: string;
  scenarios: Scenario[];
}

export interface MonthlyStep {
  id: number;
  name: string;
  status: 'Completed' | 'Active' | 'Upcoming';
  date: string;
  result?: string;
  sentiment?: 'Bullish' | 'Bearish' | 'Neutral';
}

export interface MacroFlowData {
  monthlySteps: MonthlyStep[];
  pastEvents: PastEvent[]; 
  currentContext: CurrentContext;
  upcomingEvent: UpcomingEvent;
}

export const macroFlowData: MacroFlowData = {
  monthlySteps: [
    { id: 1, name: 'Employment', status: 'Completed', date: 'Nov 3', result: 'Shock (4.5%)', sentiment: 'Bearish' },
    { id: 2, name: 'CPI', status: 'Completed', date: 'Nov 12', result: 'High (3.2%)', sentiment: 'Bearish' },
    { id: 3, name: 'PPI', status: 'Active', date: 'Nov 14', result: 'D-Day' },
    { id: 4, name: 'FOMC', status: 'Upcoming', date: 'Nov 20' },
    { id: 5, name: 'PCE', status: 'Upcoming', date: 'Nov 28' },
  ],
  pastEvents: [
    {
      id: 'evt-1',
      name: 'Employment Report',
      result: 'Shock (4.5%)',
      sentiment: 'Recession Fear',
      status: 'Bearish',
    },
    {
      id: 'evt-2',
      name: 'CPI',
      result: 'High (3.2%)',
      sentiment: 'Inflation Persistence',
      status: 'Bearish',
    },
  ],
  currentContext: {
    status: 'Stagflation Fear',
    description: 'Market is terrified. Bad news is bad news.',
    sentiment: 'Fear', 
  },
  upcomingEvent: {
    name: 'PPI (Producer Price Index)',
    date: 'Nov 14, 22:30',
    consensus: '2.3%',
    scenarios: [
      {
        id: 'case-a',
        condition: 'High > 2.5%',
        outcome: 'Total Panic',
        sentiment: 'Bearish',
        rateProbability: 30,
        analysis: {
          summary: {
            en: "Inflation Rekindled 🔥",
            ko: "인플레이션 공포 재점화 🔥"
          },
          logicChain: {
            en: ["PPI Spike", "CPI Outlook Up", "Fed Hawkish", "Assets Fall"],
            ko: ["PPI 급등", "물가 상승 압력", "긴축 유지", "자산시장 하락"]
          },
          deepDive: {
            en: "If producers pay more, consumers will eventually pay more. The Fed hates this signal. It kills the 'soft landing' narrative and pushes rate cuts further away.",
            ko: "생산자 물가가 오르면 시차를 두고 소비자 물가도 오릅니다. 연준은 이를 매우 경계하며, '연내 금리 인하' 기대감을 완전히 꺾어버릴 수 있습니다. 시장엔 큰 악재입니다."
          }
        }
      },
      {
        id: 'case-b',
        condition: 'Match 2.2~2.4%',
        outcome: 'Uncertainty',
        sentiment: 'Neutral',
        rateProbability: 65,
        analysis: {
          summary: {
            en: "Wait and See 👀",
            ko: "지루한 눈치보기 👀"
          },
          logicChain: {
            en: ["Expected PPI", "No New Shock", "Fed Watch", "Chop Market"],
            ko: ["예상치 부합", "추가 충격 없음", "연준 관망", "횡보장 지속"]
          },
          deepDive: {
            en: "Not terrible, but not great. The market needs a clearer signal to pick a direction. Volatility might drop as traders wait for the next catalyst (PCE).",
            ko: "나쁘진 않지만, 그렇다고 환호할 만한 소식도 아닙니다. 시장은 확실한 방향성을 잡기 위해 다음 데이터(PCE 등)를 기다리며 지루한 횡보를 보일 것입니다."
          }
        }
      },
      {
        id: 'case-c',
        condition: 'Low < 2.1%',
        outcome: 'Relief Rally',
        sentiment: 'Bullish',
        rateProbability: 95,
        analysis: {
          summary: {
            en: "Goldilocks Revival 🚀",
            ko: "골디락스의 부활 🚀"
          },
          logicChain: {
            en: ["Costs Drop", "Margins Up", "Fed Dovish", "Assets Fly"],
            ko: ["생산단가 하락", "물가 안정", "금리 인하 기대", "강력한 랠리"]
          },
          deepDive: {
            en: "Lower input costs mean inflation is truly dead. The Fed has a green light to cut rates to support growth. This is the perfect scenario for crypto.",
            ko: "원자재 및 생산 비용이 줄어들고 있다는 강력한 증거입니다. 인플레이션 걱정이 사라지면, 연준은 경기 부양을 위해 돈을 풀 수 있습니다. 크립토에겐 최고의 시나리오입니다."
          }
        }
      },
    ],
  },
};
