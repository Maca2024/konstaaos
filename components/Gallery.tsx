
import React, { useState } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, Download, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';
import { IMAGES } from '../assets';

interface GalleryProps {
  onNavigate?: (view: ViewState) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Curated Selection based on User Picks
  const photos = [
    { src: IMAGES.WILDLIFE.FOX, title: "Arctic Fox", loc: "Svalbard" }, // User Pick 5
    { src: IMAGES.WILDLIFE.PUFFIN, title: "Atlantic Puffin", loc: "Faroe Islands" }, // User Pick 3
    { src: IMAGES.WILDLIFE.WOLF, title: "The White Wolf", loc: "Border Zone" }, // User Pick 2
    { src: IMAGES.WILDLIFE.SQUIRREL, title: "The Curious Squirrel", loc: "Helsinki" },
    { src: IMAGES.WILDLIFE.LEOPARD, title: "Ghost of Mountains", loc: "Himalayas" }, // User Pick 6
    { src: IMAGES.WILDLIFE.OWL, title: "Great Grey Ghost", loc: "Lapland" },
    { src: IMAGES.WILDLIFE.BEAR, title: "King of the Taiga", loc: "Kuhmo" },
    { src: IMAGES.HERO.AURORA, title: "Spirits of the Sky", loc: "Rovaniemi" },
    { src: IMAGES.KONSTA.FIELD_LENS, title: "In The Field", loc: "Behind The Scenes" }, // User Pick 7
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
        setSelectedIdx((selectedIdx + 1) % photos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
        setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto relative">
        
        {/* Lightbox */}
        {selectedIdx !== null && (
            <div className="fixed inset-0 z-50 bg-black/98 flex flex-col items-center justify-center animate-in fade-in duration-200">
                <div className="absolute top-0 w-full p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
                    <div className="text-white">
                        <h2 className="font-serif text-2xl">{photos[selectedIdx].title}</h2>
                        <p className="font-mono text-xs text-luxury-gold tracking-widest">{photos[selectedIdx].loc}</p>
                    </div>
                    <div className="flex space-x-6">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Download className="w-6 h-6" />
                        </button>
                        <button onClick={() => setSelectedIdx(null)} className="text-white hover:text-luxury-gold transition-colors">
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                <button onClick={handlePrev} className="absolute left-8 p-4 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all z-50">
                    <ChevronLeft className="w-10 h-10" />
                </button>

                <div className="w-full h-full p-8 md:p-20 flex items-center justify-center">
                    <img 
                        src={photos[selectedIdx].src} 
                        alt={photos[selectedIdx].title} 
                        className="max-h-full max-w-full object-contain shadow-2xl"
                    />
                </div>

                <button onClick={handleNext} className="absolute right-8 p-4 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all z-50">
                    <ChevronRight className="w-10 h-10" />
                </button>

                <div className="absolute bottom-8 text-gray-500 font-mono text-xs tracking-widest">
                    {selectedIdx + 1} / {photos.length}
                </div>
            </div>
        )}

        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
            <div>
                <span className="font-mono text-luxury-gold text-xs tracking-[0.2em] uppercase mb-2 block">Archive</span>
                <h1 className="text-4xl md:text-6xl font-serif text-white">Portfolio</h1>
            </div>
            <div className="flex space-x-6 text-xs font-mono tracking-widest text-gray-500 hidden md:flex">
                <button className="text-white border-b border-luxury-gold pb-1">ALL</button>
                <button className="hover:text-white transition-colors">WILDLIFE</button>
                <button className="hover:text-white transition-colors">LANDSCAPE</button>
                <button className="hover:text-white transition-colors">COMMERCIAL</button>
            </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {photos.map((item, idx) => (
                <div key={idx} onClick={() => setSelectedIdx(idx)} className="relative group break-inside-avoid cursor-zoom-in overflow-hidden">
                    <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
                            <span className="text-white font-serif text-xl italic block">{item.title}</span>
                            <span className="text-luxury-gold font-mono text-[10px] tracking-[0.2em] mt-2 block">VIEW FULL RES</span>
                        </div>
                    </div>
                    <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 backdrop-blur-md text-white rounded-full">
                        <Expand className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>

        {/* About Konsta Section - Uses "Frozen Face" (User Pick 9) */}
        <div className="mt-24 border-t border-white/10 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <span className="font-mono text-luxury-gold text-xs tracking-[0.2em] uppercase mb-4 block">The Photographer</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">About Konsta Punkka</h3>
                    <div className="w-16 h-0.5 bg-white/20 mb-8"></div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                        Konsta Punkka is a worldwide published wildlife photographer and speaker based in Finland. Often referred to as the "Squirrel Whisperer," he specializes in capturing the intimate expressions and behaviors of Arctic wildlife.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-10 font-light text-lg">
                        Driven by a profound respect for nature and a commitment to ethical conservation, Konsta spends countless hours in the wilderness, building trust with the animals he photographs. His work seeks to bridge the emotional gap between humanity and the wild, reminding us of the fragile beauty that thrives in the silence of the North.
                    </p>

                    <button 
                        onClick={() => onNavigate && onNavigate(ViewState.WORKSHOPS)}
                        className="group inline-flex items-center px-8 py-4 bg-white/5 border border-white/20 text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all font-mono text-xs tracking-widest uppercase"
                    >
                        <span>Join an Expedition</span>
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="order-1 md:order-2 relative h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-arctic-950/80 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity"></div>
                     {/* User Pick 9: Frozen Face */}
                     <img 
                        src={IMAGES.KONSTA.FROZEN_FACE} 
                        alt="Konsta Punkka Frozen" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                     />
                     <div className="absolute bottom-6 left-6 z-20">
                         <p className="text-white font-serif italic text-xl">"The cold is just a state of mind."</p>
                     </div>
                </div>
            </div>
        </div>
        
        <div className="mt-16 text-center border-t border-white/10 pt-12 pb-12">
            <p className="font-serif text-gray-500 italic text-lg mb-6">"Nature whispers its secrets to those who listen."</p>
            <button className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black text-white font-mono text-xs tracking-widest transition-all">
                REQUEST LICENSING
            </button>
        </div>
    </div>
  );
};
