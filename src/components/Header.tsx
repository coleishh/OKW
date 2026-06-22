import React from 'react';
import { Award, User, Send } from 'lucide-react';
import { UserState } from '../types';
import logo from '../../WP1.png';

interface HeaderProps {
  user: UserState;
  onOpenAuth: () => void;
  onLogout: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ user, onOpenAuth, onLogout, activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0F1C]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand Positioning */}
        <div 
          className="flex cursor-pointer items-center space-x-3 group"
          onClick={() => setActiveSection('landing')}
        >
          <img
            src={logo}
            alt="World Picks"
            className="h-10 w-10 object-contain shrink-0 transition-transform group-hover:scale-105"
            id="logo-badge"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-sans text-base font-bold tracking-tight text-white group-hover:text-[#00CCFF] transition-colors uppercase italic">WORLD PICKS</span>
              <span className="rounded-none bg-[#0055FF]/10 px-1.5 py-0.2 text-[9px] font-bold text-[#00CCFF] border border-[#00CCFF]/20 uppercase">ALPHA</span>
            </div>
            <span className="hidden sm:block text-[9px] font-mono tracking-widest text-white/40 uppercase">NO BS. JUST ALPHA.</span>
          </div>
        </div>

        {/* Global Navigation Linkage */}
        <nav className="hidden md:flex ml-12 items-center space-x-2" id="main-nav-links">
          {[
            { id: 'landing', label: 'Home' },
            { id: 'vouches', label: 'Vouches' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative rounded-none px-4 py-2 font-sans text-xs uppercase tracking-widest font-bold transition-all border ${
                activeSection === item.id 
                  ? 'text-[#00CCFF] bg-white/5 border-white/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/5 border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Simulation Panel */}
        <div className="flex items-center space-x-3">
          


          {/* User Status / Action Button */}
          {user.isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex flex-col text-right">
                <div className="flex items-center justify-end space-x-1.5">
                  <span className="text-xs font-bold text-gray-200">{user.name || user.email}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CCFF]"></span>
                </div>
                {/* Active Tier Marker */}
                <div className="flex items-center justify-end">
                  <span className={`text-[8px] uppercase font-mono font-bold tracking-widest px-1 py-0.2 rounded-none border ${
                    user.subscription.tier === 'TOURNAMENT_PASS'
                      ? 'bg-[#00CCFF]/10 text-[#00CCFF] border border-[#00CCFF]/20'
                      : user.subscription.tier === 'WEEKLY'
                      ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                      : 'bg-white/5 text-white/40 border-white/5'
                  }`}>
                    {user.subscription.tier === 'FREE' ? 'FREE DESK' : `${user.subscription.tier} ACCESS`}
                  </span>
                </div>
              </div>

              {/* Quick user popover / logout option */}
              <button
                onClick={onLogout}
                className="group flex h-9 items-center justify-center space-x-1 px-3 rounded-none border border-white/10 bg-[#161F32] hover:bg-white/5 hover:border-[#00CCFF] transition-colors text-[10px] font-bold uppercase tracking-wider text-white/80"
                title="Click to sign out of dashboard"
              >
                <User className="h-3.5 w-3.5 text-brand-accent group-hover:scale-105 transition-transform" />
                <span>Exit</span>
              </button>
            </div>
          ) : (
            <a
              href="http://t.me/WorldPicksAlpha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-none bg-[#0055FF] px-5 py-2 text-xs font-black uppercase tracking-widest text-white hover:bg-[#00CCFF] hover:text-black transition-colors cursor-pointer text-center"
              id="auth-trigger-btn"
            >
              <Award className="h-3.5 w-3.5" />
              <span>Join The Group</span>
            </a>
          )}

        </div>
      </div>
    </header>
  );
}
