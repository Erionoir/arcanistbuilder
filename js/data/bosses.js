// Boss data for Reverse: 1999 strategy guides
export const bosses = [
    {
        name: "Dreaming of Manus - Mercuria",
        category: "Event Boss",
        difficulty: "Hard",
        mechanics: [
            "Charm status effect that controls your characters",
            "High Reality damage output",
            "Summons puppet allies",
            "AOE attacks that can wipe teams quickly",
            "Phase transitions at specific HP thresholds"
        ],
        weaknesses: ["Mental damage", "Dispel effects", "High sustain teams"],
        resistances: ["Reality damage", "Debuffs"],
        description: "A corrupted version of Mercuria that appears in nightmare sequences. Known for her devastating charm effects and reality-warping abilities."
    },
    {
        name: "Storm in the New World - The Fool",
        category: "Story Boss",
        difficulty: "Extreme",
        mechanics: [
            "Reality damage focus",
            "Summons multiple phases of enemies",
            "Time manipulation abilities",
            "Massive AOE ultimate attacks",
            "Immunity phases requiring specific strategies"
        ],
        weaknesses: ["Mental damage", "Burst damage teams", "Timing-based strategies"],
        resistances: ["Reality damage", "DOT effects"],
        description: "The final boss of Chapter 7, representing the culmination of the Storm's power. Requires careful team composition and timing."
    },
    {
        name: "Tooth Fairy's Nightmare",
        category: "Event Boss", 
        difficulty: "Hard",
        mechanics: [
            "Sleep and dream manipulation",
            "Mental damage over time",
            "Healing reduction effects",
            "Mirror illusions that copy attacks",
            "Stacks debuffs that amplify damage taken"
        ],
        weaknesses: ["Reality damage", "Cleanse effects", "High HP sustain"],
        resistances: ["Mental damage", "Sleep effects"],
        description: "A twisted version of Tooth Fairy's dental practice, turning dreams into nightmares with psychological warfare."
    },
    {
        name: "Spinning Cosmos - Spathodea",
        category: "Event Boss",
        difficulty: "Medium",
        mechanics: [
            "Plant-based AOE attacks",
            "Regeneration abilities",
            "Summons flower minions",
            "Reality damage with burn effects",
            "Environmental hazards that persist"
        ],
        weaknesses: ["Mental damage", "Burst strategies", "Minion clear"],
        resistances: ["Plant affinities", "DOT effects"],
        description: "Spathodea's botanical powers run wild, creating a garden of deadly beauty that must be carefully navigated."
    },
    {
        name: "Artificial Somnambulism - Jessica",
        category: "Story Boss",
        difficulty: "Medium",
        mechanics: [
            "Sleep-walking attack patterns",
            "Mixed Mental and Reality damage",
            "Confusion effects on team positioning",
            "Automatic counter-attacks when hit",
            "Damage reflection during certain phases"
        ],
        weaknesses: ["Positioning strategies", "Timing control", "Sustain teams"],
        resistances: ["Direct burst", "Status effects"],
        description: "Jessica trapped in an artificial sleep state, moving with deadly precision while unconscious."
    },
    {
        name: "The Last Gentleman - Druvis III",
        category: "Event Boss",
        difficulty: "Hard",
        mechanics: [
            "Gentleman's code - specific attack rules",
            "High Mental damage output", 
            "Duel mechanics requiring 1v1 scenarios",
            "Honor system that punishes certain strategies",
            "Progressive difficulty based on team composition"
        ],
        weaknesses: ["Reality damage", "Single-target focus", "Honor-based strategies"],
        resistances: ["Mental damage", "Unfair tactics"],
        description: "Druvis III embodying the pinnacle of gentlemanly conduct, even in battle. Requires respect for proper dueling etiquette."
    },
    {
        name: "Voyager's End Game",
        category: "Ultimate Boss",
        difficulty: "Extreme", 
        mechanics: [
            "Multi-phase encounter with different mechanics each phase",
            "Time limit pressure",
            "Requires specific character combinations to progress",
            "Reality and Mental damage immunity rotations",
            "Environmental changes that affect strategy"
        ],
        weaknesses: ["Adaptive team compositions", "Phase-specific strategies", "Perfect execution"],
        resistances: ["Single-strategy approaches", "Brute force"],
        description: "The ultimate challenge representing Voyager's mastery over space and time. Only the most prepared teams can hope to succeed."
    },
    {
        name: "Vila's Temporal Maze",
        category: "Event Boss",
        difficulty: "Hard",
        mechanics: [
            "Time loop mechanics",
            "Prediction-based attacks",
            "Mental damage with confusion effects",
            "Resets certain abilities periodically",
            "Requires specific timing windows to damage"
        ],
        weaknesses: ["Pattern recognition", "Timing mastery", "Mental resistance"],
        resistances: ["Random strategies", "Reality damage"],
        description: "Vila's time manipulation creates a maze where past, present, and future collide in dangerous ways."
    },
    {
        name: "Regulus's Cosmic Trial",
        category: "Story Boss",
        difficulty: "Medium",
        mechanics: [
            "Star-based attacks with cosmic themes",
            "Mental damage with stellar positioning requirements",
            "Phase transitions based on celestial events",
            "Buffs self based on team's Star affinity characters",
            "Area denial with cosmic radiation zones"
        ],
        weaknesses: ["Non-Star team compositions", "Reality damage", "Positioning strategies"],
        resistances: ["Star affinity", "Mental damage"],
        description: "Regulus testing worthy opponents through cosmic trials that mirror the movements of celestial bodies."
    },
    {
        name: "Medicine Pocket's Experiment",
        category: "Event Boss",
        difficulty: "Medium",
        mechanics: [
            "Potion effects that modify battle conditions",
            "Random status effects applied to both sides",
            "Healing abilities that can backfire",
            "Transformation mechanics",
            "Experimental debuffs with unique effects"
        ],
        weaknesses: ["Status immunity", "Consistent strategies", "Cleanse effects"],
        resistances: ["Debuff strategies", "Potion effects"],
        description: "Medicine Pocket's laboratory experiment gone wrong, creating chaotic battle conditions with unpredictable effects."
    }
];

export const bossByCategory = {
    "Story Boss": bosses.filter(boss => boss.category === "Story Boss"),
    "Event Boss": bosses.filter(boss => boss.category === "Event Boss"), 
    "Ultimate Boss": bosses.filter(boss => boss.category === "Ultimate Boss")
};

export const bossByDifficulty = {
    "Medium": bosses.filter(boss => boss.difficulty === "Medium"),
    "Hard": bosses.filter(boss => boss.difficulty === "Hard"),
    "Extreme": bosses.filter(boss => boss.difficulty === "Extreme")
};