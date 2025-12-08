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
  target: string;
  sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  probability?: string;
  logic?: string;
  rateProbability?: number; // % chance of rate cut
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
        target: 'BTC $78k (Crash)',
        sentiment: 'Bearish',
        logic: 'Inflation is getting hot again. No rate cuts = Bad for Crypto.',
        rateProbability: 30,
      },
      {
        id: 'case-b',
        condition: 'Match 2.2~2.4%',
        outcome: 'Uncertainty Continues',
        target: 'BTC $85k (Chop)',
        sentiment: 'Neutral',
        logic: 'Market is unsure. Waiting for the next big catalyst (FOMC).',
        rateProbability: 65,
      },
      {
        id: 'case-c',
        condition: 'Low < 2.1%',
        outcome: 'Relief Rally',
        target: 'BTC $92k (Bounce)',
        sentiment: 'Bullish',
        logic: 'Inflation is cooling! Fed might cut rates sooner. Good for Crypto.',
        rateProbability: 95,
      },
    ],
  },
};
