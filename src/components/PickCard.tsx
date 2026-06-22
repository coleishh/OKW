import React, { useState } from 'react';
import { Star, ShieldAlert, ChevronDown, ChevronUp, Lock, Send, AlertCircle, Plus } from 'lucide-react';
import { KalshiPick, PickStatus, Comment } from '../types';

interface PickCardProps {
  key?: string;
  pick: KalshiPick;
  isUnlocked: boolean;
  onUpgradeTrigger: () => void;
  onAddComment: (pickId: string, text: string) => void;
}

export default function PickCard({ pick, isUnlocked, onUpgradeTrigger, onAddComment }: PickCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < count ? 'text-amber-400 fill-amber-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    onAddComment(pick.id, newCommentText);
    setNewCommentText('');
  };

  const isLive = pick.status === PickStatus.LIVE;

  return (
    <div className={`relative overflow-hidden rounded-xl border transition-all ${
      isLive 
        ? 'border-brand-accent/50 bg-brand-dark-light/70 shadow-lg shadow-brand-accent/5' 
        : 'border-brand-border/60 bg-brand-dark-light/40 hover:border-brand-primary/40'
    }`}>
      
      {/* Live Badge banner */}
      {isLive && (
        <div className="bg-brand-accent text-brand-dark px-3 py-1 flex items-center justify-between text-[11px] font-black uppercase tracking-wider">
          <div className="flex items-center space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-danger animate-pulse" />
            <span>LIVE IN-PLAY ALPHA SIGNAL</span>
          </div>
          <span>{pick.timeLeft}</span>
        </div>
      )}

      {/* Main card content wrapper */}
      <div className="p-5">
        
        {/* Top meta strip */}
        <div className="flex items-center justify-between pb-3.5 border-b border-brand-border/40">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
              {pick.marketTitle}
            </span>
            <div className="flex items-center space-x-2 mt-0.5">
              <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded ${
                pick.recommendedPosition === 'YES' 
                  ? 'bg-brand-success/15 text-brand-success border border-brand-success/20' 
                  : 'bg-brand-danger/15 text-brand-danger border border-brand-danger/20'
              }`}>
                YES POSITION
              </span>
              <span className="text-xs text-gray-400 font-medium">Starts: {pick.timeLeft || 'Today'}</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex space-x-0.5">
              {renderStars(pick.stars)}
            </div>
            <span className="text-[10px] font-mono text-brand-accent mt-1 uppercase font-bold">
              Edge Rating: {pick.confidenceEdge}/10
            </span>
          </div>
        </div>

        {/* Lock Shield Overlay if non-unlocked */}
        {!isUnlocked ? (
          <div className="mt-4">
            {/* Blurred placeholder block */}
            <div className="filter blur-[4px] opacity-25 select-none pointer-events-none">
              <h3 className="text-xl font-bold text-white">Germany vs Canada Contract Spec</h3>
              <p className="font-mono text-sm text-brand-accent mt-0.5">GER-CAN-YES-WIN</p>
              <div className="mt-3 grid grid-cols-2 gap-3 rounded bg-brand-dark p-3">
                <div>
                  <p className="text-xs text-gray-400">Entry: Yes @ 74¢</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Stake: 4.5 Units</p>
                </div>
              </div>
            </div>

            {/* Premium CTA Gate */}
            <div className="mt-4 rounded-xl bg-brand-dark-light border border-brand-border/80 p-5 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/30 mb-3 text-brand-accent">
                <Lock className="h-4 w-4" />
              </div>
              <h4 className="text-sm font-bold uppercase text-white tracking-wider">Premium Access Required</h4>
              <p className="text-xs text-gray-400 mt-1.5 max-w-sm">
                Unlock active contract codes, exact Entry ticks, model percentages, and direct in-play signals.
              </p>
              <a
                href="http://t.me/WorldPicksAlpha"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-primary hover:bg-brand-primary/95 text-white text-xs font-extrabold uppercase py-2 px-5 tracking-wider transition-all cursor-pointer text-center"
              >
                Join The Group
              </a>
            </div>
          </div>
        ) : (
          /* Unlocked High-Detail Premium View */
          <div className="mt-4">
            
            {/* Target Spec Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-brand-accent uppercase block">KALSHI CONTRACT SPEC</span>
                <h3 className="text-xl font-bold text-white uppercase mt-0.5 tracking-tight">{pick.contractName}</h3>
                <code className="text-xs font-mono font-bold text-brand-primary bg-brand-dark px-1.5 py-0.5 rounded mt-1.5 inline-block">
                  {pick.contractTicker}
                </code>
              </div>

              {/* Numerical entry specs */}
              <div className="rounded-lg bg-brand-dark border border-brand-border p-3.5 flex flex-col min-w-[140px] items-center text-center">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Recommended Target</span>
                <span className="text-2xl font-black text-brand-accent tracking-tighter mt-1">{pick.recommendedEntry}</span>
                {pick.currentPrice && (
                  <span className="text-[10px] font-mono text-gray-500 mt-0.5">Current Order Book: {pick.currentPrice}</span>
                )}
              </div>
            </div>

            {/* Quick stats parameters */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded bg-brand-dark-light/50 border border-brand-border/40 p-2 text-center">
                <p className="text-[9px] font-mono text-gray-400 uppercase">STAKE SIZE</p>
                <p className="text-sm font-extrabold text-white">{pick.stakeUnits} Units</p>
              </div>
              <div className="rounded bg-brand-dark-light/50 border border-brand-border/40 p-2 text-center">
                <p className="text-[9px] font-mono text-gray-400 uppercase">% BANKROLL</p>
                <p className="text-sm font-extrabold text-white">{pick.percentageBankroll}% Max</p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded bg-brand-dark-light/50 border border-brand-border/40 p-2 text-center flex items-center justify-center space-x-1">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-success pulsate-live" />
                <span className="text-[10px] uppercase text-gray-300 font-bold font-mono">Arbitrage Secure</span>
              </div>
            </div>

            {/* Reasoning summary text */}
            <p className="text-sm text-gray-300 mt-4 leading-relaxed font-sans font-light">
              <strong>Core Edge Summary:</strong> {pick.reasoningBrief}
            </p>

            {/* Arbitrage vs traditional bookmakers */}
            <div className="mt-4 rounded bg-brand-primary/5 border border-brand-primary/20 p-3.5 flex items-start space-x-3">
              <ShieldAlert className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Bookmaker Price Discrepancy</p>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {pick.winDiscrepancyReasoning}
                </p>
              </div>
            </div>

            {/* Expandable detailed analysis breakdown */}
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex w-full items-center justify-between rounded bg-brand-dark hover:bg-brand-border/30 px-3.5 py-2 text-xs font-bold text-gray-300 transition-colors"
              >
                <span>{isExpanded ? 'Hide Full Quantitative Analysis' : 'View Full Quantitative Analysis'}</span>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {isExpanded && (
                <div className="mt-3 rounded-lg border border-brand-border/60 bg-brand-dark/40 p-4 transition-all">
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider">Proprietary Model Permutations</h5>
                  <ul className="mt-3 space-y-2 text-xs text-gray-300 list-disc list-inside leading-relaxed">
                    {pick.reasoningFull.map((p, idx) => (
                      <li key={idx} className="marker:text-brand-accent">
                        {p}
                      </li>
                    ))}
                  </ul>

                  {pick.injuryNews && (
                    <div className="mt-4 pt-3.5 border-t border-brand-border/40 flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-300">
                        <strong className="text-amber-400 uppercase font-mono text-[10px]">Squad Status Updates:</strong> {pick.injuryNews}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Premium subscriber comments section */}
            <div className="mt-5 pt-5 border-t border-brand-border/40">
              <p className="text-xs font-extrabold uppercase text-white tracking-wider flex items-center space-x-1.5 mb-3">
                <span>Traders Forum</span>
                <span className="rounded-full bg-brand-primary/10 text-brand-accent px-1.5 py-0.2 text-[9px] font-mono">
                  {pick.comments.length} Comments
                </span>
              </p>

              {/* Render lists of comments */}
              {pick.comments.length > 0 ? (
                <div className="space-y-3 max-h-48 overflow-y-auto mb-4 pr-1">
                  {pick.comments.map((comment) => (
                    <div key={comment.id} className="rounded bg-brand-dark/30 p-2.5 border border-brand-border/30 text-xs">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-brand-accent">{comment.authorName}</span>
                        <span className="text-gray-500 font-mono text-[9px]">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed font-sans">{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500 italic mb-4">No comments posted yet on this contract. Start the discussion!</p>
              )}

              {/* Write new comment form */}
              <form onSubmit={handleCommentSubmit} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Post comment / share your Kalshi entry target price..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="flex-1 rounded-md border border-brand-border bg-brand-dark px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:border-brand-accent/60 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-md bg-brand-border hover:bg-brand-primary text-gray-300 hover:text-white px-3 py-1.5 transition-all text-xs font-bold shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
