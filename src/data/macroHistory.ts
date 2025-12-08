export interface HistoryItem {
  date: string;
  actual: string;
  consensus: string;
  result: 'High' | 'Match' | 'Low';
  btcChange: string;
  priceAction: 'Bullish' | 'Bearish' | 'Neutral';
}

export interface MacroHistory {
  CPI: HistoryItem[];
  PPI: HistoryItem[];
  Jobs: HistoryItem[];
}

export const macroHistory: MacroHistory = {
  CPI: [
    { date: "2025-01-11", actual: "3.4%", consensus: "3.2%", result: "High", btcChange: "-4.2%", priceAction: "Bearish" },
    { date: "2025-02-13", actual: "3.1%", consensus: "3.1%", result: "Match", btcChange: "+0.5%", priceAction: "Neutral" },
    { date: "2025-03-12", actual: "2.9%", consensus: "3.0%", result: "Low", btcChange: "+5.1%", priceAction: "Bullish" },
    { date: "2025-04-10", actual: "3.0%", consensus: "2.9%", result: "High", btcChange: "-2.8%", priceAction: "Bearish" },
    { date: "2025-05-14", actual: "2.8%", consensus: "2.8%", result: "Match", btcChange: "+1.2%", priceAction: "Neutral" },
    { date: "2025-06-12", actual: "2.6%", consensus: "2.7%", result: "Low", btcChange: "+3.5%", priceAction: "Bullish" },
    { date: "2025-07-11", actual: "2.7%", consensus: "2.6%", result: "High", btcChange: "-1.5%", priceAction: "Bearish" },
    { date: "2025-08-14", actual: "2.5%", consensus: "2.5%", result: "Match", btcChange: "-0.2%", priceAction: "Neutral" },
    { date: "2025-09-13", actual: "2.4%", consensus: "2.5%", result: "Low", btcChange: "+4.2%", priceAction: "Bullish" },
    { date: "2025-10-12", actual: "2.8%", consensus: "2.4%", result: "High", btcChange: "-5.5%", priceAction: "Bearish" },
    { date: "2025-11-13", actual: "3.2%", consensus: "2.8%", result: "High", btcChange: "-6.1%", priceAction: "Bearish" },
  ],
  PPI: [
    { date: "2025-01-12", actual: "2.1%", consensus: "2.0%", result: "High", btcChange: "-1.5%", priceAction: "Bearish" },
    { date: "2025-02-14", actual: "1.9%", consensus: "2.0%", result: "Low", btcChange: "+2.2%", priceAction: "Bullish" },
    { date: "2025-03-13", actual: "1.8%", consensus: "1.8%", result: "Match", btcChange: "+0.8%", priceAction: "Neutral" },
    { date: "2025-04-11", actual: "2.0%", consensus: "1.9%", result: "High", btcChange: "-2.1%", priceAction: "Bearish" },
    { date: "2025-05-15", actual: "1.9%", consensus: "1.9%", result: "Match", btcChange: "+0.4%", priceAction: "Neutral" },
    { date: "2025-06-13", actual: "1.7%", consensus: "1.8%", result: "Low", btcChange: "+3.1%", priceAction: "Bullish" },
    { date: "2025-07-12", actual: "1.8%", consensus: "1.8%", result: "Match", btcChange: "-0.5%", priceAction: "Neutral" },
    { date: "2025-08-15", actual: "1.6%", consensus: "1.7%", result: "Low", btcChange: "+1.9%", priceAction: "Bullish" },
    { date: "2025-09-14", actual: "1.9%", consensus: "1.7%", result: "High", btcChange: "-3.2%", priceAction: "Bearish" },
    { date: "2025-10-13", actual: "2.1%", consensus: "1.9%", result: "High", btcChange: "-4.0%", priceAction: "Bearish" },
    { date: "2025-11-14", actual: "2.3%", consensus: "2.1%", result: "High", btcChange: "-?", priceAction: "Neutral" }, // Current
  ],
  Jobs: [
    { date: "2025-01-05", actual: "3.7%", consensus: "3.8%", result: "Low", btcChange: "+2.5%", priceAction: "Bullish" },
    { date: "2025-02-02", actual: "3.8%", consensus: "3.8%", result: "Match", btcChange: "+0.1%", priceAction: "Neutral" },
    { date: "2025-03-08", actual: "3.9%", consensus: "3.8%", result: "High", btcChange: "-1.8%", priceAction: "Bearish" },
    { date: "2025-04-05", actual: "3.8%", consensus: "3.9%", result: "Low", btcChange: "+3.0%", priceAction: "Bullish" },
    { date: "2025-05-03", actual: "3.9%", consensus: "3.9%", result: "Match", btcChange: "+0.5%", priceAction: "Neutral" },
    { date: "2025-06-07", actual: "4.0%", consensus: "3.9%", result: "High", btcChange: "-2.5%", priceAction: "Bearish" },
    { date: "2025-07-05", actual: "4.1%", consensus: "4.0%", result: "High", btcChange: "-3.1%", priceAction: "Bearish" },
    { date: "2025-08-02", actual: "4.1%", consensus: "4.1%", result: "Match", btcChange: "+0.2%", priceAction: "Neutral" },
    { date: "2025-09-06", actual: "4.2%", consensus: "4.1%", result: "High", btcChange: "-2.8%", priceAction: "Bearish" },
    { date: "2025-10-04", actual: "4.3%", consensus: "4.2%", result: "High", btcChange: "-4.5%", priceAction: "Bearish" },
    { date: "2025-11-08", actual: "4.5%", consensus: "4.3%", result: "High", btcChange: "-7.2%", priceAction: "Bearish" },
  ]
};
