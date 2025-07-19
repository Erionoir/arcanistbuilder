// Character selection and interaction logic

import { characters } from '../data/characters.js';
import { 
    selectedCharacters, 
    blacklistedCharacters, 
    filteredCharacters, 
    currentAudio,
    setCurrentAudio,
    addSelectedCharacter,
    removeSelectedCharacter,
    addBlacklistedCharacter,
    removeBlacklistedCharacter,
    setFilteredCharacters
} from '../core/state.js';
import { characterSelectionGrid } from '../core/domElements.js';
import { renderCharacterCard, renderSelectedArcanists } from '../ui/characterCard.js';
import { showCharacterTooltip, hideCharacterTooltip } from '../utils/tooltips.js';
import { updateGenerateButtonState } from '../ui/floatingButtons.js';
import { showNotification } from '../utils/notifications.js';
import { APP_CONSTANTS } from '../core/config.js';

// Character selection and rendering
export function renderAllCharacters() {
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
        const card = renderCharacterCard(char, true, selectedCharacters.includes(char.name), true);
        
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

export function toggleCharacterSelection(name) {
    // Prevent selection if blacklisted
    if (blacklistedCharacters.includes(name)) {
        showNotification(`Cannot select a blacklisted character.`, 'error');
        return;
    }

    const cardElement = characterSelectionGrid.querySelector(`[data-name="${name}"]`);
    const index = selectedCharacters.indexOf(name);
    
    // Stop any currently playing audio first
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        setCurrentAudio(null);
    }
    
    if (index > -1) {
        // Deselecting - simple removal
        removeSelectedCharacter(name);
        if (cardElement) {
            cardElement.classList.remove('selected');
            cardElement.blur();
            cardElement.classList.remove('fade-in');
            cardElement.style.animationDelay = '';
        }    
    } else {
        if (selectedCharacters.length < APP_CONSTANTS.MAX_SELECTED_CHARACTERS) {
            addSelectedCharacter(name);
            if (cardElement) {
                cardElement.classList.add('selected');
                cardElement.classList.remove('fade-in');
                cardElement.style.animationDelay = '';
            }

            // Play sound for the selected character, if available
            const character = characters.find(c => c.name === name);
            if (character && character.idleAudio) {
                const audio = new Audio(character.idleAudio);
                setCurrentAudio(audio);
                audio.play().catch(e => console.error("Audio playback failed:", e));
            }
        } else {
            showNotification(`Maximum of ${APP_CONSTANTS.MAX_SELECTED_CHARACTERS} characters can be selected.`, "warning");
            // Remove focus from card
            if (cardElement) {
                cardElement.blur();
            }
            return;
        }    
    }
    updateGenerateButtonState();
    
    // Update clear selection button visibility if the function exists
    if (typeof window.updateClearSelectionButtonVisibility === 'function') {
        window.updateClearSelectionButtonVisibility();
    }
    renderSelectedArcanists();
}

export function toggleBlacklist(name) {
    const cardElements = document.querySelectorAll(`.character-card[data-name="${name}"]`);
    const index = blacklistedCharacters.indexOf(name);
    
    if (index > -1) {
        // Un-blacklist
        removeBlacklistedCharacter(name);
        cardElements.forEach(el => el.classList.remove('blacklisted'));
        showNotification(`✅ ${name} removed from blacklist.`, 'success');
    } else {
        // Blacklist
        addBlacklistedCharacter(name);
        cardElements.forEach(el => el.classList.add('blacklisted'));
        showNotification(`🚫 ${name} has been blacklisted.`, 'warning');
        
        // If character was selected, deselect them
        const selectedIndex = selectedCharacters.indexOf(name);
        if (selectedIndex > -1) {
            removeSelectedCharacter(name);
            cardElements.forEach(el => el.classList.remove('selected'));
            updateGenerateButtonState();
            renderSelectedArcanists();
            // Ensure the floating container's visibility is updated.
            if (typeof window.updateClearSelectionButtonVisibility === 'function') {
                window.updateClearSelectionButtonVisibility();
            }
        }
    }
}

// Initialize character selection
export function initializeCharacterSelection() {
    // Set initial filtered characters to all characters
    setFilteredCharacters([...characters]);
    
    // Render initial character grid
    renderAllCharacters();
    
    // Initial state for generate button
    updateGenerateButtonState();
    
    // Event listener for blacklist button clicks using event delegation
    characterSelectionGrid.addEventListener('click', (e) => {
        const blacklistBtn = e.target.closest('.blacklist-btn');
        if (blacklistBtn) {
            e.stopPropagation(); // Prevent the card from being selected
            const characterName = blacklistBtn.dataset.name;
            if (characterName) {
                toggleBlacklist(characterName);
            }
        }
    });
    
    // Make functions available globally for backwards compatibility
    window.renderAllCharacters = renderAllCharacters;
    window.toggleCharacterSelection = toggleCharacterSelection;
    window.toggleBlacklist = toggleBlacklist;
    window.renderSelectedArcanists = renderSelectedArcanists;
    window.selectedCharacters = selectedCharacters;
    window.blacklistedCharacters = blacklistedCharacters;
    window.characters = characters;
}