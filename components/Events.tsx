
import React, { useState } from 'react';
import { Calendar, Clock, Bell, Check } from 'lucide-react';

export const Events: React.FC = () => {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      day: '12',
      month: 'FEB',
      title: 'Mastering Arctic Light',
      type: 'WEBINAR',
      time: '18:00 EET',
      action: 'REGISTER'
    },
    {
      id: 2,
      day: '24',
      month: 'FEB',
      title: 'Limited Print Drop: "The White Wolf"',
      type: 'COMMERCE',
      time: '12:00 EET',
      action: 'NOTIFY ME'
    },
    {
      id: 3,
      day: '02',
      month: 'MAR',
      title: 'Svalbard Expedition Briefing',
      type: 'MEMBERS ONLY',
      time: '20:00 EET',
      action: 'JOIN'
    },
    {
      id: 4,
      day: '15',
      month: 'APR',
      title: 'Post-Processing with Lightroom',
      type: 'WORKSHOP',
      time: '16:00 EET',
      action: 'WAITLIST'
    }
  ];

  const handleAction = (id: number) => {
    if (registeredEvents.includes(id)) return;
    setRegisteredEvents([...registeredEvents, id]);
  };

  return (
    <div className="p-8 md:p-12 h-full overflow-y-auto">
      <div className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
        <div>
          <span className="font-mono text-luxury-gold text-sm tracking-widest uppercase mb-2 block">Schedule</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Events</h1>
        </div>
        <button className="flex items-center space-x-2 text-xs font-mono text-gray-400 border border-white/10 px-4 py-2 hover:border-luxury-gold hover:text-luxury-gold transition-all">
            <Bell className="w-3 h-3" />
            <span>SYNC CALENDAR</span>
        </button>
      </div>

      <div className="space-y-4">
        {events.map((evt) => (
          <div key={evt.id} className="group flex flex-col md:flex-row items-center bg-white/5 border border-white/5 p-6 hover:border-luxury-gold/30 transition-all duration-300">
            
            {/* Date */}
            <div className="flex flex-col items-center justify-center w-full md:w-24 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6 mb-4 md:mb-0">
              <span className="text-3xl font-serif text-white">{evt.day}</span>
              <span className="text-xs font-mono text-luxury-gold tracking-widest">{evt.month}</span>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left md:pl-8">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full w-fit mx-auto md:mx-0">{evt.type}</span>
                <div className="flex items-center justify-center md:justify-start text-xs text-gray-400 font-mono">
                   <Clock className="w-3 h-3 mr-2" />
                   {evt.time}
                </div>
              </div>
              <h3 className="text-xl font-serif text-white group-hover:text-luxury-gold transition-colors">{evt.title}</h3>
            </div>

            {/* Action */}
            <div className="mt-4 md:mt-0">
               <button 
                onClick={() => handleAction(evt.id)}
                className={`px-6 py-3 text-xs font-mono tracking-widest uppercase transition-all min-w-[140px] flex items-center justify-center ${
                    registeredEvents.includes(evt.id) 
                    ? 'bg-green-900/30 text-green-400 border border-green-900'
                    : 'bg-white/5 hover:bg-white hover:text-black text-white'
                }`}
               >
                 {registeredEvents.includes(evt.id) ? (
                     <>
                        <Check className="w-3 h-3 mr-2" />
                        REGISTERED
                     </>
                 ) : evt.action}
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* Month Grid Visual */}
      <div className="mt-16 pb-12">
         <h4 className="text-white font-serif text-2xl mb-6">March 2025</h4>
         <div className="grid grid-cols-7 gap-px bg-white/10 border border-white/10">
            {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`aspect-square p-2 relative bg-arctic-950 ${[2, 15, 22].includes(i+1) ? 'bg-white/5' : ''} hover:bg-white/10 transition-colors cursor-pointer group`}>
                    <span className={`text-xs font-mono ${[2, 15, 22].includes(i+1) ? 'text-luxury-gold' : 'text-gray-700 group-hover:text-gray-500'}`}>{i + 1}</span>
                    {[2, 15, 22].includes(i+1) && <div className="absolute bottom-2 right-2 w-1 h-1 bg-luxury-gold rounded-full"></div>}
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};
