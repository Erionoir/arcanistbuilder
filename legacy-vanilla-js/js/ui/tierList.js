// Tier list rendering functionality

import { characters } from '../data/characters.js';
import { renderCharacterCard } from './characterCard.js';
import { tierListView } from '../core/domElements.js';

export function renderTierList() {
    const roles = ['DPS', 'Sub DPS', 'Support', 'Survival'];
    const tiers = ['S+', 'S', 'A+', 'A', 'B']; // Removed 'C' as there are no C-rank 6-stars
    
    let html = '<div class="container mx-auto px-4 py-8">';
    html += '<header class="text-center mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-2">6-Star Tier List</h1></header>';

    // Start the grid structure
    html += `<div class="tier-list-grid">`;

    // 1. Create the Header Row for Roles
    html += `<div class="tier-label-wrapper header-corner"></div>`; // Empty cell for the top-left corner
    roles.forEach(role => {
        html += `<div class="tier-role-header">${role}</div>`;
    });

    // 2. Create a row for each Tier
    tiers.forEach(tier => {
        // Tier Label Cell (Row Header)
        html += `<div class="tier-label-wrapper"><span class="tier-label tier-${tier.toLowerCase().replace('+', 'plus')}">${tier}</span></div>`;

        // Create a cell for each role in the current tier row
        roles.forEach(role => {
            html += `<div class="tier-role-cell">`;
            const charactersInCell = characters.filter(c => c.rank === tier && c.role === role);
            
            if (charactersInCell.length > 0) {
                charactersInCell.sort((a,b) => a.name.localeCompare(b.name)).forEach(char => {
                    html += renderCharacterCard(char, false, false, true).outerHTML;
                });
            }
            html += `</div>`;
        });
    });

    html += `</div>`; // End of grid
    html += '</div>';
    tierListView.innerHTML = html;
}