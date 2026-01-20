// Character tooltip system

export function showCharacterTooltip(element, character) {
    // Remove any existing tooltips immediately (force cleanup)
    const existingTooltips = document.querySelectorAll('.character-tooltip');
    existingTooltips.forEach(tooltip => tooltip.remove());

    const tooltip = document.createElement('div');
    tooltip.className = 'character-tooltip';
    tooltip.id = 'character-tooltip';
    
    // Get appropriate damage type icon
    const dmgIcon = character.dmgType === 'Mental' ? '🧠' : character.dmgType === 'Reality' ? '⚡' : '❓';
    
    // Get role color based on role type
    const getRoleColor = (role) => {
        switch(role) {
            case 'DPS': return '#ff4444'; // Red
            case 'Sub DPS': return '#ff8800'; // Orange
            case 'Support': return '#00ccdd'; // Cyan
            case 'Survival': return '#44dd44'; // Green
            default: return '#cccccc'; // Default gray
        }
    };
    
    // Build tooltip content with conditional rank and role display
    let tooltipContent = `
        <div class="tooltip-content">
            <div class="tooltip-row">
                <img src="assets/afflatus/${character.afflatus}.png" alt="${character.afflatus}" class="tooltip-icon">
                <span class="tooltip-label">${character.afflatus}</span>
            </div>
            <div class="tooltip-row">
                <span class="tooltip-dmg-icon">${dmgIcon}</span>
                <span class="tooltip-label">${character.dmgType} DMG</span>
            </div>`;
        
    // Add role if available
    if (character.role) {
        tooltipContent += `
            <div class="tooltip-row">
                <span class="tooltip-role-icon">🎯</span>
                <span class="tooltip-role" style="color: ${getRoleColor(character.role)}; font-weight: bold;">${character.role}</span>
            </div>`;
    }
    
    // Add rank if available
    if (character.rank) {
        tooltipContent += `
            <div class="tooltip-row">
                <span class="tooltip-rank-icon">⭐</span>
                <span class="tooltip-label">Rank <span class="tooltip-rank rank-${character.rank.toLowerCase().replace('+', 'plus')}">${character.rank}</span></span>
            </div>`;
    }
    
    tooltipContent += `</div>`;
    
    tooltip.innerHTML = tooltipContent;

    document.body.appendChild(tooltip);

    // Position tooltip
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 10;

    // Adjust if tooltip goes off screen
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top < 10) {
        top = rect.bottom + 10; // Show below if no space above
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    // Trigger animation
    requestAnimationFrame(() => {
        tooltip.classList.add('show');
    });
}

export function hideCharacterTooltip() {
    const existingTooltips = document.querySelectorAll('.character-tooltip');
    existingTooltips.forEach(tooltip => {
        tooltip.classList.remove('show');
        setTimeout(() => {
            if (tooltip.parentElement) {
                tooltip.remove();
            }
        }, 150);
    });
}

// Lightbox functionality for gallery images
export function createLightbox(src) {
    const existingLightbox = document.querySelector('.lightbox-overlay');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="${src}" alt="Expanded gallery image" class="lightbox-image">
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    const closeLightbox = () => {
        lightbox.classList.add('closing');
        document.body.style.overflow = '';
        
        const removeHandler = () => {
            if (lightbox.parentElement) {
                lightbox.remove();
            }
            lightbox.removeEventListener('transitionend', removeHandler);
        };
        lightbox.addEventListener('transitionend', removeHandler);
    };

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    const escapeHandler = e => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);

    requestAnimationFrame(() => {
        lightbox.classList.add('visible');
    });
}