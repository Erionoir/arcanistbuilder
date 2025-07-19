// Meta team database and synergy core data for team generation

// Current meta data from Prydwen.gg (last updated: May 2025)
export const metaTeamDatabase = {
    'S+': [
        {
            name: "Lesbian Religious Trauma",
            characters: ["Nautika", "Semmelweis", "Flutterpage", "Fatutu"],
            niches: ["HP Loss", "FUA"],
            description: "Undeniably intensely powerful, the Bloodtithe team is something both safe and risky. Nautika and Semmelweis cause HP levels to bounce frequently, leveled out by Fatutu's insane defensive abilities through DMG Share, healing and Nautika's [Higge] and defensive buffs. It generates Bloodtithe quickly, allowing for 2 round 'Divine Joik' cycles that deal an absolutely ungodly amount of damage while under Semmelweis' Array and Flutterpage's [Gust] forcefield."
        },
        {
            name: "Pew Pew Pew",
            characters: ["Barcarola", "Voyager", "Aleph", "Kiperina"],
            niches: ["Inspiration", "Crit"],
            description: "Probably one of the strongest teams available at this time. Utilizes the large amounts of Crit stats stacked by Barcarola and Kiperina (and the latter's Crit Conversion) topped with Aleph's [Interpretation] and Voyager's [Orbital Direction] to nuke through anything in the game. Kept incredibly safe by Kiperina's ridiculous [Shield] values as well as Voyager's [Sturdiness] and automatic Control application."
        },
        {
            name: "Laplace Asylum",
            characters: ["Lucy", "Mercuria", "Ulrich", "Ezra Theodore"],
            niches: ["Dynamo", "FUA"],
            description: "Oriented around keeping [Electric Field] at high levels through [Dynamo]. This team combines Lucy's generally strong attributes like [Data Iteration] and [Pragmatist] with Ulrich's surprisingly personal output and various Channel effects to blend Incan and Ultimate Might buffs."
        },
        {
            name: "Infinite Bladeworks Aurafarming",
            characters: ["Lopera", "Recoleta", "Melania", "Fatutu"],
            niches: ["Ultimate"],
            description: "The standard hypercarry Recoleta setup. Splits AP between Recoleta and Melania to upkeep [Passion Drain] and quickly stack [Fixed Plan] on all allies. Facilitated by Lopera who due to Recoleta's Ult cheating only needs to spend 1 AP per Array cycle."
        }
    ],
    'S': [
        {
            name: "Snowball Fight",
            characters: ["Windsong", "Flutterpage", "Fatutu", "Lopera"],
            niches: ["FUA", "Crit"],
            description: "A Windsong composition focusing on short-cycle burst windows utilizing a swift rotation of FUAs from Windsong's Ultimate, Fatutu's 'Unmendable Cracks' casts and Lopera's channel to keep [Gust] stacked."
        },
        {
            name: "Glug Glug 3000",
            characters: ["Jiu Niangzi", "Pickles", "Flutterpage", "Fatutu"],
            niches: ["FUA"],
            description: "JNZ's high frequency of FUAs in her channel easily builds [Gust] and keeps [Shell Beacon] at a high uptime and her damage is further facilitated through [Adieu! Mother Earth], stacked [Spirit Shell] and +FUA DMG Dealt."
        }
    ],
    cores: {
        "Voyager + Kiperina": {
            niche: "Inspiration/Crit",
            description: "Core duo for Inspiration-based teams with critical hit synergy",
            bestWith: ["Barcarola", "Aleph", "Flutterpage", "Fatutu"]
        },
        "Nautika + Semmelweis": {
            niche: "HP Loss/Bloodtithe",
            description: "Core duo for Bloodtithe generation and HP manipulation strategies",
            bestWith: ["Flutterpage", "Fatutu", "Eternity", "Ezra Theodore"]
        },
        "Flutterpage + Fatutu": {
            niche: "FUA Support",
            description: "Core support duo for Follow-Up Attack teams",
            bestWith: ["Jiu Niangzi", "Windsong", "Liang Yue", "37"]
        },
        "Lucy + Ulrich": {
            niche: "Dynamo/Electric Field",
            description: "Core duo for Dynamo and Electric Field synergy",
            bestWith: ["Mercuria", "Ezra Theodore"]
        }
    },
    tierList: {
        "S+": ["Lucy", "Nautika", "Recoleta", "Melania", "Semmelweis", "Ulrich"],
        "S": ["Barcarola", "Jiu Niangzi", "Willow", "Windsong", "Anjo Nala", "Hissabeth", "Kiperina", "Lopera", "Voyager"],
        "A": ["Lilya", "Marcus", "Noire", "Spathodea", "Bkornblume", "Druvis III", "Eternity", "Fatutu", "Flutterpage", "Kakania", "Pickles", "Tooth Fairy"]
    }
};

