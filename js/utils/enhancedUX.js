// Smooth Scrolling and Enhanced User Experience
// Modern utilities for improved interactions

/**
 * Smooth scrolling utility using modern CSS scroll-behavior with fallback
 */
export class SmoothScroll {
  constructor() {
    this.init();
  }
  
  init() {
    // Check if CSS smooth scrolling is supported
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    } else {
      // Fallback for older browsers
      this.initJSSmoothing();
    }
  }
  
  initJSSmoothing() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          this.smoothScrollTo(target.offsetTop);
        }
      }
    });
  }
  
  smoothScrollTo(targetPosition, duration = 800) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }
}

/**
 * Enhanced character selection animations
 */
export function enhanceCharacterSelection() {
  const characterGrid = document.getElementById('character-selection');
  if (!characterGrid) return;
  
  // Add ripple effect to character cards
  characterGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.character-card');
    if (!card) return;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: radial-gradient(circle, hsla(45, 55%, 75%, 0.3) 0%, transparent 70%);
      transform: scale(0);
      animation: ripple 0.6s ease-out forwards;
      pointer-events: none;
      z-index: 1;
    `;
    
    card.style.position = 'relative';
    card.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  });
  
  // Add CSS for ripple animation if not already present
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Enhanced loading states with modern animations
 */
export class LoadingManager {
  constructor() {
    this.loadingElements = new Map();
  }
  
  show(element, type = 'pulse') {
    if (!element) return;
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = `loading-overlay loading-${type}`;
    loadingOverlay.innerHTML = this.getLoadingContent(type);
    
    element.style.position = 'relative';
    element.appendChild(loadingOverlay);
    
    this.loadingElements.set(element, loadingOverlay);
    
    // Animate in
    requestAnimationFrame(() => {
      loadingOverlay.classList.add('visible');
    });
  }
  
  hide(element) {
    const overlay = this.loadingElements.get(element);
    if (overlay) {
      overlay.classList.add('hiding');
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        this.loadingElements.delete(element);
      }, 300);
    }
  }
  
  getLoadingContent(type) {
    switch (type) {
      case 'spinner':
        return `
          <div class="loading-spinner">
            <div class="spinner-ring"></div>
          </div>
        `;
      case 'dots':
        return `
          <div class="loading-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        `;
      default:
        return `
          <div class="loading-pulse">
            <div class="pulse-circle"></div>
          </div>
        `;
    }
  }
}

/**
 * Enhanced notifications with modern styling
 */
export class NotificationManager {
  constructor() {
    this.container = this.createContainer();
    this.notifications = [];
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.id = 'notification-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: ${1080};
      pointer-events: none;
    `;
    document.body.appendChild(container);
    return container;
  }
  
  show(message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">${this.getIcon(type)}</div>
        <div class="notification-message">${message}</div>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    // Add styles
    notification.style.cssText = `
      background: var(--bg-glass-ultra);
      backdrop-filter: blur(16px);
      border: 1px solid var(--border-glass);
      border-radius: var(--radius-lg);
      padding: var(--space-md);
      margin-bottom: var(--space-sm);
      box-shadow: var(--shadow-mystical);
      transform: translateX(400px);
      transition: all var(--duration-normal) var(--ease-out-expo);
      pointer-events: auto;
      max-width: 400px;
    `;
    
    this.container.appendChild(notification);
    this.notifications.push(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove
    if (duration > 0) {
      setTimeout(() => {
        this.remove(notification);
      }, duration);
    }
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      this.remove(notification);
    });
    
    return notification;
  }
  
  remove(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      const index = this.notifications.indexOf(notification);
      if (index > -1) {
        this.notifications.splice(index, 1);
      }
    }, 300);
  }
  
  getIcon(type) {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[type] || icons.info;
  }
}

/**
 * Intersection Observer for better performance
 */
export class PerformantScrollReveal {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );
    
    this.init();
  }
  
  init() {
    // Use more performant selector
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      this.observer.observe(el);
    });
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('revealed');
        }, delay);
        
        this.observer.unobserve(element);
      }
    });
  }
}

/**
 * Initialize all enhanced UX features
 */
export function initializeEnhancedUX() {
  // Initialize smooth scrolling
  new SmoothScroll();
  
  // Enhanced character selection
  enhanceCharacterSelection();
  
  // Initialize loading manager
  window.loadingManager = new LoadingManager();
  
  // Initialize notifications
  window.notificationManager = new NotificationManager();
  
  // Initialize performant scroll reveal
  new PerformantScrollReveal();
  
  // Add CSS for loading states and notifications
  addEnhancedStyles();
  
  console.log('🚀 Enhanced UX features initialized');
}

function addEnhancedStyles() {
  if (document.querySelector('#enhanced-ux-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'enhanced-ux-styles';
  style.textContent = `
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-glass);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--duration-normal) ease;
      z-index: 10;
    }
    
    .loading-overlay.visible {
      opacity: 1;
    }
    
    .loading-overlay.hiding {
      opacity: 0;
    }
    
    .loading-spinner .spinner-ring {
      width: 40px;
      height: 40px;
      border: 3px solid var(--border-glass);
      border-top: 3px solid var(--accent-gold);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    .loading-dots {
      display: flex;
      gap: 8px;
    }
    
    .loading-dots .dot {
      width: 8px;
      height: 8px;
      background: var(--accent-gold);
      border-radius: 50%;
      animation: bounce 1.4s ease-in-out infinite both;
    }
    
    .loading-dots .dot:nth-child(1) { animation-delay: -0.32s; }
    .loading-dots .dot:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    
    .loading-pulse .pulse-circle {
      width: 40px;
      height: 40px;
      background: var(--accent-gold);
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(1.2); opacity: 0; }
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: var(--text-primary);
    }
    
    .notification-icon {
      font-size: 1.2em;
      font-weight: bold;
    }
    
    .notification-message {
      flex: 1;
      font-size: 0.9em;
    }
    
    .notification-close {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 1.2em;
      padding: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all var(--duration-fast) ease;
    }
    
    .notification-close:hover {
      background: var(--bg-tertiary);
      color: var(--text-primary);
    }
  `;
  
  document.head.appendChild(style);
}