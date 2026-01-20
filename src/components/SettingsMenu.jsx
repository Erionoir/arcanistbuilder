import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Settings2, Sparkles, KeyRound, Eye, EyeOff, Trash2, RotateCw } from 'lucide-react';
import clsx from 'clsx';

const REASONING_LABELS = {
  '-1': 'Dynamic',
  '0': 'Fastest',
  '1': 'Quick',
  '2': 'Balanced',
  '3': 'Deep',
  '4': 'Rich',
  '5': 'Maximum',
};

const REASONING_DESCRIPTIONS = {
  '-1': 'Dynamic Reasoning: The model adapts its reasoning level as needed.',
  '0': 'No Reasoning: Fastest response, minimal logical steps.',
  '1': 'Minimal Reasoning: Low latency with some logical steps.',
  '2': 'Balanced Speed & Quality: A good mix for general use.',
  '3': 'Deeper Reasoning: Slower responses with higher quality analysis.',
  '4': 'Rich Analysis: Very slow with highly detailed and rich responses.',
  '5': 'Maximum Reasoning: The model uses its full capacity for analysis.',
};

const AFFLATUS = ['Beast', 'Intellect', 'Mineral', 'Plant', 'Spirit', 'Star'];

const SettingsMenu = ({
  numTeams,
  setNumTeams,
  afflatusRestrictions,
  setAfflatusRestrictions,
  reasoningLevel,
  setReasoningLevel,
  chutesEndpoint,
  setChutesEndpoint,
  chutesModel,
  setChutesModel,
  chutesApiKey,
  setChutesApiKey,
  keyLoadouts,
  setKeyLoadouts,
  activeKeyId,
  setActiveKeyId,
  onCycleKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showKey, setShowKey] = useState(false);
  const [loadoutName, setLoadoutName] = useState('');
  const [loadoutKey, setLoadoutKey] = useState('');
  const [editingId, setEditingId] = useState(null);

  const toggleAfflatus = (value) => {
    setAfflatusRestrictions((prev) => {
      const exists = prev.includes(value);
      if (exists) return prev.filter((item) => item !== value);
      if (prev.length >= 3) return prev;
      return [...prev, value];
    });
  };

  const reasoningLabel = useMemo(() => REASONING_LABELS[String(reasoningLevel)] ?? 'Dynamic', [reasoningLevel]);
  const reasoningDescription = useMemo(
    () => REASONING_DESCRIPTIONS[String(reasoningLevel)] ?? REASONING_DESCRIPTIONS['-1'],
    [reasoningLevel]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSaveLoadout = () => {
    const trimmedName = loadoutName.trim();
    const trimmedKey = loadoutKey.trim();
    if (!trimmedName || !trimmedKey) return;

    if (editingId) {
      setKeyLoadouts((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, name: trimmedName, key: trimmedKey } : item
        )
      );
      setActiveKeyId(editingId);
      setChutesApiKey(trimmedKey);
    } else {
      const id = crypto?.randomUUID ? crypto.randomUUID() : `loadout-${Date.now()}`;
      setKeyLoadouts((prev) => [...prev, { id, name: trimmedName, key: trimmedKey }]);
      setActiveKeyId(id);
      setChutesApiKey(trimmedKey);
    }

    setLoadoutName('');
    setLoadoutKey('');
    setEditingId(null);
  };

  const handleEditLoadout = (loadout) => {
    setEditingId(loadout.id);
    setLoadoutName(loadout.name);
    setLoadoutKey(loadout.key);
    setShowKey(true);
  };

  const handleUseLoadout = (loadout) => {
    setActiveKeyId(loadout.id);
    setChutesApiKey(loadout.key);
  };

  const handleDeleteLoadout = (loadoutId) => {
    setKeyLoadouts((prev) => prev.filter((item) => item.id !== loadoutId));
    if (activeKeyId === loadoutId) {
      setActiveKeyId(null);
      setChutesApiKey('');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          "p-3 rounded-full border transition-all",
          isOpen ? "bg-white/10 border-reverse-gold/50" : "bg-white/5 border-white/10 hover:border-white/30"
        )}
        aria-label="Settings"
      >
        <Settings2 className="w-5 h-5 text-gray-300" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-[360px] max-w-[90vw] rounded-2xl border border-white/10 bg-reverse-dark/95 backdrop-blur-xl shadow-2xl p-5 z-50">
          <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400">
            <Sparkles className="w-4 h-4 text-reverse-gold" />
            Team Generation
          </div>

          <div className="mt-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-wider text-gray-400">Chutes AI</div>
                <button
                  onClick={onCycleKey}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-reverse-gold"
                  type="button"
                >
                  <RotateCw className="w-3 h-3" />
                  Cycle
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">Endpoint</label>
                <input
                  type="text"
                  value={chutesEndpoint}
                  onChange={(e) => setChutesEndpoint(e.target.value)}
                  placeholder="https://llm.chutes.ai"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-reverse-gold/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">Model ID</label>
                <input
                  type="text"
                  value={chutesModel}
                  onChange={(e) => setChutesModel(e.target.value)}
                  placeholder="Model ID"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-reverse-gold/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400">Active API Key</label>
                <div className="flex items-center gap-2">
                  <input
                    type={showKey ? 'text' : 'password'}
                    value={chutesApiKey}
                    onChange={(e) => setChutesApiKey(e.target.value)}
                    placeholder="Paste your Chutes API key"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-reverse-gold/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowKey((prev) => !prev)}
                    className="p-2 rounded-lg border border-white/10 hover:border-white/30"
                    aria-label="Toggle key visibility"
                  >
                    {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400">
                  <KeyRound className="w-4 h-4" />
                  Key Loadouts
                </div>

                <div className="mt-3 space-y-2">
                  <input
                    type="text"
                    value={loadoutName}
                    onChange={(e) => setLoadoutName(e.target.value)}
                    placeholder="Loadout name"
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-reverse-gold/50"
                  />
                  <input
                    type={showKey ? 'text' : 'password'}
                    value={loadoutKey}
                    onChange={(e) => setLoadoutKey(e.target.value)}
                    placeholder="Loadout API key"
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-reverse-gold/50"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSaveLoadout}
                      className="px-3 py-1.5 rounded-full bg-reverse-gold text-reverse-dark text-xs font-semibold"
                    >
                      {editingId ? 'Update Loadout' : 'Save Loadout'}
                    </button>
                    {editingId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(null);
                          setLoadoutName('');
                          setLoadoutKey('');
                        }}
                        className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
                  {keyLoadouts.length === 0 && (
                    <div className="text-xs text-gray-500">No saved keys yet.</div>
                  )}
                  {keyLoadouts.map((loadout) => (
                    <div
                      key={loadout.id}
                      className={clsx(
                        "flex items-center justify-between rounded-lg border px-2 py-2",
                        activeKeyId === loadout.id
                          ? "border-reverse-gold/60 bg-reverse-gold/10"
                          : "border-white/10 bg-black/20"
                      )}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{loadout.name}</div>
                        <div className="text-[10px] text-gray-500">
                          {showKey ? loadout.key : `${loadout.key.slice(0, 4)}••••${loadout.key.slice(-4)}`}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleUseLoadout(loadout)}
                          className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-gray-300 hover:border-reverse-gold/50"
                        >
                          Use
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEditLoadout(loadout)}
                          className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-gray-300 hover:border-white/40"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteLoadout(loadout.id)}
                          className="p-1 rounded-full text-gray-400 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-300 mb-2">Number of Teams</div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    onClick={() => setNumTeams(count)}
                    className={clsx(
                      "px-3 py-1.5 rounded-full text-sm font-medium border transition-all",
                      numTeams === count
                        ? "bg-reverse-gold text-reverse-dark border-reverse-gold"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-white/30"
                    )}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4">
              <div className="text-sm text-gray-200 font-semibold">Enhanced Generation</div>
              <p className="text-xs text-gray-400 mt-2">✨ All advanced features are enabled by default:</p>
              <ul className="text-xs text-gray-400 mt-2 space-y-1 list-disc list-inside">
                <li>🔥 Meta Analysis (Prydwen.gg CN)</li>
                <li>🧠 Deep Analysis & explanations</li>
                <li>💡 Insights & recommendations</li>
                <li>🤝 Synergy Cores & foundations</li>
              </ul>
            </div>

            <div>
              <div className="text-sm text-amber-300 font-semibold">⚠️ Experimental Features</div>
              <div className="mt-3">
                <div className="text-xs text-gray-400">Afflatus Restrictions (max 3)</div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {AFFLATUS.map((type) => {
                    const active = afflatusRestrictions.includes(type);
                    return (
                      <button
                        key={type}
                        onClick={() => toggleAfflatus(type)}
                        className={clsx(
                          "px-2 py-1.5 rounded-lg text-xs border transition-all",
                          active
                            ? "bg-reverse-gold/20 border-reverse-gold text-reverse-gold"
                            : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                        )}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs text-gray-400 mb-2">Reasoning: {reasoningLabel}</div>
                <input
                  type="range"
                  min="-1"
                  max="5"
                  value={reasoningLevel}
                  onChange={(e) => setReasoningLevel(Number(e.target.value))}
                  className="w-full accent-reverse-gold"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>-1</span>
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{reasoningDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
