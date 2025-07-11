// Character library and profile rendering

import { characters } from '../data/characters.js';
import { renderCharacterCard } from './characterCard.js';
import { createLightbox } from '../utils/tooltips.js';
import { libraryView, characterProfileView } from '../core/domElements.js';

export function renderLibrary() {
    if (!libraryView) return;

    libraryView.innerHTML = `
        <div class="container mx-auto px-4 py-8">
            <header class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold mb-2">Arcanist Library</h1>
                <p class="text-lg text-gray-400">Select a character to view their profile.</p>
            </header>
            <div id="library-grid">
            </div>
        </div>
    `;

    const libraryGrid = document.getElementById('library-grid');
    if (!libraryGrid) return;
    
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));

    sortedCharacters.forEach((character, index) => {
        const card = renderCharacterCard(character, true, false, true);
        card.style.animationDelay = `${index * 0.05}s`;
        card.classList.add('fade-in');
        card.addEventListener('click', (e) => {
            // Prevent profile view if blacklist button is clicked
            if (e.target.closest('.blacklist-btn')) {
                return;
            }
            renderCharacterProfile(character.name);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                renderCharacterProfile(character.name);
            }
        });
        libraryGrid.appendChild(card);
    });
}

export function renderCharacterProfile(characterName) {
    const character = characters.find(c => c.name === characterName);
    if (!character || !characterProfileView) return;

    hideAllViews();
    characterProfileView.classList.remove('hidden');

    const sections = [
        { id: 'bio', name: 'Biography' },
        { id: 'psychubes', name: 'Psychubes' },
        { id: 'inheritance', name: 'Inheritance' },
        { id: 'effects', name: 'Special Effects' },
        { id: 'incantations', name: 'Incantations' },
        { id: 'teammates', name: 'Teammates' },
        { id: 'gallery', name: 'Gallery' }
    ];

    characterProfileView.innerHTML = `
        <div class="profile-container">
            <button id="back-to-library-btn" class="back-button">← Back to Library</button>
            <header class="profile-header">
                <img src="${character.image}" alt="${character.name}" class="profile-image">
                <div class="profile-header-info">
                    <h1 class="profile-name">${character.name}</h1>
                    <div class="profile-tags">
                        <span class="profile-tag afflatus-${character.afflatus.toLowerCase()}">${character.afflatus}</span>
                        <span class="profile-tag dmg-${character.dmgType.toLowerCase()}">${character.dmgType}</span>
                        <span class="profile-tag role-${character.role.toLowerCase()}">${character.role}</span>
                        <span class="profile-tag rank-${character.rank.toLowerCase().replace('+', 'plus')}">Rank ${character.rank}</span>
                    </div>
                </div>
            </header>

            <div class="profile-content-tabs">
                <div class="profile-tabs">
                    ${sections.map((section, index) => `
                        <button class="profile-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${section.id}">
                            ${section.name}
                        </button>
                    `).join('')}
                </div>

                <div class="profile-tab-content-container">
                    ${sections.map((section, index) => `
                        <div class="profile-tab-content ${index === 0 ? 'active' : ''}" id="tab-${section.id}">
                            ${getTabContent(character, section.id)}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Add event listeners for the new tabs
    const tabButtons = characterProfileView.querySelectorAll('.profile-tab-btn');
    const tabContents = characterProfileView.querySelectorAll('.profile-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab
            button.classList.add('active');
            const tabId = `tab-${button.dataset.tab}`;
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    const backButton = document.getElementById('back-to-library-btn');
    if(backButton) {
        backButton.addEventListener('click', () => {
            hideAllViews();
            libraryView.classList.remove('hidden');
            // Re-render library to re-add animations and ensure state is fresh
            renderLibrary(); 
        });
    }

    // Scroll to top of the page to show the profile
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getTabContent(character, tabId) {
    const profile = character.profile;

    if (!profile) {
        return `
            <h2>${tabId.charAt(0).toUpperCase() + tabId.slice(1)}</h2>
            <p>Data not available for this character yet.</p>
        `;
    }

    switch (tabId) {
        case 'bio':
            return `
                <h2>Biography</h2>
                <p>${profile.bio ? profile.bio.replace(/\n\n/g, '</p><p>') : 'No biography available.'}</p>
            `;
        case 'inheritance':
            if (!profile.inheritance) return '<h2>Inheritance</h2><p>No inheritance data available.</p>';
            return `
                <h2>Inheritance: ${profile.inheritance[0].name}</h2>
                <div class="inheritance-grid">
                    ${profile.inheritance.map(i => `
                        <div class="inheritance-item">
                            <img src="${i.icon}" alt="Insight ${i.level}" class="insight-icon">
                            <div class="inheritance-info">
                                <h3>Insight ${i.level}</h3>
                                <p>${i.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        case 'effects':
            if (!profile.effects || Object.keys(profile.effects).length === 0) return '<h2>Special Effects</h2><p>No special effects data available.</p>';
            return `
                <h2>Special Effects</h2>
                <div class="effects-list">
                    ${Object.entries(profile.effects).map(([name, description]) => `
                        <div class="effect-item">
                            <h3>[${name}]</h3>
                            <p>${description.replace(/\[([^\]]+)\]/g, '<strong>[$1]</strong>')}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        case 'incantations':
            if (!profile.incantations || profile.incantations.length === 0) return '<h2>Incantations</h2><p>No incantation data available.</p>';
            return `
                <h2>Incantations</h2>
                <div class="incantations-grid">
                    ${profile.incantations.map(incantation => `
                        <div class="incantation-item">
                            <div class="incantation-header">
                                <img src="${incantation.image}" alt="${incantation.name}" class="incantation-image">
                                <div class="incantation-title">
                                    <h3>${incantation.name}</h3>
                                    <p class="incantation-type">${incantation.type}</p>
                                </div>
                            </div>
                            <div class="incantation-ranks">
                                ${incantation.ranks.map(rank => `
                                    <div class="incantation-rank">
                                        <div class="rank-header">
                                            <span class="rank-indicator">${rank.rank}</span>
                                            ${rank.rankType ? `<span class="rank-type-text">[${rank.rankType}]</span>` : ''}
                                        </div>
                                        <p class="incantation-rank-description">${rank.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        case 'gallery':
            if (!profile.gallery) return '<h2>Gallery</h2><p>No gallery images available.</p>';
            return `
                <h2>Gallery</h2>
                <div class="gallery-grid">
                    ${profile.gallery.map(g => `
                        <div class="gallery-item">
                            <img src="${g.image}" alt="${g.name}" class="gallery-image">
                            <div class="gallery-caption">
                                <h3>${g.name}</h3>
                                <p class="gallery-description">"${g.description}"</p>
                                <p class="gallery-source">${g.source}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        default:
            return `
                <h2>${tabId.charAt(0).toUpperCase() + tabId.slice(1)}</h2>
                <p>Data for this section not available yet.</p>
            `;
    }
}

function hideAllViews() {
    const mainContent = document.getElementById('main-content');
    const tierListView = document.getElementById('tier-list-view');
    const libraryView = document.getElementById('library-view');
    const roadmapView = document.getElementById('roadmap-view');
    const characterProfileView = document.getElementById('character-profile-view');
    
    if (mainContent) mainContent.classList.add('hidden');
    if (tierListView) tierListView.classList.add('hidden');
    if (libraryView) libraryView.classList.add('hidden');
    if (roadmapView) roadmapView.classList.add('hidden');
    if (characterProfileView) characterProfileView.classList.add('hidden');
}

// Initialize gallery click handlers
export function initializeLibraryHandlers() {
    if (characterProfileView) {
        characterProfileView.addEventListener('click', e => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const imageSrc = galleryItem.querySelector('.gallery-image')?.src;
                if (imageSrc) {
                    createLightbox(imageSrc);
                }
            }
        });
    }
}