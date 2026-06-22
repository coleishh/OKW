import React, { useState, useEffect } from 'react';
import { UserState, SubscriptionTier } from './types';

// Components
import Header from './components/Header';
import MetricBar from './components/MetricBar';
import LandingHero from './components/LandingHero';
import Vouches from './components/Vouches';
import AuthModal from './components/AuthModal';

export default function App() {
  // 1. Core user states backed by localStorage
  const [user, setUser] = useState<UserState>(() => {
    const cached = localStorage.getItem('world_picks_premium_user');
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as UserState;
        if ((parsed.subscription?.tier as string) === 'MONTHLY') {
          parsed.subscription.tier = 'WEEKLY';
        }
        return parsed;
      } catch (e) {
        // Fallback
      }
    }
    return {
      email: '',
      name: '',
      isLoggedIn: false,
      subscription: {
        tier: 'FREE',
        active: false
      },
      referredUsersCount: 3,
      referralEarningsUnits: 15.0
    };
  });

  // 2. Active section navigation management
  const [activeSection, setActiveSection] = useState<string>('landing');

  // 3. Modals and options
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [preselectedTierInModal, setPreselectedTierInModal] = useState<SubscriptionTier>('WEEKLY');

  // Synchronize state
  useEffect(() => {
    localStorage.setItem('world_picks_premium_user', JSON.stringify(user));
  }, [user]);

  // Auth & Upgrade callbacks
  const handleAuthSuccess = (email: string, name: string, tier: SubscriptionTier) => {
    setUser(prev => ({
      ...prev,
      email,
      name,
      isLoggedIn: true,
      subscription: {
        tier,
        active: tier !== 'FREE',
        joinedDate: new Date().toLocaleDateString(),
        expiresAt: tier === 'TOURNAMENT_PASS' ? 'End of Tournament' : 'July 22, 2026'
      }
    }));
    // Redirect immediately to vouches tab if subscribed
    setActiveSection('vouches');
  };

  const handleLogout = () => {
    setUser({
      email: '',
      name: '',
      isLoggedIn: false,
      subscription: {
        tier: 'FREE',
        active: false
      },
      referredUsersCount: 0,
      referralEarningsUnits: 0
    });
    setActiveSection('landing');
  };

  const triggerUpgrade = (targetTier: SubscriptionTier = 'TOURNAMENT_PASS') => {
    window.open('http://t.me/WorldPicksAlpha', '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 flex flex-col justify-between">
      
      {/* 1. Global Navigation Header */}
      <Header 
        user={user} 
        onOpenAuth={() => triggerUpgrade('WEEKLY')} 
        onLogout={handleLogout} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* 2. Top Analytical Trust Banner */}
      <MetricBar />

      {/* 3. Central Application Routing Area */}
      <main className="flex-grow">
        
        {/* --- SECTION A: PUBLIC LANDING PAGE --- */}
        {activeSection === 'landing' && (
          <LandingHero 
            onJoinMonthly={() => triggerUpgrade('WEEKLY')}
            onJoinTournament={() => triggerUpgrade('TOURNAMENT_PASS')}
            onOpenAuth={() => triggerUpgrade('TOURNAMENT_PASS')}
            isLoggedIn={user.isLoggedIn}
            onViewDashboard={() => setActiveSection('vouches')}
          />
        )}

        {/* --- SECTION B: VOUCHES PAGE --- */}
        {activeSection === 'vouches' && (
          <Vouches />
        )}

      </main>

      {/* 4. Global Footer */}
      <footer className="border-t border-brand-border/40 bg-brand-dark py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-sans font-extrabold tracking-tight text-white">WORLD PICKS ALPHA</span>
              <span className="rounded bg-brand-primary/10 px-1 text-[9px] font-bold text-brand-accent">2026 WORLD CUP</span>
            </div>
            <p className="text-[10px] text-gray-500 font-mono tracking-wide mt-1.5 uppercase">WORLD PICKS. WORLD CLASS PROFIT</p>
          </div>

          {/* Warning disclaimer */}
          <p className="text-[9.5px] text-gray-600 max-w-md text-center md:text-right leading-relaxed font-sans font-light">
            Disclaimer: Kalshi prediction contracts carry inherent speculation risks. Staking sizing limits represent relative model parameters only. Never commit capital exceeding your individual risk constraints.
          </p>
        </div>
      </footer>

      {/* 5. Membership Checkout Portal Simulation Modal */}
      {isAuthModalOpen && (
        <AuthModal 
          onClose={() => setIsAuthModalOpen(false)} 
          onSuccess={handleAuthSuccess}
          initialSelectedTier={preselectedTierInModal}
        />
      )}

    </div>
  );
}
