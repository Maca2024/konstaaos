
import React from 'react';
import { Users, MessageSquare, ArrowUp, ExternalLink, MessageCircle } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto">
        {/* SKOOL INTEGRATION BANNER */}
        <div className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
            <img src="https://images.unsplash.com/photo-1518182170546-0766eb6f6a56?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arctic-950"></div>
            
            <div className="relative z-10 text-center p-8 max-w-2xl">
                <div className="inline-flex items-center justify-center p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 mb-6">
                    <img src="https://assets.skool.com/skool/39076d34786e431a919f387032d04859" alt="Skool" className="h-6 mr-3 invert" /> 
                    <span className="text-white font-mono text-sm tracking-widest">OFFICIAL PARTNER</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">The Arctic Circle</h1>
                <p className="text-gray-300 font-light mb-8">Join 5,000+ photographers in our exclusive Skool community. Share work, get feedback, and access masterclasses.</p>
                <a href="https://www.skool.com/" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-luxury-gold text-black font-mono text-sm tracking-widest hover:bg-white transition-colors">
                    ENTER THE COMMUNITY <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>

        {/* REDDIT STYLE FEED "THE DEN" */}
        <div className="max-w-5xl mx-auto p-8 pb-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif text-white">The Den</h2>
                <div className="flex space-x-4 text-xs font-mono text-gray-500">
                    <span className="text-white border-b border-luxury-gold pb-1 cursor-pointer">HOT</span>
                    <span className="hover:text-white cursor-pointer">NEW</span>
                    <span className="hover:text-white cursor-pointer">TOP</span>
                </div>
            </div>

            <div className="space-y-4">
                {[
                    {
                        votes: 428,
                        author: "u/nordic_lens",
                        title: "Gear advice for -20C degree shooting in Lapland?",
                        desc: "Heading to Riisitunturi next week. Anyone have experience with battery life on the R5 in these temps?",
                        comments: 45,
                        tag: "GEAR TALK"
                    },
                    {
                        votes: 892,
                        author: "u/konsta_official",
                        title: "Behind the Scenes: The Owl encounter",
                        desc: "Just posted a raw breakdown of the Great Grey Owl shot on the channel. Let me know what you think about the color grading.",
                        comments: 128,
                        tag: "ANNOUNCEMENT",
                        highlight: true
                    },
                    {
                        votes: 156,
                        author: "u/wanderlust_jen",
                        title: "My first attempt at minimal composition (Feedback requested)",
                        desc: "Tried to channel the Punkka style with this fox shot. Is the negative space too much?",
                        comments: 22,
                        tag: "CRITIQUE",
                        image: "https://images.unsplash.com/photo-1465199549974-7d82de6e2830?w=600&q=80"
                    }
                ].map((post, i) => (
                    <div key={i} className={`bg-white/5 border ${post.highlight ? 'border-luxury-gold/30' : 'border-white/5'} p-4 flex gap-4 hover:bg-white/10 transition-colors cursor-pointer`}>
                        {/* Votes */}
                        <div className="flex flex-col items-center space-y-1 pt-1 min-w-[40px]">
                            <ArrowUp className="w-5 h-5 text-gray-500 hover:text-luxury-gold" />
                            <span className="text-sm font-mono font-bold text-white">{post.votes}</span>
                        </div>

                        {/* Body */}
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-[10px] font-mono text-gray-500 uppercase">{post.tag}</span>
                                <span className="text-[10px] text-gray-600">•</span>
                                <span className="text-[10px] text-gray-400">Posted by {post.author}</span>
                            </div>
                            <h3 className="text-lg font-serif text-white mb-1">{post.title}</h3>
                            <p className="text-gray-400 text-sm font-light line-clamp-2">{post.desc}</p>
                            
                            {post.image && (
                                <div className="mt-3 h-64 w-full overflow-hidden rounded-sm border border-white/10">
                                    <img src={post.image} className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="flex items-center mt-3 text-gray-500 space-x-4">
                                <div className="flex items-center space-x-1 text-xs font-mono hover:bg-white/5 px-2 py-1 rounded">
                                    <MessageSquare className="w-3 h-3" />
                                    <span>{post.comments} Comments</span>
                                </div>
                                <div className="flex items-center space-x-1 text-xs font-mono hover:bg-white/5 px-2 py-1 rounded">
                                    <ExternalLink className="w-3 h-3" />
                                    <span>Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
