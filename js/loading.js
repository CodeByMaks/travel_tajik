// loading.js - Loading Animation Manager

class LoadingManager {
    constructor() {
        this.loadingOverlay = null;
        this.minimumLoadTime = 1000; // Minimum time to show loader (ms)
        this.startTime = null;
    }

    /**
     * Initialize the loading overlay
     */
    init() {
        if (this.loadingOverlay) return;

        // Determine the correct path based on current page location
        const isInPages = window.location.pathname.includes('/pages/');
        const logoPath = isInPages ? '../assets/logo/tajikistan.png' : 'assets/logo/tajikistan.png';

        // Create overlay HTML
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.id = 'loadingOverlay';
        overlay.innerHTML = `
            <div class="loader-container">
                <div class="logo-loader-wrapper">
                    <div class="rotating-circle circle-1"></div>
                    <div class="rotating-circle circle-2"></div>
                    <div class="rotating-circle circle-3"></div>
                    <img src="${logoPath}" alt="Tajikistan" class="logo-image">
                </div>
                <h2 class="loading-text">Plan Your Adventure<span class="loading-dots"></span></h2>
                <p class="loading-subtitle">Uncover Hidden Treasures & Create Unforgettable Memories...</p>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill"></div>
                </div>
            </div>
        `;

        document.body.insertBefore(overlay, document.body.firstChild);
        this.loadingOverlay = overlay;
        this.startTime = Date.now();
    }

    /**
     * Show loading animation
     */
    show() {
        if (!this.loadingOverlay) {
            this.init();
        }
        this.loadingOverlay.classList.remove('hide');
        this.startTime = Date.now();
    }

    /**
     * Hide loading animation with minimum display time
     */
    hide() {
        if (!this.loadingOverlay) return;

        const elapsedTime = Date.now() - this.startTime;
        const remainingTime = Math.max(0, this.minimumLoadTime - elapsedTime);

        setTimeout(() => {
            if (this.loadingOverlay) {
                this.loadingOverlay.classList.add('hide');
            }
        }, remainingTime);
    }

    /**
     * Force hide immediately (use sparingly)
     */
    forceHide() {
        if (this.loadingOverlay) {
            this.loadingOverlay.classList.add('hide');
        }
    }
}

// Create global instance
const loadingManager = new LoadingManager();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadingManager.init();
});

// Hide loading when page fully loads
window.addEventListener('load', () => {
    loadingManager.hide();
});

// Auto-hide on page visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        loadingManager.init();
        loadingManager.show();
    }
});

// Handle page transitions (back/forward navigation)
window.addEventListener('pageshow', () => {
    if (event.persisted) {
        loadingManager.show();
    }
});

window.addEventListener('pagehide', () => {
    if (event.persisted) {
        loadingManager.show();
    }
});
