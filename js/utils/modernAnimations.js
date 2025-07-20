// Modern Animation Utilities for ArcanistBuilder
// Leverages modern web APIs for smooth, performant animations

/**
 * Intersection Observer for scroll-triggered animations
 */
export class ScrollReveal {
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
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => this.observer.observe(el));
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        this.observer.unobserve(entry.target);
      }
    });
  }
  
  observe(element) {
    this.observer.observe(element);
  }
}

/**
 * Stagger animation utility
 */
export function staggerElements(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
    el.classList.add('animate-fade-in-scale', `stagger-${Math.min(index + 1, 6)}`);
  });
}

/**
 * Smooth parallax effect using requestAnimationFrame
 */
export class SmoothParallax {
  constructor() {
    this.elements = [];
    this.isAnimating = false;
    this.init();
  }
  
  init() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      this.elements.push({ el, speed });
    });
    
    if (this.elements.length > 0) {
      this.bindEvents();
    }
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  }
  
  onScroll() {
    if (!this.isAnimating) {
      requestAnimationFrame(this.animate.bind(this));
      this.isAnimating = true;
    }
  }
  
  animate() {
    const scrollY = window.pageYOffset;
    
    this.elements.forEach(({ el, speed }) => {
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
    
    this.isAnimating = false;
  }
}

/**
 * Modern card hover effects with Web Animations API
 */
export function enhanceCardHovers(selector = '.character-card') {
  const cards = document.querySelectorAll(selector);
  
  cards.forEach(card => {
    let isHovering = false;
    
    const floatAnimation = card.animate([
      { transform: 'translateY(0px) scale(1)' },
      { transform: 'translateY(-2px) scale(1.01)' }
    ], {
      duration: 2000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
    
    floatAnimation.pause();
    
    card.addEventListener('mouseenter', () => {
      if (isHovering) return;
      isHovering = true;
      
      // Enhanced hover animation
      card.animate([
        { 
          transform: 'translateY(0px) scale(1)',
          filter: 'brightness(1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        },
        { 
          transform: 'translateY(-8px) scale(1.02)',
          filter: 'brightness(1.1)',
          boxShadow: '0 20px 40px rgba(212, 165, 116, 0.15)'
        }
      ], {
        duration: 300,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
      });
      
      floatAnimation.play();
    });
    
    card.addEventListener('mouseleave', () => {
      if (!isHovering) return;
      isHovering = false;
      
      card.animate([
        { 
          transform: 'translateY(-8px) scale(1.02)',
          filter: 'brightness(1.1)',
          boxShadow: '0 20px 40px rgba(212, 165, 116, 0.15)'
        },
        { 
          transform: 'translateY(0px) scale(1)',
          filter: 'brightness(1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }
      ], {
        duration: 300,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards'
      });
      
      floatAnimation.pause();
    });
  });
}

/**
 * Page transition utility
 */
export class PageTransition {
  constructor() {
    this.isTransitioning = false;
  }
  
  async transition(fromElement, toElement, direction = 'forward') {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    const exitTransform = direction === 'forward' ? 'translateX(-100px)' : 'translateX(100px)';
    const enterTransform = direction === 'forward' ? 'translateX(100px)' : 'translateX(-100px)';
    
    // Exit animation
    await fromElement.animate([
      { opacity: 1, transform: 'translateX(0px)' },
      { opacity: 0, transform: exitTransform }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards'
    }).finished;
    
    fromElement.style.display = 'none';
    toElement.style.display = 'block';
    
    // Enter animation
    await toElement.animate([
      { opacity: 0, transform: enterTransform },
      { opacity: 1, transform: 'translateX(0px)' }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards'
    }).finished;
    
    this.isTransitioning = false;
  }
}

/**
 * Smooth loading states
 */
export function createLoadingAnimation(element, type = 'pulse') {
  const animations = {
    pulse: [
      { opacity: 0.6, transform: 'scale(1)' },
      { opacity: 1, transform: 'scale(1.02)' }
    ],
    shimmer: [
      { backgroundPosition: '-200px 0' },
      { backgroundPosition: 'calc(200px + 100%) 0' }
    ],
    spin: [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ]
  };
  
  const config = {
    pulse: { duration: 1500, iterations: Infinity, direction: 'alternate' },
    shimmer: { duration: 1500, iterations: Infinity },
    spin: { duration: 1000, iterations: Infinity }
  };
  
  return element.animate(animations[type], config[type]);
}

/**
 * Modern focus management for accessibility
 */
export class FocusManager {
  constructor() {
    this.init();
  }
  
  init() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addFocusStyles();
  }
  
  handleKeydown(e) {
    // Show focus indicators only when using keyboard
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  }
  
  addFocusStyles() {
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }
  
  trap(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
    
    firstElement?.focus();
  }
}

/**
 * Reduced motion detection and adaptation
 */
export function respectsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function adaptAnimation(animation, reducedMotion = respectsReducedMotion()) {
  if (reducedMotion) {
    return {
      ...animation,
      duration: Math.min(animation.duration || 300, 100),
      iterations: 1
    };
  }
  return animation;
}

/**
 * Initialize all modern animations
 */
export function initializeModernAnimations() {
  // Initialize scroll reveal
  new ScrollReveal();
  
  // Initialize parallax if not reduced motion
  if (!respectsReducedMotion()) {
    new SmoothParallax();
  }
  
  // Enhanced card hovers
  enhanceCardHovers();
  
  // Stagger character cards
  setTimeout(() => {
    staggerElements('.character-card', 50);
  }, 100);
  
  // Initialize focus management
  new FocusManager();
  
  console.log('🎨 Modern animations initialized');
}