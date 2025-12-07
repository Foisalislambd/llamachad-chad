import React from 'react';
import { ArrowRight, Zap, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[#050505]">
        <div className="absolute inset-0 bg-grid opacity-30 animate-pulse"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-chad-purple/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-chad-green/10 rounded-full blur-[100px] mix-blend-screen animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute top-32 left-10 md:left-32 text-6xl animate-bounce-slow opacity-80 select-none hidden sm:block">🦙</div>
      <div className="absolute top-40 right-10 md:right-40 text-5xl animate-spin-slow opacity-80 select-none hidden sm:block">💎</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-pulse opacity-60 select-none hidden sm:block">🚀</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-2 rounded-full border border-chad-green/50 bg-chad-green/10 text-chad-green mb-8 backdrop-blur-md animate-float">
          <Zap size={16} className="mr-2 fill-current" />
          <span className="font-bold tracking-wider text-sm uppercase">The Official Currency of the Internet™</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none select-none">
          <span className="block text-white drop-shadow-lg">LLAMA</span>
          <span className="block gradient-text drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">CHAD</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          The first <span className="text-white font-bold">memecoin</span> powered by <span className="text-chad-pink font-bold">vibes</span>, <span className="text-chad-blue font-bold">delusion</span>, and absolutely zero utility.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              BUY $CHAD NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-chad-green to-chad-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="px-8 py-4 glass-panel border border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md">
            <Star size={20} className="text-chad-gold fill-current" />
            JOIN THE CULT
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 w-full bg-chad-pink/10 border-t border-chad-pink/20 backdrop-blur-md py-4 overflow-hidden transform rotate-[-2deg] scale-110 translate-y-10 hover:rotate-0 transition-transform duration-500 z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-chad-pink font-display text-2xl md:text-4xl font-bold uppercase tracking-widest">
          <span>🚀 WAGMI</span>
          <span>💎 DIAMOND HANDS</span>
          <span>🌙 TO THE MOON</span>
          <span>🏎️ WEN LAMBO</span>
          <span>📉 BUY THE DIP</span>
          <span>🦙 LLAMA CHAD</span>
          <span>🚀 WAGMI</span>
          <span>💎 DIAMOND HANDS</span>
          <span>🌙 TO THE MOON</span>
          <span>🏎️ WEN LAMBO</span>
          <span>📉 BUY THE DIP</span>
          <span>🦙 LLAMA CHAD</span>
          <span>🚀 WAGMI</span>
          <span>💎 DIAMOND HANDS</span>
        </div>
      </div>
    </section>
  );
};