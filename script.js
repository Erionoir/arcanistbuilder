const characters = [
    // 6-Star
    { name: "37", rarity: 6, image: "assets/characters/37_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "DPS" },
    { name: "6", rarity: 6, image: "assets/characters/6_Poster.webp", afflatus: "Intellect", dmgType: "Mental", rank: "A", role: "Support" },
    { name: "A Knight", rarity: 6, image: "assets/characters/A_Knight_Poster.webp", afflatus: "Spirit", dmgType: "Reality", rank: "B", role: "DPS" },
    { name: "Aleph", rarity: 6, image: "assets/characters/Aleph_Poster.webp", afflatus: "Intellect", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "An-an Lee", rarity: 6, image: "assets/characters/An-an_Lee_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "A", role: "Support" },
    { name: "Anjo Nala", rarity: 6, image: "assets/characters/Anjo_Nala_Poster_CN.webp", afflatus: "Beast", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Argus", rarity: 6, image: "assets/characters/Argus_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "S", role: "Support" },
    { name: "Barcarola", rarity: 6, image: "assets/characters/Barcarola_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "DPS" },
    { name: "Centurion", rarity: 6, image: "assets/characters/Centurion_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "DPS" },
    { name: "Druvis III", rarity: 6, image: "assets/characters/Druvis_III_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "Sub DPS" },
    { name: "Eternity", rarity: 6, image: "assets/characters/Eternity_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "A+", role: "Support" },
    { name: "Ezra Theodore", rarity: 6, image: "assets/characters/Ezra_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "Survival" },
    { name: "Fatutu", rarity: 6, image: "assets/characters/Fatutu_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "S+", role: "Survival" },
    { name: "Flutterpage", rarity: 6, image: "assets/characters/Flutterpage_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "S+", role: "Support" },
    { name: "Getian", rarity: 6, image: "assets/characters/Getian_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "Support" },
    { name: "Hissabeth", rarity: 6, image: "assets/characters/Hissabeth_Poster_CN.webp", afflatus: "Plant", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "Isolde", rarity: 6, image: "assets/characters/Isolde_Poster1.webp", afflatus: "Spirit", dmgType: "Mental", rank: "A+", role: "Sub DPS" },
    { name: "J", rarity: 6, image: "assets/characters/J_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "A+", role: "Sub DPS" },
    { name: "Jessica", rarity: 6, image: "assets/characters/Jessica_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "A+", role: "Sub DPS" },
    { name: "Jiu Niangzi", rarity: 6, image: "assets/characters/Jiu_Niangzi_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S", role: "DPS" },
    { name: "Kaalaa Baunaa", rarity: 6, image: "assets/characters/Kaalaa_Baunaa_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "B", role: "DPS" },
    { name: "Kakania", rarity: 6, image: "assets/characters/Kakania_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "S+", role: "Support" },
    { name: "Kiperina", rarity: 6, image: "assets/characters/Kiperina_Poster_CN.webp", afflatus: "Star", dmgType: "Mental", rank: "S+", role: "Survival" },
    { name: "Liang Yue", rarity: 6, image: "assets/characters/Liang_Yue_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "S", role: "Sub DPS" },
    { name: "Lilya", rarity: 6, image: "assets/characters/Lilya_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "A", role: "DPS" },
    { name: "Lopera", rarity: 6, image: "assets/characters/Lopera_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "S", role: "Support" },
    { name: "Lucy", rarity: 6, image: "assets/characters/Lucy_Poster.webp", afflatus: "Intellect", dmgType: "Reality", rank: "S+", role: "DPS" },
    { name: "Marcus", rarity: 6, image: "assets/characters/Marcus_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "DPS" },
    { name: "Medicine Pocket", rarity: 6, image: "assets/characters/Medicine_Pocket_Poster.webp", afflatus: "Beast", dmgType: "Mental", rank: "S", role: "Survival" },
    { name: "Melania", rarity: 6, image: "assets/characters/Melania_Poster.webp", afflatus: "Beast", dmgType: "Mental", rank: "S+", role: "Sub DPS" },
    { name: "Mercuria", rarity: 6, image: "assets/characters/Mercuria_Poster.webp", afflatus: "Spirit", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "Moldir", rarity: 6, image: "assets/characters/Moldir_Poster_CN.webp", afflatus: "Beast", dmgType: "Reality", rank: "S", role: "Sub DPS" },
    { name: "Ms. NewBabel", rarity: 6, image: "assets/characters/Ms._NewBabel_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S", role: "Survival" },
    { name: "Nautika", rarity: 6, image: "assets/characters/Nautika_Poster_CN.webp", afflatus: "Spirit", dmgType: "Reality", rank: "S+", role: "DPS" },
    { name: "Noire", rarity: 6, image: "assets/characters/Noire_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A", role: "DPS" },
    { name: "Pickles", rarity: 6, image: "assets/characters/Pickles_Poster.webp", afflatus: "Star", dmgType: "Reality", rank: "S+", role: "Support" },
    { name: "Recoleta", rarity: 6, image: "assets/characters/Recoleta_Poster.webp", afflatus: "Mineral", dmgType: "Mental", rank: "S", role: "Support" },
    { name: "Regulus", rarity: 6, image: "assets/characters/Regulus_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A+", role: "Sub DPS" },
    { name: "Semmelweis", rarity: 6, image: "assets/characters/Semmelweis_Poster.webp", afflatus: "Mineral", dmgType: "Reality", rank: "S+", role: "Sub DPS" },
    { name: "Shamane", rarity: 6, image: "assets/characters/Shamane_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "B", role: "Support" },
    { name: "Sotheby", rarity: 6, image: "assets/characters/Sotheby_Poster.webp", afflatus: "Plant", dmgType: "Reality", rank: "S", role: "Survival" },
    { name: "Spathodea", rarity: 6, image: "assets/characters/Spathodea_Poster.webp", afflatus: "Beast", dmgType: "Reality", rank: "A", role: "DPS" },
    { name: "Tooth Fairy", rarity: 6, image: "assets/characters/Tooth_Fairy_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "A", role: "Survival" },
    { name: "Tuesday", rarity: 6, image: "assets/characters/Tuesday_Poster.webp", afflatus: "Spirit", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Ulrich", rarity: 6, image: "assets/characters/Ulrich_Overture_1.webp", afflatus: "Intellect", dmgType: "Reality", rank: "S+", role: "Sub DPS" },
    { name: "Vila", rarity: 6, image: "assets/characters/Vila_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "A+", role: "Survival" },
    { name: "Voyager", rarity: 6, image: "assets/characters/Voyager_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "Sub DPS" },
    { name: "Willow", rarity: 6, image: "assets/characters/Willow_Poster.webp", afflatus: "Plant", dmgType: "Mental", rank: "S", role: "DPS" },
    { name: "Windsong", rarity: 6, image: "assets/characters/Windsong_Poster.webp", afflatus: "Star", dmgType: "Mental", rank: "S", role: "DPS" }
];

// DOM Elements
const characterSelectionGrid = document.getElementById('character-selection');
const generateBtn = document.getElementById('generate-team-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const resultsContainer = document.getElementById('results-container');
const teamResultsWrapper = document.getElementById('team-results-wrapper');
const actionButtonsContainer = document.getElementById('action-buttons');
const dropdownButton = document.getElementById('dropdown-button');
const dropdownOptions = document.getElementById('dropdown-options');
const dropdownLabel = document.getElementById('dropdown-label');
const dropdownArrow = document.getElementById('dropdown-arrow');
const metaModeCheckbox = document.getElementById('meta-mode-checkbox');

// State
let selectedCharacters = [];
let numTeamsToGenerate = 1;
let absoluteMetaMode = false;

function renderCharacterCard(character, isSelectable = false, isSelected = false) {
    const card = document.createElement('div');
    card.className = `character-card ${isSelectable ? 'cursor-pointer' : ''} ${isSelected ? 'selected' : ''}`;
    card.dataset.name = character.name;
    card.setAttribute('tabindex', isSelectable ? '0' : '-1');
    
    const rarityStars = '★'.repeat(character.rarity);

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" onerror="this.src='https://placehold.co/150x200/1F1B15/D4A574?text=Error'">
        <div class="character-info">
            <p class="character-name">${character.name}</p>
            <p class="character-rarity">${rarityStars}</p>
        </div>
    `;
    if (character.afflatus && character.dmgType) {
        card.addEventListener('mouseenter', (e) => showCharacterTooltip(e, character));
        card.addEventListener('mouseleave', hideCharacterTooltip);
    }

    return card;
}

function renderAllCharacters() {
    characterSelectionGrid.innerHTML = '';
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedCharacters.forEach((char, index) => {
        const card = renderCharacterCard(char, true, selectedCharacters.includes(char.name));
        
        // Click and keyboard event listeners
        card.addEventListener('click', () => toggleCharacterSelection(char.name));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCharacterSelection(char.name);
            }
        });
        
        // Animation delay
        card.style.animationDelay = `${index * 0.05}s`;
        card.classList.add('fade-in');
        
        characterSelectionGrid.appendChild(card);
    });
}

function toggleCharacterSelection(name) {
    const cardElement = characterSelectionGrid.querySelector(`[data-name="${name}"]`);
    const index = selectedCharacters.indexOf(name);
    
    if (index > -1) {
        // Deselecting - simple removal
        selectedCharacters.splice(index, 1);
        if (cardElement) {
            cardElement.classList.remove('selected');
            cardElement.blur();
            cardElement.classList.remove('fade-in');
            cardElement.style.animationDelay = '';
        }    } else {
        if (selectedCharacters.length < 2) {
            selectedCharacters.push(name);
            if (cardElement) {
                cardElement.classList.add('selected');
                cardElement.classList.remove('fade-in');
                cardElement.style.animationDelay = '';
            }        } else {
            showNotification("Maximum of 2 characters can be selected.", "warning");
            // Remove focus from card
            if (cardElement) {
                cardElement.blur();
            }
            return;
        }
    }
    updateGenerateButtonState();
}

function updateGenerateButtonState() {
    generateBtn.disabled = selectedCharacters.length === 0;
}

// Current meta data from Prydwen.gg (last updated: May 2025)
const metaTeamDatabase = {
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

function findMetaTeamsFor(selectedCharacters) {
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

async function generateTeam() {
    if (selectedCharacters.length === 0) return;

    generateBtn.disabled = true;
    loadingSpinner.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    teamResultsWrapper.innerHTML = '';
    actionButtonsContainer.innerHTML = '';    // Smooth scroll hehe
    loadingSpinner.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const availableCharacters = characters.map(char => char.name).join(', ');
    
    // Get details
    const selectedCharacterDetails = selectedCharacters.map(name => {
        const char = characters.find(c => c.name === name);
        if (char && char.afflatus && char.dmgType && char.rank && char.role) {
            return `${char.name} (${char.role}, ${char.dmgType} DMG, ${char.afflatus} Afflatus, Rank ${char.rank})`;
        } else if (char) {
            return `${char.name} (details not available)`;
        }
        return name;
    }).join(', ');    // Absolute Meta Mode func
    let metaContext = '';
    if (absoluteMetaMode) {
        console.log('🔥 Absolute Meta Mode activated - Using real CN meta data');
        showNotification('🔥 Absolute Meta Mode: Using verified CN meta data from Prydwen.gg', 'success');
        const metaTeams = findMetaTeamsFor(selectedCharacters);
        console.log('📊 Found meta teams:', metaTeams);
        
        if (metaTeams.length > 0) {
            console.log('✅ Using verified meta team data');
            showNotification(`✅ Found ${metaTeams.length} verified meta team(s) for your selection!`, 'success');
            metaContext = `
VERIFIED META TEAMS CONTAINING YOUR CHARACTERS (from Prydwen.gg May 2025):
${metaTeams.slice(0, 3).map(team => 
    `**${team.name}** (${team.tier} tier): ${team.characters.join(', ')}
- Synergy: ${team.niches.join(', ')}
- Analysis: ${team.description}`
).join('\n\n')}

TIER RANKINGS FOR YOUR SELECTED CHARACTERS:
${selectedCharacters.map(char => {
    for (const [tier, characters] of Object.entries(metaTeamDatabase.tierList)) {
        if (characters.some(metaChar => 
            char.toLowerCase().includes(metaChar.toLowerCase()) || 
            metaChar.toLowerCase().includes(char.toLowerCase()) ||
            metaChar.toLowerCase() === char.toLowerCase()
        )) {
            return `${char}: ${tier} tier`;
        }
    }
    return `${char}: Not in current meta rankings`;
}).join('\n')}`;
        } else {
            console.log('⚠️ No exact meta teams found, using tier data');
            showNotification('⚠️ No exact meta teams found, using tier rankings from CN meta', 'warning');
            metaContext = `
No exact meta teams found for your selection, but will recommend teams based on current tier rankings:
${selectedCharacters.map(char => {
    for (const [tier, characters] of Object.entries(metaTeamDatabase.tierList)) {
        if (characters.some(metaChar => 
            char.toLowerCase().includes(metaChar.toLowerCase()) || 
            metaChar.toLowerCase().includes(char.toLowerCase()) ||
            metaChar.toLowerCase() === char.toLowerCase()
        )) {
            return `${char}: ${tier} tier`;
        }
    }
    return `${char}: Not in current meta rankings`;
}).join('\n')}`;
        }
    } else {
        console.log('🔧 Using general synergy mode');
        showNotification('🔧 Synergy Mode: Building teams based on general character synergies', 'info');
    }

    const prompt = `
        I am building a team in the game Reverse: 1999. My core characters are: ${selectedCharacterDetails}.
        Based on the current meta and what Chinese (CN) players are using in high-level content, please suggest ${numTeamsToGenerate} distinct, complete 4-person team compositions that are proven effective in the CN meta.
          ${absoluteMetaMode ? `
        ABSOLUTE META MODE - REAL CN META DATA (Prydwen.gg May 2025):
        ${metaContext}
        
        INSTRUCTIONS: You must build teams based on the VERIFIED META DATA above. Use the actual team compositions and synergies shown in the meta analysis. Do not ignore this data - it represents real CN server competitive usage with proven win rates.
        
        KEY META CORES TO REFERENCE:
        - Voyager + Kiperina (Inspiration/Crit) → Best with Barcarola + Aleph
        - Nautika + Semmelweis (HP Loss/Bloodtithe) → Best with Flutterpage + Fatutu  
        - Lucy + Ulrich (Dynamo) → Best with Mercuria + Ezra Theodore
        - Recoleta + Lopera (Ultimate) → Best with Melania + Fatutu
        - Flutterpage + Fatutu (FUA Support) → Best for supporting FUA carries
        ` : `
        SYNERGY MODE: Build teams around my selected characters, considering their roles, damage types, and synergies while maintaining competitive meta viability.
        `}
        
        AVAILABLE 6-STAR CHARACTERS ONLY (you MUST only use characters from this exact list):
        ${availableCharacters}
          CRITICAL REQUIREMENTS:
        - Each team MUST have exactly 4 characters
        - You can ONLY use characters from the available list above - no other characters exist
        - All characters must be exactly as spelled in the available list
        - MUST include ALL of my selected characters: ${selectedCharacters.join(', ')}
        - Complete each team by adding ${4 - selectedCharacters.length} more characters from the available list
        - Generate exactly ${numTeamsToGenerate} team${numTeamsToGenerate !== 1 ? 's' : ''} as requested        Focus on:
        - CURRENT CN server meta data from 2024-2025 (not outdated information)
        - Actual documented team compositions with proven win rates
        - Specific character synergies used in CN competitive play and high-level content
        - Real usage statistics and tier list data from CN server
        - Teams that have been successful in recent CN meta tournaments and competitive events
        - Character combinations that CN players actually use, not theoretical synergies
        - Balanced team composition with proper roles: DPS (main damage), Sub DPS (secondary damage), Support (buffs/debuffs/healing), Survival (sustain/protection)
        
        IMPORTANT: Consider team role balance when making suggestions. A well-rounded team typically includes different roles working together.
        
        For each composition, you MUST follow this structure exactly:
        
        --- Team Start ---
        Final Team: Character A, Character B, Character C, Character D
        
        ## Character Roles
        ... (your analysis here)
        
        ## Team Synergy and Strategy
        ... (your analysis here focusing on why this works in CN meta)
        
        ## Flex/Alternative Options
        ... (your text analysis here with meta alternatives)
        After your text analysis for alternatives, add machine-readable lines for each substitute like this:
        Substitute: [Substitute Name] for [Original Character Name]
        Substitute: [Another Substitute] for [Another Original]
        --- Team End ---

        Separate each complete team composition with the "--- Team Start ---" and "--- Team End ---" delimiters.
        Remember: Each team must have EXACTLY 4 characters from the available list, with exact spelling.
    `;

    try {
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
        const apiKey = "AIzaSyBdflNZ8DmJrc1HadPYoxbFFyerdg6rrJE"; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
        const result = await response.json();

        if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0]) {
            const rawText = result.candidates[0].content.parts[0].text;
            parseAndDisplayResults(rawText);
        } else {
            teamResultsWrapper.innerHTML = "<p style='color: var(--accent-gold); text-align: center;'>Sorry, the AI response was empty. Please try again.</p>";
        }
    } catch (error) {
        console.error("Error generating team:", error);
        teamResultsWrapper.innerHTML = `<p style='color: var(--accent-gold); text-align: center;'>An error occurred. Please check your connection and try again.</p>`;
    } finally {
        loadingSpinner.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultsContainer.classList.add('fade-in');
        generateBtn.disabled = false;
        
        // Smooth scroll
        setTimeout(() => {
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function parseAndDisplayResults(rawText) {
    const teams = rawText.split('--- Team Start ---').slice(1);

    if (teams.length === 0) {
         teamResultsWrapper.innerHTML = "<p style='color: var(--accent-gold); text-align: center;'>Could not parse the AI response. No teams found.</p>";
         return;
    }

    teams.forEach((teamText, index) => {
        const teamData = teamText.split('--- Team End ---')[0];
        const lines = teamData.split('\n');        const teamLine = lines.find(line => line.toLowerCase().startsWith('final team:'));
        
        if (!teamLine) return;        const teamNames = teamLine.substring(teamLine.indexOf(':') + 1).split(',').map(name => name.trim());
        
        // Validate
        const validCharacters = teamNames.filter(name => 
            characters.some(char => char.name.toLowerCase() === name.toLowerCase())
        );
        
        // Ensure team has exactly 4 valid characters
        if (validCharacters.length !== 4) {
            console.warn(`Team ${index + 1} does not have exactly 4 valid characters. Found: ${validCharacters.length} valid out of ${teamNames.length} total`);
            console.warn(`Invalid characters:`, teamNames.filter(name => 
                !characters.some(char => char.name.toLowerCase() === name.toLowerCase())
            ));
            return;
        }        // Find substitutes
        const substitutes = [];
        const substituteRegex = /Substitute:\s*(.*?)\s*for\s*(.*)/i;
        lines.forEach(line => {
            const match = line.match(substituteRegex);
            if (match) {
                const subName = match[1].trim();
                const originalName = match[2].trim();
                // Only add substitute if the character exists in our database
                if (characters.some(char => char.name.toLowerCase() === subName.toLowerCase())) {
                    substitutes.push({ sub: subName, original: originalName });
                } else {
                    console.warn(`Substitute character "${subName}" not found in database`);
                }
            }
        });

        const analysisText = lines.filter(line => !line.toLowerCase().startsWith('final team:') && !line.match(substituteRegex)).join('\n');

        const teamContainer = document.createElement('div');
        teamContainer.className = 'team-container fade-in';
        teamContainer.style.animationDelay = `${index * 0.2}s`;

        let htmlContent = analysisText
            .replace(/### (.*)/g, '<h3 style="color: var(--accent-amber); font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.75rem 0;">$1</h3>')
            .replace(/## (.*)/g, '<h2 style="color: var(--accent-gold); font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0;">$1</h2>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: var(--accent-amber);">$1</strong>')
            .replace(/^\* (.*)/gm, '<li style="margin: 0.5rem 0; color: var(--text-secondary);">$1</li>')
            .replace(/\n/g, '<br>');        // Build team cards grid
        const teamCardsGrid = `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem; margin: 1.5rem 0;" class="team-cards-grid">
                ${validCharacters.map(name => {
                    const char = characters.find(c => c.name.toLowerCase() === name.toLowerCase());
                    return char ? renderCharacterCard(char).outerHTML : '';
                }).join('')}
            </div>
        `;

        // Build substitutes HTML
        let substitutesHtml = '';
        if(substitutes.length > 0) {                substitutesHtml += `
                    <h4 style="color: var(--text-muted); font-size: 1.125rem; font-weight: 600; margin: 2rem 0 1rem 0;">Alternative Options:</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;" class="substitute-cards-grid">
                        ${substitutes.map(subPair => {
                            const char = characters.find(c => c.name.toLowerCase() === subPair.sub.toLowerCase());
                            if(char) {
                                return `
                                    <div style="text-align: center;">
                                        <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">For ${subPair.original}</p>
                                        ${renderCharacterCard(char).outerHTML}
                                    </div>
                                `;
                            }
                            return '';
                        }).join('')}
                    </div>
                `;
        }
        
        teamContainer.innerHTML = `
            <h3 class="team-title">Suggested Team ${index + 1}</h3>
            ${teamCardsGrid}
            ${substitutesHtml}
            <div style="margin-top: 1.5rem; color: var(--text-secondary); line-height: 1.6;">${htmlContent}</div>
        `;
        teamResultsWrapper.appendChild(teamContainer);
    });
    
    renderActionButtons();
}

function renderActionButtons() {
    actionButtonsContainer.innerHTML = `
        <button id="regenerate-btn" class="regenerate-button">
            ✨ Re-generate Teams
        </button>
    `;
    document.getElementById('regenerate-btn').addEventListener('click', generateTeam);
}

// Dropdown Logic
dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownOptions.classList.toggle('hidden');
    dropdownArrow.classList.toggle('rotate-180');
});

dropdownOptions.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.tagName === 'A') {
        numTeamsToGenerate = parseInt(e.target.dataset.value);
        dropdownLabel.textContent = e.target.textContent;
        dropdownOptions.classList.add('hidden');
        dropdownArrow.classList.remove('rotate-180');
    }
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownOptions.contains(e.target)) {
        dropdownOptions.classList.add('hidden');
        dropdownArrow.classList.remove('rotate-180');
    }
});

// Keyboard navigation for dropdown
dropdownButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdownOptions.classList.toggle('hidden');
        dropdownArrow.classList.toggle('rotate-180');
    }
});

// Event Listeners
generateBtn.addEventListener('click', generateTeam);

// Meta Mode Toggle
metaModeCheckbox.addEventListener('change', (e) => {
    absoluteMetaMode = e.target.checked;
});

// Modern notification system
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'warning' ? '⚠️' : type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 4000);
}

// Character tooltip system
function showCharacterTooltip(event, character) {
    // Remove any existing tooltips immediately (force cleanup)
    const existingTooltips = document.querySelectorAll('.character-tooltip');
    existingTooltips.forEach(tooltip => tooltip.remove());

    const tooltip = document.createElement('div');
    tooltip.className = 'character-tooltip';
    tooltip.id = 'character-tooltip';// Get appropriate damage type icon
    const dmgIcon = character.dmgType === 'Mental' ? '🧠' : character.dmgType === 'Reality' ? '⚡' : '❓';
    
    // Get role color based on role type
    const getRoleColor = (role) => {
        switch(role) {
            case 'DPS': return '#ff4444'; // Red
            case 'Sub DPS': return '#ff8800'; // Orange
            case 'Support': return '#00ccdd'; // Cyan
            case 'Survival': return '#44dd44'; // Green
            default: return '#cccccc'; // Default gray
        }
    };
    
    // Build tooltip content with conditional rank and role display
    let tooltipContent = `
        <div class="tooltip-content">
            <div class="tooltip-row">
                <img src="assets/afflatus/${character.afflatus}.png" alt="${character.afflatus}" class="tooltip-icon">
                <span class="tooltip-label">${character.afflatus}</span>
            </div>
            <div class="tooltip-row">
                <span class="tooltip-dmg-icon">${dmgIcon}</span>
                <span class="tooltip-label">${character.dmgType} DMG</span>
            </div>`;
        // Add role if available
    if (character.role) {
        tooltipContent += `
            <div class="tooltip-row">
                <span class="tooltip-role-icon">🎯</span>
                <span class="tooltip-role" style="color: ${getRoleColor(character.role)}; font-weight: bold;">${character.role}</span>
            </div>`;
    }
    
    // Add rank if available
    if (character.rank) {
        tooltipContent += `
            <div class="tooltip-row">
                <span class="tooltip-rank-icon">⭐</span>
                <span class="tooltip-label">Rank <span class="tooltip-rank rank-${character.rank.toLowerCase().replace('+', 'plus')}">${character.rank}</span></span>
            </div>`;
    }
    
    tooltipContent += `</div>`;
    
    tooltip.innerHTML = tooltipContent;

    document.body.appendChild(tooltip);

    // Position tooltip
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 10;

    // Adjust if tooltip goes off screen
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top < 10) {
        top = rect.bottom + 10; // Show below if no space above
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    // Trigger animation
    requestAnimationFrame(() => {
        tooltip.classList.add('show');
    });
}

function hideCharacterTooltip() {
    const existingTooltips = document.querySelectorAll('.character-tooltip');
    existingTooltips.forEach(tooltip => {
        tooltip.classList.remove('show');
        setTimeout(() => {
            if (tooltip.parentElement) {
                tooltip.remove();
            }
        }, 150);
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderAllCharacters();
    updateGenerateButtonState();
});
