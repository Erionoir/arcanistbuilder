import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Library as LibraryIcon, Shield, Layout, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import TeamBuilder from './components/TeamBuilder';
import TierList from './components/TierList';
import Library from './components/Library';

// Placeholder components
const Hero = ({ onNavigate }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-8 relative"
    >
      <div className="absolute -inset-4 bg-reverse-gold/20 blur-xl rounded-full"></div>
      <h1 className="relative text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-reverse-gold-light to-reverse-gold tracking-tight">
        REVERSE: 1999
      </h1>
      <h2 className="relative text-2xl md:text-3xl text-gray-400 font-light mt-2 tracking-widest uppercase">
        Team Builder & Database
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mt-12">
      {[
        { icon: Users, title: "Team Builder", desc: "AI-Powered Composition", view: 'team-builder' },
        { icon: Layout, title: "Tier List", desc: "Current Meta Rankings", view: 'tier-list' },
        { icon: LibraryIcon, title: "Archive", desc: "Complete Character Database", view: 'library' }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (i * 0.1) }}
          onClick={() => onNavigate(item.view)}
          className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-reverse-gold/50 hover:bg-white/10 transition-all cursor-pointer group"
        >
          <item.icon className="w-8 h-8 text-reverse-gold mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-reverse-dark text-white font-sans selection:bg-reverse-gold/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-reverse-dark to-black pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/5 bg-reverse-dark/80 backdrop-blur-md z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
          <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-md" />
          <span className="font-bold text-lg tracking-wide">ARCANIST<span className="text-reverse-gold">BUILDER</span> <span className="text-xs text-gray-500 bg-white/10 px-1.5 py-0.5 rounded ml-1">v3</span></span>
        </div>
        
        <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <Menu />
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => setCurrentView('team-builder')} className={clsx("hover:text-reverse-gold transition-colors", currentView === 'team-builder' && "text-reverse-gold")}>Team Builder</button>
          <button onClick={() => setCurrentView('tier-list')} className={clsx("hover:text-reverse-gold transition-colors", currentView === 'tier-list' && "text-reverse-gold")}>Tier List</button>
          <button onClick={() => setCurrentView('library')} className={clsx("hover:text-reverse-gold transition-colors", currentView === 'library' && "text-reverse-gold")}>Library</button>
          <a href="#" className="px-4 py-2 rounded-full bg-reverse-gold text-reverse-dark font-bold hover:bg-reverse-gold-light transition-colors">
            Connect
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {currentView === 'home' && <Hero onNavigate={setCurrentView} />}
        {currentView === 'team-builder' && <TeamBuilder />}
        {currentView === 'library' && <Library />}
        {currentView === 'tier-list' && <TierList />}
      </main>
    </div>
  );
}

export default App;
