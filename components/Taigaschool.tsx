
import React from 'react';
import { ArrowRight, Wind, Sun, Snowflake, ArrowDown, Flame, Home, Droplets, Axe, Camera, Coffee } from 'lucide-react';
import { IMAGES } from '../assets';

export const Taigaschool: React.FC = () => {
  return (
     <div className="h-full overflow-y-auto bg-arctic-950 scroll-smooth font-sans text-gray-200 selection:bg-luxury-gold selection:text-black">
        
        {/* --- HERO SECTION: WINTER ISOLATION --- */}
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-arctic-950/20 z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arctic-950 z-10"></div>
             
             <img 
                src={IMAGES.TAIGA.ISLAND}
                className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out] scale-110 brightness-90 saturate-[0.8]" 
                alt="Taiga Winter Island" 
             />
             
             <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-12">
                 <div className="mb-8 inline-flex items-center justify-center border border-white/20 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse shadow-[0_0_10px_#60A5FA]"></span>
                    <span className="text-blue-100 font-mono text-xs tracking-[0.3em] uppercase">Kitka Järvi • Kuusamo</span>
                 </div>
                 
                 <h1 className="text-8xl md:text-[10rem] font-serif text-white mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl">
                    TAIGA <br/> <span className="italic font-light text-blue-100 opacity-80">SCHOOL</span>
                 </h1>
                 
                 <p className="text-blue-50 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-serif italic text-shadow-lg">
                     "The Art of Arctic Living. Wood-fired cabins, ice-cold plunges, and the raw silence of the North."
                 </p>
                 
                 <a 
                    href="http://taigaschool.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group relative inline-flex items-center px-12 py-5 bg-blue-50/10 border border-blue-100/30 backdrop-blur-md text-blue-50 font-mono text-xs font-bold tracking-widest hover:bg-white hover:text-arctic-950 transition-all duration-500 shadow-[0_0_30px_rgba(239,246,255,0.1)]"
                 >
                    ENTER THE WILDERNESS
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                 </a>
             </div>

             <div className="absolute bottom-12 animate-bounce text-white/50 z-20">
                <ArrowDown className="w-6 h-6" />
             </div>
        </div>

        {/* --- PHILOSOPHY SECTION --- */}
        <div className="relative py-32 px-8 bg-arctic-900 border-t border-white/5">
            <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                 <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-orange-900/20 blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div>
                    <span className="text-orange-400 font-mono text-xs tracking-[0.2em] uppercase mb-6 block flex items-center">
                        <Axe className="w-4 h-4 mr-2" /> The Philosophy
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                        We chop wood, <br/> <span className="italic text-gray-500">we carry water.</span>
                    </h2>
                    <div className="space-y-8 text-gray-300 font-light text-lg leading-relaxed border-l border-white/10 pl-8">
                        <p>
                            In the Taiga, luxury is defined by effort. The warmth of the cabin feels better when you've split the logs yourself. The sauna hits harder after you've carved the hole in the ice.
                        </p>
                        <p>
                            This is not a hotel. This is a school of life. We strip away the noise of the modern world to reveal the essential rhythm of nature.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-16">
                        {[
                            { icon: Home, label: "Log Cabins", sub: "Hand-built aesthetic" },
                            { icon: Droplets, label: "Ice Dipping", sub: "Daily 0°C ritual" },
                            { icon: Flame, label: "Smoke Sauna", sub: "Ancient cleansing" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-6 border border-white/5 text-center group hover:border-orange-500/30 transition-colors">
                                <item.icon className="w-8 h-8 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-white font-serif text-lg">{item.label}</h4>
                                <p className="text-[10px] font-mono text-gray-500 uppercase mt-2 tracking-widest">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="relative group">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 border border-white/10">
                        <img src={IMAGES.TAIGA.CABIN} alt="Taiga Cabin Lifestyle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="font-mono text-xs text-orange-400 tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-orange-500/20">Basecamp: Oulanka</span>
                        </div>
                    </div>
                    <div className="absolute -top-6 -right-6 w-full h-full border border-white/5 z-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
                </div>
            </div>
        </div>

        {/* --- THE TRILOGY (EXPEDITIONS) --- */}
        <div className="bg-black">
            <div className="py-24 text-center">
                 <span className="text-gray-600 font-mono text-xs tracking-[0.5em] uppercase">The 2025 - 2026 Curriculum</span>
            </div>

            {/* EXPEDITION 1: SUMMER - Golden Light */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={IMAGES.TAIGA.FIRE} 
                        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Summer Campfire" 
                    />
                    {/* Golden Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-900/50 to-transparent mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-8 w-full relative z-20 flex flex-col md:flex-row items-end justify-between">
                    <div className="mb-12 md:mb-0">
                        <div className="flex items-center space-x-4 mb-4">
                            <Sun className="w-8 h-8 text-yellow-500 animate-pulse" />
                            <span className="text-yellow-500 font-mono text-sm tracking-widest uppercase">The Nightless Night</span>
                        </div>
                        <h3 className="text-6xl md:text-8xl font-serif text-white mb-4 leading-none text-shadow-lg">
                            Midsummer Magical <br/> <span className="italic text-yellow-500">Kitkajärvi Expedition</span>
                        </h3>
                        <p className="text-orange-100 text-xl font-light max-w-md leading-relaxed drop-shadow-md">
                            Experience the magic of 24-hour sunlight. Golden hours that last forever, misty mornings on the river, and the peak of Finnish summer.
                        </p>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 max-w-sm">
                        <div className="text-yellow-500 font-serif text-2xl mb-2">June 20 - 27, 2025</div>
                        <div className="h-px w-full bg-white/20 mb-4"></div>
                        <button className="w-full mt-8 py-4 bg-yellow-600/20 border border-yellow-600/50 text-yellow-500 font-mono text-xs font-bold uppercase tracking-widest hover:bg-yellow-600 hover:text-black transition-all">
                            Reserve Spot
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPEDITION 2: AUTUMN - Ruska */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={IMAGES.TAIGA.RUSKA} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Autumn Ruska" 
                    />
                    {/* Amber/Ruska Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-amber-950/90 via-amber-900/40 to-transparent mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-8 w-full relative z-20 flex flex-col md:flex-row-reverse items-end justify-between">
                    <div className="mb-12 md:mb-0 text-right">
                        <div className="flex items-center justify-end space-x-4 mb-4">
                            <span className="text-orange-400 font-mono text-sm tracking-widest uppercase">Colors of Decay</span>
                            <Wind className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-6xl md:text-8xl font-serif text-white mb-4 leading-none text-shadow-lg">
                            Magical Colors <br/> <span className="italic text-orange-500">of Autumn Expedition</span>
                        </h3>
                        <p className="text-orange-100 text-xl font-light max-w-md ml-auto leading-relaxed drop-shadow-md">
                            The Taiga explodes in reds and golds. We chase the 'Ruska' season, forage for mushrooms, and capture the first Auroras of the season.
                        </p>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 max-w-sm">
                        <div className="text-orange-400 font-serif text-2xl mb-2">Sept 15 - 22, 2025</div>
                        <div className="h-px w-full bg-white/20 mb-4"></div>
                        <button className="w-full mt-8 py-4 bg-orange-600/20 border border-orange-600/50 text-orange-500 font-mono text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-black transition-all">
                            Reserve Spot
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPEDITION 3: WINTER - Ice Water */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={IMAGES.TAIGA.ICE_WATER} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Deep Winter Ice" 
                    />
                    {/* Deep Blue Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-transparent mix-blend-multiply z-10"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-8 w-full relative z-20 flex flex-col md:flex-row items-end justify-between">
                    <div className="mb-12 md:mb-0">
                        <div className="flex items-center space-x-4 mb-4">
                            <Snowflake className="w-8 h-8 text-blue-300 animate-spin-slow" />
                            <span className="text-blue-300 font-mono text-sm tracking-widest uppercase">The Deep Freeze</span>
                        </div>
                        <h3 className="text-6xl md:text-8xl font-serif text-white mb-4 leading-none text-shadow-lg">
                            Deep Dark <br/> <span className="italic text-blue-300">Winter Expedition</span>
                        </h3>
                        <p className="text-blue-100 text-xl font-light max-w-md leading-relaxed drop-shadow-md">
                            The ultimate test. Embrace the silence of the deep winter, master the art of the "Avanto" ice dip, and photograph the frozen landscapes.
                        </p>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 max-w-sm">
                        <div className="text-blue-300 font-serif text-2xl mb-2">March 5 - 12, 2026</div>
                        <div className="h-px w-full bg-white/20 mb-4"></div>
                        <button className="w-full mt-8 py-4 bg-blue-600/20 border border-blue-600/50 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-black transition-all">
                            Reserve Spot
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* --- VISUAL ARCHIVE --- */}
        <div className="bg-arctic-950 py-24 px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-luxury-gold font-mono text-xs tracking-[0.2em] uppercase block mb-4">The Taiga Archives</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white">Moments from the Wild</h2>
                    </div>
                    <Camera className="w-6 h-6 text-gray-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[800px]">
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden border border-white/5">
                         <img src={IMAGES.TAIGA.ICE_WATER} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Ice Texture" />
                         <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] bg-black/50 text-white px-2 py-1">ICE TEXTURES</span>
                         </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src={IMAGES.TAIGA.FIRE} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Camp Coffee" />
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src={IMAGES.TAIGA.CABIN} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Sauna Smoke" />
                    </div>
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src={IMAGES.TAIGA.ISLAND} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Cabin Detail" />
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
};
