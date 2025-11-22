
import React from 'react';
import { ArrowRight, Wind, Sun, Snowflake, ArrowDown, Flame, Home, Droplets, Axe, Camera, Coffee } from 'lucide-react';
import { IMAGES } from '../assets';

export const Taigaschool: React.FC = () => {
  return (
     <div className="h-full overflow-y-auto bg-arctic-950 scroll-smooth font-sans text-gray-200 selection:bg-luxury-gold selection:text-black">
        
        {/* --- HERO SECTION: TAIGA BOREALIS --- */}
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
             {/* Image: Winter picture of the taiga borealis */}
             <div className="absolute inset-0 bg-arctic-950/20 z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arctic-950 z-10"></div>
             
             <img 
                src={IMAGES.HERO.WINTER_ROAD}
                className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out] scale-110 brightness-110 saturate-[0.9]" 
                alt="Taiga Borealis Winter" 
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

        {/* --- PHILOSOPHY SECTION: WOOD & CHAINSAW --- */}
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
                    {/* Image: Chainsaw / Wood Pile */}
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1582108312402-93320404d336?w=1200&q=80" alt="Taiga Lifestyle Wood Chopping" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] grayscale hover:grayscale-0" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="font-mono text-xs text-orange-400 tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-orange-500/20">Essential Gear: Stihl 500i</span>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-full h-full border border-white/5 z-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
                </div>
            </div>
        </div>

        {/* --- THE TRILOGY (EXPEDITIONS) --- */}
        <div className="bg-black">
            <div className="py-24 text-center">
                 <span className="text-gray-600 font-mono text-xs tracking-[0.5em] uppercase">The 2025 - 2026 Curriculum</span>
            </div>

            {/* EXPEDITION 1: SUMMER - Misty Lake */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?q=80&w=2400&auto=format&fit=crop" 
                        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Misty Summer Lake" 
                    />
                    {/* Heavy Golden Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-900/50 to-transparent mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-yellow-500/10 z-10 mix-blend-overlay"></div>
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
                        <ul className="space-y-3 font-mono text-xs text-gray-300 mb-8">
                            <li className="flex justify-between"><span>Temp</span> <span className="text-white">15°C / 20°C</span></li>
                            <li className="flex justify-between"><span>Light</span> <span className="text-white">24 Hours</span></li>
                            <li className="flex justify-between"><span>Focus</span> <span className="text-white">Atmosphere & Mist</span></li>
                        </ul>
                        <button className="w-full py-4 bg-yellow-600/20 border border-yellow-600/50 text-yellow-500 font-mono text-xs font-bold uppercase tracking-widest hover:bg-yellow-600 hover:text-black transition-all">
                            Reserve Spot
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPEDITION 2: AUTUMN - Ruska Forest */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=2400&auto=format&fit=crop" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Autumn Forest Road" 
                    />
                     {/* Heavy Ruska/Brown Gradient Overlay */}
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
                        <ul className="space-y-3 font-mono text-xs text-gray-300 mb-8">
                            <li className="flex justify-between"><span>Temp</span> <span className="text-white">5°C / 12°C</span></li>
                            <li className="flex justify-between"><span>Light</span> <span className="text-white">12 Hours</span></li>
                            <li className="flex justify-between"><span>Focus</span> <span className="text-white">Color & Macro</span></li>
                        </ul>
                        <button className="w-full py-4 bg-orange-600/20 border border-orange-600/50 text-orange-500 font-mono text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-black transition-all">
                            Reserve Spot
                        </button>
                    </div>
                </div>
            </div>

            {/* EXPEDITION 3: WINTER - Deep Snow */}
            <div className="group relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1518182170546-0766eb6f6a56?q=80&w=2400&auto=format&fit=crop" 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[20s]" 
                        alt="Deep Winter Snow" 
                    />
                    {/* Heavy Blue/Cold Gradient Overlay */}
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
                        <ul className="space-y-3 font-mono text-xs text-gray-300 mb-8">
                            <li className="flex justify-between"><span>Temp</span> <span className="text-white">-15°C / -30°C</span></li>
                            <li className="flex justify-between"><span>Light</span> <span className="text-white">Increasing</span></li>
                            <li className="flex justify-between"><span>Focus</span> <span className="text-white">Resilience & Ice</span></li>
                        </ul>
                        <button className="w-full py-4 bg-blue-600/20 border border-blue-600/50 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-black transition-all">
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
                    {/* Item 1: Texture / Ice */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden border border-white/5">
                         <img src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Ice Texture" />
                         <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] bg-black/50 text-white px-2 py-1">ICE TEXTURES</span>
                         </div>
                    </div>

                    {/* Item 2: Coffee / Fire */}
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1200&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Camp Coffee" />
                         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Coffee className="w-5 h-5 text-white drop-shadow-md" />
                         </div>
                    </div>

                    {/* Item 3: Sauna / Smoke */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src="https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Sauna Smoke" />
                    </div>

                    {/* Item 4: Detail of Cabin Wood */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-white/5">
                         <img src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Cabin Detail" />
                    </div>
                </div>
            </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="relative py-32 bg-arctic-950 flex flex-col items-center text-center px-8 overflow-hidden">
             {/* Background accent */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent opacity-50"></div>
             
             <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 max-w-5xl leading-tight">
                    The Wilderness is <br/> <span className="italic text-luxury-gold">Waiting.</span>
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a 
                        href="http://taigaschool.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-12 py-5 bg-luxury-gold text-black font-mono text-sm font-bold tracking-widest hover:bg-white transition-colors shadow-[0_0_40px_rgba(212,197,166,0.3)]"
                    >
                        APPLY FOR 2025
                    </a>
                </div>

                <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Sponsor Logos */}
                    <span className="text-2xl font-serif italic text-white">Nikon</span>
                    <span className="text-2xl font-serif italic text-white">Swarovski Optik</span>
                    <span className="text-2xl font-serif italic text-white">66° North</span>
                    <span className="text-2xl font-serif italic text-white">Kuusamo</span>
                </div>
             </div>
        </div>
     </div>
  );
};
