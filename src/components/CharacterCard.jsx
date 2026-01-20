import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';

const CharacterCard = ({ character, isSelected, onClick, disabled, minimal = false }) => {
  const getRankColor = (rank) => {
    switch (rank) {
      case 'S+': return 'text-amber-500';
      case 'S': return 'text-purple-400';
      case 'A+': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getAfflatusColor = (afflatus) => {
    switch (afflatus) {
      case 'Star': return 'text-cyan-300';
      case 'Mineral': return 'text-stone-300';
      case 'Beast': return 'text-orange-400';
      case 'Plant': return 'text-emerald-400';
      case 'Spirit': return 'text-indigo-400';
      case 'Intellect': return 'text-yellow-200';
      default: return 'text-gray-200';
    }
  };

  return (
    <motion.div
      layout="position"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onClick={() => !disabled && onClick(character)}
      className={clsx(
        "relative group cursor-pointer aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-300",
        isSelected 
          ? "border-reverse-gold ring-2 ring-reverse-gold/30 shadow-[0_0_20px_rgba(212,179,117,0.3)]" 
          : "border-white/10 hover:border-white/30 shadow-lg",
        disabled && "opacity-50 grayscale cursor-not-allowed"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/assets/logo.png'; // Fallback
            e.target.className = "w-full h-full object-contain p-4 bg-reverse-gray";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      {/* Selected Overlay */}
      <div className={clsx(
        "absolute inset-0 bg-reverse-gold/20 flex items-center justify-center transition-opacity duration-300",
        isSelected ? "opacity-100" : "opacity-0"
      )}>
        <Sparkles className="w-12 h-12 text-reverse-gold drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Content */}
      <div className={clsx("absolute bottom-0 left-0 right-0", minimal ? "p-2 bg-black/60 backdrop-blur-[2px]" : "p-4")}>
        {!minimal && (
            <div className="flex items-center justify-between mb-1">
                <span className={clsx("text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm", getAfflatusColor(character.afflatus))}>
                    {character.afflatus}
                </span>
                <span className={clsx("font-serif font-bold text-lg", getRankColor(character.rank))}>
                    {character.rank}
                </span>
            </div>
        )}
        <h3 className={clsx("font-bold text-white leading-tight font-serif drop-shadow-md", minimal ? "text-sm text-center truncate" : "text-xl")}>
            {character.name}
        </h3>
        {!minimal && (
            <p className="text-xs text-gray-300 mt-1 flex items-center gap-2">
                <span className="opacity-70">{character.dmgType}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500" />
                <span className="text-reverse-gold">{character.role}</span>
            </p>
        )}
      </div>
    </motion.div>
  );
};

export default CharacterCard;
