
import React, { useState } from 'react';
import { User, Lock, Bell, CreditCard, Link2, Save, Trash2 } from 'lucide-react';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('Konsta Punkka');
  const [email, setEmail] = useState('konsta@arctic-os.com');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'connections', label: 'Connections', icon: Link2 },
  ];

  return (
    <div className="p-8 lg:p-12 min-h-screen bg-arctic-950 text-gray-200 font-sans animate-in fade-in duration-500 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-serif text-white mb-2">Settings</h1>
          <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">SYSTEM CONFIGURATION</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <nav className="w-full lg:w-64 shrink-0 flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-mono tracking-wider transition-colors border-l-2 ${
                  activeTab === tab.id
                    ? 'border-luxury-gold text-luxury-gold bg-white/5'
                    : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="space-y-4">
                  <label className="block text-xs font-mono text-gray-500 uppercase">Display Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-mono text-gray-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                </div>
                <div className="pt-4">
                    <button className="px-6 py-3 bg-luxury-gold text-black font-mono text-xs font-bold uppercase hover:bg-white transition-colors flex items-center">
                        <Save className="w-4 h-4 mr-2" /> Save Changes
                    </button>
                </div>
              </div>
            )}

            {activeTab === 'account' && (
               <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
                  <div className="p-6 border border-red-900/30 bg-red-900/10 rounded-sm">
                      <h3 className="text-red-400 font-serif text-lg mb-2">Danger Zone</h3>
                      <p className="text-gray-400 text-sm mb-6">Permanently delete your account and all associated data.</p>
                      <button className="px-6 py-3 border border-red-500 text-red-500 font-mono text-xs font-bold uppercase hover:bg-red-500 hover:text-white transition-colors flex items-center">
                        <Trash2 className="w-4 h-4 mr-2" /> Delete Account
                    </button>
                  </div>
               </div>
            )}
            
            {/* Other tabs placeholders */}
            {['notifications', 'billing', 'connections'].includes(activeTab) && (
                <div className="p-12 border border-dashed border-white/10 text-center text-gray-500 font-mono text-xs">
                    MODULE UNDER DEVELOPMENT
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
