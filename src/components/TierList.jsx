import React from 'react';
import { motion } from 'framer-motion';
import { characters } from '../data/characters';
import CharacterCard from './CharacterCard';
import clsx from 'clsx';

const TierList = () => {
    const roles = ['DPS', 'Sub DPS', 'Support', 'Survival'];
    const tiers = ['S+', 'S', 'A+', 'A', 'B'];

    const getTierColor = (tier) => {
        switch (tier) {
            case 'S+': return 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-orange-400';
            case 'S': return 'bg-gradient-to-r from-orange-400 to-amber-400 text-white border-amber-300';
            case 'A+': return 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black border-yellow-200';
            case 'A': return 'bg-gradient-to-r from-yellow-300 to-lime-300 text-black border-lime-200';
            case 'B': return 'bg-gradient-to-r from-lime-300 to-green-300 text-black border-green-200';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <header className="text-center mb-12">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-reverse-gold to-white font-serif"
                >
                    Arcanist Tier List
                </motion.h1>
                <motion.p 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.1 }}
                     className="text-gray-400 max-w-2xl mx-auto"
                >
                    Current meta rankings specifically for 6-Star characters. 
                    Based on endgame output, utility, and versatility.
                </motion.p>
            </header>

            <div className="overflow-x-auto pb-4 custom-scrollbar">
                <div className="min-w-[800px] border border-white/10 rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
                    {/* Header Row */}
                    <div className="grid grid-cols-[100px_repeat(4,1fr)] bg-white/5 border-b border-white/10">
                        <div className="p-4 border-r border-white/10"></div>
                        {roles.map(role => (
                            <div key={role} className="p-4 text-center font-bold text-reverse-gold tracking-widest uppercase border-r border-white/10 last:border-r-0">
                                {role}
                            </div>
                        ))}
                    </div>

                    {/* Tier Rows */}
                    {tiers.map(tier => (
                        <div key={tier} className="grid grid-cols-[100px_repeat(4,1fr)] border-b border-white/10 last:border-b-0">
                            {/* Tier Label */}
                            <div className={clsx(
                                "flex items-center justify-center p-4 border-r border-white/10 font-black text-2xl heading-font",
                                getTierColor(tier)
                            )}>
                                {tier}
                            </div>

                            {/* Role Cells */}
                            {roles.map(role => {
                                const roleChars = characters
                                    .filter(c => c.rank === tier && c.role === role)
                                    .sort((a, b) => a.name.localeCompare(b.name));

                                return (
                                    <div key={`${tier}-${role}`} className="p-3 border-r border-white/10 last:border-r-0 bg-white/5 hover:bg-white/10 transition-colors">
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                                            {roleChars.map(char => (
                                                <div key={char.name} className="relative group">
                                                    {/* We use a simplified wrapper to scale down the card visually if needed, though grid-cols-2 makes them small enough */}
                                                     <CharacterCard 
                                                        character={char} 
                                                        isSelected={false} 
                                                        onClick={() => {}} 
                                                        disabled={false}
                                                        minimal={true}
                                                     />
                                                </div>
                                            ))}
                                            {roleChars.length === 0 && (
                                                <div className="col-span-full h-full min-h-[100px] flex items-center justify-center opacity-10">
                                                    <span className="text-2xl">-</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-8 text-center text-xs text-gray-500">
                * Tier placements are subjective and based on general performance.
            </div>
        </div>
    );
};

export default TierList;
