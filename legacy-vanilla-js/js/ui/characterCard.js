// Character card rendering utilities

import { showCharacterTooltip, hideCharacterTooltip } from '../utils/tooltips.js';

export function renderCharacterCard(character, isSelectable = false, isSelected = false, showBlacklistBtn = false) {
    const isBlacklisted = window.blacklistedCharacters?.includes(character.name) || false;
    const card = document.createElement('div');
    card.className = `character-card ${isSelectable ? 'cursor-pointer' : ''} ${isSelected ? 'selected' : ''} ${isBlacklisted ? 'blacklisted' : ''}`;
    card.dataset.name = character.name;
    card.setAttribute('tabindex', isSelectable ? '0' : '-1');
    
    const rarityStars = '★'.repeat(character.rarity);

    const blacklistButtonHTML = showBlacklistBtn ? `
        <button class="blacklist-btn" data-name="${character.name}" title="Blacklist ${character.name}" aria-label="Blacklist ${character.name}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    ` : '';

    card.innerHTML = `
        ${blacklistButtonHTML}
        <img src="${character.image}" alt="${character.name}" onerror="this.src='https://placehold.co/150x200/1F1B15/D4A574?text=Error'">
        <div class="character-info">
            <p class="character-name">${character.name}</p>
            <p class="character-rarity">${rarityStars}</p>
        </div>
    `;
    
    if (character.afflatus && character.dmgType) {
        card.addEventListener('mouseenter', () => showCharacterTooltip(card, character));
        card.addEventListener('mouseleave', hideCharacterTooltip);
    }

    return card;
}

export function renderSelectedArcanists() {
    const container = document.getElementById('selected-arcanists-cards');
    if (!container) return;

    const previouslyDisplayed = new Set([...container.children].map(c => c.dataset.name));
    container.innerHTML = '';

    const charactersToRender = window.selectedCharacters?.map(name =>
        window.characters?.find(c => c.name === name)
    ).filter(Boolean) || [];

    charactersToRender.forEach((char, index) => {
        if (char) {
            const card = renderCharacterCard(char, false, false);
            card.classList.add('mini-card');

            if (!previouslyDisplayed.has(char.name)) {
                card.classList.add('newly-added');
                setTimeout(() => {
                    card.classList.remove('newly-added');
                }, 500);
            }
            
            container.appendChild(card);
        }
    });
}