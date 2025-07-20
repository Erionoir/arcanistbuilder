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
import { initializeModernAnimations } from './utils/modernAnimations.js';

// Enhanced parallax background effect
function initializeParallaxEffect() {
    let isTicking = false;
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;

        if (!isTicking) {
            window.requestAnimationFrame(() => {
                // Enhanced parallax with multiple layers
                const mainBg = document.body;
                const parallaxElements = document.querySelectorAll('[data-parallax]');
                
                // Main background parallax
                mainBg.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
                
                // Additional parallax elements
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.dataset.parallax) || 0.5;
                    const yPos = -(scrollPosition * speed);
                    el.style.transform = `translateY(${yPos}px)`;
                });
                
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

// Initialize generate team button with enhanced feedback
function initializeGenerateButton() {
    const generateBtn = document.getElementById('generate-team-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', async (e) => {
            // Add loading animation
            generateBtn.classList.add('loading-pulse');
            generateBtn.disabled = true;
            
            try {
                await generateTeam();
            } finally {
                generateBtn.classList.remove('loading-pulse');
                generateBtn.disabled = false;
            }
        });
    }
}

// Enhanced initialization with modern features
function initializeApp() {
    console.log('🚀 DOM loaded, starting modern initialization...');
    
    // Initialize core components
    initializeSettings();
    initializeSidebar();
    initializeSearchAndFilter();
    initializeCharacterSelection();
    initializeFloatingButtons();
    initializeLibraryHandlers();
    initializeTierListHandlers();
    initializeGenerateButton();
    
    // Initialize enhanced visual effects
    initializeParallaxEffect();
    initializeModernAnimations();
    
    // Add entrance animations to main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.add('animate-fade-in-up');
    }
    
    // Add stagger animation to character cards after they load
    setTimeout(() => {
        const characterCards = document.querySelectorAll('.character-card');
        characterCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 50}ms`;
            card.classList.add('animate-fade-in-scale');
        });
    }, 500);
    
    console.log('✨ Modern ArcanistBuilder initialization complete');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}