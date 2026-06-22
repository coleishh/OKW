import React, { useState } from 'react';
import { Bell, Send, Cpu, Play, CheckCircle2, ShieldAlert } from 'lucide-react';

interface Alert {
  id: string;
  time: string;
  match: string;
  message: string;
  recommendedContract: string;
  urgency: 'HIGH' | 'MEDIUM';
}

export default function AlertStream() {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 'a-1',
      time: '68th Min',
      match: 'France vs Uruguay',
      message: 'Uruguay central defender Jose Maria Gimenez receives yellow-card for intentional handball. Attacking progression increases heavily.',
      recommendedContract: 'France Win MATCH Yes @ 74¢ (Vegas -310)',
      urgency: 'HIGH'
    },
    {
      id: 'a-2',
      time: 'Pre-Match',
      match: 'Germany vs Ecuador',
      message: 'Germany starting midfields confirmed. Kroos, Musiala & Wirtz all start in optimal formation. Expecting high ball retention index.',
      recommendedContract: 'Germany Group Winner Yes @ 78¢ (Vegas -375)',
      urgency: 'MEDIUM'
    },
    {
      id: 'a-3',
      time: 'Pre-Match',
      match: 'Argentina vs South Korea',
      message: 'Tactical lineup leak: Lionel Messi starting in an advanced central False-9 striker role to maximize shooting zones.',
      recommendedContract: 'Messi Over 1.5 Shots on Target @ 65¢ (Vegas -185)',
      urgency: 'HIGH'
    }
  ]);

  const [notificationStatus, setNotificationStatus] = useState<string | null>(null);

  // Trigger a mock real-time event simulation!
  const triggerSimulation = () => {
    const events = [
      {
        match: 'USA vs Netherlands',
        message: 'Netherlands midfield stalwart Frenkie de Jong subbed off at 45’ due to muscle tightening. Netherlands defensive transition drops 15%.',
        contract: 'USA To Advance YES @ 62¢ (Vegas -145)',
        urgency: 'HIGH' as const
      },
      {
        match: 'Spain vs Ghana',
        message: 'Ghana captain Pickson yellow carded for dangerous tackle. Spain set pieces conversion index model ticks up and corners frequency increases.',
        contract: 'Spain Over 5.5 Team Corners YES @ 54¢ (Vegas -150)',
        urgency: 'MEDIUM' as const
      },
      {
        match: 'England vs Japan',
        message: 'VAR Penalty awarded to England at 73\'. Order book is lag-pricing the likelihood of an over match total.',
        contract: 'Match Total Over 2.5 goals YES @ 71¢',
        urgency: 'HIGH' as const
      }
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    const newAlert: Alert = {
      id: `sim-${Date.now()}`,
      time: 'Live Now',
      match: randomEvent.match,
      message: randomEvent.message,
      recommendedContract: randomEvent.contract,
      urgency: randomEvent.urgency
    };

    setAlerts([newAlert, ...alerts]);
    setNotificationStatus('FLASH ALERT DISPATCHED TO MEMBERS VIA TELEGRAM & WEBHOOK API!');
    
    setTimeout(() => {
      setNotificationStatus(null);
    }, 4500);
  };

  return (
    <div className="rounded-xl border border-brand-border/60 bg-brand-dark-light/40 p-5">
      
      {/* Header section with live indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-border/40 gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-danger opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-danger"></span>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-white tracking-widest">LIVE IN-PLAY TELEGRAM ALERT CHANNEL</h3>
            <p className="text-[10px] text-gray-500 font-mono text-left">UPTIME SECURE • 99.9% SUCTION ENGINE LATENCY</p>
          </div>
        </div>

        {/* Action to trigger alert simulator */}
        <button
          onClick={triggerSimulation}
          className="rounded-lg bg-brand-accent/15 border border-brand-accent/40 text-brand-accent flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold uppercase hover:bg-brand-accent/25 transition-all cursor-pointer"
        >
          <Play className="h-3 w-3 fill-current" />
          <span>Simulate Live Event</span>
        </button>
      </div>

      {notificationStatus && (
        <div className="mt-4 rounded bg-brand-accent/10 border border-brand-accent/30 py-2.5 px-4 text-xs font-bold text-brand-accent text-center animate-bounce flex items-center justify-center space-x-2">
          <Cpu className="h-4 w-4 animate-spin shrink-0" />
          <span>{notificationStatus}</span>
        </div>
      )}

      {/* Stream body */}
      <div className="mt-5 space-y-4 max-h-[460px] overflow-y-auto pr-1">
        {alerts.map((al) => (
          <div 
            key={al.id} 
            className={`rounded-lg border p-4 transition-all hover:scale-[1.01] ${
              al.urgency === 'HIGH' 
                ? 'border-red-500/30 bg-red-500/[0.03] hover:border-red-500/50' 
                : 'border-brand-border/60 bg-brand-dark/25 hover:border-brand-primary/30'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono mb-2">
              <span className="font-bold text-gray-300">{al.match}</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 font-bold">{al.time}</span>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-black ${
                  al.urgency === 'HIGH' 
                    ? 'bg-brand-danger/20 text-brand-danger' 
                    : 'bg-brand-primary/20 text-brand-accent'
                }`}>
                  {al.urgency} LATENCY
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">{al.message}</p>

            <div className="mt-3 rounded bg-brand-dark/90 border border-brand-border/80 px-3 py-2 flex items-center justify-between">
              <div>
                <span className="text-[8px] font-mono tracking-wider text-gray-500 uppercase block">RECOMMENDED CONTRACT</span>
                <span className="text-xs font-extrabold text-brand-accent">{al.recommendedContract}</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-brand-success font-mono">Buy Target</span>
            </div>
          </div>
        ))}
      </div>

      {/* Telegram bot config instructions */}
      <div className="mt-5 rounded bg-brand-dark p-3 border border-brand-border/40 text-[11px] text-gray-400">
        <p className="font-mono text-xs uppercase text-gray-300 mb-1 leading-none">Instant Telegram Integration</p>
        Want alerts directly to your phone? Contact the automated Telegram Bot <strong>@WorldPicksAlphaBot</strong>. Type <code>/verify [your-email]</code> to link your subscription status for instantaneous push updates.
      </div>

    </div>
  );
}
