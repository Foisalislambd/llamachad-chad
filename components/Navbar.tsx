import React, { useState } from 'react';
import { Menu, X, Rocket, Wallet } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const connectWallet = () => {
    alert("SYSTEM ERROR: Wallet contains too much fiat currency. Please convert to $CHAD.");
  };

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer group flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
              <div className="relative">
                <Rocket className="w-8 h-8 text-chad-pink animate-pulse-fast transform group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-chad-pink blur-lg opacity-50 animate-pulse"></div>
              </div>
              <span className="font-display text-2xl tracking-wider text-white group-hover:text-chad-blue transition-colors">
                LLAMA<span className="text-chad-pink">CHAD</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#chart" className="text-gray-400 hover:text-chad-green hover:neon-text px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all">Stonks</a>
                <a href="#roadmap" className="text-gray-400 hover:text-chad-pink hover:neon-text px-3 py-2 rounded-md text-sm font-bold uppercase tracking-widest transition-all">Plan</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={connectWallet}
              className="bg-gradient-to-r from-chad-purple to-chad-pink hover:from-chad-pink hover:to-chad-purple text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] border border-white/20"
            >
              <Wallet size={18} />
              CONNECT
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/5 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#chart" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-chad-green block px-3 py-2 rounded-md text-base font-bold uppercase">Stonks</a>
            <a href="#roadmap" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-chad-pink block px-3 py-2 rounded-md text-base font-bold uppercase">Plan</a>
            <button 
              onClick={connectWallet}
              className="w-full text-left bg-chad-purple text-white px-3 py-2 rounded-md text-base font-bold mt-4 uppercase"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};