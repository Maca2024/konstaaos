import React, { useState, useRef } from 'react';
import { AITab, Message } from '../types';
import { generateKonstaAdvice, editArcticPhoto, generateArcticVideo, connectLiveSession } from '../services/geminiService';
import { Mic, Send, Image as ImageIcon, Film, Sparkles, Wand2, Play, Loader2, Aperture, ArrowRight } from 'lucide-react';

export const AIStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AITab>(AITab.CHAT);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hei. I am the Konsta OS Assistant. I can help you plan expeditions, critique compositions, or edit your arctic raw files." }
  ]);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const liveSessionRef = useRef<{ sendAudio: (data: Float32Array) => void; disconnect: () => void } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- TEXT CHAT HANDLER ---
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const result = await generateKonstaAdvice(input);
      const aiMsg: Message = { role: 'model', text: result.text, sources: result.sources };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
       // Error handling
    } finally {
      setLoading(false);
    }
  };

  // --- IMAGE HANDLER ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setSelectedImage(base64.split(',')[1]); 
        setEditedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage) return;
    setLoading(true);
    try {
      const resultUrl = await editArcticPhoto(selectedImage, input || "Enhance lighting for arctic mood");
      setEditedImage(resultUrl);
    } catch (e) {
      alert("Failed to edit image.");
    } finally {
      setLoading(false);
    }
  };

  // --- VIDEO HANDLER ---
  const handleVideoGen = async () => {
    setLoading(true);
    try {
      const videoUri = await generateArcticVideo(input || "A polar bear walking in snow storm");
      setGeneratedVideo(videoUri);
    } catch (e) {
        console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // --- LIVE HANDLER ---
  const toggleLive = async () => {
    if (isLive) {
      liveSessionRef.current?.disconnect();
      audioContextRef.current?.close();
      setIsLive(false);
      return;
    }
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass({ sampleRate: 16000 });
      audioContextRef.current = ctx;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = ctx.createMediaStreamSource(stream);
      const processor = ctx.createScriptProcessor(4096, 1, 1);
      
      const session = await connectLiveSession(
        async (base64Audio) => { console.log("Audio Chunk"); },
        () => setIsLive(false)
      );

      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        session.sendAudio(inputData);
      };

      source.connect(processor);
      processor.connect(ctx.destination);
      liveSessionRef.current = session;
      setIsLive(true);
    } catch (e) {
      console.error("Live Init Failed", e);
    }
  };

  return (
    <div className="flex flex-col h-full bg-arctic-950 text-gray-200">
      {/* Tool Selector */}
      <div className="flex border-b border-white/5 px-8 pt-6 bg-arctic-950 sticky top-0 z-10">
        {[
          { id: AITab.CHAT, icon: Sparkles, label: 'INTELLIGENCE' },
          { id: AITab.EDIT, icon: Aperture, label: 'DARKROOM' },
          { id: AITab.VIDEO, icon: Film, label: 'CINEMA' },
          { id: AITab.LIVE, icon: Mic, label: 'UPLINK' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-4 text-xs font-mono tracking-widest transition-colors uppercase border-b-2 ${
              activeTab === tab.id
                ? 'border-luxury-gold text-white'
                : 'border-transparent text-gray-600 hover:text-gray-400'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-3" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Workspace */}
      <div className="flex-1 overflow-y-auto p-8">
        
        {/* CHAT */}
        {activeTab === AITab.CHAT && (
          <div className="max-w-3xl mx-auto space-y-8">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-6 ${
                  msg.role === 'user' 
                    ? 'bg-white/5 border border-white/10 text-white' 
                    : 'text-gray-300'
                }`}>
                  {msg.role === 'model' && <div className="w-8 h-1 bg-luxury-gold mb-4"></div>}
                  <p className="font-serif text-lg leading-relaxed">{msg.text}</p>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs font-mono text-gray-500">
                      SOURCES: {msg.sources.map(s => s.title).join(', ')}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && <Loader2 className="w-6 h-6 animate-spin text-luxury-gold mx-auto" />}
          </div>
        )}

        {/* EDIT */}
        {activeTab === AITab.EDIT && (
            <div className="flex flex-col items-center justify-center h-full space-y-8">
                {!selectedImage ? (
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full max-w-xl aspect-[4/3] border border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-all group"
                    >
                        <ImageIcon className="w-16 h-16 text-gray-700 group-hover:text-white transition-colors mb-4" />
                        <p className="font-serif text-xl text-gray-500">Import RAW / JPEG</p>
                        <p className="font-mono text-xs text-gray-700 mt-2">DRAG & DROP OR CLICK</p>
                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
                         <div className="relative bg-arctic-900">
                            <img src={`data:image/jpeg;base64,${selectedImage}`} className="w-full h-full object-contain" />
                            <div className="absolute bottom-4 left-4 text-xs font-mono bg-black/50 px-2 py-1 text-white">ORIGINAL</div>
                         </div>
                         <div className="relative bg-arctic-900 flex items-center justify-center border border-white/5">
                            {loading ? (
                                <div className="flex flex-col items-center">
                                    <Loader2 className="w-8 h-8 text-luxury-gold animate-spin mb-4" />
                                    <span className="font-mono text-xs text-luxury-gold">PROCESSING PIXELS...</span>
                                </div>
                            ) : editedImage ? (
                                <img src={editedImage} className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-gray-700 font-serif italic">Processed output will appear here</span>
                            )}
                         </div>
                    </div>
                )}
            </div>
        )}

        {/* VIDEO */}
        {activeTab === AITab.VIDEO && (
            <div className="max-w-4xl mx-auto text-center mt-12">
                <h2 className="text-3xl font-serif text-white mb-2">Veo Cinematic Engine</h2>
                <p className="text-gray-500 font-light mb-12">Generate 1080p wildlife sequences from text prompts.</p>
                
                <div className="aspect-video bg-black border border-white/10 flex items-center justify-center relative group">
                     {generatedVideo ? (
                        <video src={generatedVideo} controls autoPlay className="w-full h-full" />
                    ) : (
                        loading ? <Loader2 className="animate-spin text-luxury-gold w-10 h-10" /> : 
                        <Film className="w-20 h-20 text-gray-800 group-hover:text-gray-700 transition-colors" />
                    )}
                </div>
            </div>
        )}

        {/* LIVE */}
        {activeTab === AITab.LIVE && (
             <div className="flex flex-col items-center justify-center h-full">
                <div className="relative">
                    <div className={`w-64 h-64 rounded-full border border-white/10 flex items-center justify-center transition-all duration-1000 ${isLive ? 'scale-110 border-luxury-gold/30' : ''}`}>
                        <div className={`w-48 h-48 rounded-full bg-arctic-900 flex items-center justify-center relative z-10`}>
                            <Mic className={`w-12 h-12 transition-colors ${isLive ? 'text-luxury-gold' : 'text-gray-700'}`} />
                        </div>
                        {isLive && (
                            <>
                                <div className="absolute inset-0 rounded-full border border-luxury-gold/20 animate-ping"></div>
                                <div className="absolute inset-0 rounded-full border border-luxury-gold/10 animate-[ping_3s_linear_infinite]"></div>
                            </>
                        )}
                    </div>
                </div>
                
                <div className="mt-12 text-center space-y-6">
                    <div>
                        <h2 className="text-2xl font-serif text-white">Live Mentorship Link</h2>
                        <p className="text-gray-500 font-mono text-xs mt-2 tracking-widest">SECURE AUDIO CHANNEL</p>
                    </div>
                    
                    <button 
                        onClick={toggleLive}
                        className={`px-10 py-4 text-sm font-mono tracking-widest uppercase transition-all border ${isLive ? 'border-red-900 text-red-500 hover:bg-red-900/10' : 'border-white text-white hover:bg-white hover:text-black'}`}
                    >
                        {isLive ? 'Terminate Connection' : 'Initialize Uplink'}
                    </button>
                </div>
             </div>
        )}
      </div>

      {/* Input Area */}
      {activeTab !== AITab.LIVE && (
        <div className="p-8 bg-arctic-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                        activeTab === AITab.CHAT ? "Ask about light, composition, or ethics..." :
                        activeTab === AITab.EDIT ? "Describe the desired atmosphere..." :
                        "Describe the scene for Veo generation..."
                    }
                    className="w-full bg-arctic-900/50 border-b border-white/20 text-white px-0 py-4 focus:outline-none focus:border-luxury-gold transition-colors placeholder-gray-600 font-serif text-lg italic"
                    onKeyDown={(e) => e.key === 'Enter' && !loading && (activeTab === AITab.CHAT ? handleSend : activeTab === AITab.EDIT ? handleEdit : handleVideoGen)()}
                />
                <button 
                    onClick={() => activeTab === AITab.CHAT ? handleSend() : activeTab === AITab.EDIT ? handleEdit() : handleVideoGen()}
                    disabled={loading || !input}
                    className="absolute right-0 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-6 h-6" />}
                </button>
            </div>
        </div>
      )}
    </div>
  );
};