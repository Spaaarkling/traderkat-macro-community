export type SignalKey = "policy" | "liquidity" | "inflation" | "growth" | "risk";

export type HorizonKey = "1D" | "1W" | "1M";

export type SignalState = "bullish" | "neutral" | "bearish";

export type Confidence = number; // 0..1

export interface TranslatedString {
  en: string;
  ko: string;
}

export interface Driver {
  title: TranslatedString;
  detail: TranslatedString;
  impact: "up" | "down" | "mixed";
  weight: number;
}

export interface Falsifier {
  condition: TranslatedString;
  whyItMatters: TranslatedString;
}

export interface NextCheck {
  item: TranslatedString;
  timing: TranslatedString;
}

export type ExpertRole = "macroeconomist" | "rates" | "fx" | "risk" | "crypto";

export interface ExpertView {
  role: ExpertRole;
  stance: SignalState;
  confidence: number;
  summary: TranslatedString;
  drivers: Driver[];
  falsifiers: Falsifier[];
  nextChecks: NextCheck[];
}

export interface SignalReport {
  key: SignalKey;
  title: string; // Used as key for translation
  horizon: HorizonKey;
  score: number; // 0~100
  state: SignalState;
  confidence: number; // 0..1
  topDrivers: Driver[];
  whatChanged: TranslatedString[];
  expertViews: ExpertView[];
}
