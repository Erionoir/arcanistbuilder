// DOM element references for the application

// Main content containers
export const characterSelectionGrid = document.getElementById('character-selection');
export const generateBtn = document.getElementById('generate-team-btn');
export const loadingSpinner = document.getElementById('loading-spinner');
export const resultsContainer = document.getElementById('results-container');
export const teamResultsWrapper = document.getElementById('team-results-wrapper');
export const actionButtonsContainer = document.getElementById('action-buttons');

// Settings and controls
export const teamCountButtons = document.getElementById('team-count-buttons');

// Reasoning slider elements
export const reasoningSection = document.getElementById('reasoning-section');
export const reasoningSlider = document.getElementById('reasoning-slider');
export const sliderValueLabel = document.getElementById('slider-value-label');
export const sliderDescription = document.getElementById('slider-description');

// Experimental features elements
export const experimentalContent = document.getElementById('experimental-content');
export const afflatusRestrictions = document.getElementById('afflatus-restrictions');

// Sidebar elements
export const sidebar = document.getElementById('sidebar');
export const sidebarToggle = document.getElementById('sidebar-toggle');
export const mainContent = document.getElementById('main-content');
export const teamBuilderLink = document.getElementById('team-builder-link');
export const tierListLink = document.getElementById('tier-list-link');
export const libraryLink = document.getElementById('library-link');
export const roadmapLink = document.getElementById('roadmap-link');

// View containers
export const tierListView = document.getElementById('tier-list-view');
export const libraryView = document.getElementById('library-view');
export const roadmapView = document.getElementById('roadmap-view');
export const characterProfileView = document.getElementById('character-profile-view');

// Search and filter elements
export const characterSearch = document.getElementById('character-search');
export const searchClear = document.getElementById('search-clear');
export const filterToggle = document.getElementById('filter-toggle');
export const filterDropdown = document.getElementById('filter-dropdown');
export const filterCount = document.getElementById('filter-count');
export const filterClear = document.getElementById('filter-clear');
export const filterApply = document.getElementById('filter-apply');

// Floating buttons
export const selectedArcanistsContainer = document.getElementById('selected-arcanists-container');
export const scrollToTopBtn = document.getElementById('scrollToTop');
export const clearSelectionBtn = document.getElementById('clearSelection');

// Create sidebar overlay element
export const overlay = (() => {
    const overlayElement = document.createElement('div');
    overlayElement.className = 'sidebar-overlay';
    document.body.appendChild(overlayElement);
    return overlayElement;
})();