import { KalshiPick, ResourceVaultItem, PickStatus } from './types';

export const SYSTEM_STATS = {
  overallUnits: '+187.4u',
  winRate: '68.2%',
  totalMembers: '26',
  settledPicksCount: '44',
  kalshiVolumeDriven: '1.2M+',
  currentTournamentStreak: '5 Wins',
  averageEdgePercent: '11.4%'
};

export const INITIAL_PICKS: KalshiPick[] = [
  // 1. Live In-Play Alert (extremely urgent, high value)
  {
    id: 'wc-live-01',
    marketTitle: 'France vs Uruguay',
    contractName: 'France to Win Match (In-Play)',
    contractTicker: 'FRA-URU-MATCH-WIN-YES',
    recommendedEntry: 'Yes @ 71¢',
    currentPrice: '74¢',
    confidenceEdge: 9.1,
    stars: 5,
    stakeUnits: 4.5,
    percentageBankroll: 4.5,
    recommendedPosition: 'YES',
    isLiveAlert: true,
    timeLeft: 'Live - 68th Minute (1-1)',
    matchDate: 'June 22, 2026',
    reasoningBrief: 'Uruguay midfielder Ugarte red carded at 64\'. France has increased attacking density and is generating 1.84 xG with Valverde subbed off. Kalshi market represents 71% probability, while dynamic bookmaker odds place France at -310 (implied 75.6%). Huge arbitrage discrepancy.',
    reasoningFull: [
      'Uruguay received a straight red card in the 64th minute for a tactical foul. France has consolidated possession from 48% to 68% in the last 10 minutes.',
      'Didier Deschamps immediately introduced dynamic speed by subbing on Kingsley Coman, stretching Uruguay\'s tired 10-man defense.',
      'Statistical modeling suggests France wins this scenario 76.5% of the time, yet the Kalshi Yes contract has only drifted slightly up to 71¢ (implied 71%). This is a massive 5.5% pure edge discrepancy.',
      'Action: Strong buy on France Yes up to 76¢ maximum entry.'
    ],
    injuryNews: 'Uruguay defender Jose Maria Gimenez carrying a yellow card; playing very cautiously.',
    winDiscrepancyReasoning: 'Traditional sportsbooks have France live odds at -310. Converting to probability gives 75.6%. Kalshi contract is lagging significantly behind, offering entry at 71¢ (71%). Get active immediately.',
    comments: [
      {
        id: 'c1',
        authorName: 'AlphaKing_99',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        content: 'Grabbed some contracts at 71¢ right as the red card happened. Instant edge!',
        timestamp: '12 minutes ago'
      },
      {
        id: 'c2',
        authorName: 'BetQuant_W',
        authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
        content: 'Arbitrage is locked in. Traditional bookies already closed live bets but Kalshi is wide open.',
        timestamp: '9 minutes ago'
      }
    ],
    status: PickStatus.LIVE
  },

  // 2. Today's Upcoming Pick (Germany vs Ecuador)
  {
    id: 'wc-today-01',
    marketTitle: 'Germany vs Ecuador',
    contractName: 'Germany Group A Winner',
    contractTicker: 'GER-ECU-GROUPA-YES',
    recommendedEntry: 'Yes @ 78¢',
    currentPrice: '79¢',
    confidenceEdge: 8.5,
    stars: 4,
    stakeUnits: 3.5,
    percentageBankroll: 3.5,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    timeLeft: 'Starts in 4h 30m',
    matchDate: 'June 22, 2026',
    reasoningBrief: 'Germany needs a draw or win to secure top spot. Ecuador lacks tactical depth on counter-press. German midfield control is highly predictive of maintaining defensive stability. Bookmaker correlation aligns with a 83% likely outcome.',
    reasoningFull: [
      'Germany is currently on 6 points in Group A, with Ecuador at 3. The current squad sheet confirms Germany is starting their optimal XI, seeking to lock down first-seed avoiding Argentina in the round of 16.',
      'Ecuador\'s defensive transitions have been weak against high mid-block pressure. Germany\'s central trio (Wirtz, Musiala, Kroos) has registered a pass completion rate of 92.4% over their previous two matches.',
      'Kalshi price is trading at 78¢, representing a 78% implied likelihood. Bookmaker moneyline odds translate to a true 84% probability of Germany drawing or winning to solidify Group Winner status (as they hold a +4 goal difference).',
      'This presents a steady, low-variance 6% expected value (EV) play designed for larger unit stakes.'
    ],
    injuryNews: 'Ecaudor\'s lead striker Enner Valencia suffered minor knee swelling in training; listed to start but expected to play under 75 minutes.',
    winDiscrepancyReasoning: 'Standard prediction modeling points to a true probability of 84.5% for Germany securing first place based on current goal differential safety nets. Kalshi YES contracts at 78¢ provide extreme margin of safety.',
    comments: [
      {
        id: 'c3',
        authorName: 'Vegas_Leaker',
        authorAvatar: 'https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&w=100&q=80',
        content: 'This feels incredibly safe given the goal differential cushion. Loaded up heavy.',
        timestamp: '2 hours ago'
      }
    ],
    status: PickStatus.ACTIVE
  },

  // 3. Today's Player Prop Pick (Argentina vs South Korea - Messi Over)
  {
    id: 'wc-today-02',
    marketTitle: 'Argentina vs South Korea',
    contractName: 'Lionel Messi Over 1.5 Shots on Target',
    contractTicker: 'ARG-KOR-MESSI-SOT-OVER',
    recommendedEntry: 'Yes @ 65¢',
    currentPrice: '67¢',
    confidenceEdge: 8.0,
    stars: 4,
    stakeUnits: 3.0,
    percentageBankroll: 3.0,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    timeLeft: 'Starts in 9h 15m',
    matchDate: 'June 23, 2026',
    reasoningBrief: 'Messi playing a central CF role rather than deeper creative playmaker today. South Korea playing a low block block, resulting in direct shot attempts around the 18-yard box. Historical average of 2.1 shots on target per 90 against Asian opposition.',
    reasoningFull: [
      'Tactical intelligence leak: Lionel Messi will feature prominently as an out-and-out forward instead of dropping deep into the build-up phase, as Scaloni wants to unlock the Korean defense quickly.',
      'South Korea\'s defense tends to drop back deeply, conceding space just outside the box. This is Messi\'s premier zone for long-range curling attempts.',
      'Over his last 12 competitive internationals, Messi has averaged 2.4 Shots on Target when facing low-block setups.',
      'Vegas props list this around -185 (implies 64.9%). However, Kalshi contracts have lag-liquidity, trading underpriced at 65¢ compared to our proprietary model valuation of 73¢.'
    ],
    injuryNews: 'No physical limitations reported. Fully fit after being rested in last 30 minutes of last match.',
    winDiscrepancyReasoning: 'Kalshi order book reflects general community expectation, but does not capture Scalorii\'s tactical adjustments towards high-shot volume strategies inside zone 14. Real premium alpha.',
    comments: [],
    status: PickStatus.ACTIVE
  },

  // 4. Group Stage Outright Pick (USA vs Netherlands - USA to Advance)
  {
    id: 'wc-today-03',
    marketTitle: 'Group B Final Matchday',
    contractName: 'USA to Advance to Knockout Rounds',
    contractTicker: 'USA-STAGE-ADVANCE-YES',
    recommendedEntry: 'Yes @ 61¢',
    currentPrice: '62¢',
    confidenceEdge: 7.8,
    stars: 3,
    stakeUnits: 2.5,
    percentageBankroll: 2.5,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    timeLeft: 'Starts in 27h',
    matchDate: 'June 23, 2026',
    reasoningBrief: 'USA needs dynamic transitions to overcome Group B. Positive home crowd pressure and rapid squad speed will overwhelm opponents on counter attacks. Crucial arbitrage opportunity vs traditional Vegas sportsbooks.',
    reasoningFull: [
      'The United States Men\'s National Team is hosting the 2026 World Cup with historic home-court advantages. The dynamic trio of Pulisic, Reyna, and Balogun is hitting peak sprint ratings.',
      'Group B dynamics play directly to USA\'s favor. Under current permutations, a simple victory guarantees progression, while even a draw matches advancement requirements depending on goals conceded.',
      'Model quant projections imply absolute advancement at 69%, far above the 61¢ Kalshi listing.'
    ],
    injuryNews: 'Sergino Dest is fully cleared and returned to team workouts. McKennie recovered from quad tightness.',
    winDiscrepancyReasoning: 'Kalshi crowd sentiment is currently overly bearish due to the previous draw, creating massive value for savvy sports prediction traders.',
    comments: [],
    status: PickStatus.PENDING
  },

  // HISTORICAL ARCHIVE PICKS (Settled)
  {
    id: 'wc-hist-01',
    marketTitle: 'Brazil vs Poland',
    contractName: 'Brazil Over 2.5 Team Goals',
    contractTicker: 'BRA-POL-TEAMGOALS-OVER',
    recommendedEntry: 'Yes @ 64¢',
    confidenceEdge: 8.8,
    stars: 4,
    stakeUnits: 3.5,
    percentageBankroll: 3.5,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    matchDate: 'June 19, 2026',
    reasoningBrief: 'Brazil tactical speed vs slow Polish center backs. Poland was already eliminated and playing low-incentive squad rotations.',
    reasoningFull: ['Settled Win. Brazil scored 3 goals within 58 minutes. Ultimate blowout.'],
    winDiscrepancyReasoning: 'Bookies priced Brazil Over 2.5 as high-edge favorite, while Kalshi retail liquidity panicked and priced Yes contracts at a bargain 64¢.',
    comments: [],
    status: PickStatus.WON,
    outcomeReturn: '+$225.00',
    netReturnUnits: 3.5
  },
  {
    id: 'wc-hist-02',
    marketTitle: 'Spain vs Morocco',
    contractName: 'Spain Total Match Possession Over 62.5%',
    contractTicker: 'ESP-MAR-POSS-OVER',
    recommendedEntry: 'Yes @ 75¢',
    confidenceEdge: 9.3,
    stars: 5,
    stakeUnits: 5.0,
    percentageBankroll: 5.0,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    matchDate: 'June 18, 2026',
    reasoningBrief: 'Morocco head coach confirmed defensive low block posture. Spain tiki-taka game plan guarantees high recycle and passive possession dominance.',
    reasoningFull: ['Spain registered 67.4% possession. Extremely high margin of victory.'],
    winDiscrepancyReasoning: 'No brainer contract. Spain never gets under 63% possession against defensive low blocks.',
    comments: [],
    status: PickStatus.WON,
    outcomeReturn: '+$333.33',
    netReturnUnits: 5.0
  },
  {
    id: 'wc-hist-03',
    marketTitle: 'Italy vs Canada',
    contractName: 'Under 1.5 Total First Half Goals',
    contractTicker: 'ITA-CAN-FIRSTHALF-UNDER',
    recommendedEntry: 'Yes @ 70¢',
    confidenceEdge: 7.2,
    stars: 3,
    stakeUnits: 2.0,
    percentageBankroll: 2.0,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    matchDate: 'June 17, 2026',
    reasoningBrief: 'Italy tactical setup focusing on defensive rigidness. Canada playing compact defensively to avoid conceding early.',
    reasoningFull: ['First half settled 0-0. Quick cash.'],
    winDiscrepancyReasoning: 'Kalshi retail bettors expected rapid Canada counter attacks, betting up the over contract and cheapening our high-value under.',
    comments: [],
    status: PickStatus.WON,
    outcomeReturn: '+$142.80',
    netReturnUnits: 2.0
  },
  {
    id: 'wc-hist-04',
    marketTitle: 'England vs Cameroon',
    contractName: 'England Match Corners Over 6.5',
    contractTicker: 'ENG-CAM-CORNERS-OVER',
    recommendedEntry: 'Yes @ 68¢',
    confidenceEdge: 8.4,
    stars: 4,
    stakeUnits: 4.0,
    percentageBankroll: 4.0,
    recommendedPosition: 'YES',
    isLiveAlert: false,
    matchDate: 'June 15, 2026',
    reasoningBrief: 'England wingers (Saka/Foden) drive deep to the touchline, creating high deflection rates.',
    reasoningFull: ['England ended with 5 corners. Tactical adjustments restricted deep wing play.'],
    winDiscrepancyReasoning: 'Failed to convert attacking build-ups to set pieces.',
    comments: [],
    status: PickStatus.LOST,
    outcomeReturn: '-$400.00',
    netReturnUnits: -4.0
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    user: '@KalshiChad',
    followers: '14.2K Followers',
    quote: 'World Picks is basically printing money on Kalshi right now. They highlight contracts that lag behind Vegas bookie lines by 5-10%. Easy arb.'
  },
  {
    id: 't2',
    user: '@PropGod_Bets',
    followers: '5.6K Followers',
    quote: '+114 units since Group stage kickoff. The Live/In-Play alerts in Discord are absolutely elite during concurrent matches.'
  },
  {
    id: 't3',
    user: '@VegasQuant26',
    followers: '22.8K Followers',
    quote: 'I traded the Germany Group Outright YES contract at 78¢ because of their statistical breakdown. Bookmakers were offering -350. Best sports prediction site in the game.'
  }
];

