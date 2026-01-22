// loading.js - Loading Animation Manager

class LoadingManager {
    constructor() {
        this.loadingOverlay = null;
        this.minimumLoadTime = 800; // Minimum time to show loader (ms)
        this.startTime = null;
    }

    /**
     * Initialize the loading overlay
     */
    init() {
        if (this.loadingOverlay) return;

        // Create overlay HTML
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.id = 'loadingOverlay';
        overlay.innerHTML = `
            <div class="loader-container">
                <div style="position: relative; width: 150px; height: 150px;">
                    <div class="loader-circle"></div>
                    <div class="mountain-loader">
                        <div class="mountain-peak"></div>
                        <div class="mountain-peak"></div>
                        <div class="mountain-peak"></div>
                        <div class="mountain-peak"></div>
                        <div class="mountain-peak"></div>
                    </div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
                <h2 class="loading-text">Discovering Tajikistan<span class="loading-dots"></span></h2>
                <p class="loading-subtitle">Exploring the Roof of the World...</p>
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
