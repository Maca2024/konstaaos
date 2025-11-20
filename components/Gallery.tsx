
import React, { useState } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Konsta Punkka specific aesthetic: Moody, desaturated, intimate wildlife portraits
  const photos = [
    { src: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=1600&q=90", title: "Arctic Fox Portrait", loc: "Svalbard" },
    { src: "https://images.unsplash.com/photo-1507666405895-422eee4d517f?w=1600&q=90", title: "The Curious Squirrel", loc: "Helsinki" },
    { src: "https://images.unsplash.com/photo-1568162603664-fcd658421851?w=1600&q=90", title: "King of the Taiga", loc: "Kuhmo" },
    { src: "https://images.unsplash.com/photo-1548128724-92eb07781291?w=1600&q=90", title: "Great Grey Ghost", loc: "Lapland" },
    { src: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=1600&q=90", title: "Winter Solstice Deer", loc: "Norway" },
    { src: "https://images.unsplash.com/photo-1463597723068-6232e75b749e?w=1600&q=90", title: "Silence of the North", loc: "Muonio" },
    { src: "https://images.unsplash.com/photo-1598347976578-b46595e02b60?w=1600&q=90", title: "The Pack Alpha", loc: "Eastern Border" },
    { src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=90", title: "Spirits of the Sky", loc: "Rovaniemi" },
    { src: "https://images.unsplash.com/photo-1551799656-165649d5b6c5?w=1600&q=90", title: "Fox in the Storm", loc: "Svalbard" },
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
        
        <div className="mt-16 text-center border-t border-white/10 pt-12 pb-12">
            <p className="font-serif text-gray-500 italic text-lg mb-6">"Nature whispers its secrets to those who listen."</p>
            <button className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black text-white font-mono text-xs tracking-widest transition-all">
                REQUEST LICENSING
            </button>
        </div>
    </div>
  );
};
