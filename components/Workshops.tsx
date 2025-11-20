
import React, { useState } from 'react';
import { Workshop } from '../types';
import { MapPin, Calendar, Users, ArrowUpRight, CheckCircle, X } from 'lucide-react';

export const Workshops: React.FC = () => {
  const [booking, setBooking] = useState<Workshop | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const workshops: Workshop[] = [
    {
        id: '5',
        title: 'Ghost of the Mountains: Snow Leopard',
        location: 'Ladakh, Himalayas',
        date: 'Feb 10 - 24, 2026',
        price: 14500,
        image: 'https://images.unsplash.com/photo-1552466980-d6b5e999942a?q=80&w=1600&auto=format&fit=crop',
        spots: 3,
        tier: 'EXPEDITION'
    },
    {
      id: '1',
      title: 'Kingdom of the Brown Bear',
      location: 'Kuhmo, Finland',
      date: 'July 15 - 22, 2025',
      price: 3600,
      image: 'https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=1600&auto=format&fit=crop',
      spots: 4,
      tier: 'BASIC'
    },
    {
      id: '2',
      title: 'The Great Grey Owl',
      location: 'Riisitunturi, Lapland',
      date: 'Jan 10 - 17, 2025',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1548128724-92eb07781291?q=80&w=1600&auto=format&fit=crop',
      spots: 0,
      tier: 'MASTER'
    },
    {
      id: '3',
      title: 'The Arctic Fox',
      location: 'Svalbard',
      date: 'Mar 02 - 09, 2026',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=1600&auto=format&fit=crop',
      spots: 2,
      tier: 'EXPEDITION'
    },
    {
        id: '4',
        title: 'Red Squirrels of the South',
        location: 'Helsinki Region',
        date: 'Oct 05 - 10, 2025',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1507666405895-422eee4d517f?q=80&w=1600&auto=format&fit=crop',
        spots: 6,
        tier: 'BASIC'
    }
  ];

  const handleBook = () => {
    setConfirmed(true);
    setTimeout(() => {
        setBooking(null);
        setConfirmed(false);
    }, 3000);
  };

  return (
    <div className="p-8 md:p-12 h-full overflow-y-auto relative">
      {/* Booking Modal */}
      {booking && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className="bg-arctic-800 border border-white/10 max-w-lg w-full p-8 relative">
                  <button onClick={() => setBooking(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X className="w-6 h-6"/></button>
                  
                  {!confirmed ? (
                      <>
                        <h3 className="text-2xl font-serif text-white mb-6">Confirm Reservation</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-gray-400 font-mono text-sm">EXPEDITION</span>
                                <span className="text-white font-serif">{booking.title}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-gray-400 font-mono text-sm">DATES</span>
                                <span className="text-white">{booking.date}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-gray-400 font-mono text-sm">DEPOSIT</span>
                                <span className="text-luxury-gold">€{(booking.price * 0.2).toLocaleString()}</span>
                            </div>
                        </div>
                        <button 
                            onClick={handleBook}
                            className="w-full bg-luxury-gold text-black py-4 font-mono font-bold tracking-widest hover:bg-white transition-colors"
                        >
                            PROCEED TO PAYMENT
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">Secured via Stripe • Refundable until 60 days prior</p>
                      </>
                  ) : (
                      <div className="text-center py-12">
                          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                          <h3 className="text-2xl font-serif text-white mb-2">Request Received</h3>
                          <p className="text-gray-400">Our team will contact you shortly to finalize your spot.</p>
                      </div>
                  )}
              </div>
          </div>
      )}

      <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
        <div>
            <span className="font-mono text-luxury-gold text-sm tracking-widest uppercase mb-2 block">Taigaschool Logistics</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Expeditions</h1>
        </div>
        <p className="text-gray-400 max-w-md font-light mt-4 md:mt-0 text-right">
          Curated photographic experiences in the most remote corners of the Northern Hemisphere.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 pb-12">
        {workshops.map((ws) => (
          <div key={ws.id} className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image */}
            <div className="md:col-span-7 relative h-[400px] overflow-hidden cursor-pointer">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
               <img 
                src={ws.image} 
                alt={ws.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
               />
               {ws.spots === 0 && (
                   <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                       <span className="font-serif text-3xl text-white italic">Sold Out</span>
                   </div>
               )}
            </div>

            {/* Content */}
            <div className="md:col-span-5 flex flex-col justify-center border-l border-white/10 pl-8 h-full">
              <span className="text-arctic-500 font-mono text-xs mb-4">{ws.tier} TIER</span>
              <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-luxury-gold transition-colors cursor-pointer">{ws.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-400 font-light">
                  <MapPin className="w-4 h-4 mr-4 text-white" />
                  {ws.location}
                </div>
                <div className="flex items-center text-gray-400 font-light">
                  <Calendar className="w-4 h-4 mr-4 text-white" />
                  {ws.date}
                </div>
                <div className="flex items-center text-gray-400 font-light">
                  <Users className="w-4 h-4 mr-4 text-white" />
                  {ws.spots > 0 ? `${ws.spots} spots remaining` : 'Waitlist active'}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-serif text-white">€{ws.price.toLocaleString()}</span>
                <button 
                    onClick={() => ws.spots > 0 && setBooking(ws)}
                    disabled={ws.spots === 0}
                    className="flex items-center space-x-2 text-sm font-mono text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                    <span>{ws.spots === 0 ? 'JOIN WAITLIST' : 'RESERVE'}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