export const synergyCoreDatabase = {
    "Mental Crit": {
        characters: ["Regulus", "Voyager"],
        description: "A Mental damage core that leverages critical hits. Voyager provides crucial crit-rate buffs and control, setting up Regulus to deal high damage with her ultimate.",
        bestWith: "A support that can increase Mental DMG or provide more survivability like Tooth Fairy or Medicine Pocket."
    },
    "Reality Burst": {
        characters: ["A Knight", "An-an Lee"],
        description: "A Reality damage core focused on burst damage. An-an Lee provides significant buffs to Reality damage dealers, allowing A Knight to unleash powerful attacks.",
        bestWith: "A survival character like Sotheby or Ms. NewBabel, and another Reality sub-dps."
    },
    "Poison Ivy": {
        characters: ["Jessica", "Sotheby"],
        description: "A damage-over-time core centered around Poison. Jessica is a potent poison applicator, while Sotheby's healing is enhanced when allies are debuffed, creating a unique synergy. Both deal Reality damage.",
        bestWith: "A character that can apply more debuffs or a strong DPS to take advantage of the poison, like Druvis III."
    },
    "FUA Fiesta": {
        characters: ["Jiu Niangzi", "Pickles"],
        description: "A Follow-up Attack (FUA) core. Jiu Niangzi is a strong FUA DPS, and Pickles provides valuable buffs that enhance overall team damage and consistency.",
        bestWith: "Another FUA-enabling support like Flutterpage, and a strong survival character like Fatutu."
    },
    "Ultimate Spam": {
        characters: ["Kaalaa Baunaa", "6"],
        description: "A core focused on rapidly charging and using ultimates. Kaalaa Baunaa is a DPS that benefits from frequent ultimate usage, and 6 is a unique support that can generate Moxie for the team.",
        bestWith: "Characters that can generate their own moxie or benefit from high ultimate uptime, like Melania or Eternity."
    },
    "Beast Powerhouse (Mental)": {
        characters: ["Melania", "Medicine Pocket"],
        description: "A versatile and powerful Beast-afflatus Mental damage core. Melania (S+ Sub DPS) is a top-tier damage dealer who ramps up with her ultimate. Medicine Pocket (S Survival) provides excellent healing and a valuable damage amplification debuff. Their shared Beast afflatus makes them a strong pairing against Plant-type enemies.",
        bestWith: "A main Mental DPS like Barcarola or Willow, and a buffer like 6 or Voyager."
    },
    "Genesis Damage": {
        characters: ["37", "6"],
        description: "A Mental damage core focused on the unique 'Genesis' damage type. 37 (A+ DPS) is the main damage dealer. 6 (A Support) provides a mix of buffs for the team and debuffs for the enemy, enhancing 37's damage while controlling the flow of battle.",
        bestWith: "A survival character like Tooth Fairy or Kiperina, and a sub-dps who can benefit from 6's buffs, like Regulus or Voyager."
    },
    "Reality Nuke": {
        characters: ["Lilya", "An-an Lee"],
        description: "A Reality damage core designed for massive burst damage. An-an Lee (A Support) provides substantial buffs that dramatically increase the critical damage output of Lilya (A DPS), allowing her ultimate to one-shot powerful enemies.",
        bestWith: "A character that can apply Reality DEF down debuffs like Shamane, and a strong survival character like Tooth Fairy (who also provides crit-related debuffs)."
    },
    "Plant Control": {
        characters: ["Druvis III", "Noire"],
        description: "A Plant-afflatus Mental damage core. Noire (A DPS) serves as the main damage dealer, while Druvis III (A Sub DPS) provides excellent crowd control with her [Petrify] mechanic, locking down enemies.",
        bestWith: "A dedicated healer/survivability character like Vila (who is also Plant/Mental, A+ Survival) or a generic strong healer like Medicine Pocket."
    },
    "Burn & Debuff": {
        characters: ["Spathodea", "Shamane"],
        description: "A Reality damage core that focuses on the [Burn] DoT effect. Spathodea (A DPS) is the primary damage dealer. Shamane (B Support) provides crucial debuffs that amplify all damage taken by the enemy, significantly boosting Spathodea's output.",
        bestWith: "A strong survival character like Ms. NewBabel, and another Reality damage dealer or buffer like An-an Lee."
    },
    "Poison System": {
        characters: ["Jessica", "Sotheby"],
        description: "A Reality damage core that revolves around the [Poison] status effect. Jessica (S DPS) is a powerful damage dealer whose effectiveness is amplified by [Poison]. Sotheby (S+ Survival) provides healing and additional [Poison] application, creating a feedback loop of damage and survivability.",
        bestWith: "A character that can provide buffs or utility without interfering with the poison setup, like An-an Lee or Pickles."
    },
    "Follow-up Frenzy": {
        characters: ["Centurion", "Pickles"],
        description: "A Reality damage core focused on maximizing follow-up attacks. Centurion (S+ DPS) deals significant damage through her follow-up mechanic. Pickles (A Support) provides buffs that enhance Centurion's damage output and can contribute his own damage.",
        bestWith: "A strong survival character like Tooth Fairy or Medicine Pocket, and a debuffer to soften up targets, like Shamane."
    },
    "Mineral Shield Wall": {
        characters: ["Eternity", "Ms. NewBabel"],
        description: "A highly durable Reality damage core from the Mineral afflatus. Eternity (S Sub DPS) provides both damage and survivability through her [Nasty Wound] and self-healing. Ms. NewBabel (A+ Survival) offers strong shields and healing, making the team incredibly resilient.",
        bestWith: "A main DPS to capitalize on the survivability, preferably also Mineral afflatus to benefit from afflatus advantages, like Pickles or a neutral damage dealer."
    },
    "Spirit Control & Debuff": {
        characters: ["Voyager", "Tooth Fairy"],
        description: "A Mental damage core that focuses on controlling the battlefield and debuffing enemies. Voyager (A Support) can inflict [Silence] and [Confusion], disrupting enemy actions. Tooth Fairy (S+ Survival) provides top-tier healing while applying [Weakness] to increase damage taken by enemies.",
        bestWith: "A main Mental DPS who can take advantage of the control and debuffs, such as Kaalaa Baunaa or 37."
    },
    "Taunt & Counter": {
        characters: ["A Knight", "Medicine Pocket"],
        description: "A Reality damage core built around a defensive 'Taunt' and 'Counter' strategy. A Knight (A Sub DPS) draws enemy fire with his [Taunt] and retaliates with powerful counters. Medicine Pocket (S Survival) ensures A Knight stays alive with their potent healing and provides a damage amplification debuff.",
        bestWith: "A main DPS who can operate safely while A Knight tanks, such as Lilya or Regulus."
    },
    "Star Afflatus Synergy": {
        characters: ["Regulus", "Lilya"],
        description: "A Star-afflatus Reality damage core. Regulus (S+ DPS) and Lilya (A DPS) are both powerful damage dealers who benefit from their shared afflatus when facing Intellect-type enemies. Regulus provides consistent damage and some utility, while Lilya offers massive burst damage with her ultimate.",
        bestWith: "A strong survival character like Tooth Fairy (who also provides crit-related debuffs that benefit both) and a buffer/debuffer like An-an Lee or Pickles."
    },
    "Intellect Afflatus Synergy": {
        characters: ["Centurion", "An-an Lee"],
        description: "An Intellect-afflatus Reality damage core. Centurion (S+ DPS) is a top-tier damage dealer who can take advantage of the buffs provided by An-an Lee (A Support), who is also of the Intellect afflatus. This pairing is particularly effective against Beast-type enemies.",
        bestWith: "A survival character like Medicine Pocket or Ms. NewBabel, and another support or sub-dps to round out the team."
    }
};

