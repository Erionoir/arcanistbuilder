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
const teamCountButtons = document.getElementById('team-count-buttons');
const metaModeCheckbox = document.getElementById('meta-mode-checkbox');

// Experimental features elements (always enabled)
const experimentalContent = document.getElementById('experimental-content');
const afflatusRestrictions = document.getElementById('afflatus-restrictions');

// Sidebar elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.getElementById('main-content');
const teamBuilderLink = document.getElementById('team-builder-link');
const tierListLink = document.getElementById('tier-list-link');
const libraryLink = document.getElementById('library-link');

// Search and Filter elements
const characterSearch = document.getElementById('character-search');
const searchClear = document.getElementById('search-clear');
const filterToggle = document.getElementById('filter-toggle');
const filterDropdown = document.getElementById('filter-dropdown');
const filterCount = document.getElementById('filter-count');
const filterClear = document.getElementById('filter-clear');
const filterApply = document.getElementById('filter-apply');
const clearSelectionBtn = document.getElementById('clear-selection-btn');
const selectionCount = document.getElementById('selection-count');

// Create overlay for mobile
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

// State
let selectedCharacters = [];
let numTeamsToGenerate = 1;
let absoluteMetaMode = false;

// Experimental features state (always enabled)
let selectedAfflatusRestrictions = [];

// Search and Filter State
let currentSearchTerm = '';
let activeFilters = {
    afflatus: [],
    damageType: [],
    rank: [],
    role: []
};
let filteredCharacters = [...characters];

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
    const sortedCharacters = [...filteredCharacters].sort((a, b) => a.name.localeCompare(b.name));
    
    // Show message if no characters match the filters
    if (sortedCharacters.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <div class="no-results-content">
                <svg class="no-results-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.98-5.982-2.555M15 17H9m6-13H9m9.007-2H5.993A.993.993 0 005 4.007v15.986c0 .548.445.993.993.993h14.014a.993.993 0 00.993-.993V4.007A.993.993 0 0020.007 2z" />
                </svg>
                <h3>No characters found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        characterSelectionGrid.appendChild(noResults);
        return;
    }
    
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
        }    }
    updateGenerateButtonState();
    
    // Update clear selection button visibility if the function exists
    if (typeof updateClearSelectionButtonVisibility === 'function') {
        updateClearSelectionButtonVisibility();
    }
}

function updateGenerateButtonState() {
    const hasSelectedCharacters = selectedCharacters.length > 0;
    
    if (hasSelectedCharacters) {
        generateBtn.disabled = false;
        generateBtn.classList.remove('disabled');
    } else {
        generateBtn.disabled = true;
        generateBtn.classList.add('disabled');
    }
    
    updateSelectionCount();
}

function updateSelectionCount() {
    const count = selectedCharacters.length;
    
    if (count > 0) {
        selectionCount.textContent = count;
        selectionCount.classList.remove('hidden');
        clearSelectionBtn.classList.add('active');
    } else {
        selectionCount.classList.add('hidden');
        clearSelectionBtn.classList.remove('active');
    }
}

