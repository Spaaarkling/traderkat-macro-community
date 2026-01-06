export const translations = {
  en: {
    nav: { title: "TraderCat Macro", history: "History", chat: "Chat" },
    dashboard: {
      pastEvents: "Past Events",
      currentContext: "Current Context",
      marketContext: "Market Context",
      product: {
        whatChanged: "What Changed",
        whatChangedDesc: "Weekly shift detection",
        whyMatters: "Why it Matters",
        whyMattersDesc: "Impact on your portfolio",
        nextChecks: "Next Checks",
        nextChecksDesc: "Actionable look-ahead"
      },
      triggers: "Triggers",
      upcoming: "Upcoming Event",
      scenarios: "Scenarios",
      consensus: "Consensus",
      now: "Now",
      voting: {
        title: "What do traders think?",
        voted: "Voted!",
        participants: "participants",
        optionHigh: "Bad (High) 🐻",
        optionMatch: "Neutral 😐",
        optionLow: "Good (Low) 🚀"
      },
      fedMonitor: {
        title: "Next FOMC (March 20)",
        freeze: "Freeze",
        cut: "Cut",
        probability: "Cut Prob.",
        insight: "Fed's Goal: 4.6% vs Market: 4.0%"
      },
      signals: {
        matrix: "Macro Signals Matrix",
        live: "Live Monitoring",
        conf: "Conf",
        experts: "Experts",
        consensus: "Consensus",
        titles: {
          policy: "Monetary Policy",
          liquidity: "Global Liquidity",
          inflation: "Inflation Outlook",
          growth: "Economic Growth",
          risk: "Risk Sentiment"
        },
        states: {
          bullish: "Bullish",
          bearish: "Bearish",
          neutral: "Neutral"
        }
      },
      detail: {
        deepDive: "Deep Dive",
        expertConsensus: "Expert Consensus",
        topDrivers: "Top Drivers",
        whatChanged: "What Changed",
        whatWouldChangeMind: "What would change our mind",
        nextChecks: "Next Checks"
      },
      expert: {
        viewpoint: "Expert Viewpoint",
        keyDrivers: "Key Drivers",
        whatWouldChangeMind: "What would change my mind",
        nextChecks: "Next Checks",
        roles: {
          macroeconomist: "Macro",
          rates: "Rates",
          fx: "FX",
          risk: "Risk",
          crypto: "Crypto"
        }
      },
      logic: {
        label: "Why?",
        analystNote: "Analyst Note"
      },
      data: {
        upcoming: {
          name: "PPI (Producer Price Index)",
          consensus: "2.3%"
        },
        caseA: {
          condition: "High > 2.5%",
          outcome: "Total Panic",
          target: "BTC $78k (Crash)",
          logic: "Inflation is getting hot again. No rate cuts = Bad for Crypto."
        },
        caseB: {
          condition: "Match 2.2~2.4%",
          outcome: "Uncertainty Continues",
          target: "BTC $85k (Chop)",
          logic: "Market is unsure. Waiting for the next big catalyst (FOMC)."
        },
        caseC: {
          condition: "Low < 2.1%",
          outcome: "Relief Rally",
          target: "BTC $92k (Bounce)",
          logic: "Inflation is cooling! Fed might cut rates sooner. Good for Crypto."
        }
      }
    },
    timeline: {
      title: "Market Timeline: Impact Analysis",
      filterAll: "All",
      impact24h: "24h Impact",
      noteLabel: "Analyst Note",
      impactLevel: "Impact Level"
    },
    chat: {
      title: "TraderCat Lounge",
      online: "Online",
      placeholder: "Type a message..."
    }
  },
  ko: {
    nav: { title: "트레이더캣 매크로", history: "히스토리", chat: "채팅" },
    dashboard: {
      pastEvents: "지난 지표",
      currentContext: "현재 시장 상황",
      marketContext: "시장 컨텍스트",
      product: {
        whatChanged: "변경된 점",
        whatChangedDesc: "주간 변화 감지",
        whyMatters: "중요한 이유",
        whyMattersDesc: "포트폴리오 영향 분석",
        nextChecks: "다음 체크 포인트",
        nextChecksDesc: "향후 전망 및 대응"
      },
      triggers: "트리거",
      upcoming: "다가올 지표",
      scenarios: "시나리오 분석",
      consensus: "예상치",
      now: "진행 중",
      voting: {
        title: "트레이더들의 예상은?",
        voted: "투표 완료!",
        participants: "명 참여",
        optionHigh: "악재 (High) 🐻",
        optionMatch: "부합 (Match) 😐",
        optionLow: "호재 (Low) 🚀"
      },
      fedMonitor: {
        title: "다음 FOMC (3월 20일)",
        freeze: "동결",
        cut: "인하",
        probability: "인하 확률",
        insight: "연준 목표: 4.6% vs 시장: 4.0%"
      },
      signals: {
        matrix: "매크로 시그널 매트릭스",
        live: "실시간 모니터링",
        conf: "신뢰도",
        experts: "전문가",
        consensus: "컨센서스",
        titles: {
          policy: "통화 정책",
          liquidity: "글로벌 유동성",
          inflation: "인플레이션 전망",
          growth: "경제 성장",
          risk: "리스크 심리"
        },
        states: {
          bullish: "강세 (Bullish)",
          bearish: "약세 (Bearish)",
          neutral: "중립 (Neutral)"
        }
      },
      detail: {
        deepDive: "심층 분석",
        expertConsensus: "전문가 컨센서스",
        topDrivers: "주요 동인",
        whatChanged: "변경된 점",
        whatWouldChangeMind: "관점 변경 요인",
        nextChecks: "다음 체크 포인트"
      },
      expert: {
        viewpoint: "전문가 의견",
        keyDrivers: "핵심 동인",
        whatWouldChangeMind: "내 생각이 바뀔 수 있는 조건",
        nextChecks: "다음 체크 포인트",
        roles: {
          macroeconomist: "거시경제",
          rates: "금리",
          fx: "환율",
          risk: "리스크",
          crypto: "크립토"
        }
      },
      logic: {
        label: "이유가 뭔가요?",
        analystNote: "💡 분석 노트"
      },
      data: {
        upcoming: {
          name: "PPI (생산자 물가지수)",
          consensus: "2.3%"
        },
        caseA: {
          condition: "상회 (> 2.5%)",
          outcome: "대혼란 (Panic)",
          target: "BTC $78k (폭락)",
          logic: "인플레가 다시 뜨거워집니다. 금리 인하 없음 = 악재."
        },
        caseB: {
          condition: "부합 (2.2~2.4%)",
          outcome: "불확실성 지속",
          target: "BTC $85k (횡보)",
          logic: "시장은 확신이 없습니다. 다음 트리거(FOMC)를 대기 중."
        },
        caseC: {
          condition: "하회 (< 2.1%)",
          outcome: "안도 랠리",
          target: "BTC $92k (반등)",
          logic: "인플레가 식고 있습니다! 조기 금리 인하 기대. 호재."
        }
      }
    },
    timeline: {
      title: "시장 타임라인: 가격 영향 분석",
      filterAll: "전체",
      impact24h: "24시간 변동",
      noteLabel: "분석 노트",
      impactLevel: "영향력"
    },
    chat: {
      title: "트레이더캣 라운지",
      online: "명 접속 중",
      placeholder: "메시지를 입력하세요..."
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = string;
