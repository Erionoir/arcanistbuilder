// Sidebar navigation functionality

import { 
    sidebar, 
    sidebarToggle, 
    mainContent, 
    teamBuilderLink, 
    tierListLink, 
    libraryLink, 
    roadmapLink,
    tierListView,
    libraryView,
    roadmapView,
    characterProfileView,
    overlay 
} from '../core/domElements.js';
import { renderTierList } from './tierList.js';
import { renderLibrary } from './library.js';

// Toggle sidebar
export function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

export function openSidebar() {
    sidebar.classList.add('open');
    mainContent.classList.add('sidebar-open');
    overlay.classList.add('active');
    
    // Add staggered animation to menu items
    const menuItems = sidebar.querySelectorAll('.sidebar-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
}

export function closeSidebar() {
    sidebar.classList.remove('open');
    mainContent.classList.remove('sidebar-open');
    overlay.classList.remove('active');
}

export function hideAllViews() {
    mainContent.classList.add('hidden');
    tierListView.classList.add('hidden');
    libraryView.classList.add('hidden');
    roadmapView.classList.add('hidden');
    characterProfileView.classList.add('hidden');
}

// Initialize sidebar navigation
export function initializeSidebar() {
    // Toggle button handler
    sidebarToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Navigation functionality
    teamBuilderLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active states
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        teamBuilderLink.classList.add('active');
        
        // Show team builder content
        hideAllViews();
        mainContent.classList.remove('hidden');
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    });

    libraryLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active states
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        libraryLink.classList.add('active');
        
        // Show library view
        hideAllViews();
        libraryView.classList.remove('hidden');
        renderLibrary();
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    });

    tierListLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active states
        document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
        tierListLink.classList.add('active');
        
        // Show tier list view
        hideAllViews();
        tierListView.classList.remove('hidden');
        
        // Generate tier list content
        renderTierList();
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            closeSidebar();
        }
    });

    // Roadmap tab navigation
    if (roadmapLink) {
        roadmapLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active states
            document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
            roadmapLink.classList.add('active');

            // Show roadmap view
            hideAllViews();
            roadmapView.classList.remove('hidden');

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    }

    // Animate roadmap progress bars when roadmap view is shown
    if (roadmapLink && roadmapView) {
        roadmapLink.addEventListener('click', () => {
            // Animate progress bars
            setTimeout(() => {
                roadmapView.querySelectorAll('.roadmap-progress-bar').forEach(bar => {
                    const fill = bar.querySelector('.roadmap-progress-fill');
                    const percent = bar.getAttribute('data-progress');
                    if (fill) {
                        fill.style.width = percent + '%';
                    }
                });
            }, 200); // slight delay for smoothness
        });
    }

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        }
    });
}