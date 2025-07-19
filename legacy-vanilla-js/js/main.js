// Main application entry point

import { initializeCharacterSelection } from './core/characterSelection.js';
import { initializeSearchAndFilter } from './utils/searchFilter.js';
import { initializeSidebar } from './ui/sidebar.js';
import { initializeSettings } from './ui/settings.js';
import { initializeFloatingButtons } from './ui/floatingButtons.js';
import { initializeLibraryHandlers } from './ui/library.js';
import { generateTeam } from './ui/teamGeneration.js';
import { showCharacterTooltip, hideCharacterTooltip } from './utils/tooltips.js';
import { tierListView } from './core/domElements.js';
import { characters } from './data/characters.js';

// Parallax background effect
function initializeParallaxEffect() {
    let isTicking = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;

        if (!isTicking) {
            window.requestAnimationFrame(() => {
                document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
                isTicking = false;
            });
            isTicking = true;
        }
    });
}

// Initialize tier list tooltip handlers
function initializeTierListHandlers() {
    if (tierListView) {
        tierListView.addEventListener('mouseover', e => {
            const cardElement = e.target.closest('.character-card[data-name]');
            if (cardElement) {
                const character = characters.find(c => c.name === cardElement.dataset.name);
                if (character) {
                    showCharacterTooltip(cardElement, character);
                }
            }
        });
        
        tierListView.addEventListener('mouseout', e => {
            const cardElement = e.target.closest('.character-card[data-name]');
            if (cardElement) {
                hideCharacterTooltip();
            }
        });
        
        tierListView.addEventListener('click', (e) => {
            const blacklistBtn = e.target.closest('.blacklist-btn');
            if (blacklistBtn) {
                e.stopPropagation(); // Prevent any other card actions
                const characterName = blacklistBtn.dataset.name;
                if (characterName && window.toggleBlacklist) {
                    window.toggleBlacklist(characterName);
                }
            }
        });
    }
}

// Initialize generate team button
function initializeGenerateButton() {
    const generateBtn = document.getElementById('generate-team-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateTeam);
    }
}

// Main initialization function
function initializeApp() {
    console.log('DOM loaded, starting initialization...');
    
    // Initialize all components
    initializeSettings();
    initializeSidebar();
    initializeSearchAndFilter();
    initializeCharacterSelection();
    initializeFloatingButtons();
    initializeLibraryHandlers();
    initializeTierListHandlers();
    initializeGenerateButton();
    initializeParallaxEffect();
    
    console.log('Application initialization complete');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}