// Search and filter functionality

import { characters } from '../data/characters.js';
import { 
    currentSearchTerm, 
    activeFilters, 
    setCurrentSearchTerm, 
    setActiveFilters, 
    resetActiveFilters,
    setFilteredCharacters,
    filteredCharacters
} from '../core/state.js';
import { 
    characterSearch, 
    searchClear, 
    filterToggle, 
    filterDropdown, 
    filterCount, 
    filterClear, 
    filterApply 
} from '../core/domElements.js';
import { showNotification } from '../utils/notifications.js';

// Apply search and filter logic
export function applySearchAndFilters() {
    const filtered = characters.filter(character => {
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
    
    setFilteredCharacters(filtered);
    if (window.renderAllCharacters) {
        window.renderAllCharacters();
    }
    updateFilterCount();
}

// Update filter count badge
export function updateFilterCount() {
    const totalActiveFilters = Object.values(activeFilters).reduce((sum, arr) => sum + arr.length, 0);
    
    if (totalActiveFilters > 0) {
        filterCount.textContent = totalActiveFilters;
        filterCount.classList.remove('hidden');
    } else {
        filterCount.classList.add('hidden');
    }
}

// Toggle individual filter
export function toggleFilter(category, value) {
    const filterArray = activeFilters[category];
    const index = filterArray.indexOf(value);
    
    if (index > -1) {
        filterArray.splice(index, 1);
    } else {
        filterArray.push(value);
    }
}

// Clear all filters
export function clearAllFilters() {
    resetActiveFilters();
    
    // Uncheck all filter checkboxes
    document.querySelectorAll('.filter-dropdown input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    applySearchAndFilters();
}

// Toggle filter dropdown
export function toggleFilterDropdown() {
    filterDropdown.classList.toggle('hidden');
}

// Initialize search and filter event listeners
export function initializeSearchAndFilter() {
    // Search functionality
    if (characterSearch) {
        characterSearch.addEventListener('input', (e) => {
            setCurrentSearchTerm(e.target.value);
            
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
            setCurrentSearchTerm('');
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

    // Set up filter checkboxes
    setupFilterCheckboxes();
    setupKeyboardHandlers();
    setupClickOutsideHandler();
}

// Setup filter checkboxes
function setupFilterCheckboxes() {
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
}

// Setup keyboard handlers
function setupKeyboardHandlers() {
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
}

// Setup click outside handler
function setupClickOutsideHandler() {
    document.addEventListener('click', (e) => {
        const clearSelectionBtn = document.getElementById('clearSelection');
        if (!filterToggle.contains(e.target) && 
            !filterDropdown.contains(e.target) && 
            (!clearSelectionBtn || !clearSelectionBtn.contains(e.target))) {
            filterDropdown.classList.add('hidden');
        }
    });
}