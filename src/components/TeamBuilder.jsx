import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Filter, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { characters } from '../data/characters';
import CharacterCard from './CharacterCard';
import clsx from 'clsx';
import SettingsMenu from './SettingsMenu';
import { findMetaTeamsFor, findSynergyCoresFor, metaTeamDatabase } from '../data/metaData';

const TeamBuilder = () => {
  const [selectedChars, setSelectedChars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all, selected
  const [numTeams, setNumTeams] = useState(1);
  const [afflatusRestrictions, setAfflatusRestrictions] = useState([]);
  const [reasoningLevel, setReasoningLevel] = useState(-1);
  const [chutesEndpoint, setChutesEndpoint] = useState(() => localStorage.getItem('chutesEndpoint') || 'https://llm.chutes.ai');
  const [chutesModel, setChutesModel] = useState(() => localStorage.getItem('chutesModel') || 'deepseek-r1');
  const [chutesApiKey, setChutesApiKey] = useState(() => localStorage.getItem('chutesApiKey') || '');
  const [keyLoadouts, setKeyLoadouts] = useState(() => {
    const stored = localStorage.getItem('chutesKeyLoadouts');
    return stored ? JSON.parse(stored) : [];
  });
  const [activeKeyId, setActiveKeyId] = useState(() => localStorage.getItem('chutesActiveKeyId') || null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [results, setResults] = useState([]);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [thoughtText, setThoughtText] = useState('');
  const [progressPercent, setProgressPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const resultsRef = useRef(null);

  const thoughtSteps = [
    'Analyzing selected arcanists and their roles...',
    'Mapping CN meta teams and tier placements...',
    'Evaluating synergy cores and afflatus coverage...',
    'Balancing DPS/Support/Survival composition...',
    'Validating substitutions and edge cases...',
  ];

  const toggleCharacter = (char) => {
    setSelectedChars(prev => {
      const exists = prev.find(c => c.name === char.name);
      if (exists) {
        return prev.filter(c => c.name !== char.name);
      }
      if (prev.length >= 2) return prev; // Max 2 check
      return [...prev, char];
    });
  };

  const filteredCharacters = useMemo(() => {
    return characters.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.afflatus.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem('chutesEndpoint', chutesEndpoint);
  }, [chutesEndpoint]);

  useEffect(() => {
    localStorage.setItem('chutesModel', chutesModel);
  }, [chutesModel]);

  useEffect(() => {
    localStorage.setItem('chutesApiKey', chutesApiKey);
  }, [chutesApiKey]);

  useEffect(() => {
    localStorage.setItem('chutesKeyLoadouts', JSON.stringify(keyLoadouts));
  }, [keyLoadouts]);

  useEffect(() => {
    if (activeKeyId) {
      localStorage.setItem('chutesActiveKeyId', activeKeyId);
    } else {
      localStorage.removeItem('chutesActiveKeyId');
    }
  }, [activeKeyId]);

  useEffect(() => {
    if (!activeKeyId) return;
    const active = keyLoadouts.find((item) => item.id === activeKeyId);
    if (active && active.key !== chutesApiKey) {
      setChutesApiKey(active.key);
    }
  }, [activeKeyId, keyLoadouts]);

  useEffect(() => {
    if (!isGenerating) {
      setThoughtIndex(0);
      return undefined;
    }
    const timer = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % thoughtSteps.length);
    }, 1600);
    return () => clearInterval(timer);
  }, [isGenerating, thoughtSteps.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const normalizeEndpoint = (endpoint) => {
    const trimmed = endpoint.replace(/\s+/g, '').replace(/\/$/, '');
    if (trimmed.includes('/chat/completions')) return trimmed;
    if (trimmed.endsWith('/v1')) return `${trimmed}/chat/completions`;
    return `${trimmed}/v1/chat/completions`;
  };

  const buildPrompt = (selectedCharacterDetails, availableCharactersList, metaContext) => {
    return `
I am building a team in the game Reverse: 1999. My core characters are: ${selectedCharacterDetails}.
Based on the current meta and what Chinese (CN) players are using in high-level content, please suggest ${numTeams} distinct, complete 4-person team compositions that are proven effective in the CN meta.

ENHANCED GENERATION MODE - COMPREHENSIVE ANALYSIS:
${metaContext}

INSTRUCTIONS: You have access to verified meta data, synergy cores, and enhanced analysis capabilities. Use ALL available information to build the most effective teams.

KEY META CORES TO REFERENCE:
- Voyager + Kiperina (Inspiration/Crit) → Best with Barcarola + Aleph
- Nautika + Semmelweis (HP Loss/Bloodtithe) → Best with Flutterpage + Fatutu
- Lucy + Ulrich (Dynamo) → Best with Mercuria + Ezra Theodore
- Recoleta + Lopera (Ultimate) → Best with Melania + Fatutu
- Flutterpage + Fatutu (FUA Support) → Best for supporting FUA carries

ENHANCED INSIGHT ANALYSIS: Provide nuanced and detailed explanations for your choices, including:
- Deep character synergy analysis beyond surface-level meta picks
- Strategic positioning and rotation guidance
- Matchup considerations and team versatility
- Advanced tactical insights for optimal team performance

AVAILABLE 6-STAR CHARACTERS:
The pool of characters you can use for building teams is STRICTLY LIMITED to the following list. Do not use any character not on this list.
${availableCharactersList}

CRITICAL REQUIREMENTS:
- Each team MUST have exactly 4 characters
- You can ONLY use characters from the available list above - no other characters exist
- All characters must be exactly as spelled in the available list
- MUST include ALL of my selected characters: ${selectedChars.map((c) => c.name).join(', ')}
- Complete each team by adding ${4 - selectedChars.length} more characters from the available list
- Generate exactly ${numTeams} team${numTeams !== 1 ? 's' : ''} as requested
- Use the role assignments exactly as provided in the character data (DPS, Sub DPS, Support, Survival)

For each composition, you MUST follow this structure exactly:

--- Team Start ---
Final Team: Character A, Character B, Character C, Character D

## Character Roles
... (your analysis here)

## Team Synergy and Strategy
... (your analysis here focusing on why this works in CN meta)

## How To Use
... (provide detailed practical guidance on how to effectively use this team in combat)

## Is this viable in Auto?
... (assess auto-play viability)

## Flex/Alternative Options
... (your text analysis here with meta alternatives)
After your text analysis for alternatives, add machine-readable lines for each substitute like this:
Substitute: [Substitute Name] for [Original Character Name]
--- Team End ---

Separate each complete team composition with the "--- Team Start ---" and "--- Team End ---" delimiters.
Remember: Each team must have EXACTLY 4 characters from the available list, with exact spelling.
`;
  };

  const parseTeamResponse = (rawText) => {
    const teams = rawText.split('--- Team Start ---').slice(1);
    return teams
      .map((teamText) => {
        const teamData = teamText.split('--- Team End ---')[0];
        const lines = teamData.split('\n');
        const teamLine = lines.find((line) => line.toLowerCase().startsWith('final team:'));
        if (!teamLine) return null;

        const teamNames = teamLine
          .substring(teamLine.indexOf(':') + 1)
          .split(',')
          .map((name) => name.trim())
          .filter(Boolean);

        const validCharacters = teamNames.filter((name) =>
          characters.some((char) => char.name.toLowerCase() === name.toLowerCase())
        );

        if (validCharacters.length !== 4) return null;

        const substituteRegex = /Substitute:\s*(.*?)\s*for\s*(.*)/i;
        const substitutes = [];
        lines.forEach((line) => {
          const match = line.match(substituteRegex);
          if (match) {
            const subName = match[1].trim();
            const originalName = match[2].trim();
            if (characters.some((char) => char.name.toLowerCase() === subName.toLowerCase())) {
              substitutes.push({ sub: subName, original: originalName });
            }
          }
        });

        const analysisText = lines
          .filter((line) => !line.toLowerCase().startsWith('final team:') && !line.match(substituteRegex))
          .join('\n')
          .trim();

        return { teamNames: validCharacters, analysisText, substitutes };
      })
      .filter(Boolean);
  };

  const cycleKey = () => {
    if (keyLoadouts.length === 0) return;
    const currentIndex = keyLoadouts.findIndex((item) => item.id === activeKeyId);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % keyLoadouts.length;
    const next = keyLoadouts[nextIndex];
    setActiveKeyId(next.id);
    setChutesApiKey(next.key);
  };

  const generateTeams = async () => {
    if (selectedChars.length === 0) {
      setErrorMessage('Select at least 1 character to generate teams.');
      return;
    }
    if (!chutesApiKey) {
      setErrorMessage('A Chutes API key is required. Add one in Settings.');
      return;
    }

    setErrorMessage('');
    setIsGenerating(true);
    setResults([]);
    setThoughtText('');
    setProgressPercent(8);

    let availableCharacters = [...characters];
    if (afflatusRestrictions.length > 0) {
      availableCharacters = availableCharacters.filter((char) => afflatusRestrictions.includes(char.afflatus));
      const missingSelected = selectedChars.filter((char) => !availableCharacters.some((c) => c.name === char.name));
      if (missingSelected.length > 0) {
        availableCharacters = [...availableCharacters, ...missingSelected];
      }
    }

    const availableCharactersList = availableCharacters.map((char) => char.name).join(', ');

    const selectedCharacterDetails = selectedChars
      .map((char) => `${char.name} (${char.role}, ${char.dmgType} DMG, ${char.afflatus} Afflatus, Rank ${char.rank})`)
      .join(', ');

    const metaTeams = findMetaTeamsFor(selectedChars.map((char) => char.name));
    const synergyCores = findSynergyCoresFor(selectedChars.map((char) => char.name));

    let metaContext = '';
    if (metaTeams.length > 0) {
      metaContext = `
VERIFIED META TEAMS CONTAINING YOUR CHARACTERS (from Prydwen.gg May 2025):
${metaTeams
  .slice(0, 3)
  .map(
    (team) => `**${team.name}** (${team.tier} tier): ${team.characters.join(', ')}\n- Synergy: ${team.niches.join(', ')}\n- Analysis: ${team.description}`
  )
  .join('\n\n')}

TIER RANKINGS FOR YOUR SELECTED CHARACTERS:
${selectedChars
  .map((char) => {
    for (const [tier, tierCharacters] of Object.entries(metaTeamDatabase.tierList)) {
      if (
        tierCharacters.some(
          (metaChar) =>
            char.name.toLowerCase().includes(metaChar.toLowerCase()) ||
            metaChar.toLowerCase().includes(char.name.toLowerCase()) ||
            metaChar.toLowerCase() === char.name.toLowerCase()
        )
      ) {
        return `${char.name}: ${tier} tier`;
      }
    }
    return `${char.name}: Not in current meta rankings`;
  })
  .join('\n')}`;
    } else {
      metaContext = `
No exact meta teams found for your selection, but will recommend teams based on current tier rankings:
${selectedChars
  .map((char) => {
    for (const [tier, tierCharacters] of Object.entries(metaTeamDatabase.tierList)) {
      if (
        tierCharacters.some(
          (metaChar) =>
            char.name.toLowerCase().includes(metaChar.toLowerCase()) ||
            metaChar.toLowerCase().includes(char.name.toLowerCase()) ||
            metaChar.toLowerCase() === char.name.toLowerCase()
        )
      ) {
        return `${char.name}: ${tier} tier`;
      }
    }
    return `${char.name}: Not in current meta rankings`;
  })
  .join('\n')}`;
    }

    if (synergyCores.length > 0) {
      metaContext += `

INSPIRATIONAL SYNERGY CORES FOR YOUR CHARACTERS:
${synergyCores
  .map(
    (core) => `**${core.name}** (${core.characters.join(' + ')}):\n- Synergy: ${core.description}\n- Recommended Partners: ${core.bestWith}`
  )
  .join('\n\n')}`;
    }

    if (afflatusRestrictions.length > 0) {
      metaContext += `

AFFLATUS RESTRICTION ACTIVE:
Only use characters with the following Afflatus types: ${afflatusRestrictions.join(', ')}.`;
    }

    const prompt = buildPrompt(selectedCharacterDetails, availableCharactersList, metaContext);

    try {
      const payload = {
        model: chutesModel,
        messages: [
          {
            role: 'system',
            content:
              'You are a Reverse: 1999 team-building expert. Follow the exact output format and ensure strict compliance with the available character list and team size. If supported, include a concise reasoning visualization inside <think>...</think> before the team outputs (keep under 1200 characters).',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 1200,
        stream: true,
      };

      const response = await fetch(normalizeEndpoint(chutesEndpoint), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
          Authorization: `Bearer ${chutesApiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Chutes API error (${response.status})`);
      }

      let rawText = '';
      let reasoningText = '';

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          lines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) return;
            const data = trimmed.replace('data:', '').trim();
            if (!data || data === '[DONE]') return;
            try {
              const chunk = JSON.parse(data);
              const delta = chunk?.choices?.[0]?.delta || chunk?.choices?.[0]?.message || {};
              const deltaContent = delta?.content || '';
              const deltaReasoning = delta?.reasoning || delta?.thought || delta?.think || '';

              if (deltaReasoning) {
                reasoningText += deltaReasoning;
                const trimmed = reasoningText.replace(/\s+/g, ' ').trim();
                setThoughtText(trimmed.slice(-1400));
              }

              if (deltaContent) {
                rawText += deltaContent;
              }

              if (!reasoningText && rawText.length > 0) {
                setThoughtText('Streaming model output...');
              }

              const progress = Math.min(95, 10 + Math.floor(rawText.length / 60));
              setProgressPercent(progress);
            } catch (err) {
              // Ignore malformed lines
            }
          });
        }
      } else {
        const data = await response.json();
        rawText = data?.choices?.[0]?.message?.content || data?.output || data?.result || '';
        reasoningText = data?.choices?.[0]?.message?.reasoning || '';
        if (reasoningText) setThoughtText(reasoningText);
      }

      if (!thoughtText && rawText.includes('<think>')) {
        const start = rawText.indexOf('<think>');
        const end = rawText.indexOf('</think>');
        if (start !== -1 && end !== -1) {
          const extracted = rawText.slice(start + 7, end).trim();
          if (extracted) setThoughtText(extracted.replace(/\s+/g, ' ').trim().slice(0, 1400));
          rawText = rawText.replace(rawText.slice(start, end + 8), '').trim();
        }
      }

      setProgressPercent(100);
      const parsedTeams = parseTeamResponse(rawText);

      if (parsedTeams.length === 0) {
        setErrorMessage('Could not parse any valid teams from the response. Try again.');
      }

      setResults(parsedTeams);

      if (parsedTeams.length > 0) {
        setSelectedChars([]);
        setActiveTab('all');
        requestAnimationFrame(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } catch (error) {
      setErrorMessage(error.message || 'Failed to generate teams.');
    } finally {
      setIsGenerating(false);
    }
  };

  const sanitizeLine = (line) => {
    let cleaned = line.replace(/```/g, '').trim();
    cleaned = cleaned.replace(/^#+\s*/g, '');
    cleaned = cleaned.replace(/\*\*(?![^*]+\*\*)/g, '');
    cleaned = cleaned.replace(/\*(?![^*]+\*)/g, '');
    cleaned = cleaned.replace(/`/g, '');
    return cleaned;
  };

  const renderMarkdownLines = (text) => {
    const lines = text.split('\n');
    const blocks = [];
    let listBuffer = [];

    const flushList = () => {
      if (listBuffer.length === 0) return;
      blocks.push(
        <ul key={`list-${blocks.length}`} className="list-disc list-inside space-y-1 text-gray-300">
          {listBuffer.map((item, idx) => (
            <li key={`${item}-${idx}`}>{item}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    };

    lines.forEach((line, idx) => {
      const trimmed = sanitizeLine(line);
      if (!trimmed) {
        flushList();
        return;
      }
      if (trimmed.startsWith('## ')) {
        flushList();
        blocks.push(
          <h3 key={`h2-${idx}`} className="mt-6 text-lg font-semibold text-reverse-gold">
            {trimmed.replace('## ', '')}
          </h3>
        );
        return;
      }
      if (trimmed.startsWith('### ')) {
        flushList();
        blocks.push(
          <h4 key={`h3-${idx}`} className="mt-4 text-base font-semibold text-reverse-gold-light">
            {trimmed.replace('### ', '')}
          </h4>
        );
        return;
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        listBuffer.push(trimmed.replace(/^[-*]\s+/, ''));
        return;
      }

      flushList();
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
      blocks.push(
        <p key={`p-${idx}`} className="text-sm text-gray-300 leading-relaxed">
          {parts.map((part, partIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={`b-${partIdx}`} className="text-reverse-gold-light">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={`s-${partIdx}`}>{part}</span>;
          })}
        </p>
      );
    });

    flushList();
    return blocks;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search & Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search Arcanists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-white focus:outline-none focus:border-reverse-gold/50 focus:ring-1 focus:ring-reverse-gold/50 transition-all placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            <button 
              onClick={() => setActiveTab('all')}
              className={clsx(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeTab === 'all' ? "bg-reverse-gold text-reverse-dark shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              All Arcanists
            </button>
            <button 
               onClick={() => setActiveTab('selected')}
               className={clsx(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all relative",
                activeTab === 'selected' ? "bg-reverse-gold text-reverse-dark shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              Selected ({selectedChars.length}/2)
            </button>
          </div>

          <SettingsMenu
            numTeams={numTeams}
            setNumTeams={setNumTeams}
            afflatusRestrictions={afflatusRestrictions}
            setAfflatusRestrictions={setAfflatusRestrictions}
            reasoningLevel={reasoningLevel}
            setReasoningLevel={setReasoningLevel}
            chutesEndpoint={chutesEndpoint}
            setChutesEndpoint={setChutesEndpoint}
            chutesModel={chutesModel}
            setChutesModel={setChutesModel}
            chutesApiKey={chutesApiKey}
            setChutesApiKey={setChutesApiKey}
            keyLoadouts={keyLoadouts}
            setKeyLoadouts={setKeyLoadouts}
            activeKeyId={activeKeyId}
            setActiveKeyId={setActiveKeyId}
            onCycleKey={cycleKey}
          />
        </div>
      </div>

      {/* Selected Characters Preview (Floating) */}
      <AnimatePresence>
        {selectedChars.length > 0 && (
           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: 50, opacity: 0 }}
             className="fixed bottom-6 inset-x-0 mx-auto w-fit z-40 bg-reverse-gray/90 backdrop-blur-md border border-reverse-gold/30 rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-6"
           >
             <div className="flex -space-x-4">
                {selectedChars.map(char => (
                    <div key={char.name} className="relative w-12 h-12 rounded-full border-2 border-reverse-gold bg-gray-800 overflow-hidden">
                         <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                    </div>
                ))}
                {Array.from({ length: Math.max(0, 2 - selectedChars.length) }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-12 h-12 rounded-full border-2 border-white/10 bg-black/50 flex items-center justify-center">
                        <span className="text-white/20 text-xs">+</span>
                    </div>
                ))}
             </div>
             
             <div className="h-8 w-px bg-white/10" />

             <button 
               onClick={generateTeams}
               disabled={isGenerating}
               className="bg-reverse-gold hover:bg-reverse-gold-light text-reverse-dark font-bold px-6 py-2 rounded-full transition-colors flex items-center gap-2"
             >
                <Sparkles size={16} />
               {isGenerating ? 'Generating...' : 'Generate Team'}
             </button>

             <button 
                onClick={() => setSelectedChars([])}
                className="p-2 hover:bg-white/10 rounded-full text-gray-400 transition-colors"
             >
                <X size={16} />
             </button>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Thought Process */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="sticky top-20 z-30 mt-6 max-w-md rounded-xl border border-white/10 bg-reverse-dark/80 backdrop-blur-xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="h-5 w-5 rounded-full border border-reverse-gold/40 border-t-reverse-gold"
              />
              AI Thought Process
            </div>
            <motion.p
              key={thoughtIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-xs text-gray-200 leading-relaxed"
            >
              {thoughtText || thoughtSteps[thoughtIndex]}
            </motion.p>
            <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-gradient-to-r from-reverse-gold/30 via-reverse-gold to-reverse-gold-light transition-all duration-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-24 items-start">
        <AnimatePresence>
            {activeTab === 'all' ? (
                filteredCharacters.map(char => (
                <CharacterCard 
                    key={char.name} 
                    character={char} 
                    isSelected={selectedChars.some(c => c.name === char.name)}
                    onClick={toggleCharacter}
                    disabled={selectedChars.length >= 2 && !selectedChars.some(c => c.name === char.name)}
                />
                ))
            ) : (
                selectedChars.map(char => (
                    <CharacterCard 
                        key={char.name} 
                        character={char} 
                        isSelected={true}
                        onClick={toggleCharacter}
                    />
                ))
            )}
        </AnimatePresence>
        </div>

      {activeTab === 'all' && filteredCharacters.length === 0 && (
        <div className="text-center py-20 text-gray-500">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No arcanists found matching "{searchTerm}"</p>
        </div>
      )}

      {activeTab === 'selected' && selectedChars.length === 0 && (
        <div className="text-center py-20 text-gray-500">
            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl opacity-50">?</span>
            </div>
            <p className="text-lg">Select up to 2 characters to start building a team</p>
             <button 
                onClick={() => setActiveTab('all')}
                className="mt-4 text-reverse-gold hover:underline"
            >
                Browse List
            </button>
        </div>
      )}

      {(errorMessage || results.length > 0) && (
        <div ref={resultsRef} className="mt-12 space-y-6">
          {errorMessage && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMessage}
            </div>
          )}

          {results.map((team, index) => (
            <div key={`${team.teamNames.join('-')}-${index}`} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400">Suggested Team {index + 1}</div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {team.teamNames.map((name) => {
                  const char = characters.find((c) => c.name.toLowerCase() === name.toLowerCase());
                  if (!char) return null;
                  return (
                    <CharacterCard
                      key={name}
                      character={char}
                      isSelected={false}
                      onClick={() => {}}
                    />
                  );
                })}
              </div>

              {team.substitutes.length > 0 && (
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-gray-400">Alternatives</div>
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {team.substitutes.map((sub, subIndex) => {
                      const char = characters.find((c) => c.name.toLowerCase() === sub.sub.toLowerCase());
                      if (!char) return null;
                      return (
                        <div key={`${sub.sub}-${subIndex}`} className="space-y-2">
                          <div className="text-[10px] text-gray-500">For {sub.original}</div>
                          <CharacterCard character={char} isSelected={false} onClick={() => {}} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {team.analysisText && (
                <div className="mt-6 space-y-3">
                  {renderMarkdownLines(team.analysisText)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-reverse-dark/80 p-3 text-sm text-gray-200 shadow-lg backdrop-blur hover:border-reverse-gold/50"
          >
            ↑ Top
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default TeamBuilder;
