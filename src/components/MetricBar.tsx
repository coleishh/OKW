import React from 'react';
import { TrendingUp, Award, Users, Trophy } from 'lucide-react';
import { SYSTEM_STATS } from '../data';

export default function MetricBar() {
  return (
    <div className="w-full border-b border-white/10 bg-[#0A0F1C] shrink-0">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Tournament profit units */}
          <div className="flex items-center space-x-3.5 pl-2 py-2 md:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-none bg-[#00CCFF]/10 text-[#00CCFF] border border-[#00CCFF]/20">
              <TrendingUp className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">TOURNAMENT RECORD</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-lg font-black text-[#00CCFF] tracking-tighter italic">{SYSTEM_STATS.overallUnits}</span>
                <span className="text-[9px] font-bold text-[#00CCFF] uppercase font-mono tracking-tighter">Profit</span>
              </div>
            </div>
          </div>

          {/* Win Rate */}
          <div className="flex items-center space-x-3.5 pl-2 md:pl-6 py-2 md:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5 text-white border border-white/10">
              <Award className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">MARKET WIN RATE</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-lg font-black text-white tracking-tighter italic">{SYSTEM_STATS.winRate}</span>
                <span className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-tighter">Success</span>
              </div>
            </div>
          </div>

          {/* High volume active members */}
          <div className="flex items-center space-x-3.5 pl-2 md:pl-6 py-2 md:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5 text-white border border-white/10">
              <Users className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">ACTIVE MEMBERS</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-lg font-black text-white tracking-tighter italic">{SYSTEM_STATS.totalMembers}</span>
                <span className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-tighter">DESKS</span>
              </div>
            </div>
          </div>

          {/* Streak Indicator */}
          <div className="flex items-center space-x-3.5 pl-2 md:pl-6 py-2 md:py-0">
            <div className="shine-effect flex h-10 w-10 items-center justify-center rounded-none bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              <Trophy className="h-4.5 w-4.5 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
            </div>
            <div>
              <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">HOT RUN STREAK</p>
              <div className="flex items-center space-x-1.5 font-bold">
                <span className="text-lg font-black text-[#FFD700] tracking-tighter italic drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">{SYSTEM_STATS.currentTournamentStreak}</span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 pulsate-live" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
