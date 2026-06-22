export enum PickStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  LIVE = 'Live',
  WON = 'Won',
  LOST = 'Lost',
  REFUNDED = 'Refunded'
}

export interface Comment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
}

export interface KalshiPick {
  id: string;
  marketTitle: string; // e.g. "Germany vs Ecuador"
  contractName: string; // e.g. "Germany Group Winner"
  contractTicker: string; // e.g. "GER-ECU-GROUP-WIN"
  recommendedEntry: string; // e.g. "Yes @ 78¢"
  currentPrice?: string; // e.g. "82¢"
  confidenceEdge: number; // e.g. 8.2 out of 10
  stars: number; // e.g. 4 (for 4 out of 5 stars)
  stakeUnits: number; // e.g. 3.5 (stake unit sizing)
  percentageBankroll: number; // e.g. 3.5%
  recommendedPosition: 'YES' | 'NO';
  isLiveAlert: boolean;
  timeLeft?: string; // e.g. "Starts in 2h 15m" or "2nd Half - 62'"
  matchDate: string;
  reasoningBrief: string;
  reasoningFull: string[];
  injuryNews?: string;
  winDiscrepancyReasoning: string; // Kalshi prediction market disparity against bookmakers
  comments: Comment[];
  status: PickStatus;
  outcomeReturn?: string; // e.g. "+$100.00" or "+3.5u" or "-3.5u"
  netReturnUnits?: number; // e.g. 2.73 or -3.5
}

export type SubscriptionTier = 'FREE' | 'WEEKLY' | 'TOURNAMENT_PASS';

export interface ResourceVaultItem {
  id: string;
  title: string;
  category: 'trading_guide' | 'bankroll_rules' | 'tournament_breakdown';
  readTime: string;
  summary: string;
  contentMarkdown: string;
}

export interface SubscriptionStatus {
  tier: SubscriptionTier;
  active: boolean;
  expiresAt?: string;
  joinedDate?: string;
}

export interface UserState {
  email: string;
  name: string;
  isLoggedIn: boolean;
  subscription: SubscriptionStatus;
  referredByCode?: string;
  referredUsersCount: number;
  referralEarningsUnits: number;
}