function clearAllSelections() {
    selectedCharacters = [];
    
    // Update all character cards
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    updateGenerateButtonState();
    renderAllCharacters(); // Re-render to update selection states
    
    showNotification('All selections cleared! 🗑️', 'info');
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

const synergyCoreDatabase = {
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

function findSynergyCoresFor(selectedCharacters) {
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

// Update the AI prompt generation logic to enforce role constraints
async function generateTeam() {
    if (selectedCharacters.length === 0) return;

    generateBtn.disabled = true;
    loadingSpinner.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    teamResultsWrapper.innerHTML = '';
    actionButtonsContainer.innerHTML = '';
    loadingSpinner.scrollIntoView({ behavior: 'smooth', block: 'center' });    // Apply experimental features filtering
    let availableCharacters = [...characters];
    let usingExperimentalFeatures = false;
    
    if (selectedAfflatusRestrictions.length > 0) {
        availableCharacters = applyAfflatusRestrictions(availableCharacters);
        usingExperimentalFeatures = true;
        console.log('🧪 Experimental: Filtered to afflatus restrictions:', selectedAfflatusRestrictions);
        showNotification(`🧪 Generating with experimental afflatus restrictions: ${selectedAfflatusRestrictions.join(', ')}`, 'warning');
    }

    const availableCharactersList = availableCharacters.map(char => char.name).join(', ');

    // Get details
    const selectedCharacterDetails = selectedCharacters.map(name => {
        const char = characters.find(c => c.name === name);
        if (char && char.afflatus && char.dmgType && char.rank && char.role) {
            return `${char.name} (${char.role}, ${char.dmgType} DMG, ${char.afflatus} Afflatus, Rank ${char.rank})`;
        } else if (char) {
            return `${char.name} (details not available)`;
        }
        return name;
    }).join(', ');

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
        const synergyCores = findSynergyCoresFor(selectedCharacters);
        if (synergyCores.length > 0) {
            console.log('🤝 Found synergy cores:', synergyCores);
            showNotification(`🤝 Found ${synergyCores.length} synergy core(s) for your selection!`, 'info');
            metaContext = `\nINSPIRATIONAL SYNERGY CORES FOR YOUR CHARACTERS:\n${synergyCores.map(core =>
                `**${core.name}** (${core.characters.join(' + ')}):\n- Synergy: ${core.description}\n- Recommended Partners: ${core.bestWith}`
            ).join('\n\n')}`;
        }
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
        SYNERGY MODE: Build teams around my selected characters, considering their roles, damage types, and synergies. Use the provided INSPIRATIONAL SYNERGY CORES as a starting point, but feel free to create other diverse and effective teams. Prioritize variety and explain your choices. Avoid over-reliance on common staples like Tooth Fairy unless they fit the synergy perfectly.
        ${metaContext}
        `}
          AVAILABLE 6-STAR CHARACTERS ONLY (you MUST only use characters from this exact list):
        ${availableCharactersList}
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
        
        IMPORTANT: STRICT ROLE ENFORCEMENT:
        - DPS characters must only be assigned to the DPS role.
        - Support characters must only be assigned to the Support role.
        - Sub DPS characters must only be assigned to the Sub DPS role.
        - Survival characters must only be assigned to the Survival role.
        
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

// Team Count Button Logic
if (teamCountButtons) {
    const teamCountBtns = teamCountButtons.querySelectorAll('.team-count-btn');
    
    teamCountBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            teamCountBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update team count
            numTeamsToGenerate = parseInt(btn.dataset.value);
              // Show notification
            showNotification(`🎯 Team count set to ${numTeamsToGenerate}`, 'success');
        });
        
        // Keyboard navigation
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

// Toggle sidebar
function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    sidebar.classList.add('open');
    mainContent.classList.add('sidebar-open');
    overlay.classList.add('active');
    
    // Add staggered animation to menu items
    const menuItems = sidebar.querySelectorAll('.sidebar-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
}

function closeSidebar() {
    sidebar.classList.remove('open');
    mainContent.classList.remove('sidebar-open');
    overlay.classList.remove('active');
}

// Event listeners
sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Navigation functionality
teamBuilderLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update active states
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    teamBuilderLink.classList.add('active');
    
    // Show team builder content (already visible)
    showNotification('Team Builder activated! 🎯', 'info');
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        closeSidebar();
    }
});

libraryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Library feature coming soon! 📚✨', 'info');
});

tierListLink.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Tier List feature coming soon! 📊✨', 'info');
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    }
});

// Search and Filter Functions
function applySearchAndFilters() {
    filteredCharacters = characters.filter(character => {
        // Search filter
        const matchesSearch = character.name.toLowerCase().includes(currentSearchTerm.toLowerCase());
        
        // Afflatus filter
        const matchesAfflatus = activeFilters.afflatus.length === 0 || 
            activeFilters.afflatus.includes(character.afflatus);
        
        // Damage Type filter
        const matchesDamageType = activeFilters.damageType.length === 0 || 
            activeFilters.damageType.includes(character.dmgType);
        
        // Rank filter
        const matchesRank = activeFilters.rank.length === 0 || 
            activeFilters.rank.includes(character.rank);
        
        // Role filter
        const matchesRole = activeFilters.role.length === 0 || 
            activeFilters.role.includes(character.role);
        
        return matchesSearch && matchesAfflatus && matchesDamageType && matchesRank && matchesRole;
    });
    
    renderAllCharacters();
    updateFilterCount();
}

function updateFilterCount() {
    const totalActiveFilters = Object.values(activeFilters).reduce((sum, arr) => sum + arr.length, 0);
    
    if (totalActiveFilters > 0) {
        filterCount.textContent = totalActiveFilters;
        filterCount.classList.remove('hidden');
    } else {
        filterCount.classList.add('hidden');
    }
}

function toggleFilter(category, value) {
    const filterArray = activeFilters[category];
    const index = filterArray.indexOf(value);
    
    if (index > -1) {
        filterArray.splice(index, 1);
    } else {
        filterArray.push(value);
    }
}

function clearAllFilters() {
    activeFilters = {
        afflatus: [],
        damageType: [],
        rank: [],
        role: []
    };
    
    // Uncheck all filter checkboxes
    document.querySelectorAll('.filter-dropdown input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    applySearchAndFilters();
}

function toggleFilterDropdown() {
    filterDropdown.classList.toggle('hidden');
}

// Search and Filter Event Listeners
if (characterSearch) {
    characterSearch.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        
        // Show/hide clear button
        if (currentSearchTerm.length > 0) {
            searchClear.classList.remove('hidden');
        } else {
            searchClear.classList.add('hidden');
        }
        
        applySearchAndFilters();
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        characterSearch.value = '';
        currentSearchTerm = '';
        searchClear.classList.add('hidden');
        applySearchAndFilters();
        characterSearch.focus();
    });
}

if (filterToggle) {
    filterToggle.addEventListener('click', toggleFilterDropdown);
}

if (filterClear) {
    filterClear.addEventListener('click', clearAllFilters);
}

if (filterApply) {
    filterApply.addEventListener('click', () => {
        applySearchAndFilters();
        filterDropdown.classList.add('hidden');
        showNotification('Filters applied successfully! 🎯', 'success');
    });
}

// Clear selection button
if (clearSelectionBtn) {
    clearSelectionBtn.addEventListener('click', clearAllSelections);
}

// Set up filter checkboxes
document.addEventListener('DOMContentLoaded', () => {
    // Afflatus filters
    document.querySelectorAll('#afflatus-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            toggleFilter('afflatus', e.target.value);
        });
    });
    
    // Damage Type filters
    document.querySelectorAll('#damage-type-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            toggleFilter('damageType', e.target.value);
        });
    });
    
    // Rank filters
    document.querySelectorAll('#rank-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            toggleFilter('rank', e.target.value);
        });
    });
    
    // Role filters
    document.querySelectorAll('#role-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            toggleFilter('role', e.target.value);
        });
    });
});

// Close filter dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!filterToggle.contains(e.target) && !filterDropdown.contains(e.target) && !clearSelectionBtn.contains(e.target)) {
        filterDropdown.classList.add('hidden');
    }
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Close filter dropdown with Escape key
    if (e.key === 'Escape' && !filterDropdown.classList.contains('hidden')) {
        filterDropdown.classList.add('hidden');
        filterToggle.focus();
    }
    
    // Quick search focus with Ctrl+F or Cmd+F
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        characterSearch.focus();
        characterSearch.select();
    }
});

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

// Enhanced settings functionality
function setupSettingsMenu() {
    const settingsButton = document.getElementById('settings-toggle');
    const settingsDropdown = document.getElementById('settings-dropdown');
    const settingsIcon = settingsButton?.querySelector('.settings-icon');
    
    if (!settingsButton || !settingsDropdown) return;
    
    let isOpen = false;
    
    // Toggle settings dropdown
    function toggleSettings(open = null) {
        if (open !== null) {
            isOpen = open;
        } else {
            isOpen = !isOpen;
        }
        
        settingsButton.classList.toggle('active', isOpen);
        settingsDropdown.classList.toggle('hidden', !isOpen);
        
        // Focus management for accessibility
        if (isOpen) {
            const firstInput = settingsDropdown.querySelector('input, button');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 200);
            }
        } else {
            settingsButton.focus();
        }
    }
    
    // Settings button click handler
    settingsButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSettings();
    });
    
    // Close settings when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsButton.contains(e.target) && !settingsDropdown.contains(e.target)) {
            if (isOpen) {
                toggleSettings(false);
            }
        }
    });
    
    // Close settings on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleSettings(false);
        }
    });
    
    // Keyboard navigation within settings
    settingsDropdown.addEventListener('keydown', (e) => {
        const focusableElements = settingsDropdown.querySelectorAll(
            'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}

// Enhanced notification system with settings context
function showSettingsNotification(message, type = 'info', duration = 2500) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.settings-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `settings-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">⚙️</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'var(--accent-gold)' : type === 'error' ? '#ef4444' : 'var(--bg-elevated)',
        color: type === 'success' ? 'var(--bg-primary)' : 'var(--text-primary)',
        padding: '12px 20px',
        borderRadius: '12px',
        border: '2px solid var(--border-accent)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        fontSize: '14px',
        fontWeight: '600',
        maxWidth: '300px',
        wordWrap: 'break-word',
        backdropFilter: 'blur(10px)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, duration);
}

// Experimental Features functionality (always enabled)
function setupExperimentalFeatures() {
    console.log('Setting up experimental features...');
    
    const afflatusRestrictionsEl = document.getElementById('afflatus-restrictions');
    
    if (!afflatusRestrictionsEl) {
        console.error('afflatusRestrictions element not found');
        return;
    }
    
    console.log('Found afflatus-restrictions element, creating checkboxes...');
    
    // Create afflatus checkboxes
    const afflatusTypes = ['Beast', 'Intellect', 'Mineral', 'Plant', 'Spirit', 'Star'];
    
    // Clear existing content first
    afflatusRestrictionsEl.innerHTML = '';
    
    afflatusTypes.forEach(afflatus => {
        console.log(`Creating checkbox for: ${afflatus}`);
        const label = document.createElement('label');
        label.className = 'afflatus-restriction-option';
        label.innerHTML = `
            <input type="checkbox" value="${afflatus}" />
            <span class="afflatus-restriction-checkmark"></span>
            <img src="assets/afflatus/${afflatus}.png" alt="${afflatus}" class="afflatus-restriction-icon" />
            <span class="afflatus-restriction-label">${afflatus}</span>
        `;
        afflatusRestrictionsEl.appendChild(label);
    });
    
    console.log('Afflatus checkboxes created successfully, count:', afflatusRestrictionsEl.children.length);
    
    // Handle afflatus restriction changes with 3-afflatus limit
    afflatusRestrictionsEl.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const afflatusType = e.target.value;
            
            if (e.target.checked) {
                // Check if limit is reached
                if (selectedAfflatusRestrictions.length >= 3) {
                    e.preventDefault();
                    e.target.checked = false;
                    showNotification('⚠️ Maximum of 3 afflatus types can be selected', 'warning');
                    return;
                }
                
                if (!selectedAfflatusRestrictions.includes(afflatusType)) {
                    selectedAfflatusRestrictions.push(afflatusType);
                }
            } else {
                selectedAfflatusRestrictions = selectedAfflatusRestrictions.filter(
                    type => type !== afflatusType
                );
            }
            
            // Show notification about restriction changes
            if (selectedAfflatusRestrictions.length > 0) {
                showNotification(
                    `⚡ Afflatus restrictions: ${selectedAfflatusRestrictions.join(', ')} (${selectedAfflatusRestrictions.length}/3)`, 
                    'info'
                );
            } else {
                showNotification('🌟 All afflatus restrictions cleared', 'info');
            }
        }
    });
    
    // Keyboard accessibility for afflatus options
    afflatusRestrictionsEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const option = e.target.closest('.afflatus-restriction-option');
            if (option) {
                e.preventDefault();
                const checkbox = option.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    });
}

