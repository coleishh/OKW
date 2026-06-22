import React from 'react';
import PnlCard from './PnlCard';
import { ArrowRight, Lock, ExternalLink, ShieldCheck, Sparkles, AlertTriangle, Users } from 'lucide-react';

interface LandingHeroProps {
  onJoinMonthly: () => void;
  onJoinTournament: () => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
  onViewDashboard: () => void;
}

export default function LandingHero({
  onJoinMonthly,
  onJoinTournament,
  onOpenAuth,
  isLoggedIn,
  onViewDashboard
}: LandingHeroProps) {
  
  return (
    <div className="relative overflow-hidden py-12 lg:py-20 bg-[#0A0F1C]">
      
      {/* Background Image Scroller Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="flex w-[200%] h-full animate-slide-infinite opacity-20">
          <div className="flex w-1/2 h-full">
            <img src="/scroller/26811613.jpg" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/curacao-world-cup-2026-odds.webp" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/o8i8wqxqaqPQ5Bir735juc.jpg" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/south-korea-world-cup-2026-odds.webp" className="w-1/4 h-full object-cover" alt="bg" />
          </div>
          <div className="flex w-1/2 h-full">
            <img src="/scroller/26811613.jpg" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/curacao-world-cup-2026-odds.webp" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/o8i8wqxqaqPQ5Bir735juc.jpg" className="w-1/4 h-full object-cover" alt="bg" />
            <img src="/scroller/south-korea-world-cup-2026-odds.webp" className="w-1/4 h-full object-cover" alt="bg" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-[#0A0F1C]/90 to-[#0A0F1C]"></div>
      </div>

      {/* Background Graphic Lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0055FF]/10 blur-[130px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00CCFF]/3 blur-[140px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-10">
            

            {/* Title / Typography */}
            <h1 className="font-sans text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl uppercase leading-[0.85] italic mb-6">
              WORLD CUP <br />
              <span className="text-[#0055FF]">
                SIGNALS
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed max-w-sm">
              High-edge Kalshi prediction market signals for the 2026 FIFA World Cup. No BS. Just alpha.
            </p>

            {/* Quick trust highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-4 bg-white/5 border border-white/10 rounded-none">
                <div className="text-3xl font-black italic text-[#00CCFF]">+187U</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Tournament Record</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-none">
                <div className="text-3xl font-black italic text-white">68%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Market Win Rate</div>
              </div>
            </div>

            {/* Actions CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md">
              {isLoggedIn ? (
                <button
                  onClick={onViewDashboard}
                  className="flex-1 flex items-center justify-center space-x-2.5 rounded-none bg-[#0055FF] px-8 py-4 text-sm font-black uppercase italic tracking-wider text-white hover:bg-[#0044DD] transition-all"
                >
                  <span>Go to Desk</span>
                  <ArrowRight className="h-4 w-4 text-[#00CCFF]" />
                </button>
              ) : (
                <a
                  href="http://t.me/WorldPicksAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2.5 rounded-none bg-[#0055FF] px-8 py-5 text-base font-black uppercase italic tracking-wider text-white hover:bg-[#0044DD] transition-all cursor-pointer text-center"
                >
                  Join The Group
                </a>
              )}
            </div>


          </div>

          {/* Right Image / Live teaser column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* PnlCard Vertical Scroller */}
            <div className="relative w-full max-w-md h-[550px] overflow-hidden rounded-[24px]">
              
              {/* Fade gradients top and bottom */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>

              {/* The auto-scrolling column */}
              <div className="flex flex-col space-y-6 animate-slide-up-infinite">
                {/* Group 1 */}
                <div className="flex flex-col space-y-6 shrink-0">
                  <PnlCard 
                    matchTitle="Turkiye vs Paraguay" 
                    teamName="Paraguay" 
                    chance="44%" 
                    initialCost="$532.40" 
                    paidOut="$1,210.00" 
                  />
                  <PnlCard 
                    matchTitle="Spain vs Morocco" 
                    teamName="Spain" 
                    chance="65%" 
                    initialCost="$1,000.00" 
                    paidOut="$1,538.46" 
                    date="6.18.26 3:45PM"
                    flagComponent={
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex flex-col border border-white/10 shrink-0 shadow-lg">
                        <div className="h-1/3 bg-[#c60b1e]"></div>
                        <div className="h-1/3 bg-[#ffc400] flex items-center justify-center"></div>
                        <div className="h-1/3 bg-[#c60b1e]"></div>
                      </div>
                    }
                  />
                  <PnlCard 
                    matchTitle="Germany vs Ecuador" 
                    teamName="Germany" 
                    chance="78%" 
                    initialCost="$2,500.00" 
                    paidOut="$3,205.12" 
                    date="6.22.26 9:30AM"
                    flagComponent={
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex flex-col border border-white/10 shrink-0 shadow-lg">
                        <div className="h-1/3 bg-black"></div>
                        <div className="h-1/3 bg-[#dd0000]"></div>
                        <div className="h-1/3 bg-[#ffce00]"></div>
                      </div>
                    }
                  />
                </div>
                {/* Group 2 (Duplicate for infinite scroll) */}
                <div className="flex flex-col space-y-6 shrink-0">
                  <PnlCard 
                    matchTitle="Turkiye vs Paraguay" 
                    teamName="Paraguay" 
                    chance="44%" 
                    initialCost="$532.40" 
                    paidOut="$1,210.00" 
                  />
                  <PnlCard 
                    matchTitle="Spain vs Morocco" 
                    teamName="Spain" 
                    chance="65%" 
                    initialCost="$1,000.00" 
                    paidOut="$1,538.46" 
                    date="6.18.26 3:45PM"
                    flagComponent={
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex flex-col border border-white/10 shrink-0 shadow-lg">
                        <div className="h-1/3 bg-[#c60b1e]"></div>
                        <div className="h-1/3 bg-[#ffc400] flex items-center justify-center"></div>
                        <div className="h-1/3 bg-[#c60b1e]"></div>
                      </div>
                    }
                  />
                  <PnlCard 
                    matchTitle="Germany vs Ecuador" 
                    teamName="Germany" 
                    chance="78%" 
                    initialCost="$2,500.00" 
                    paidOut="$3,205.12" 
                    date="6.22.26 9:30AM"
                    flagComponent={
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex flex-col border border-white/10 shrink-0 shadow-lg">
                        <div className="h-1/3 bg-black"></div>
                        <div className="h-1/3 bg-[#dd0000]"></div>
                        <div className="h-1/3 bg-[#ffce00]"></div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* --- BLURRED PICKS PREVIEW TEASER SECTION --- */}
        <div className="mt-16 sm:mt-24">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#00CCFF]"></span>
              Today's Alpha Teaser
            </h2>
            <div className="text-xs text-white/40 font-mono">Updated: 2m ago</div>
          </div>

          {/* 3 Teaser Cards (Blurred / Locked overlay) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-1">
            
            {/* Teaser 1 */}
            <div className="p-6 bg-[#161F32] border-l-4 border-[#0055FF] rounded-none relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="text-[#00CCFF] text-[9px] uppercase font-mono tracking-widest font-bold">
                  Match Day 14 • Group C
                </div>
                <span className="text-[10px] font-mono text-white/40">Starts in 3h</span>
              </div>

              {/* Blurred Content */}
              <div className="filter blur-md opacity-40 select-none pointer-events-none mt-4 transition-all">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter">Germany vs Ecuador</h3>
                <p className="font-mono text-xs text-[#00CCFF] mt-1">Germany Group Winner</p>
                <div className="mt-3 flex items-center justify-between rounded-none bg-[#0A0F1C] p-2 text-xs border border-white/5">
                  <span>Entry: Yes @ 74¢</span>
                  <span className="text-[#00CCFF]">Edge: +11.2%</span>
                </div>
              </div>

              {/* Locked overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1424]/75 backdrop-blur-[2px] p-5 text-center">
                <div className="text-[#00CCFF] mb-2">
                  <Lock className="h-6 w-6 mx-auto" strokeWidth={3} />
                </div>
                <div className="font-bold uppercase tracking-widest text-[#00CCFF] text-[11px]">Member Access Only</div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1 mb-3">Subscribe to see full analysis</div>
                <a
                  href="http://t.me/WorldPicksAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-[#0055FF] hover:bg-[#00CCFF] hover:text-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 cursor-pointer transition-colors text-center"
                >
                  Join The Group
                </a>
              </div>
            </div>

            {/* Teaser 2 */}
            <div className="p-6 bg-[#161F32] border-l-4 border-white/10 rounded-none relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="text-[#00CCFF] text-[9px] uppercase font-mono tracking-widest font-bold">
                  Match Day 15 • Group A
                </div>
                <span className="text-[10px] font-mono text-white/40">Starts in 6h</span>
              </div>

              {/* Blurred Content */}
              <div className="filter blur-md opacity-40 select-none pointer-events-none mt-4 transition-all">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter">France vs Netherlands</h3>
                <p className="font-mono text-xs text-[#00CCFF] mt-1">FRA-NETH-MBAPPE-YES</p>
                <div className="mt-3 flex items-center justify-between rounded-none bg-[#0A0F1C] p-2 text-xs border border-white/5">
                  <span>Entry: Yes @ 62¢</span>
                  <span className="text-[#00CCFF]">Edge: +9.4%</span>
                </div>
              </div>

              {/* Locked overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1424]/75 backdrop-blur-[2px] p-5 text-center">
                <div className="text-[#00CCFF] mb-2">
                  <Lock className="h-6 w-6 mx-auto" strokeWidth={3} />
                </div>
                <div className="font-bold uppercase tracking-widest text-[#00CCFF] text-[11px]">Member Access Only</div>
                <div className="text-[9px] text-[#00CCFF] font-mono uppercase tracking-widest mt-1 mb-3">CONTR-ID: MBAP-94</div>
                <a
                  href="http://t.me/WorldPicksAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-[#0055FF] hover:bg-[#00CCFF] hover:text-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 cursor-pointer transition-colors text-center"
                >
                  Join The Group
                </a>
              </div>
            </div>

            {/* Teaser 3 */}
            <div className="p-6 bg-[#161F32] border-l-4 border-white/10 rounded-none relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="text-[#00CCFF] text-[9px] uppercase font-mono tracking-widest font-bold">
                  Group Block D • Play
                </div>
                <span className="text-[10px] font-mono text-red-400 font-bold">Live In 1h</span>
              </div>

              {/* Blurred Content */}
              <div className="filter blur-md opacity-40 select-none pointer-events-none mt-4 transition-all">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter">Brazil vs Switzerland</h3>
                <p className="font-mono text-xs text-[#00CCFF] mt-1">SUI GOALS UNDER</p>
                <div className="mt-3 flex items-center justify-between rounded-none bg-[#0A0F1C] p-2 text-xs border border-white/5">
                  <span>Entry: Under 1.5 @ 58¢</span>
                  <span className="text-[#00CCFF]">Edge: +8.9%</span>
                </div>
              </div>

              {/* Locked overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1424]/75 backdrop-blur-[2px] p-5 text-center">
                <div className="text-white/60 mb-2">
                  <Lock className="h-6 w-6 mx-auto" strokeWidth={3} />
                </div>
                <div className="font-bold uppercase tracking-widest text-[#00CCFF] text-[11px]">Member Access Only</div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest mt-1 mb-3">Subscribe to see full analysis</div>
                <a
                  href="http://t.me/WorldPicksAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-[#0055FF] hover:bg-[#00CCFF] hover:text-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 cursor-pointer transition-colors text-center"
                >
                  Join The Group
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* --- PREMIUM PRICING PLANS BENTO-GRID --- */}
        <section className="mt-24 pt-12 border-t border-white/10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black uppercase tracking-tight text-white italic">SELECT YOUR SUBSCRIPTION</h3>
            <p className="text-xs text-white/50 uppercase tracking-widest mt-2 max-w-lg mx-auto">
              Choose your desk routing tier below. Real trading intelligence. Direct API bot webhooks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Weekly Premium Pass */}
            <div className="rounded-none border border-white/15 bg-[#161F32] flex flex-col justify-between p-6 relative">
              <div>
                <p className="text-[10px] font-mono font-bold tracking-widest text-[#00CCFF] uppercase">RECURRING SIGNAL</p>
                <h4 className="text-2xl font-black text-white mt-1 uppercase italic tracking-tight">Weekly Pass</h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1">For active day traders</p>
                
                <div className="mt-5 flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#00CCFF] tracking-tight font-mono">$39</span>
                  <span className="text-xs text-white/40 font-mono ml-1">/ WEEK</span>
                </div>
                <ul className="mt-6 space-y-3.5 text-xs text-white/85 font-mono">
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>All Daily Post-Match & Outright Picks</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>Full mathematical reasoning & edge %s</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>Access to subscriber comments</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>Standard Telegram Alerts feed</span>
                  </li>
                </ul>
              </div>

              <a
                href="http://t.me/WorldPicksAlpha"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full rounded-none bg-[#0055FF] hover:bg-[#00CCFF] hover:text-black text-white text-xs font-black uppercase py-3 text-center tracking-widest transition-colors cursor-pointer block"
              >
                Join The Group
              </a>
            </div>

            {/* Tournament Pass (BEST VALUE - covers entire Cup) */}
            <div className="rounded-none border-2 border-[#00CCFF] bg-[#1a253b] flex flex-col justify-between p-6 relative">
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00CCFF] text-black text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-none shadow-lg">
                🔥 BEST TOURNAMENT VALUE
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold tracking-widest text-[#00CCFF] uppercase">FULL 2026 WORLD CUP</p>
                <h4 className="text-2xl font-black text-white mt-1 uppercase italic tracking-tight">World Cup Pass</h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono mt-1">Covers every single block, group & knockout match</p>
                
                <div className="mt-5 flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#00CCFF] tracking-tight font-mono">$100</span>
                  <span className="text-xs text-white/40 font-mono ml-1.5 uppercase">No recurring billing</span>
                </div>

              <ul className="mt-6 space-y-3.5 text-xs text-white/85 font-mono">
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>Complete access to Group Stage to Final</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span className="text-[#00CCFF]">Live, In-Play Alerts sent instantly</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <span className="text-[#00CCFF] font-bold">✓</span>
                    <span>Subscribers Group permutations models</span>
                  </li>

                </ul>
              </div>

              <a
                href="http://t.me/WorldPicksAlpha"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full rounded-none bg-[#00CCFF] text-black hover:bg-[#0055FF] hover:text-white text-xs font-black uppercase py-3 text-center tracking-widest transition-colors cursor-pointer block"
              >
                Join The Group
              </a>
            </div>

          </div>
        </section>



      </div>
    </div>
  );
}
