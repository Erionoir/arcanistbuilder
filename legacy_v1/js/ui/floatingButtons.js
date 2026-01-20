// Floating button functionality

import { 
    scrollToTopBtn, 
    clearSelectionBtn, 
    selectedArcanistsContainer 
} from '../core/domElements.js';
import { 
    selectedCharacters, 
    teamsGenerated, 
    currentAudio,
    setCurrentAudio,
    setTeamsGenerated
} from '../core/state.js';
import { setSelectedCharacters } from '../core/state.js';
import { showNotification } from '../utils/notifications.js';

// Floating Button Functionality
export function initializeFloatingButtons() {
    if (!scrollToTopBtn || !clearSelectionBtn || !selectedArcanistsContainer) {
        console.warn('Floating buttons or container not found in DOM');
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
                
                // Handle arcanist selection container visibility when teams are generated
                if (teamsGenerated && selectedCharacters.length > 0) {
                    const characterSelectionElement = document.getElementById('character-selection');
                    const resultsElement = document.getElementById('results-container');
                    
                    if (characterSelectionElement && resultsElement) {
                        const characterSelectionBottom = characterSelectionElement.offsetTop + characterSelectionElement.offsetHeight;
                        const resultsTop = resultsElement.offsetTop;
                        
                        // Hide container when scrolling past character selection toward results
                        if (scrollTop > characterSelectionBottom - 100) {
                            selectedArcanistsContainer.style.transform = 'translateX(400px)';
                            selectedArcanistsContainer.style.opacity = '0';
                        } 
                        // Show container when scrolling back up to character selection
                        else if (scrollTop < resultsTop - 200) {
                            selectedArcanistsContainer.style.transform = 'translateX(0)';
                            selectedArcanistsContainer.style.opacity = '1';
                        }
                    }
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
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            setCurrentAudio(null);
        }
        setSelectedCharacters([]); // Clear the array
        setTeamsGenerated(false); // Reset teams generated flag
        
        // Update button state and UI
        updateGenerateButtonState();
        if (window.renderAllCharacters) {
            window.renderAllCharacters();
        }
        if (window.renderSelectedArcanists) {
            window.renderSelectedArcanists();
        }
        
        // Hide the clear selection button
        updateClearSelectionButtonVisibility();
        
        // Show success notification
        showNotification('All selections cleared!', 'success');
    }
    
    // Update clear selection button visibility (make it global)
    window.updateClearSelectionButtonVisibility = function() {
        if (selectedCharacters.length > 0) {
            selectedArcanistsContainer.classList.remove('hidden');
            // Reset transform when showing initially (before teams are generated)
            if (!teamsGenerated) {
                selectedArcanistsContainer.style.transform = 'translateX(0)';
                selectedArcanistsContainer.style.opacity = '1';
            }
        } else {
            selectedArcanistsContainer.classList.add('hidden');
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    scrollToTopBtn.addEventListener('click', scrollToTop);
    clearSelectionBtn.addEventListener('click', clearAllSelections);
    
    // Initial state
    window.updateClearSelectionButtonVisibility();
}

// Update generate button state
export function updateGenerateButtonState() {
    const generateBtn = document.getElementById('generate-team-btn');
    if (!generateBtn) return;
    
    const hasSelectedCharacters = selectedCharacters.length > 0;
    
    if (hasSelectedCharacters) {
        generateBtn.disabled = false;
        generateBtn.classList.remove('disabled');
    } else {
        generateBtn.disabled = true;
        generateBtn.classList.add('disabled');
    }
}