export const RESOURCE_VAULT: ResourceVaultItem[] = [
  {
    id: 'res-01',
    title: 'Kalshi Prediction Trading vs Traditional Sports Betting: The 2026 Arbitrage Method',
    category: 'trading_guide',
    readTime: '6 min read',
    summary: 'Learn how to spot and exploit instant price-gaps between standard sportsbooks like DraftKings/Fanduel and the Kalshi Prediction Markets to extract pure mathematical edge.',
    contentMarkdown: `### Exploiting Imperfect Liquidity on prediction platforms

The Kalshi Prediction Market represents one of the most exciting innovations in modern sports trading for the 2026 World Cup. However, because it is an exchange order-book driven by retail traders rather than automated European market makers, there is significant **liquidity lag**.

When an event occurs—such as a key card, team sheet publication, or tactical shift:
1. **Sportsbooks** adjust their odds immediately via automated mathematical feeds.
2. **Kalshi contracts** often remain stale for minutes because individual retail sellers must manually repricetheir limit orders on the book.

#### The Step-by-Step Arbitrage Formula

$$\\text{Bookie Implied Probability} = \\frac{100}{\\text{American Odds} + 100} \\times 100$$

- If DraftKings lists the match favorite at **-300**, the implied win probability is **75%**.
- If the corresponding Kalshi contract is trading at **68¢**, it represents an implied likelihood of **68%**.
- Buying the Yes contract at **68¢** yields a massive **+7% raw expectation arbitrage**.

Our platform constantly scans both markets and fires alerts when this exact threshold is exceeded. Use this guide to structure your trading ledger.`
  },
  {
    id: 'res-02',
    title: 'The Kelly Criterion & Bankroll Management for Kalshi Contracts',
    category: 'bankroll_rules',
    readTime: '4 min read',
    summary: 'A mathematical formula designed to preserve betting capital while compounding gains. Learn why sports prediction markets favor tactical staking rather than blind flat bets.',
    contentMarkdown: `### Preserving & Compounding Capital on Kalshi

Successful sports prediction trading is only 30% analytics; the remaining 70% is math-driven stake distribution.

#### Understanding the 10-Point Unit System
At **World Picks Alpha**, we measure recommendations in **Units (u)**:
- **1 Unit** = 1% of your designated trading bankroll.
- **Max Play** = 5 Units (5% bankroll). Never under any circumstances allocate more than 5% to a single contract.

#### The Staking Matrix
| Confidence Rating | Staking Guideline | Recommended Assets |
| :--- | :--- | :--- |
| ★★★☆☆ (7.5-8.0) | 1.0u to 2.5u | Outright permuntations & heavy favorites |
| ★★★★☆ (8.1-8.9) | 2.5u to 4.0u | Player props & Live match arb contracts |
| ★★★★★ (9.0-10) | 4.0u to 5.0u | Premium certified lock (arbitrage exceeds 8%) |

By maintaining rigid discipline on unit-sizing, drawdown periods are statistically guaranteed to remain manageable, while profit periods compound rapidly.`
  },
  {
    id: 'res-03',
    title: '2026 World Cup Knockout Stage Simulation Model & Predicted Permutations',
    category: 'tournament_breakdown',
    readTime: '8 min read',
    summary: 'Our proprietary quantitative model ran 50,000 simulations of the Group Stage matches. Here are the 4 teams facing significant valuation bubbles in the Kalshi outrights.',
    contentMarkdown: `### Behind-The-Scenes Outright Permutations

This resource is available to **Tournament Pass** subscribers. It contains our complete code-mode simulations showing where the public is mispricing team progressions.

#### Underpriced Contenders to Buy Now:
1. **Germany Outrights (Currently 78¢ to Win Group)**: Our projections place them at 86.4% to finish first. Buy anything under 82¢.
2. **USA Advancement (Currently 61¢)**: Public has overreacted to earlier defensive miscues. High recovery metrics indicate a 71% progression frequency.

#### Overvalued Favorites to Short (Buy NO):
1. **England Outrights**: Trading at premium 82¢, but bracket simulations show high vulnerability against potential French quarterfinal matchups. Short anything above 77¢.`
  }
];
