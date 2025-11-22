
import React from 'react';
import { Camera, Users, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import { StatMetric, ViewState } from '../types';
import { IMAGES } from '../assets';

interface DashboardProps {
  onNavigate: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const stats: StatMetric[] = [
    { label: 'Total Audience', value: '1.24M', trend: 9.1, unit: 'Global' },
    { label: 'AOS Members', value: '21.9K', trend: 12.5, unit: 'Active' },
    { label: 'Conservation', value: '€24.5K', trend: 5.2, unit: 'Fund' },
    { label: 'Nodes', value: '9', trend: 0, unit: 'Operational' },
  ];

  const handleSignalClick = (title: string) => {
      if (title.includes('Snow Leopard') || title.includes('Svalbard')) {
          onNavigate(ViewState.WORKSHOPS);
      } else {
          onNavigate(ViewState.GALLERY);
      }
  };

  return (
    <div className="relative min-h-full overflow-y-auto">
      {/* Cinematic Hero Section - Aurora Borealis (User Pick 1) */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <img 
          src={IMAGES.HERO.AURORA} 
          alt="Aurora Borealis" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arctic-950 via-arctic-950/20 to-transparent"></div>
        
        <div className="absolute bottom-40 left-0 p-12 w-full">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-mono text-luxury-gold mb-4 backdrop-blur-md animate-pulse">
              SYSTEM STATUS: ONLINE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">
              The Arctic <br />Operating System
            </h1>
            <p className="text-gray-300 max-w-xl font-sans text-lg font-light leading-relaxed">
              Welcome to the digital nervous system of the Konsta Punkka ecosystem. 
              Monitoring 9 global nodes and connecting 21,000+ wildlife enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar - Floating Glass */}
      <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-none border-l-2 border-luxury-gold/50 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-gray-400 text-xs font-mono tracking-widest uppercase">{stat.label}</span>
                {stat.trend > 0 && <TrendingUp className="w-3 h-3 text-luxury-gold" />}
              </div>
              <div className="text-3xl font-serif text-white">{stat.value}</div>
              <div className="text-xs text-arctic-500 font-mono mt-1">{stat.unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Recent Signals */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-serif text-white border-b border-white/10 pb-4 flex items-center justify-between">
            <span>Latest Signals</span>
            <span className="text-xs font-mono text-gray-500">LIVE FEED</span>
          </h2>
          
          <div className="space-y-0">
            {[
              { 
                title: 'Project: Ghost of the Mountains', 
                meta: 'Conservation • Himalayas',
                icon: Globe,
                img: IMAGES.WILDLIFE.LEOPARD // User Pick 6
              },
              { 
                title: 'New Print: The White Wolf', 
                meta: 'Fine Art • 5h ago',
                icon: Camera,
                img: IMAGES.WILDLIFE.WOLF // User Pick 2
              },
              { 
                title: 'Svalbard: Puffin Migration', 
                meta: 'Expedition Log • 1d ago',
                icon: Users,
                img: IMAGES.WILDLIFE.PUFFIN // User Pick 3
              },
            ].map((item, i) => (
              <div onClick={() => handleSignalClick(item.title)} key={i} className="group flex items-center gap-6 p-6 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                <div className="w-24 h-16 overflow-hidden rounded-sm relative shrink-0">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif text-white group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                  <p className="text-xs font-mono text-gray-500 mt-1 group-hover:text-gray-300 transition-colors">{item.meta}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Operational Status - Squirrel Focus */}
        <div className="space-y-8">
           <h2 className="text-2xl font-serif text-white border-b border-white/10 pb-4">
            Node Status
          </h2>
          
          <div className="glass-panel p-6 relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
                {/* Signature Red Squirrel Close-up */}
                <img src={IMAGES.WILDLIFE.SQUIRREL} className="w-full h-full object-cover grayscale" alt="Squirrel Status" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-mono text-white drop-shadow-md">FINLAND HQ</span>
                    </div>
                    <span className="text-xs text-gray-200 drop-shadow-md">65.01° N</span>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs font-mono text-gray-300">
                        <span className="drop-shadow-sm">TEMP</span>
                        <span className="text-white drop-shadow-sm">-12°C</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-gray-300">
                        <span className="drop-shadow-sm">LIGHT</span>
                        <span className="text-white drop-shadow-sm">4h 20m</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="p-6 border border-white/10 rounded-sm flex flex-col items-center text-center bg-arctic-900/30">
            <span className="text-luxury-gold text-4xl font-serif mb-2">100%</span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Carbon Offset</span>
            <p className="text-gray-400 text-sm mt-4 font-light">All digital and physical operations for Q1 2025 have been offset via Snow Leopard Trust.</p>
          </div>

        </div>
      </div>
    </div>
  );
};
