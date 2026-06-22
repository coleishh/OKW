import React, { useState } from 'react';
import { X, Award, Sparkles } from 'lucide-react';
import { SubscriptionTier } from '../types';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (email: string, name: string, tier: SubscriptionTier) => void;
  initialSelectedTier?: SubscriptionTier;
}

export default function AuthModal({ onClose, onSuccess, initialSelectedTier = 'WEEKLY' }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>(initialSelectedTier);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quick preset loader
  const tierCost = {
    FREE: 'Free',
    WEEKLY: '$39/week',
    TOURNAMENT_PASS: '$100 (Full Tournament)',
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email address to retrieve billing credentials.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate real gateway latency
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(email.trim(), name.trim() || 'Alpha Trader', selectedTier);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brand-border bg-brand-dark-light shadow-2xl">
        
        {/* Upper Background Accent Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent" />
        
        {/* Header split */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border/40">
          <div className="flex items-center space-x-2.5">
            <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-accent">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold uppercase text-white tracking-widest">WORLD PICKS MEMBERS DESK</h2>
              <p className="text-[10px] text-gray-500 font-mono">SECURED BY STRIPE / GUMROAD ENCRYPTION</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-brand-border/40 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleFormSubmit} className="p-6 space-y-5">
          
          {/* User Standard Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-brand-border bg-brand-dark px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-1">Your Email *</label>
              <input
                type="email"
                required
                placeholder="e.g. trader@gigaAlpha.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-brand-border bg-brand-dark px-3 py-2 text-xs text-white placeholder-gray-600 focus:border-brand-accent/60 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tier Selector */}
          <div>
            <label className="block text-[11px] font-mono tracking-widest text-gray-400 uppercase mb-2">Select Membership Level</label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { id: 'FREE' as const, label: 'Free Desk' },
                { id: 'WEEKLY' as const, label: 'Weekly' },
                { id: 'TOURNAMENT_PASS' as const, label: 'Tournament' },
              ].map((tier) => (
                <button
                  type="button"
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`rounded-lg p-3 text-center border transition-all cursor-pointer flex flex-col justify-between items-center ${
                    selectedTier === tier.id
                      ? 'bg-brand-primary/10 border-brand-accent text-white shadow-md'
                      : 'bg-brand-dark/45 border-brand-border text-gray-400 hover:text-white hover:border-brand-border/80'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold tracking-tight">{tier.label}</span>
                  <span className="text-[9px] text-gray-500 font-semibold mt-1 block leading-none">
                    {tierCost[tier.id]}
                  </span>
                </button>
              ))}
            </div>
          </div>



          {/* Bottom Action Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/95 hover:to-brand-accent/95 py-3.5 text-center text-xs font-black uppercase text-white tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-brand-primary/10 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>AUTHORIZING TRADER STATE...</span>
              </span>
            ) : selectedTier === 'FREE' ? (
              <span>CREATE COMPLIMENTARY MEMBERSHIP</span>
            ) : (
              <span className="flex items-center justify-center space-x-1.5">
                <Sparkles className="h-4 w-4" />
                <span>CONFIRM ORDER {tierCost[selectedTier].toUpperCase()}</span>
              </span>
            )}
          </button>

        </form>

      </div>
    </div>
  );
}
