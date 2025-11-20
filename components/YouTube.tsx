
import React, { useState } from 'react';
import { Play, Share2, Clock, X } from 'lucide-react';

export const YouTube: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const featuredVideo = {
    id: "q2eoIBPSHys",
    title: "Photographing The Rarest Animals In The World",
    desc: "Join me on a journey to find the most elusive creatures in the arctic circle.",
    thumb: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
  };

  const videos = [
    {
      id: "7_KMs4s3fXo", // Placeholder ID for demo, replaced with realistic look
      title: "How I Photograph Shy Wildlife (Red Squirrels)",
      views: "1.2M views",
      duration: "14:20",
      thumb: "https://images.unsplash.com/photo-1507666405895-422eee4d517f?w=800&q=80"
    },
    {
      id: "x6bS1X9d7f0",
      title: "Surviving -30C: Arctic Gear Guide 2025",
      views: "890K views",
      duration: "22:15",
      thumb: "https://images.unsplash.com/photo-1518182170546-0766eb6f6a56?w=800&q=80"
    },
    {
      id: "m9S3X8d7f0",
      title: "Cinematic Composition Rules I Break",
      views: "450K views",
      duration: "18:45",
      thumb: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800&q=80"
    },
    {
      id: "p8D2X9d7f0",
      title: "Tracking Wolves in Eastern Finland",
      views: "2.1M views",
      duration: "35:00",
      thumb: "https://images.unsplash.com/photo-1598347976578-b46595e02b60?w=800&q=80"
    },
  ];

  return (
    <div className="p-8 h-full overflow-y-auto relative">
        {/* Video Modal Overlay */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-20 animate-in fade-in duration-300">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white hover:text-luxury-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full max-w-7xl aspect-video bg-black border border-white/10 shadow-2xl shadow-luxury-gold/10">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center">
                 <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <Play className="w-6 h-6 text-white fill-white" />
                 </div>
                 <div>
                    <h1 className="text-4xl font-serif text-white">Konsta TV</h1>
                    <span className="text-gray-500 font-mono text-xs">NEW EPISODES EVERY SUNDAY</span>
                 </div>
            </div>
            <a 
              href="https://www.youtube.com/@KonstaPunkka" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 font-mono text-xs font-bold tracking-wider hover:bg-gray-200 transition-colors"
            >
                SUBSCRIBE
            </a>
        </div>

        {/* Featured Video */}
        <div 
          onClick={() => setActiveVideo(featuredVideo.id)}
          className="mb-12 relative aspect-video w-full bg-black group cursor-pointer overflow-hidden border border-white/10"
        >
             <img src={featuredVideo.thumb} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm bg-black/20">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
             </div>
             <div className="absolute bottom-0 left-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/60 to-transparent w-full">
                 <span className="bg-luxury-gold text-black text-[10px] font-bold px-2 py-1 mb-3 inline-block tracking-widest">LATEST PREMIERE</span>
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-2">{featuredVideo.title}</h2>
                 <p className="text-gray-300 max-w-xl font-light text-lg">{featuredVideo.desc}</p>
             </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                    <div className="relative aspect-video bg-white/5 mb-4 overflow-hidden border border-white/5 group-hover:border-luxury-gold/30 transition-colors">
                        <img src={video.thumb} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-white backdrop-blur-md">
                            {video.duration}
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                             <Play className="w-10 h-10 text-white fill-white drop-shadow-lg" />
                        </div>
                    </div>
                    <h3 className="text-white font-serif text-lg leading-tight group-hover:text-luxury-gold transition-colors mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center text-gray-500 text-xs font-mono space-x-3">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span className="text-gray-600">2 days ago</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
