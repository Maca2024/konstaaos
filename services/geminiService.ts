import { GoogleGenAI, LiveServerMessage, Modality, Type } from "@google/genai";

// We will check for window.aistudio in components before calling high-cost models
// For basic features, we assume process.env.API_KEY is available or will use the selected one.

const getClient = async (): Promise<GoogleGenAI> => {
  // Check if we need to force selection for Veo/Pro models, 
  // otherwise defaults to env if strictly necessary, but architecture prefers user key for rigorous use.
  if (window.aistudio) {
     // For demo purposes in this environment, we rely on the injected key or user selection
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

// --- TEXT & SEARCH GROUNDING ---
export const generateKonstaAdvice = async (prompt: string): Promise<{ text: string; sources?: any[] }> => {
  const ai = await getClient();
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Efficient for text
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Avatar of Konsta Punkka, the 'Squirrel Whisperer' and Arctic wildlife photographer. 
        Tone: Nordic Minimalist, Professional Authority (9/10), Warmth (7/10).
        Expertise: Arctic wildlife, photography technicals, ethical conservation (Leave No Trace).
        Be concise, authentic, and focus on storytelling and technical precision.`,
        tools: [{ googleSearch: {} }], // Enable Grounding
      },
    });

    const text = response.text || "I couldn't retrieve that information right now.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || [];

    return { text, sources };
  } catch (error) {
    console.error("Konsta AI Error:", error);
    return { text: "The arctic signal is weak. Please check your connection.", sources: [] };
  }
};

// --- IMAGE EDITING (NANO BANANA) ---
export const editArcticPhoto = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = await getClient();
  
  try {
    // Using Flash Image for editing tasks as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Image,
            },
          },
          {
            text: prompt || "Enhance this photo with a nordic mood.",
          },
        ],
      },
      // No responseMimeType for banana models
    });

    // Iterate to find image part
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return ""; 
  } catch (error) {
    console.error("Edit Error:", error);
    throw error;
  }
};

// --- VEO VIDEO GENERATION ---
export const generateArcticVideo = async (prompt: string, aspectRatio: '16:9' | '9:16' = '16:9'): Promise<string> => {
  // Force Key Selection for Veo
  if (window.aistudio) {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await window.aistudio.openSelectKey();
    }
  }

  const ai = await getClient(); // Re-init with potentially new key context

  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: `Cinematic Arctic shot, Konsta Punkka style: ${prompt}`,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: aspectRatio
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const uri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) throw new Error("No video URI generated");
    
    // Proxy fetch to get blob or return URI with key if client-side fetch is allowed
    return `${uri}&key=${process.env.API_KEY}`; 

  } catch (error) {
    console.error("Veo Error:", error);
    throw error;
  }
};

// --- LIVE API CONNECT ---
// Returns the session promise and contexts for UI handling
export const connectLiveSession = async (
  onAudioData: (base64: string) => void,
  onClose: () => void
) => {
    const ai = await getClient();
    
    // Helper to convert float32 to PCM16 for Gemini
    const floatTo16BitPCM = (float32Array: Float32Array) => {
        const buffer = new ArrayBuffer(float32Array.length * 2);
        const view = new DataView(buffer);
        for (let i = 0; i < float32Array.length; i++) {
            let s = Math.max(-1, Math.min(1, float32Array[i]));
            view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
        return view;
    };

    const sessionPromise = ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      config: {
        responseModalities: [Modality.AUDIO],
        systemInstruction: "You are Konsta Punkka, speaking to a student photographer. Be encouraging, brief, and focused on nature.",
      },
      callbacks: {
        onopen: async () => {
          console.log("Live Session Open");
        },
        onmessage: (msg: LiveServerMessage) => {
          const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          if (audioData) {
            onAudioData(audioData);
          }
        },
        onclose: () => {
          console.log("Live Session Closed");
          onClose();
        },
        onerror: (err) => {
          console.error("Live Error", err);
          onClose();
        }
      }
    });

    return {
        sessionPromise,
        sendAudio: (float32Data: Float32Array) => {
            const pcmData = floatTo16BitPCM(float32Data);
            const base64Params = btoa(
                String.fromCharCode(...new Uint8Array(pcmData.buffer))
            );
            
            sessionPromise.then(session => {
                session.sendRealtimeInput({
                    media: {
                        mimeType: "audio/pcm;rate=16000",
                        data: base64Params
                    }
                });
            });
        },
        disconnect: () => {
            sessionPromise.then(s => s.close());
        }
    };
};
