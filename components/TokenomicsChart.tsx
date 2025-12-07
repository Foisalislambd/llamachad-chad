import React, { useEffect, useState, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '../types';

// Mock data generator
const generateData = (): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  let price = 420.69;
  let hype = 50;
  
  for (let i = 0; i < 24; i++) {
    const change = (Math.random() - 0.35) * 20; // Bias upwards
    price = Math.max(100, price + change);
    hype = Math.min(100, Math.max(0, hype + (Math.random() - 0.5) * 20));
    
    data.push({
      time: `${i}:00`,
      price: price,
      hype: hype
    });
  }
  return data;
};

export const TokenomicsChart: React.FC = () => {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(generateData());
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        const newPrice = Math.max(100, last.price + (Math.random() - 0.3) * 15);
        const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newPoint = {
            time: newTime,
            price: newPrice,
            hype: Math.random() * 100
        };
        // Keep array size constant-ish
        const newData = [...prev.slice(1), newPoint];
        return newData;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const runAway = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - 100);
    const y = Math.random() * (containerRect.height - 50);
    setBtnPos({ x, y });
  };

  return (
    <div id="chart" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-chad-green to-chad-blue">
              Number Go Up Technology™
            </h2>
            <p className="text-gray-400 text-xl font-mono">Advanced visuals for simple apes.</p>
        </div>

        <div className="glass-panel p-1 rounded-3xl shadow-[0_0_50px_rgba(0,255,148,0.1)] border border-chad-green/30 bg-black/40">
            {/* Fake Browser Toolbar */}
            <div className="bg-white/5 px-6 py-3 rounded-t-2xl flex items-center gap-4 border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-black/50 rounded px-4 py-1 text-xs text-gray-500 font-mono text-center">
                    chad-finance-terminal-v69.exe
                </div>
            </div>

            <div className="p-6 md:p-10">
                <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00FF94" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="time" stroke="#666" tick={{fill: '#666', fontSize: 12}} />
                    <YAxis 
                        domain={['auto', 'auto']} 
                        stroke="#666" 
                        tick={{fill: '#666', fontSize: 12}}
                        tickFormatter={(val) => `$${val.toFixed(0)}`} 
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                        itemStyle={{ color: '#00FF94' }}
                        labelStyle={{ color: '#888', marginBottom: '5px' }}
                        formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#00FF94" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorPrice)" 
                        animationDuration={500}
                    />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-sm font-mono">
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/20 text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            MARKET: EUPHORIC
                        </div>
                        <div className="text-gray-500">
                            VOLUME: <span className="text-white">∞</span>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 relative w-full md:w-auto h-16 md:h-auto items-center justify-end">
                        <button className="px-8 py-3 bg-chad-green text-black font-black uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(0,255,148,0.5)] transition-all hover:scale-105 active:scale-95">
                            Buy More
                        </button>
                        <button 
                            onMouseEnter={runAway}
                            style={{ 
                                transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
                                transition: 'transform 0.2s ease-out'
                            }}
                            className="px-8 py-3 bg-red-500/10 text-red-500 border border-red-500/30 font-black uppercase tracking-wider rounded-lg cursor-not-allowed hover:bg-red-500 hover:text-white"
                        >
                            Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};