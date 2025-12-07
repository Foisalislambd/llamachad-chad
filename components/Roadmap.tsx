import React from 'react';
import { Check, Rocket, Flag, Globe } from 'lucide-react';

const phases = [
  {
    title: "Phase 1: The Awakening",
    items: ["Deploy Terrible Website", "Generate 10,000 Memes", "Annoy friends to buy", "First 1,000 Believers"],
    status: "completed",
    icon: <Check className="text-black" size={24} strokeWidth={3} />
  },
  {
    title: "Phase 2: The Hype",
    items: ["Viral TikTok Challenge", "Paid Shills on Twitter", "Merch Store (Coming Soon)", "Listing on Sketchy Exchanges"],
    status: "active",
    icon: <Rocket className="text-black fill-current" size={24} />
  },
  {
    title: "Phase 3: The Takeover",
    items: ["Binance Listing (Manifesting)", "Elon Musk Notice Us", "LlamaChad Theme Park", "Replace USD as Reserve Currency"],
    status: "future",
    icon: <Globe className="text-gray-500" size={24} />
  },
  {
    title: "Phase 4: Nirvana",
    items: ["We Buy The Moon", "Intergalactic Expansion", "Simulation Resets", "WAGMI Forever"],
    status: "future",
    icon: <Flag className="text-gray-500" size={24} />
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-chad-blue/10 via-chad-purple/10 to-chad-pink/10 -rotate-6 blur-3xl -z-10 transform -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 text-white drop-shadow-lg uppercase">
            World <span className="text-transparent bg-clip-text bg-gradient-to-r from-chad-pink to-chad-gold">Domination</span>
        </h2>
        
        <div className="relative">
            {/* Center Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-chad-green via-chad-purple to-chad-pink transform -translate-x-1/2 hidden md:block rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

            <div className="space-y-16">
            {phases.map((phase, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="flex-1 w-full group perspective">
                    <div className={`p-8 rounded-2xl glass-panel border transition-all duration-500 transform hover:scale-105 hover:-rotate-1 relative overflow-hidden ${
                        phase.status === 'completed' ? 'border-chad-green/50 shadow-[0_0_30px_rgba(0,255,148,0.1)]' : 
                        phase.status === 'active' ? 'border-chad-gold/50 shadow-[0_0_30px_rgba(255,215,0,0.15)] ring-1 ring-chad-gold/20' : 
                        'border-white/10 hover:border-white/30'
                    }`}>
                        {phase.status === 'active' && (
                            <div className="absolute top-0 right-0 bg-chad-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg">CURRENT</div>
                        )}

                        <h3 className={`text-2xl font-black mb-4 uppercase ${
                            phase.status === 'completed' ? 'text-chad-green' :
                            phase.status === 'active' ? 'text-chad-gold' :
                            'text-gray-500'
                        }`}>{phase.title}</h3>
                        
                        <ul className="space-y-3">
                            {phase.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 font-medium">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                        phase.status === 'completed' ? 'bg-chad-green' :
                                        phase.status === 'active' ? 'bg-chad-gold' :
                                        'bg-gray-600'
                                    }`}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex flex-col items-center justify-center w-12 relative z-20">
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-lg transition-all duration-500 ${
                        phase.status === 'completed' ? 'border-chad-green bg-chad-green text-black scale-110' :
                        phase.status === 'active' ? 'border-chad-gold bg-chad-gold text-black scale-125 animate-pulse' :
                        'border-gray-800 bg-gray-900 text-gray-600'
                    }`}>
                        {phase.icon}
                    </div>
                </div>

                <div className="flex-1 hidden md:block"></div> 
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};