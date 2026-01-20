// Global application state management

// Character selection state
export let selectedCharacters = [];
export let blacklistedCharacters = [];
export let filteredCharacters = [];

// Team generation settings
export let numTeamsToGenerate = 1;
export let absoluteMetaMode = true;  // Always enabled - integrated meta analysis
export let bigBrainMode = true;      // Always enabled - enhanced reasoning
export let insightMode = true;       // Always enabled - deep insights
export let reasoningLevelValue = -1;
export let teamsGenerated = false;

// Audio state
export let currentAudio = null;

// Experimental features state
export let selectedAfflatusRestrictions = [];

// Search and filter state
export let currentSearchTerm = '';
export let activeFilters = {
    afflatus: [],
    damageType: [],
    rank: [],
    role: []
};

// State update functions
export function setSelectedCharacters(characters) {
    selectedCharacters.length = 0;
    selectedCharacters.push(...characters);
}

export function addSelectedCharacter(character) {
    if (!selectedCharacters.includes(character)) {
        selectedCharacters.push(character);
    }
}

export function removeSelectedCharacter(character) {
    const index = selectedCharacters.indexOf(character);
    if (index > -1) {
        selectedCharacters.splice(index, 1);
    }
}

export function setBlacklistedCharacters(characters) {
    blacklistedCharacters.length = 0;
    blacklistedCharacters.push(...characters);
}

export function addBlacklistedCharacter(character) {
    if (!blacklistedCharacters.includes(character)) {
        blacklistedCharacters.push(character);
    }
}

export function removeBlacklistedCharacter(character) {
    const index = blacklistedCharacters.indexOf(character);
    if (index > -1) {
        blacklistedCharacters.splice(index, 1);
    }
}

export function setFilteredCharacters(characters) {
    filteredCharacters.length = 0;
    filteredCharacters.push(...characters);
}

export function setNumTeamsToGenerate(count) {
    numTeamsToGenerate = count;
}

export function setAbsoluteMetaMode(enabled) {
    absoluteMetaMode = enabled;
}

export function setBigBrainMode(enabled) {
    bigBrainMode = enabled;
}

export function setInsightMode(enabled) {
    insightMode = enabled;
}

export function setReasoningLevelValue(value) {
    reasoningLevelValue = value;
}

export function setTeamsGenerated(generated) {
    teamsGenerated = generated;
}

export function setCurrentAudio(audio) {
    currentAudio = audio;
}

export function setSelectedAfflatusRestrictions(restrictions) {
    selectedAfflatusRestrictions.length = 0;
    selectedAfflatusRestrictions.push(...restrictions);
}

export function addAfflatusRestriction(afflatus) {
    if (!selectedAfflatusRestrictions.includes(afflatus)) {
        selectedAfflatusRestrictions.push(afflatus);
    }
}

export function removeAfflatusRestriction(afflatus) {
    const index = selectedAfflatusRestrictions.indexOf(afflatus);
    if (index > -1) {
        selectedAfflatusRestrictions.splice(index, 1);
    }
}

export function setCurrentSearchTerm(term) {
    currentSearchTerm = term;
}

export function setActiveFilters(filters) {
    activeFilters = { ...filters };
}

export function resetActiveFilters() {
    activeFilters = {
        afflatus: [],
        damageType: [],
        rank: [],
        role: []
    };
}