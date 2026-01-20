// Modern notification system

// Main notification function
export function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');

    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'warning' ? '⚠️' : type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 4000);
}

// Enhanced notification system with settings context
export function showSettingsNotification(message, type = 'info', duration = 2500) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.settings-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `settings-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">⚙️</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'var(--accent-gold)' : type === 'error' ? '#ef4444' : 'var(--bg-elevated)',
        color: type === 'success' ? 'var(--bg-primary)' : 'var(--text-primary)',
        padding: '12px 20px',
        borderRadius: '12px',
        border: '2px solid var(--border-accent)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        fontSize: '14px',
        fontWeight: '600',
        maxWidth: '300px',
        wordWrap: 'break-word',
        backdropFilter: 'blur(10px)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, duration);
}