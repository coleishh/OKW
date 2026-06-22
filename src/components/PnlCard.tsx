import React from 'react';

interface PnlCardProps {
  matchTitle?: string;
  teamName?: string;
  chance?: string;
  initialCost?: string;
  paidOut?: string;
  date?: string;
  flagComponent?: React.ReactNode;
}

export default function PnlCard({
  matchTitle = 'Turkiye vs Paraguay',
  teamName = 'Paraguay',
  chance = '44%',
  initialCost = '$532.40',
  paidOut = '$1,210.00',
  date = '6.20.26 12:25AM',
  flagComponent
}: PnlCardProps) {
  return (
    <div className="w-[380px] rounded-[24px] overflow-hidden border border-white/5 bg-gradient-to-br from-[#3b1818] via-[#1a1b1a] to-[#122129] shadow-2xl shrink-0">
      
      {/* Top Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Soccer Ball SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#e1c15c] fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12.87V9.5h2V7.13c-3.13.43-5.63 2.87-6.13 6.01h2.18v-2H6.87C7.3 8.01 9.74 5.56 11 5.13zm2 9.74v-2.37h-2v2.37c3.13-.43 5.63-2.87 6.13-6.01h-2.18v2h2.18c-.43 3.13-2.87 5.58-4.13 6.01z"/>
            </svg>
            <span className="text-[#e1c15c] font-bold text-xs tracking-widest">WORLD CUP</span>
          </div>
          <span className="text-[#10e396] font-bold text-xl tracking-tight leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>Kalshi</span>
        </div>

        <div className="w-full border-b border-dashed border-white/10 my-4" />

        {/* Match Info */}
        <h2 className="text-white text-[19px] font-medium mb-4">{matchTitle}</h2>

        <div className="flex items-center space-x-4 mb-2">
          {/* Default Paraguay Flag */}
          {flagComponent || (
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex flex-col border border-white/10 shrink-0 shadow-lg">
              <div className="h-1/3 bg-[#d52b1e]"></div>
              <div className="h-1/3 bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-[#e1c15c] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#0038a8] rounded-full"></div>
                </div>
              </div>
              <div className="h-1/3 bg-[#0038a8]"></div>
            </div>
          )}
          
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-3xl font-semibold leading-none tracking-tight">{teamName}</h3>
            <p className="text-gray-300 text-[15px] mt-1.5">Yes @ {chance} chance</p>
          </div>
        </div>
      </div>

      {/* Repeating Banner */}
      <div className="bg-[#0b291d] w-full py-1.5 overflow-hidden flex whitespace-nowrap mb-6 border-y border-[#10e396]/10">
        <div className="animate-slide-infinite flex space-x-6 text-[#10e396] font-mono text-[11px] tracking-widest font-bold opacity-90">
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
          <span>Kalshi</span><span className="opacity-60 font-normal">6796E1B9FBC</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-6">
        <div>
          <p className="text-gray-400 font-bold tracking-[0.2em] text-[10px] mb-1.5">INITIAL COST</p>
          <p className="text-[#a8a8a8] text-4xl font-bold tracking-tight">{initialCost}</p>
        </div>
        <div>
          <p className="text-[#10e396] font-bold tracking-[0.2em] text-[10px] mb-1.5">PAID OUT</p>
          <p className="text-[#10e396] text-4xl font-bold tracking-tight">{paidOut}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 pb-6 mt-10">
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.15em] uppercase">{date}</p>
        <p className="text-gray-500 font-mono text-[10px] tracking-[0.15em] uppercase">CLOSED POSITION</p>
      </div>

    </div>
  );
}