// Helper functions for meta data
export function findMetaTeamsFor(selectedCharacters) {
    const selectedNames = selectedCharacters.map(char => char.toLowerCase());
    const metaTeams = [];
    
    // Check S+ teams first
    for (const team of metaTeamDatabase['S+']) {
        const matchingChars = team.characters.filter(char => 
            selectedNames.some(selected => 
                selected.includes(char.toLowerCase()) || 
                char.toLowerCase().includes(selected) ||
                char.toLowerCase() === selected
            )
        );
        if (matchingChars.length > 0) {
            metaTeams.push({...team, tier: 'S+', matches: matchingChars.length});
        }
    }
    
    // S teams
    for (const team of metaTeamDatabase['S']) {
        const matchingChars = team.characters.filter(char => 
            selectedNames.some(selected => 
                selected.includes(char.toLowerCase()) || 
                char.toLowerCase().includes(selected) ||
                char.toLowerCase() === selected
            )
        );
        if (matchingChars.length > 0) {
            metaTeams.push({...team, tier: 'S', matches: matchingChars.length});
        }
    }
    
    // Core combinations
    for (const [coreNames, coreData] of Object.entries(metaTeamDatabase.cores)) {
        const coreCharacters = coreNames.split(' + ');
        const matchingCores = coreCharacters.filter(char => 
            selectedNames.some(selected => 
                selected.includes(char.toLowerCase()) || 
                char.toLowerCase().includes(selected) ||
                char.toLowerCase() === selected
            )
        );
        if (matchingCores.length > 0) {
            metaTeams.push({
                name: coreNames + " Core",
                characters: [...coreCharacters, ...coreData.bestWith],
                niches: [coreData.niche],
                description: coreData.description,
                tier: 'Core',
                matches: matchingCores.length
            });
        }
    }
    
    // Sort by tier and number of matches
    return metaTeams.sort((a, b) => {
        const tierOrder = {'S+': 3, 'S': 2, 'Core': 1};
        if (tierOrder[a.tier] !== tierOrder[b.tier]) {
            return tierOrder[b.tier] - tierOrder[a.tier];
        }
        return b.matches - a.matches;
    });
}

export function findSynergyCoresFor(selectedCharacters) {
    const selectedNames = selectedCharacters.map(char => char.toLowerCase());
    const synergyCores = [];

    for (const [coreName, coreData] of Object.entries(synergyCoreDatabase)) {
        const matchingCores = coreData.characters.filter(char =>
            selectedNames.some(selected =>
                selected.includes(char.toLowerCase()) ||
                char.toLowerCase().includes(selected) ||
                char.toLowerCase() === selected
            )
        );
        if (matchingCores.length > 0) {
            synergyCores.push({
                name: coreName,
                characters: coreData.characters,
                description: coreData.description,
                bestWith: coreData.bestWith,
                matches: matchingCores.length
            });
        }
    }

    return synergyCores.sort((a, b) => b.matches - a.matches);
}