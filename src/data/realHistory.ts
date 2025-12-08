export interface RealHistoryItem {
  date: string;
  event: string;
  actual: string;
  consensus: string;
  result: string;
  btcPriceAfter24h: string;
  nasdaqPriceAfter24h: string;
  impactLevel: string;
  note?: string;
}

export const realHistory: RealHistoryItem[] = [
  {
    date: "2024-01-05",
    event: "Employment Report (Dec '23)",
    actual: "216K",
    consensus: "170K",
    result: "Beat",
    btcPriceAfter24h: "-0.5%",
    nasdaqPriceAfter24h: "+0.1%",
    impactLevel: "Medium",
    note: "예상보다 강한 고용으로 조기 금리 인하 기대감 축소, 시장 혼조세."
  },
  {
    date: "2024-01-11",
    event: "CPI (Dec '23, YoY)",
    actual: "3.4%",
    consensus: "3.2%",
    result: "Bad",
    btcPriceAfter24h: "-0.8%",
    nasdaqPriceAfter24h: "+0.0%",
    impactLevel: "High",
    note: "헤드라인 CPI 반등으로 인플레 우려 재점화."
  },
  {
    date: "2024-01-12",
    event: "PPI (Dec '23, YoY)",
    actual: "1.0%",
    consensus: "1.3%",
    result: "Good",
    btcPriceAfter24h: "-5.6%",
    nasdaqPriceAfter24h: "+0.0%",
    impactLevel: "Low",
    note: "PPI는 둔화되었으나 비트코인은 ETF 승인 이후 차익 실현 매물로 하락."
  },
  {
    date: "2024-01-26",
    event: "PCE (Dec '23, YoY)",
    actual: "2.6%",
    consensus: "2.6%",
    result: "Match",
    btcPriceAfter24h: "+4.6%",
    nasdaqPriceAfter24h: "-0.6%",
    impactLevel: "Medium",
    note: "예상 부합, 인플레 둔화 추세 확인. 비트코인 기술적 반등."
  },
  {
    date: "2024-01-31",
    event: "FOMC Meeting",
    actual: "5.50%",
    consensus: "5.50% (Freeze)",
    result: "Neutral/Hawkish",
    btcPriceAfter24h: "-2.1%",
    nasdaqPriceAfter24h: "-1.9%",
    impactLevel: "High",
    note: "파월 의장이 3월 금리 인하 가능성을 낮게 평가하며 시장 실망 매물 출회."
  },
  {
    date: "2024-02-02",
    event: "Employment Report (Jan '24)",
    actual: "353K",
    consensus: "180K",
    result: "Beat",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "+1.7%",
    impactLevel: "High",
    note: "괴물 같은 고용 지표. 금리 인하 기대감 타격받았으나 메타/아마존 실적이 증시 견인."
  },
  {
    date: "2024-02-13",
    event: "CPI (Jan '24, YoY)",
    actual: "3.1%",
    consensus: "2.9%",
    result: "Bad",
    btcPriceAfter24h: "-2.8%",
    nasdaqPriceAfter24h: "-1.8%",
    impactLevel: "High",
    note: "끈질긴 인플레이션 확인. 나스닥과 비트코인 동반 하락."
  },
  {
    date: "2024-02-16",
    event: "PPI (Jan '24, YoY)",
    actual: "0.9%",
    consensus: "0.6%",
    result: "Bad",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "-0.8%",
    impactLevel: "Medium",
    note: "도매 물가도 예상 상회. 증시는 하락했으나 비트코인은 ETF 매수세로 방어."
  },
  {
    date: "2024-02-29",
    event: "PCE (Jan '24, YoY)",
    actual: "2.4%",
    consensus: "2.4%",
    result: "Match",
    btcPriceAfter24h: "+3.2%",
    nasdaqPriceAfter24h: "+0.9%",
    impactLevel: "Medium",
    note: "예상치 부합에 안도 랠리."
  },
  {
    date: "2024-03-08",
    event: "Employment Report (Feb '24)",
    actual: "275K",
    consensus: "200K",
    result: "Mixed",
    btcPriceAfter24h: "+1.5%",
    nasdaqPriceAfter24h: "-1.2%",
    impactLevel: "Medium",
    note: "고용은 강했으나 과거 수치가 하향 수정되고 실업률이 올라 골디락스 해석."
  },
  {
    date: "2024-03-12",
    event: "CPI (Feb '24, YoY)",
    actual: "3.2%",
    consensus: "3.1%",
    result: "Bad",
    btcPriceAfter24h: "-1.1%",
    nasdaqPriceAfter24h: "+1.5%",
    impactLevel: "High",
    note: "물가 반등했으나 시장은 연내 인하 기대 유지."
  },
  {
    date: "2024-03-14",
    event: "PPI (Feb '24, YoY)",
    actual: "1.6%",
    consensus: "1.1%",
    result: "Bad",
    btcPriceAfter24h: "-3.5%",
    nasdaqPriceAfter24h: "-0.3%",
    impactLevel: "High",
    note: "도매 물가 급등 충격. 스태그플레이션 우려 일부 제기."
  },
  {
    date: "2024-03-20",
    event: "FOMC Meeting",
    actual: "5.50%",
    consensus: "5.50%",
    result: "Good",
    btcPriceAfter24h: "+9.5%",
    nasdaqPriceAfter24h: "+1.3%",
    impactLevel: "Extreme",
    note: "매파적일 것이라는 우려와 달리 비둘기파적 동결. 시장 환호."
  },
  {
    date: "2024-03-29",
    event: "PCE (Feb '24, YoY)",
    actual: "2.5%",
    consensus: "2.5%",
    result: "Match",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "N/A",
    impactLevel: "Low",
    note: "예상 부합했으나 파월 의장의 '서두를 필요 없다' 발언에 차분."
  },
  {
    date: "2024-04-05",
    event: "Employment Report (Mar '24)",
    actual: "303K",
    consensus: "200K",
    result: "Beat",
    btcPriceAfter24h: "-0.8%",
    nasdaqPriceAfter24h: "+1.2%",
    impactLevel: "Medium",
    note: "강한 경제가 기업 실적에 좋다는 해석으로 증시는 상승, 코인은 금리 부담에 횡보."
  },
  {
    date: "2024-04-10",
    event: "CPI (Mar '24, YoY)",
    actual: "3.5%",
    consensus: "3.4%",
    result: "Bad",
    btcPriceAfter24h: "-4.2%",
    nasdaqPriceAfter24h: "-0.8%",
    impactLevel: "Extreme",
    note: "3개월 연속 서프라이즈. 금리 인하 기대 6월->9월로 급격히 후퇴."
  },
  {
    date: "2024-04-11",
    event: "PPI (Mar '24, YoY)",
    actual: "2.1%",
    consensus: "2.2%",
    result: "Good",
    btcPriceAfter24h: "+1.2%",
    nasdaqPriceAfter24h: "+1.7%",
    impactLevel: "Medium",
    note: "PPI가 예상보다 낮게 나와 전일 CPI 충격 일부 만회."
  },
  {
    date: "2024-04-26",
    event: "PCE (Mar '24, YoY)",
    actual: "2.7%",
    consensus: "2.6%",
    result: "Bad",
    btcPriceAfter24h: "-1.5%",
    nasdaqPriceAfter24h: "+2.0%",
    impactLevel: "Medium",
    note: "물가 정체 확인되었으나 빅테크 실적이 시장 지배."
  },
  {
    date: "2024-05-01",
    event: "FOMC Meeting",
    actual: "5.50%",
    consensus: "5.50%",
    result: "Neutral",
    btcPriceAfter24h: "+3.2%",
    nasdaqPriceAfter24h: "-0.3%",
    impactLevel: "High",
    note: "파월이 '다음 움직임이 인상은 아닐 것'이라 못 박으며 안도감 형성."
  },
  {
    date: "2024-05-03",
    event: "Employment Report (Apr '24)",
    actual: "175K",
    consensus: "243K",
    result: "Miss",
    btcPriceAfter24h: "+6.5%",
    nasdaqPriceAfter24h: "+1.9%",
    impactLevel: "High",
    note: "골디락스(적당한 둔화) 부활. 자산 시장 일제히 반등."
  },
  {
    date: "2024-05-14",
    event: "PPI (Apr '24, YoY)",
    actual: "2.2%",
    consensus: "2.2%",
    result: "Match",
    btcPriceAfter24h: "-2.3%",
    nasdaqPriceAfter24h: "+0.7%",
    impactLevel: "Medium"
  },
  {
    date: "2024-05-15",
    event: "CPI (Apr '24, YoY)",
    actual: "3.4%",
    consensus: "3.4%",
    result: "Good",
    btcPriceAfter24h: "+7.5%",
    nasdaqPriceAfter24h: "+1.4%",
    impactLevel: "High",
    note: "물가 상승세 둔화 재확인. 비트코인 66k 회복."
  },
  {
    date: "2024-05-31",
    event: "PCE (Apr '24, YoY)",
    actual: "2.7%",
    consensus: "2.7%",
    result: "Match",
    btcPriceAfter24h: "+1.2%",
    nasdaqPriceAfter24h: "-0.0%",
    impactLevel: "Low",
    note: "변동성 제한적."
  },
  {
    date: "2024-06-07",
    event: "Employment Report (May '24)",
    actual: "272K",
    consensus: "185K",
    result: "Beat",
    btcPriceAfter24h: "-2.1%",
    nasdaqPriceAfter24h: "-0.2%",
    impactLevel: "High",
    note: "다시 뜨거운 고용. 금리 인하 기대감 후퇴."
  },
  {
    date: "2024-06-12",
    event: "CPI (May '24, YoY)",
    actual: "3.3%",
    consensus: "3.4%",
    result: "Good",
    btcPriceAfter24h: "+3.8%",
    nasdaqPriceAfter24h: "+1.5%",
    impactLevel: "Extreme",
    note: "인플레 둔화 명확한 신호. 같은 날 FOMC 점도표 악재를 상쇄."
  },
  {
    date: "2024-06-12",
    event: "FOMC Meeting",
    actual: "5.50%",
    consensus: "5.50%",
    result: "Bad",
    btcPriceAfter24h: "N/A",
    nasdaqPriceAfter24h: "N/A",
    impactLevel: "High",
    note: "점도표는 매파적이었으나 파월이 '지표 의존적'이라며 완화적 태도 보임."
  },
  {
    date: "2024-06-13",
    event: "PPI (May '24, YoY)",
    actual: "2.2%",
    consensus: "2.5%",
    result: "Good",
    btcPriceAfter24h: "-1.5%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Medium"
  },
  {
    date: "2024-06-28",
    event: "PCE (May '24, YoY)",
    actual: "2.6%",
    consensus: "2.6%",
    result: "Good",
    btcPriceAfter24h: "+1.0%",
    nasdaqPriceAfter24h: "-0.7%",
    impactLevel: "Medium",
    note: "인플레 둔화 추세 지속."
  },
  {
    date: "2024-07-05",
    event: "Employment Report (Jun '24)",
    actual: "206K",
    consensus: "190K",
    result: "Mixed",
    btcPriceAfter24h: "-1.5%",
    nasdaqPriceAfter24h: "+0.9%",
    impactLevel: "Medium",
    note: "고용 둔화 징후 뚜렷. 금리 인하 기대감 상승."
  },
  {
    date: "2024-07-11",
    event: "CPI (Jun '24, YoY)",
    actual: "3.0%",
    consensus: "3.1%",
    result: "Good",
    btcPriceAfter24h: "+1.4%",
    nasdaqPriceAfter24h: "-1.9%",
    impactLevel: "High",
    note: "나스닥 급락은 금리 인하 확신에 따른 중소형주로의 자금 이동 때문."
  },
  {
    date: "2024-07-12",
    event: "PPI (Jun '24, YoY)",
    actual: "2.6%",
    consensus: "2.3%",
    result: "Bad",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.6%",
    impactLevel: "Low"
  },
  {
    date: "2024-07-26",
    event: "PCE (Jun '24, YoY)",
    actual: "2.5%",
    consensus: "2.5%",
    result: "Match",
    btcPriceAfter24h: "+3.2%",
    nasdaqPriceAfter24h: "+1.0%",
    impactLevel: "Medium"
  },
  {
    date: "2024-07-31",
    event: "FOMC Meeting",
    actual: "5.50%",
    consensus: "5.50%",
    result: "Good",
    btcPriceAfter24h: "-0.8%",
    nasdaqPriceAfter24h: "+2.6%",
    impactLevel: "High",
    note: "사실상 피벗(전환) 선언."
  },
  {
    date: "2024-08-02",
    event: "Employment Report (Jul '24)",
    actual: "114K",
    consensus: "175K",
    result: "Shock (Miss)",
    btcPriceAfter24h: "-5.2%",
    nasdaqPriceAfter24h: "-2.4%",
    impactLevel: "Extreme",
    note: "샴의 법칙 발동 우려. '나쁜 뉴스는 나쁜 뉴스'로 시장 반응 변화."
  },
  {
    date: "2024-08-13",
    event: "PPI (Jul '24, YoY)",
    actual: "2.2%",
    consensus: "2.3%",
    result: "Good",
    btcPriceAfter24h: "+2.5%",
    nasdaqPriceAfter24h: "+2.4%",
    impactLevel: "Medium"
  },
  {
    date: "2024-08-14",
    event: "CPI (Jul '24, YoY)",
    actual: "2.9%",
    consensus: "3.0%",
    result: "Good",
    btcPriceAfter24h: "-3.5%",
    nasdaqPriceAfter24h: "+0.0%",
    impactLevel: "Medium",
    note: "인플레 둔화는 확인되었으나 경기 침체 우려가 상존."
  },
  {
    date: "2024-08-30",
    event: "PCE (Jul '24, YoY)",
    actual: "2.5%",
    consensus: "2.6%",
    result: "Good",
    btcPriceAfter24h: "-0.9%",
    nasdaqPriceAfter24h: "+1.1%",
    impactLevel: "Low"
  },
  {
    date: "2024-09-06",
    event: "Employment Report (Aug '24)",
    actual: "142K",
    consensus: "160K",
    result: "Miss",
    btcPriceAfter24h: "-3.8%",
    nasdaqPriceAfter24h: "-2.5%",
    impactLevel: "High",
    note: "경기 둔화 우려 지속으로 하락."
  },
  {
    date: "2024-09-11",
    event: "CPI (Aug '24, YoY)",
    actual: "2.5%",
    consensus: "2.6%",
    result: "Good",
    btcPriceAfter24h: "-0.5%",
    nasdaqPriceAfter24h: "+2.1%",
    impactLevel: "Medium"
  },
  {
    date: "2024-09-12",
    event: "PPI (Aug '24, YoY)",
    actual: "1.7%",
    consensus: "1.8%",
    result: "Good",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+1.0%",
    impactLevel: "Low"
  },
  {
    date: "2024-09-18",
    event: "FOMC Meeting",
    actual: "5.00%",
    consensus: "5.00% (50bp Cut)",
    result: "Beat/Good",
    btcPriceAfter24h: "+6.1%",
    nasdaqPriceAfter24h: "+1.7%",
    impactLevel: "Extreme",
    note: "연준의 선제적 대응(빅컷)에 시장 환호."
  },
  {
    date: "2024-09-27",
    event: "PCE (Aug '24, YoY)",
    actual: "2.2%",
    consensus: "2.3%",
    result: "Good",
    btcPriceAfter24h: "+1.5%",
    nasdaqPriceAfter24h: "-0.4%",
    impactLevel: "Low"
  },
  {
    date: "2024-10-04",
    event: "Employment Report (Sep '24)",
    actual: "254K",
    consensus: "140K",
    result: "Beat",
    btcPriceAfter24h: "+2.2%",
    nasdaqPriceAfter24h: "+1.2%",
    impactLevel: "High",
    note: "'노 랜딩(No Landing)' 시나리오 부상. 경기 호조가 호재로 작용."
  },
  {
    date: "2024-10-10",
    event: "CPI (Sep '24, YoY)",
    actual: "2.4%",
    consensus: "2.3%",
    result: "Mixed",
    btcPriceAfter24h: "-2.1%",
    nasdaqPriceAfter24h: "-0.1%",
    impactLevel: "Medium"
  },
  {
    date: "2024-10-11",
    event: "PPI (Sep '24, YoY)",
    actual: "1.8%",
    consensus: "1.6%",
    result: "Mixed",
    btcPriceAfter24h: "+1.0%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2024-10-31",
    event: "PCE (Sep '24, YoY)",
    actual: "2.1%",
    consensus: "2.1%",
    result: "Match",
    btcPriceAfter24h: "-1.5%",
    nasdaqPriceAfter24h: "-2.7%",
    impactLevel: "Medium"
  },
  {
    date: "2024-11-01",
    event: "Employment Report (Oct '24)",
    actual: "12K",
    consensus: "113K",
    result: "Shock (Miss)",
    btcPriceAfter24h: "-0.5%",
    nasdaqPriceAfter24h: "+0.8%",
    impactLevel: "Low",
    note: "일시적 요인으로 인한 쇼크로 해석되어 시장 영향 제한적."
  },
  {
    date: "2024-11-07",
    event: "FOMC Meeting",
    actual: "4.75%",
    consensus: "4.75% (25bp Cut)",
    result: "Match",
    btcPriceAfter24h: "+9.0%",
    nasdaqPriceAfter24h: "+1.5%",
    impactLevel: "Extreme",
    note: "대선 불확실성 해소 + 금리 인하 시너지."
  },
  {
    date: "2024-11-13",
    event: "CPI (Oct '24, YoY)",
    actual: "2.6%",
    consensus: "2.6%",
    result: "Match",
    btcPriceAfter24h: "+4.1%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "High",
    note: "인플레 불확실성 해소되며 코인 랠리 지속."
  },
  {
    date: "2024-11-14",
    event: "PPI (Oct '24, YoY)",
    actual: "2.4%",
    consensus: "2.3%",
    result: "Mixed",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "-0.6%",
    impactLevel: "Low"
  },
  {
    date: "2024-11-27",
    event: "PCE (Oct '24, YoY)",
    actual: "2.3%",
    consensus: "2.3%",
    result: "Match",
    btcPriceAfter24h: "+2.5%",
    nasdaqPriceAfter24h: "-0.6%",
    impactLevel: "Medium"
  },
  {
    date: "2024-12-06",
    event: "Employment Report (Nov '24)",
    actual: "215K",
    consensus: "200K",
    result: "Beat",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Medium",
    note: "고용 시장 안정 확인."
  },
  {
    date: "2024-12-11",
    event: "CPI (Nov '24, YoY)",
    actual: "2.7%",
    consensus: "2.7%",
    result: "Match",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "-0.6%",
    impactLevel: "Medium"
  },
  {
    date: "2024-12-12",
    event: "PPI (Nov '24, YoY)",
    actual: "2.5%",
    consensus: "2.5%",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2024-12-18",
    event: "FOMC Meeting",
    actual: "4.50%",
    consensus: "4.50% (25bp Cut)",
    result: "Mixed",
    btcPriceAfter24h: "-2.8%",
    nasdaqPriceAfter24h: "-0.9%",
    impactLevel: "High",
    note: "내년 인하 속도 조절 시사에 실망 매물."
  },
  {
    date: "2024-12-20",
    event: "PCE (Nov '24, YoY)",
    actual: "2.4%",
    consensus: "2.4%",
    result: "Match",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Low"
  },
  {
    date: "2025-01-10",
    event: "Employment Report (Dec '24)",
    actual: "119K",
    consensus: "150K",
    result: "Miss",
    btcPriceAfter24h: "-1.5%",
    nasdaqPriceAfter24h: "-0.5%",
    impactLevel: "Medium"
  },
  {
    date: "2025-01-15",
    event: "CPI (Dec '24, YoY)",
    actual: "2.9%",
    consensus: "3.0%",
    result: "Good",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Medium"
  },
  {
    date: "2025-01-16",
    event: "PPI (Dec '24, YoY)",
    actual: "2.2%",
    consensus: "2.4%",
    result: "Good",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Low"
  },
  {
    date: "2025-01-29",
    event: "FOMC Meeting",
    actual: "4.50%",
    consensus: "4.50% (Freeze)",
    result: "Neutral",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "-0.5%",
    impactLevel: "Medium"
  },
  {
    date: "2025-01-31",
    event: "PCE (Dec '24, YoY)",
    actual: "2.5%",
    consensus: "2.6%",
    result: "Good",
    btcPriceAfter24h: "+1.0%",
    nasdaqPriceAfter24h: "+0.8%",
    impactLevel: "Medium"
  },
  {
    date: "2025-02-07",
    event: "Employment Report (Jan '25)",
    actual: "185K",
    consensus: "160K",
    result: "Beat",
    btcPriceAfter24h: "-0.5%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-02-12",
    event: "CPI (Jan '25, YoY)",
    actual: "2.8%",
    consensus: "2.8%",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Low"
  },
  {
    date: "2025-02-13",
    event: "PPI (Jan '25, YoY)",
    actual: "2.0%",
    consensus: "2.1%",
    result: "Good",
    btcPriceAfter24h: "+0.3%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-02-28",
    event: "PCE (Jan '25, YoY)",
    actual: "2.4%",
    consensus: "2.5%",
    result: "Good",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+0.9%",
    impactLevel: "Medium"
  },
  {
    date: "2025-03-07",
    event: "Employment Report (Feb '25)",
    actual: "165K",
    consensus: "170K",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-03-12",
    event: "CPI (Feb '25, YoY)",
    actual: "2.7%",
    consensus: "2.7%",
    result: "Match",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+0.9%",
    impactLevel: "Medium"
  },
  {
    date: "2025-03-13",
    event: "PPI (Feb '25, YoY)",
    actual: "1.9%",
    consensus: "2.0%",
    result: "Good",
    btcPriceAfter24h: "+0.4%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Low"
  },
  {
    date: "2025-03-19",
    event: "FOMC Meeting",
    actual: "4.25%",
    consensus: "4.25% (25bp Cut)",
    result: "Match",
    btcPriceAfter24h: "+2.4%",
    nasdaqPriceAfter24h: "+1.1%",
    impactLevel: "High",
    note: "인하 재개."
  },
  {
    date: "2025-03-28",
    event: "PCE (Feb '25, YoY)",
    actual: "2.3%",
    consensus: "2.3%",
    result: "Match",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Low"
  },
  {
    date: "2025-04-04",
    event: "Employment Report (Mar '25)",
    actual: "228K",
    consensus: "137K",
    result: "Beat",
    btcPriceAfter24h: "-0.8%",
    nasdaqPriceAfter24h: "+0.6%",
    impactLevel: "Medium"
  },
  {
    date: "2025-04-10",
    event: "CPI (Mar '25, YoY)",
    actual: "2.6%",
    consensus: "2.6%",
    result: "Match",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Low"
  },
  {
    date: "2025-04-11",
    event: "PPI (Mar '25, YoY)",
    actual: "1.8%",
    consensus: "1.9%",
    result: "Good",
    btcPriceAfter24h: "+0.2%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-04-25",
    event: "PCE (Mar '25, YoY)",
    actual: "2.2%",
    consensus: "2.2%",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Low"
  },
  {
    date: "2025-05-02",
    event: "Employment Report (Apr '25)",
    actual: "177K",
    consensus: "138K",
    result: "Beat",
    btcPriceAfter24h: "-0.3%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Low"
  },
  {
    date: "2025-05-07",
    event: "FOMC Meeting",
    actual: "4.25%",
    consensus: "4.25% (Freeze)",
    result: "Neutral",
    btcPriceAfter24h: "-0.5%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Medium"
  },
  {
    date: "2025-05-14",
    event: "CPI (Apr '25, YoY)",
    actual: "2.4%",
    consensus: "2.5%",
    result: "Good",
    btcPriceAfter24h: "+1.5%",
    nasdaqPriceAfter24h: "+0.7%",
    impactLevel: "High"
  },
  {
    date: "2025-05-15",
    event: "PPI (Apr '25, YoY)",
    actual: "1.7%",
    consensus: "1.8%",
    result: "Good",
    btcPriceAfter24h: "+0.4%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-05-30",
    event: "PCE (Apr '25, YoY)",
    actual: "2.1%",
    consensus: "2.2%",
    result: "Good",
    btcPriceAfter24h: "+0.9%",
    nasdaqPriceAfter24h: "+0.6%",
    impactLevel: "Medium"
  },
  {
    date: "2025-06-06",
    event: "Employment Report (May '25)",
    actual: "139K",
    consensus: "126K",
    result: "Beat",
    btcPriceAfter24h: "+0.3%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-06-11",
    event: "CPI (May '25, YoY)",
    actual: "2.4%",
    consensus: "2.5%",
    result: "Good",
    btcPriceAfter24h: "+0.9%",
    nasdaqPriceAfter24h: "+0.6%",
    impactLevel: "Medium"
  },
  {
    date: "2025-06-12",
    event: "PPI (May '25, YoY)",
    actual: "1.7%",
    consensus: "1.7%",
    result: "Match",
    btcPriceAfter24h: "+0.2%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-06-18",
    event: "FOMC Meeting",
    actual: "4.25%",
    consensus: "4.25% (Freeze)",
    result: "Neutral",
    btcPriceAfter24h: "+0.8%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Medium"
  },
  {
    date: "2025-06-27",
    event: "PCE (May '25, YoY)",
    actual: "2.1%",
    consensus: "2.1%",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-07-03",
    event: "Employment Report (Jun '25)",
    actual: "147K",
    consensus: "111K",
    result: "Beat",
    btcPriceAfter24h: "+1.5%",
    nasdaqPriceAfter24h: "+0.8%",
    impactLevel: "Medium"
  },
  {
    date: "2025-07-15",
    event: "CPI (Jun '25, YoY)",
    actual: "2.7%",
    consensus: "2.6%",
    result: "Bad",
    btcPriceAfter24h: "-1.0%",
    nasdaqPriceAfter24h: "-0.3%",
    impactLevel: "Medium"
  },
  {
    date: "2025-07-16",
    event: "PPI (Jun '25, YoY)",
    actual: "2.3%",
    consensus: "2.5%",
    result: "Good",
    btcPriceAfter24h: "+0.4%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-07-30",
    event: "FOMC Meeting",
    actual: "4.25%",
    consensus: "4.25% (Freeze)",
    result: "Neutral",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+0.9%",
    impactLevel: "Medium"
  },
  {
    date: "2025-07-31",
    event: "PCE (Jun '25, YoY)",
    actual: "2.2%",
    consensus: "2.2%",
    result: "Match",
    btcPriceAfter24h: "+0.3%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-08-01",
    event: "Employment Report (Jul '25)",
    actual: "73K",
    consensus: "106K",
    result: "Miss",
    btcPriceAfter24h: "-1.2%",
    nasdaqPriceAfter24h: "-0.5%",
    impactLevel: "Medium",
    note: "고용 둔화 재개."
  },
  {
    date: "2025-08-12",
    event: "CPI (Jul '25, YoY)",
    actual: "2.7%",
    consensus: "2.8%",
    result: "Good",
    btcPriceAfter24h: "+1.2%",
    nasdaqPriceAfter24h: "+0.5%",
    impactLevel: "Medium"
  },
  {
    date: "2025-08-14",
    event: "PPI (Jul '25, YoY)",
    actual: "3.3%",
    consensus: "2.5%",
    result: "Bad",
    btcPriceAfter24h: "-2.0%",
    nasdaqPriceAfter24h: "-1.1%",
    impactLevel: "High"
  },
  {
    date: "2025-08-29",
    event: "PCE (Jul '25, YoY)",
    actual: "2.3%",
    consensus: "2.3%",
    result: "Match",
    btcPriceAfter24h: "+0.2%",
    nasdaqPriceAfter24h: "+0.1%",
    impactLevel: "Low"
  },
  {
    date: "2025-09-05",
    event: "Employment Report (Aug '25)",
    actual: "22K",
    consensus: "75K",
    result: "Shock (Miss)",
    btcPriceAfter24h: "+2.5%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "High",
    note: "고용 쇼크. 연준 금리 인하 압박 가중."
  },
  {
    date: "2025-09-10",
    event: "PPI (Aug '25, YoY)",
    actual: "2.6%",
    consensus: "3.3%",
    result: "Good",
    btcPriceAfter24h: "+1.1%",
    nasdaqPriceAfter24h: "+1.0%",
    impactLevel: "Medium"
  },
  {
    date: "2025-09-11",
    event: "CPI (Aug '25, YoY)",
    actual: "2.9%",
    consensus: "2.9%",
    result: "Match",
    btcPriceAfter24h: "-0.2%",
    nasdaqPriceAfter24h: "+0.1%",
    impactLevel: "Low"
  },
  {
    date: "2025-09-17",
    event: "FOMC Meeting",
    actual: "4.00%",
    consensus: "4.00% (25bp Cut)",
    result: "Match",
    btcPriceAfter24h: "+3.5%",
    nasdaqPriceAfter24h: "+1.3%",
    impactLevel: "High",
    note: "하반기 유동성 공급 재개."
  },
  {
    date: "2025-09-26",
    event: "PCE (Aug '25, YoY)",
    actual: "2.3%",
    consensus: "2.3%",
    result: "Match",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Low"
  },
  {
    date: "2025-10-24",
    event: "CPI (Sep '25, YoY)",
    actual: "3.0%",
    consensus: "3.1%",
    result: "Good",
    btcPriceAfter24h: "+0.7%",
    nasdaqPriceAfter24h: "+0.4%",
    impactLevel: "Medium"
  },
  {
    date: "2025-10-29",
    event: "FOMC Meeting",
    actual: "4.00%",
    consensus: "4.00% (Freeze)",
    result: "Neutral",
    btcPriceAfter24h: "-0.3%",
    nasdaqPriceAfter24h: "+0.1%",
    impactLevel: "Low"
  },
  {
    date: "2025-11-20",
    event: "Employment Report (Sep '25)",
    actual: "119K",
    consensus: "53K",
    result: "Beat",
    btcPriceAfter24h: "+3.1%",
    nasdaqPriceAfter24h: "+1.2%",
    impactLevel: "High",
    note: "예상 밖 호조."
  },
  {
    date: "2025-11-25",
    event: "PPI (Sep '25, YoY)",
    actual: "2.7%",
    consensus: "2.7%",
    result: "Match",
    btcPriceAfter24h: "+0.3%",
    nasdaqPriceAfter24h: "+0.2%",
    impactLevel: "Low"
  },
  {
    date: "2025-12-05",
    event: "PCE (Sep '25, YoY)",
    actual: "2.8%",
    consensus: "2.9%",
    result: "Good",
    btcPriceAfter24h: "+0.5%",
    nasdaqPriceAfter24h: "+0.3%",
    impactLevel: "Medium"
  },
  {
    date: "2025-12-10",
    event: "FOMC Meeting",
    actual: "Scheduled",
    consensus: "3.75% (25bp Cut Expected)",
    result: "Pending",
    btcPriceAfter24h: "Pending",
    nasdaqPriceAfter24h: "Pending",
    impactLevel: "Pending"
  },
  {
    date: "2025-12-16",
    event: "Employment Report (Nov '25)",
    actual: "Scheduled",
    consensus: "119K (Est)",
    result: "Pending",
    btcPriceAfter24h: "Pending",
    nasdaqPriceAfter24h: "Pending",
    impactLevel: "Pending"
  },
  {
    date: "2025-12-18",
    event: "CPI (Nov '25, YoY)",
    actual: "Scheduled",
    consensus: "3.0% (Est)",
    result: "Pending",
    btcPriceAfter24h: "Pending",
    nasdaqPriceAfter24h: "Pending",
    impactLevel: "Pending"
  }
];
