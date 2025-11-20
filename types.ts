export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  WORKSHOPS = 'WORKSHOPS',
  AI_STUDIO = 'AI_STUDIO',
  IMPACT = 'IMPACT',
  PROFILE = 'PROFILE',
  EVENTS = 'EVENTS',
  COMMUNITY = 'COMMUNITY',
  GALLERY = 'GALLERY',
  YOUTUBE = 'YOUTUBE',
  SOCIALS = 'SOCIALS'
}

export enum AITab {
  CHAT = 'CHAT',
  EDIT = 'EDIT',
  VIDEO = 'VIDEO',
  LIVE = 'LIVE'
}

export interface Workshop {
  id: string;
  title: string;
  location: string;
  date: string;
  price: number;
  image: string;
  spots: number;
  tier: 'BASIC' | 'PRO' | 'MASTER' | 'EXPEDITION';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string; // Base64
  sources?: Array<{ title: string; uri: string }>;
}

export interface StatMetric {
  label: string;
  value: string | number;
  trend: number;
  unit?: string;
}

// Extend Window for Veo Key Selection and AudioContext
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
    webkitAudioContext: typeof AudioContext;
  }
}