// Function to apply afflatus restrictions to team generation
function applyAfflatusRestrictions(availableCharacters) {
    if (selectedAfflatusRestrictions.length === 0) {
        return availableCharacters;
    }
    
    return availableCharacters.filter(character => 
        selectedAfflatusRestrictions.includes(character.afflatus)
    );
}

// Floating Button Functionality
function initializeFloatingButtons() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const clearSelectionBtn = document.getElementById('clearSelection');
    
    if (!scrollToTopBtn || !clearSelectionBtn) {
        console.warn('Floating buttons not found in DOM');
        return;
    }
    
    let isScrolling = false;
    
    // Throttled scroll handler for better performance
    function handleScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Show/hide scroll to top button based on scroll position
                if (scrollTop > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
                
                isScrolling = false;
            });
            isScrolling = true;
        }
    }
    
    // Scroll to top functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
      // Clear all selections functionality
    function clearAllSelections() {
        selectedCharacters.splice(0, selectedCharacters.length); // Clear the array
        updateGenerateButtonState();
        renderAllCharacters();
        
        // Hide the clear selection button
        clearSelectionBtn.classList.remove('visible');
        
        // Show success notification
        showNotification('All selections cleared!', 'success');
    }
    
    // Update clear selection button visibility (make it global)
    window.updateClearSelectionButtonVisibility = function() {
        if (selectedCharacters.length > 0) {
            clearSelectionBtn.classList.add('visible');
        } else {
            clearSelectionBtn.classList.remove('visible');
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    scrollToTopBtn.addEventListener('click', scrollToTop);
    clearSelectionBtn.addEventListener('click', clearAllSelections);
    
    // Initial state
    window.updateClearSelectionButtonVisibility();
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting initialization...');
    
    renderAllCharacters();
    updateGenerateButtonState();
    
    // Add event listener for generate button
    if (generateBtn) {
        generateBtn.addEventListener('click', generateTeam);
    }
    
    // Setup settings menu
    setupSettingsMenu();
    
    // Setup experimental features immediately
    setupExperimentalFeatures();
    
    // Initialize floating buttons
    initializeFloatingButtons();
});
