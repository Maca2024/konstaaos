
import React from 'react';
import { Instagram, Twitter, Facebook, Globe, ArrowUpRight, Heart } from 'lucide-react';

export const Socials: React.FC = () => {
  const recentInsta = [
    "https://images.unsplash.com/photo-1507666405895-422eee4d517f?w=200&q=80", // Squirrel
    "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=200&q=80", // Fox
    "https://images.unsplash.com/photo-1568162603664-fcd658421851?w=200&q=80"  // Bear
  ];

  return (
    <div className="p-8 h-full overflow-y-auto">
        <div className="text-center mb-16">
             <h1 className="text-5xl font-serif text-white mb-4">The Ecosystem</h1>
             <p className="text-gray-400 font-mono text-sm tracking-widest">CONNECT WITH KONSTA ACROSS THE GRID</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-12">
            
            {/* Instagram */}
            <div className="bg-white/5 border border-white/5 p-6 hover:border-pink-500/30 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                    <Instagram className="w-8 h-8 text-pink-500" />
                    <a href="https://www.instagram.com/kpunkka/" target="_blank" rel="noreferrer" className="text-xs font-mono text-white border border-white/20 px-3 py-1 hover:bg-pink-500 hover:border-pink-500 transition-all">FOLLOW</a>
                </div>
                <div className="text-3xl font-serif text-white mb-1">1.24M</div>
                <div className="text-xs text-gray-500 font-mono mb-8">FOLLOWERS</div>
                
                <div className="space-y-4">
                    {recentInsta.map((img, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 bg-black/20 rounded hover:bg-black/40 transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-gray-800 overflow-hidden">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-300 line-clamp-1 font-serif italic">"Chasing the light in the north..."</p>
                                <div className="flex items-center mt-1 text-[10px] text-gray-500">
                                    <Heart className="w-3 h-3 mr-1" /> 42.5K
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Twitter/X */}
            <div className="bg-white/5 border border-white/5 p-6 hover:border-blue-400/30 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                    <Twitter className="w-8 h-8 text-blue-400" />
                    <a href="https://twitter.com/kpunkka" target="_blank" rel="noreferrer" className="text-xs font-mono text-white border border-white/20 px-3 py-1 hover:bg-blue-400 hover:border-blue-400 transition-all">FOLLOW</a>
                </div>
                <div className="text-3xl font-serif text-white mb-1">85.2K</div>
                <div className="text-xs text-gray-500 font-mono mb-8">FOLLOWERS</div>
                
                <div className="space-y-4">
                     {[
                         "Just landed in Greenland. The light is absolutely insane right now. ❄️ #ArcticLife",
                         "New workshop dates for 2026 dropping tomorrow on the platform. Stay tuned.",
                         "Opinion: The 85mm f/1.2 is the best wildlife portrait lens. Fight me."
                     ].map((tweet, i) => (
                        <div key={i} className="p-3 bg-black/20 rounded hover:bg-black/40 transition-colors cursor-pointer">
                            <p className="text-xs text-gray-300 leading-relaxed mb-2">{tweet}</p>
                            <span className="text-[10px] text-gray-600 font-mono">2h ago</span>
                        </div>
                     ))}
                </div>
            </div>

             {/* Links */}
             <div className="space-y-4">
                 {[
                     { icon: Globe, label: "Official Website", link: "https://www.konstapunkka.com/" },
                     { icon: Facebook, label: "Facebook Page", link: "https://www.facebook.com/kpunkkaimages" },
                     { icon: Globe, label: "National Geographic", link: "https://www.nationalgeographic.com/contributors/p/konsta-punkka" },
                 ].map((item, i) => (
                     <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                         <div className="flex items-center">
                             <item.icon className="w-5 h-5 text-gray-400 group-hover:text-luxury-gold mr-4" />
                             <span className="text-white font-serif text-lg">{item.label}</span>
                         </div>
                         <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
                     </a>
                 ))}

                 <div className="p-6 bg-luxury-gold/10 border border-luxury-gold/20 mt-8">
                     <h3 className="text-luxury-gold font-serif text-xl mb-2">Press Inquiries</h3>
                     <p className="text-gray-400 text-xs mb-4">For commercial licensing and brand partnerships.</p>
                     <a href="mailto:info@konstapunkka.com" className="block w-full py-3 bg-luxury-gold text-black font-mono text-xs font-bold hover:bg-white transition-colors text-center">CONTACT AGENT</a>
                 </div>
             </div>

        </div>
    </div>
  );
};
