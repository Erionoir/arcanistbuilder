import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { characters } from '../data/characters';
import CharacterCard from './CharacterCard';
import clsx from 'clsx';
import { Search, Filter, X, ArrowLeft, Info, Zap, Sparkles, Image as ImageIcon, Users } from 'lucide-react';

const Library = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({
        afflatus: [],
        rank: [],
        role: [],
        dmgType: []
    });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Initial Filter Constants
    const filterOptions = {
        afflatus: ['Star', 'Mineral', 'Beast', 'Plant', 'Spirit', 'Intellect'],
        rank: ['S+', 'S', 'A+', 'A', 'B'],
        role: ['DPS', 'Sub DPS', 'Support', 'Survival'],
        dmgType: ['Mental', 'Reality']
    };

    // Filter Logic
    const filteredCharacters = useMemo(() => {
        return characters.filter(char => {
            const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesAfflatus = activeFilters.afflatus.length === 0 || activeFilters.afflatus.includes(char.afflatus);
            const matchesRank = activeFilters.rank.length === 0 || activeFilters.rank.includes(char.rank);
            const matchesRole = activeFilters.role.length === 0 || activeFilters.role.includes(char.role);
            const matchesDmg = activeFilters.dmgType.length === 0 || activeFilters.dmgType.includes(char.dmgType);

            return matchesSearch && matchesAfflatus && matchesRank && matchesRole && matchesDmg;
        }).sort((a, b) => a.name.localeCompare(b.name));
    }, [searchTerm, activeFilters]);

    const toggleFilter = (category, value) => {
        setActiveFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const clearFilters = () => {
        setActiveFilters({ afflatus: [], rank: [], role: [], dmgType: [] });
        setSearchTerm('');
    };

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen relative">
            <AnimatePresence mode="wait">
                {!selectedCharacter ? (
                    <motion.div
                        key="library-grid"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        {/* Header & Controls */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                            <div>
                                <h1 className="text-3xl font-bold font-serif text-white mb-1">Arcanist Library</h1>
                                <p className="text-gray-400 text-sm">Database of registered arcanists.</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-reverse-gold transition-colors" />
                                    <input 
                                        type="text" 
                                        placeholder="Search arcanists..." 
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full sm:w-64 pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-reverse-gold/50 focus:ring-1 focus:ring-reverse-gold/50 transition-all"
                                    />
                                </div>
                                
                                <button 
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className={clsx(
                                        "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all",
                                        isFilterOpen || Object.values(activeFilters).some(arr => arr.length > 0)
                                            ? "bg-reverse-gold/20 border-reverse-gold text-reverse-gold"
                                            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                                    )}
                                >
                                    <Filter className="w-4 h-4" />
                                    <span>Filters</span>
                                    {Object.values(activeFilters).flat().length > 0 && (
                                        <span className="bg-reverse-gold text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                                            {Object.values(activeFilters).flat().length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Expandable Filter Panel */}
                        <AnimatePresence>
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="bg-black/20 border border-white/10 rounded-xl p-6 space-y-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Active Filters</h3>
                                            <button onClick={clearFilters} className="text-xs text-reverse-gold hover:text-white transition-colors">Clear All</button>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.entries(filterOptions).map(([category, options]) => (
                                                <div key={category}>
                                                    <h4 className="text-xs font-bold text-gray-500 mb-3 capitalize">{category === 'dmgType' ? 'Damage Type' : category}</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {options.map(option => (
                                                            <button
                                                                key={option}
                                                                onClick={() => toggleFilter(category, option)}
                                                                className={clsx(
                                                                    "px-3 py-1 rounded-full text-xs border transition-all",
                                                                    activeFilters[category].includes(option)
                                                                        ? "bg-reverse-gold text-black border-reverse-gold font-bold shadow-[0_0_10px_rgba(212,179,117,0.3)]"
                                                                        : "bg-white/5 text-gray-400 border-white/10 hover:border-gray-500"
                                                                )}
                                                            >
                                                                {option}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {filteredCharacters.map(char => (
                                <CharacterCard 
                                    key={char.name}
                                    character={char}
                                    isSelected={false}
                                    onClick={(c) => setSelectedCharacter(c)}
                                    disabled={false}
                                />
                            ))}
                        </div>

                        {filteredCharacters.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <p className="text-xl">No arcanists found matching your criteria.</p>
                                <button onClick={clearFilters} className="mt-4 text-reverse-gold hover:underline">Reset Filters</button>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <CharacterProfile 
                        character={selectedCharacter} 
                        onBack={() => setSelectedCharacter(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

const CharacterProfile = ({ character, onBack }) => {
    const [activeTab, setActiveTab] = useState('bio');
    const { profile } = character;

    const tabs = [
        { id: 'bio', label: 'Biography', icon: Info },
        { id: 'inheritance', label: 'Inheritance', icon: Zap },
        { id: 'incantations', label: 'Incantations', icon: Sparkles },
        { id: 'teammates', label: 'Teammates', icon: Users }, // Placeholder logic if data missing
        { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    ];

    if (!profile) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
                <p className="text-xl text-gray-400">Profile data missing for {character.name}.</p>
                <button onClick={onBack} className="text-reverse-gold hover:underline">Return to Library</button>
            </div>
        );
    }

    return (
        <motion.div
            key="profile-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className=" min-h-screen"
        >
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Library
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
                {/* Left Sidebar: Image & Stats */}
                <div className="space-y-6">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                        <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-24">
                            <h1 className="text-4xl font-black text-white font-serif mb-2">{character.name}</h1>
                            <div className="flex flex-wrap gap-2">
                                <span className={clsx("px-2 py-0.5 rounded text-xs font-bold border bg-black/50 border-white/20 uppercase tracking-wider")}>
                                    Rank {character.rank}
                                </span>
                                <span className="px-2 py-0.5 rounded text-xs font-bold border bg-black/50 border-white/20 uppercase tracking-wider text-reverse-gold">
                                    {character.role}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4 backdrop-blur-sm">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-gray-400">Afflatus</span>
                            <span className="text-white font-bold">{character.afflatus}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-gray-400">Damage Type</span>
                            <span className="text-white font-bold">{character.dmgType}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Rarity</span>
                            <span className="text-reverse-gold font-bold">{'★'.repeat(character.rarity)}</span>
                        </div>
                    </div>
                </div>

                {/* Right Content: Tabs & Details */}
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col min-h-[600px] backdrop-blur-sm">
                    {/* Tabs Header */}
                    <div className="flex border-b border-white/10 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap",
                                    activeTab === tab.id 
                                        ? "text-reverse-gold bg-white/5 border-b-2 border-reverse-gold" 
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                {activeTab === 'bio' && (
                                    <div className="prose prose-invert max-w-none">
                                        <h3 className="text-2xl font-serif text-white mb-4">Biography</h3>
                                        <p className="whitespace-pre-line text-gray-300 leading-relaxed">
                                            {profile.bio || "No biography available."}
                                        </p>
                                        
                                        {profile.effects && (
                                            <div className="mt-8 space-y-4">
                                                <h3 className="text-xl font-serif text-white border-b border-white/10 pb-2">Special Effects</h3>
                                                {Object.entries(profile.effects).map(([key, val]) => (
                                                    <div key={key} className="bg-black/20 p-4 rounded-lg border border-white/5">
                                                        <span className="text-reverse-gold font-bold block mb-1">[{key}]</span>
                                                        <span className="text-gray-300 text-sm">{val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'inheritance' && (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-serif text-white mb-4">Insight</h3>
                                        {profile.inheritance ? profile.inheritance.map((insight, idx) => (
                                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                                                <div className="flex-shrink-0">
                                                    <img src={insight.icon} alt={`Insight ${insight.level}`} className="w-16 h-16 object-contain" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-reverse-gold mb-1">Insight {insight.level}</h4>
                                                    <p className="text-gray-300 text-sm leading-relaxed">{insight.description}</p>
                                                </div>
                                            </div>
                                        )) : <p className="text-gray-500">No inheritance data.</p>}
                                    </div>
                                )}

                                {activeTab === 'incantations' && (
                                    <div className="space-y-8">
                                         {profile.incantations ? profile.incantations.map((skill, idx) => (
                                            <div key={idx} className="space-y-4">
                                                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                                    <img src={skill.image} alt={skill.name} className="w-12 h-12 rounded border border-white/20" />
                                                    <div>
                                                        <h4 className="font-bold text-xl text-white">{skill.name}</h4>
                                                        <span className="text-xs text-gray-400 uppercase tracking-wider">{skill.type}</span>
                                                    </div>
                                                </div>
                                                <div className="grid gap-4 pl-4 md:pl-16">
                                                    {skill.ranks.map((rank, rIdx) => (
                                                        <div key={rIdx} className="relative pl-6 border-l-2 border-white/10 bg-black/10 p-4 rounded-r-lg">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className="text-reverse-gold text-lg">{rank.rank}</span>
                                                                {rank.rankType && <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-300">{rank.rankType}</span>}
                                                            </div>
                                                            <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: rank.description }} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                         )) : <p className="text-gray-500">No incantation data.</p>}
                                    </div>
                                )}
                                
                                {activeTab === 'gallery' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         {profile.gallery ? profile.gallery.map((img, idx) => (
                                            <div key={idx} className="group relative aspect-video rounded-xl overflow-hidden border border-white/10">
                                                <img src={img.image} alt={img.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                                    <h4 className="text-white font-bold">{img.name}</h4>
                                                    <p className="text-xs text-gray-300 italic">"{img.description}"</p>
                                                </div>
                                            </div>
                                         )) : <p className="text-gray-500 col-span-full text-center">No gallery images.</p>}
                                    </div>
                                )}
                                
                                {activeTab === 'teammates' && (
                                    <div className="flex items-center justify-center py-20 text-gray-500">
                                        <div className="text-center">
                                            <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                            <p>Teammate recommendations coming soon.</p>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Library;
