import React, { useState } from 'react';
import { BookOpen, Eye, Clock } from 'lucide-react';
import { RESOURCE_VAULT } from '../data';
import { ResourceVaultItem } from '../types';

interface ResourceVaultProps {
  isPremium: boolean;
  onUpgradeTrigger: () => void;
}

export default function ResourceVault({ isPremium, onUpgradeTrigger }: ResourceVaultProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [readingItem, setReadingItem] = useState<ResourceVaultItem | null>(null);

  const categories = [
    { id: 'ALL', label: 'All Resources' },
    { id: 'trading_guide', label: 'Trading Guides' },
    { id: 'bankroll_rules', label: 'Bankroll & Sizing' },
    { id: 'tournament_breakdown', label: 'Tournament Models' },
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? RESOURCE_VAULT
    : RESOURCE_VAULT.filter(item => item.category === selectedCategory);

  const handleOpenItem = (item: ResourceVaultItem) => {
    if (!isPremium) {
      alert('Access Required: Join the Telegram group to access strategy guides and tournament models.');
      onUpgradeTrigger();
      return;
    }
    setReadingItem(item);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Left guides explorer list */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Category switcher */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                  : 'bg-brand-dark-light/40 text-gray-300 border-brand-border/60 hover:text-white hover:bg-brand-border/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Guides List */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenItem(item)}
                className="group rounded-xl border border-brand-border/60 bg-brand-dark-light/40 p-5 transition-all cursor-pointer flex flex-col justify-between hover:border-brand-accent/40 hover:scale-[1.005]"
              >
                <div>
                  
                  {/* Top line with Category & Read Time */}
                  <div className="flex items-center justify-between pb-2 border-b border-brand-border/40">
                    <span className="text-[9px] uppercase font-mono tracking-widest font-black text-brand-accent">
                      {item.category.replace('_', ' ')}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 text-[10px]">
                      <Clock className="h-3 w-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Title and Summary */}
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <h3 className="text-base font-extrabold uppercase leading-tight text-white group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h3>

                    <div className="h-8 w-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-accent shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mt-2 font-sans font-light leading-relaxed">
                    {item.summary}
                  </p>

                </div>

                <div className="mt-4 pt-3.5 border-t border-brand-border/40 flex items-center justify-between text-[11px]">
                  <span className="text-brand-accent font-semibold flex items-center space-x-1">
                    <span>Click to view guide</span>
                    <span>➔</span>
                  </span>
                </div>

              </div>
            ))}
        </div>

      </div>

      {/* Right details reader panel */}
      <div className="lg:col-span-5">
        <div className="sticky top-24 rounded-xl border border-brand-border bg-brand-dark-light/80 p-6 glass-panel min-h-[400px] flex flex-col justify-between">
          
          {readingItem ? (
            <div>
              {/* Category */}
              <span className="text-[10px] font-mono font-black tracking-widest text-brand-accent uppercase block pb-1 border-b border-brand-border/40 mb-3">
                {readingItem.category.replace('_', ' ')}
              </span>

              {/* Title */}
              <h2 className="text-lg font-extrabold text-white uppercase leading-tight">
                {readingItem.title}
              </h2>

              <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-mono mt-1 mb-5">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingItem.readTime}</span>
                <span>•</span>
                <span className="text-brand-success font-bold">VERIFIED ARTICLE</span>
              </div>

              {/* Render article Markdown breakdown (simplifed React format) */}
              <div className="space-y-4 text-xs text-gray-300 leading-relaxed font-sans pr-1">
                {readingItem.contentMarkdown.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('####')) {
                    return <h4 key={index} className="text-sm font-bold text-white uppercase mt-4 mb-2">{paragraph.substring(4)}</h4>;
                  }
                  if (paragraph.startsWith('###')) {
                    return <h3 key={index} className="text-base font-extrabold text-white uppercase mt-5 mb-2 border-b border-brand-border/40 pb-1">{paragraph.substring(3)}</h3>;
                  }
                  if (paragraph.startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-1 pl-2">
                        {paragraph.split('\n').map((line, lidx) => (
                          <li key={lidx}>{line.substring(2)}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 my-auto">
              <BookOpen className="h-10 w-10 text-brand-primary mb-4" />
              <h3 className="text-sm font-bold text-white uppercase">Guide Reader Terminal</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">
                Select any tactical trading guide, Kelly Criterion formula, or Outright simulation map on the left to start reading standard strategy materials instantly.
              </p>
            </div>
          )}

          {readingItem && (
            <div className="mt-8 pt-4 border-t border-brand-border/40 flex items-center justify-between">
              <button
                onClick={() => setReadingItem(null)}
                className="text-xs text-gray-400 hover:text-white font-bold"
              >
                ← Close Reader
              </button>
              
              <span className="text-[10px] font-mono text-gray-500 uppercase">
                World Picks Alpha @2026
              </span>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
