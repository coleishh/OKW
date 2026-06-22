import React, { useState } from 'react';
import { MessageSquare, ShieldCheck, Star, ThumbsUp, Send, CheckCircle2, User, Sparkles, TrendingUp } from 'lucide-react';

interface Vouch {
  id: string;
  name: string;
  avatar?: string;
  date: string;
  text: string;
  profitUnits?: string;
  contractVouched: string;
  rating: number;
  verified: boolean;
  likes: number;
}

export default function Vouches() {
  const [vouches, setVouches] = useState<Vouch[]>([
    {
      id: 'v-1',
      name: 'Alpha_Trader_99',
      date: 'Just now',
      text: 'Germany YES contract at 78¢ was a absolute steal. Bookies were at -375. Easy units secured!',
      profitUnits: '+3.5 Units ($875)',
      contractVouched: 'Germany vs Ecuador (Yes @ 78¢)',
      rating: 5,
      verified: true,
      likes: 12
    },
    {
      id: 'v-2',
      name: 'BetQuant_W',
      date: '1 hour ago',
      text: 'The telegram bot latency is crazy fast. Got the notification, filled the order within 10 seconds. Easiest play of the week.',
      profitUnits: '+5.0 Units ($1,250)',
      contractVouched: 'Spain vs Morocco (Poss Over 62.5% Yes @ 75¢)',
      rating: 5,
      verified: true,
      likes: 24
    },
    {
      id: 'v-3',
      name: 'Vegas_Leaker',
      date: '3 hours ago',
      text: 'Had my doubts about prediction market arbitrage but the math doesnt lie. Staking 3 units and locked in pure EV.',
      profitUnits: '+2.5 Units ($625)',
      contractVouched: 'USA to Advance (Yes @ 61¢)',
      rating: 5,
      verified: true,
      likes: 8
    },
    {
      id: 'v-4',
      name: 'ArbitrageKing',
      date: 'Yesterday',
      text: 'Brazil team goals over was settled in under 60 minutes. Standard sportsbooks closed the line but Kalshi was lagging behind. Incredible value.',
      profitUnits: '+3.5 Units ($875)',
      contractVouched: 'Brazil vs Poland (Over 2.5 Goals Yes @ 64¢)',
      rating: 5,
      verified: true,
      likes: 19
    },
    {
      id: 'v-5',
      name: 'QuantProphet',
      date: '2 days ago',
      text: 'Down to the final minutes but Italy clean sheet was verified. Solid bankroll management works wonders.',
      profitUnits: '+2.0 Units ($500)',
      contractVouched: 'Italy vs Canada (Under 1.5 Goals Yes @ 70¢)',
      rating: 4,
      verified: true,
      likes: 7
    }
  ]);

  // Form states
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [newContract, setNewContract] = useState('');
  const [newProfit, setNewProfit] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleLike = (id: string) => {
    setVouches(prev => prev.map(v => v.id === id ? { ...v, likes: v.likes + 1 } : v));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim() || !newContract.trim()) {
      alert("Please fill in Name, Vouch Details, and Contract name.");
      return;
    }

    const newVouch: Vouch = {
      id: `vouch-${Date.now()}`,
      name: newName.trim(),
      date: 'Just now',
      text: newText.trim(),
      contractVouched: newContract.trim(),
      profitUnits: newProfit.trim() ? newProfit.trim() : undefined,
      rating: newRating,
      verified: false, // Must be approved by moderators in real app, but show immediately for demo
      likes: 0
    };

    setVouches([newVouch, ...vouches]);
    setNewName('');
    setNewText('');
    setNewContract('');
    setNewProfit('');
    setNewRating(5);
    alert("Vouch submitted successfully! It is now live in the community feed.");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* 1. Page Header with stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-border/40 pb-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold uppercase text-white tracking-tight flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
            <span>Community Vouches Ledger</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">Verified user logs, arbitrage profits, and real-time feedback from our Telegram channel.</p>
        </div>

        {/* trust stats */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded bg-brand-dark-light/50 border border-brand-border/60 px-4 py-2 text-center">
            <span className="text-gray-400 block font-mono text-[9px] uppercase">TOTAL VOUCHES</span>
            <span className="font-extrabold text-white text-base">19 Verified</span>
          </div>
          <div className="rounded bg-brand-success/15 border border-brand-success/20 px-4 py-2 text-center">
            <span className="text-brand-success/80 block font-mono text-[9px] uppercase">USER RATING</span>
            <span className="font-extrabold text-brand-success text-base flex items-center justify-center space-x-1">
              <span>4.9 / 5.0</span>
              <Star className="h-3.5 w-3.5 fill-current" />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Vouch Stream */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-base font-extrabold uppercase text-white tracking-wider flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-[#00CCFF]" />
            <span>Live Feed</span>
          </h3>

          <div className="relative">
            <div className="space-y-6 filter blur-md opacity-40 pointer-events-none select-none">
              {vouches.map((v) => (
                <div 
                  key={v.id} 
                  className="rounded-xl border border-brand-border/60 bg-brand-dark-light/30 p-5 hover:border-brand-primary/45 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Top Bar with rating, verification and date */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-brand-border/30">
                      <div className="flex items-center space-x-2.5">
                        <div className="h-8 w-8 rounded-none bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent font-bold font-mono text-sm uppercase">
                          {v.name[0]}
                        </div>
                        <div>
                          <div className="flex items-center space-x-1.5">
                            <span className="text-sm font-bold text-white uppercase tracking-tight">{v.name}</span>
                            {v.verified && (
                              <span className="flex items-center text-brand-success text-[10px] font-mono font-bold space-x-0.5" title="Verified Trade and Account">
                                <ShieldCheck className="h-3.5 w-3.5 fill-current text-brand-success" />
                                <span className="hidden sm:inline">VERIFIED</span>
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-500 font-mono">{v.date}</span>
                        </div>
                      </div>

                      <div className="flex space-x-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < v.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Vouch text content */}
                    <p className="text-sm text-gray-300 mt-4 leading-relaxed font-sans font-light">
                      "{v.text}"
                    </p>

                    {/* Details metadata tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded bg-brand-dark border border-brand-border/80 px-2.5 py-1 text-[10px] font-mono text-gray-400">
                        Contract: <span className="text-white font-semibold">{v.contractVouched}</span>
                      </span>
                      {v.profitUnits && (
                        <span className="rounded bg-brand-success/10 border border-brand-success/20 px-2.5 py-1 text-[10px] font-mono text-brand-success font-bold flex items-center space-x-1">
                          <TrendingUp className="h-3 w-3" />
                          <span>Profit: {v.profitUnits}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Actions (likes) */}
                  <div className="mt-5 pt-3.5 border-t border-brand-border/30 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>Telegram Source: @WorldPicksAlpha</span>
                    <button 
                      onClick={() => handleLike(v.id)}
                      className="flex items-center space-x-1.5 text-gray-400 hover:text-brand-accent transition-colors bg-white/5 border border-brand-border px-3 py-1 rounded cursor-pointer"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>Helpful ({v.likes})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Locked / No Vouches Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1424]/50 backdrop-blur-[2px] p-5 text-center rounded-xl">
              <div className="font-bold uppercase tracking-widest text-[#00CCFF] text-xl">No vouches yet</div>
              <div className="text-xs text-white/40 uppercase tracking-widest mt-2">Be the first to submit a vouch!</div>
            </div>
          </div>
        </div>

        {/* Right Column: Submit Vouch Form */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-24 rounded-xl border border-brand-border bg-brand-dark-light/50 p-6 glass-panel">
            <h3 className="text-sm font-black uppercase text-white tracking-widest flex items-center space-x-2 pb-4 border-b border-brand-border/40 mb-5">
              <CheckCircle2 className="h-4.5 w-4.5 text-brand-success" />
              <span>Submit Vouch Ledger</span>
            </h3>

            <p className="text-xs text-gray-400 leading-relaxed font-sans font-light mb-4">
              Hit a winning prediction contract? Share your results and feedback with the rest of the alpha community. Your vouch will show up instantly in our live feed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Your Alias</label>
                <input 
                  type="text"
                  placeholder="e.g. Arb_Master"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full rounded bg-brand-dark border border-brand-border px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors"
                />
              </div>

              {/* Contract Vouched */}
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Prediction Contract</label>
                <input 
                  type="text"
                  placeholder="e.g. France vs Uruguay (FRA-WIN-YES)"
                  value={newContract}
                  onChange={(e) => setNewContract(e.target.value)}
                  className="w-full rounded bg-brand-dark border border-brand-border px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors"
                />
              </div>

              {/* Profit Units (optional) */}
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Profit Made (Optional)</label>
                <input 
                  type="text"
                  placeholder="e.g. +3.0 Units ($750)"
                  value={newProfit}
                  onChange={(e) => setNewProfit(e.target.value)}
                  className="w-full rounded bg-brand-dark border border-brand-border px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Rating</label>
                <select 
                  value={newRating}
                  onChange={(e) => setNewRating(parseInt(e.target.value))}
                  className="w-full rounded bg-brand-dark border border-brand-border px-3 py-2 text-xs text-white focus:border-brand-accent/60 outline-none transition-colors cursor-pointer"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 / 5)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 / 5)</option>
                  <option value={3}>⭐⭐⭐ (3 / 5)</option>
                  <option value={2}>⭐⭐ (2 / 5)</option>
                  <option value={1}>⭐ (1 / 5)</option>
                </select>
              </div>

              {/* Details text */}
              <div>
                <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">Vouch Details</label>
                <textarea 
                  rows={3}
                  placeholder="Share your entry price edge, arbitrage percentage, or Telegram alerts response time..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full rounded bg-brand-dark border border-brand-border px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white py-3 text-center text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Send className="h-4 w-4" />
                <span>Submit Vouch</span>
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
