export interface BtcImpact {
  "1h": string;
  "24h": string;
  "7d": string;
}

export interface MonthlyEvent {
  name: string;
  date: string;
  result: string;
  btcImpact: BtcImpact;
  sentiment: 'Bullish' | 'Bearish' | 'Neutral';
}

export interface MonthlyData {
  month: string;
  events: MonthlyEvent[];
}

export const monthlyHistory: MonthlyData[] = [
  {
    month: "January 2025",
    events: [
      { name: "Employment Report", date: "Jan 5", result: "Beat (Jobs ^)", btcImpact: { "1h": "-0.5%", "24h": "-1.2%", "7d": "-3.0%" }, sentiment: "Bearish" },
      { name: "CPI", date: "Jan 12", result: "Miss (Lower)", btcImpact: { "1h": "+1.2%", "24h": "+3.5%", "7d": "+5.0%" }, sentiment: "Bullish" },
      { name: "PPI", date: "Jan 13", result: "Match", btcImpact: { "1h": "-0.2%", "24h": "+0.5%", "7d": "+1.2%" }, sentiment: "Neutral" },
      { name: "FOMC", date: "Jan 31", result: "Pause", btcImpact: { "1h": "+0.8%", "24h": "-0.5%", "7d": "-1.0%" }, sentiment: "Neutral" },
      { name: "PCE", date: "Jan 26", result: "High", btcImpact: { "1h": "-0.8%", "24h": "-1.5%", "7d": "-2.5%" }, sentiment: "Bearish" },
    ]
  },
  {
    month: "February 2025",
    events: [
      { name: "Employment Report", date: "Feb 2", result: "Miss (Jobs v)", btcImpact: { "1h": "+0.6%", "24h": "+1.8%", "7d": "+4.0%" }, sentiment: "Bullish" },
      { name: "CPI", date: "Feb 13", result: "Match", btcImpact: { "1h": "+0.2%", "24h": "+0.5%", "7d": "+1.5%" }, sentiment: "Neutral" },
      { name: "PPI", date: "Feb 14", result: "Low", btcImpact: { "1h": "+1.0%", "24h": "+2.2%", "7d": "+3.5%" }, sentiment: "Bullish" },
      { name: "FOMC Minutes", date: "Feb 21", result: "Hawkish", btcImpact: { "1h": "-0.5%", "24h": "-1.2%", "7d": "-2.0%" }, sentiment: "Bearish" },
      { name: "PCE", date: "Feb 28", result: "Match", btcImpact: { "1h": "+0.1%", "24h": "+0.3%", "7d": "+0.8%" }, sentiment: "Neutral" },
    ]
  },
  {
    month: "March 2025",
    events: [
      { name: "Employment Report", date: "Mar 8", result: "Strong", btcImpact: { "1h": "-1.0%", "24h": "-2.5%", "7d": "-5.0%" }, sentiment: "Bearish" },
      { name: "CPI", date: "Mar 12", result: "High", btcImpact: { "1h": "-1.5%", "24h": "-3.0%", "7d": "-6.5%" }, sentiment: "Bearish" },
      { name: "PPI", date: "Mar 14", result: "High", btcImpact: { "1h": "-0.8%", "24h": "-1.8%", "7d": "-3.0%" }, sentiment: "Bearish" },
      { name: "FOMC", date: "Mar 20", result: "Hike (+25bps)", btcImpact: { "1h": "-2.5%", "24h": "-5.0%", "7d": "-10.0%" }, sentiment: "Bearish" },
      { name: "PCE", date: "Mar 29", result: "High", btcImpact: { "1h": "-1.0%", "24h": "-2.2%", "7d": "-4.0%" }, sentiment: "Bearish" },
    ]
  },
  {
    month: "April 2025",
    events: [
      { name: "Employment Report", date: "Apr 5", result: "Weak", btcImpact: { "1h": "+1.5%", "24h": "+3.0%", "7d": "+6.0%" }, sentiment: "Bullish" },
      { name: "CPI", date: "Apr 10", result: "Low", btcImpact: { "1h": "+2.0%", "24h": "+4.5%", "7d": "+8.0%" }, sentiment: "Bullish" },
      { name: "PPI", date: "Apr 11", result: "Low", btcImpact: { "1h": "+0.8%", "24h": "+2.0%", "7d": "+3.5%" }, sentiment: "Bullish" },
      // No FOMC in April usually, minutes maybe
      { name: "PCE", date: "Apr 26", result: "Low", btcImpact: { "1h": "+1.2%", "24h": "+2.8%", "7d": "+5.0%" }, sentiment: "Bullish" },
    ]
  },
  {
    month: "May 2025",
    events: [
      { name: "Employment Report", date: "May 3", result: "Match", btcImpact: { "1h": "+0.2%", "24h": "+0.5%", "7d": "+1.0%" }, sentiment: "Neutral" },
      { name: "CPI", date: "May 15", result: "Match", btcImpact: { "1h": "+0.1%", "24h": "+0.8%", "7d": "+1.5%" }, sentiment: "Neutral" },
      { name: "PPI", date: "May 14", result: "Match", btcImpact: { "1h": "+0.3%", "24h": "+0.6%", "7d": "+1.2%" }, sentiment: "Neutral" },
      { name: "FOMC", date: "May 1", result: "Pause", btcImpact: { "1h": "+0.5%", "24h": "+1.2%", "7d": "+2.0%" }, sentiment: "Bullish" },
      { name: "PCE", date: "May 31", result: "Match", btcImpact: { "1h": "0.0%", "24h": "+0.2%", "7d": "+0.5%" }, sentiment: "Neutral" },
    ]
  },
];
