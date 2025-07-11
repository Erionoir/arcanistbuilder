// Settings menu and experimental features

import { 
    teamCountButtons, 
    metaModeCheckbox, 
    bigBrainCheckbox, 
    insightModeCheckbox, 
    reasoningSection, 
    reasoningSlider, 
    sliderValueLabel, 
    sliderDescription, 
    afflatusRestrictions 
} from '../core/domElements.js';
import { 
    budgetLabelMap, 
    budgetDescriptionMap, 
    APP_CONSTANTS 
} from '../core/config.js';
import { 
    setNumTeamsToGenerate, 
    setAbsoluteMetaMode, 
    setBigBrainMode, 
    setInsightMode, 
    setReasoningLevelValue,
    selectedAfflatusRestrictions,
    addAfflatusRestriction,
    removeAfflatusRestriction,
    setSelectedAfflatusRestrictions,
    numTeamsToGenerate,
    absoluteMetaMode,
    bigBrainMode,
    insightMode,
    reasoningLevelValue
} from '../core/state.js';
import { showNotification, showSettingsNotification } from '../utils/notifications.js';

// Enhanced settings functionality
export function setupSettingsMenu() {
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

// Team Count Button Logic
export function initializeTeamCountButtons() {
    if (!teamCountButtons) return;
    
    const teamCountBtns = teamCountButtons.querySelectorAll('.team-count-btn');
    
    teamCountBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            teamCountBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update team count
            const count = parseInt(btn.dataset.value);
            setNumTeamsToGenerate(count);
            
            // Show notification
            showNotification(`🎯 Team count set to ${count}`, 'success');
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

// Initialize mode toggles
export function initializeModeToggles() {
    // Meta Mode Toggle
    if (metaModeCheckbox) {
        metaModeCheckbox.addEventListener('change', (e) => {
            setAbsoluteMetaMode(e.target.checked);
            showNotification(absoluteMetaMode ? 'Absolute Meta Mode enabled — using verified meta data.' : 'Absolute Meta Mode disabled.', 'info');
        });
    }

    // Big Brain Mode toggle listener
    if (bigBrainCheckbox) {
        bigBrainCheckbox.addEventListener('change', (e) => {
            setBigBrainMode(e.target.checked);
            showNotification(bigBrainMode ? 'Big Brain Mode enabled — expect deeper analysis!' : 'Big Brain Mode disabled.', 'info');

            if (bigBrainMode) {
                reasoningSection.classList.add('visible');
            } else {
                reasoningSection.classList.remove('visible');
            }
        });
    }

    // Insight Mode toggle
    if (insightModeCheckbox) {
        insightModeCheckbox.addEventListener('change', () => {
            setInsightMode(insightModeCheckbox.checked);
            if (insightMode) {
                showNotification('💡 Insight Mode: Enhanced with deep analysis.', 'success');
            } else {
                showNotification('💡 Insight Mode disabled.', 'info');
            }
        });
    }
}

// Initialize reasoning slider
export function initializeReasoningSlider() {
    if (!reasoningSlider) return;
    
    reasoningSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        setReasoningLevelValue(value);
        sliderValueLabel.textContent = budgetLabelMap[value];
        if (sliderDescription) {
            sliderDescription.textContent = budgetDescriptionMap[value];
        }
    });
}

// Experimental Features functionality
export function setupExperimentalFeatures() {
    console.log('Setting up experimental features...');
    
    const afflatusRestrictionsEl = afflatusRestrictions;
    
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
                if (selectedAfflatusRestrictions.length >= APP_CONSTANTS.MAX_AFFLATUS_RESTRICTIONS) {
                    e.preventDefault();
                    e.target.checked = false;
                    showNotification('⚠️ Maximum of 3 afflatus types can be selected', 'warning');
                    return;
                }
                
                addAfflatusRestriction(afflatusType);
            } else {
                removeAfflatusRestriction(afflatusType);
            }
            
            // Show notification about restriction changes
            if (selectedAfflatusRestrictions.length > 0) {
                showNotification(
                    `⚡ Afflatus restrictions: ${selectedAfflatusRestrictions.join(', ')} (${selectedAfflatusRestrictions.length}/${APP_CONSTANTS.MAX_AFFLATUS_RESTRICTIONS})`, 
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

// Reset all inputs to default state
export function resetAllInputs() {
    // Reset Toggles & dependent UI
    if (metaModeCheckbox) metaModeCheckbox.checked = false;
    if (bigBrainCheckbox) {
        bigBrainCheckbox.checked = false;
        if (reasoningSection) reasoningSection.classList.remove('visible');
    }
    
    setAbsoluteMetaMode(false);
    setBigBrainMode(false);

    // Reset Slider input and its state
    if (reasoningSlider) {
        reasoningSlider.value = -1;
        reasoningSlider.dispatchEvent(new Event('input', { bubbles: true }));
    }
    setReasoningLevelValue(-1);

    // Reset experimental afflatus restriction checkboxes and state
    document.querySelectorAll('#afflatus-restrictions input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    setSelectedAfflatusRestrictions([]);

    // Reset team count buttons and state
    if (teamCountButtons) {
        teamCountButtons.querySelectorAll('.team-count-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const defaultTeamCountBtn = teamCountButtons.querySelector('.team-count-btn[data-value="1"]');
        if (defaultTeamCountBtn) defaultTeamCountBtn.classList.add('active');
    }
    setNumTeamsToGenerate(APP_CONSTANTS.DEFAULT_TEAM_COUNT);

    console.log('All inputs have been reset to their default state on page load.');
}

// Initialize all settings components
export function initializeSettings() {
    setupSettingsMenu();
    initializeTeamCountButtons();
    initializeModeToggles();
    initializeReasoningSlider();
    setupExperimentalFeatures();
    resetAllInputs();
}