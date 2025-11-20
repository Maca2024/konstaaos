
import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Workshops } from './components/Workshops';
import { AIStudio } from './components/AIStudio';
import { Events } from './components/Events';
import { Community } from './components/Community';
import { Gallery } from './components/Gallery';
import { YouTube } from './components/YouTube';
import { Socials } from './components/Socials';
import { Landing } from './components/Landing';
import { ViewState } from './types';
import { LayoutGrid, Compass, Cpu, Calendar, Users, Image, Youtube, Share2, Menu, X, Circle } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [entered, setEntered] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD: return <Dashboard onNavigate={setCurrentView} />;
      case ViewState.WORKSHOPS: return <Workshops />;
      case ViewState.AI_STUDIO: return <AIStudio />;
      case ViewState.EVENTS: return <Events />;
      case ViewState.COMMUNITY: return <Community />;
      case ViewState.GALLERY: return <Gallery />;
      case ViewState.YOUTUBE: return <YouTube />;
      case ViewState.SOCIALS: return <Socials />;
      default: return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        if (window.innerWidth < 1024) setSidebarOpen(false);
      }}
      className={`w-full flex items-center px-6 py-3 transition-all duration-300 group ${
        currentView === view 
          ? 'text-white bg-white/5 border-r-2 border-luxury-gold' 
          : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
      }`}
    >
      <Icon className={`w-4 h-4 mr-4 transition-colors ${currentView === view ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-gray-400'}`} />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase">{label}</span>
    </button>
  );

  return (
    <>
      {!entered && <Landing onEnter={() => setEntered(true)} />}
      
      <div className={`min-h-screen bg-arctic-950 flex overflow-hidden text-gray-200 font-sans selection:bg-luxury-gold selection:text-black transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Minimalist Sidebar */}
        <aside 
          className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-arctic-950 border-r border-white/5 transform transition-transform duration-500 ease-out flex flex-col ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-8 mb-2">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-white tracking-tight">Punkka OS</span>
              <span className="font-mono text-[10px] text-gray-600 tracking-widest mt-1">V.2.2 ARCTIC SYSTEM</span>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-2 no-scrollbar">
              <div className="px-6 mb-2 mt-2 text-[10px] font-mono text-gray-700 uppercase tracking-widest">Platform</div>
              <NavItem view={ViewState.DASHBOARD} icon={LayoutGrid} label="Overview" />
              <NavItem view={ViewState.WORKSHOPS} icon={Compass} label="Expeditions" />
              <NavItem view={ViewState.EVENTS} icon={Calendar} label="Calendar" />
              <NavItem view={ViewState.AI_STUDIO} icon={Cpu} label="Intelligence" />
              
              <div className="px-6 mb-2 mt-8 text-[10px] font-mono text-gray-700 uppercase tracking-widest">Community</div>
              <NavItem view={ViewState.COMMUNITY} icon={Users} label="The Den (Skool)" />
              <NavItem view={ViewState.GALLERY} icon={Image} label="Portfolio" />
              <NavItem view={ViewState.YOUTUBE} icon={Youtube} label="Konsta TV" />
              <NavItem view={ViewState.SOCIALS} icon={Share2} label="Social Grid" />
          </nav>

          <div className="p-6 border-t border-white/5 bg-black/20">
              <div className="flex items-center">
                  <div className="w-10 h-10 overflow-hidden rounded-full mr-4 border border-white/10 ring-2 ring-transparent hover:ring-luxury-gold transition-all cursor-pointer">
                      {/* Konsta Portrait */}
                      <img src="https://images.unsplash.com/photo-1596387430964-86675d49494b?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex flex-col">
                      <span className="text-sm text-white font-serif">Konsta Punkka</span>
                      <div className="flex items-center mt-1">
                          <Circle className="w-2 h-2 fill-green-900 text-green-500 mr-2" />
                          <span className="text-[10px] font-mono text-gray-500">ONLINE</span>
                      </div>
                  </div>
              </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-arctic-950">
          
          {/* Mobile Toggle */}
          <div className="lg:hidden absolute top-4 right-4 z-50">
             <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white p-2 bg-black/50 backdrop-blur rounded-full border border-white/10">
               {sidebarOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
             </button>
          </div>

          <div className="flex-1 overflow-hidden relative">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
