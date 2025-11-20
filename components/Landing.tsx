
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 1000); // Wait for animation
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
         {/* Reverted to Arctic Fox (Sneeuw Vos) */}
         <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[20s] ease-out transform scale-105 hover:scale-110 grayscale-[0.2] opacity-60`}></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className={`transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-luxury-gold font-mono text-xs tracking-[0.4em] uppercase mb-6">The Arctic Operating System</h2>
            <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-8">
              KONSTA <br /> PUNKKA
            </h1>
            <p className="text-gray-300 font-light text-lg max-w-xl mx-auto leading-relaxed mb-12 font-serif italic">
              "Capturing the breathing silence of the North."
            </p>

            <button 
              onClick={handleEnter}
              className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-transparent border border-white/20 transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center tracking-widest text-xs uppercase">
                Enter System <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 left-0 w-full text-center">
        <span className={`inline-block text-[10px] text-gray-600 font-mono tracking-[0.3em] transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          HELSINKI • 60.1699° N
        </span>
      </div>
    </div>
  );
};
