class SkeletonManager {
	constructor() {
		this.skeletonOverlay = null
		this.isShown = false
	}

	init() {
		if (this.skeletonOverlay) return

		const overlay = document.createElement('div')
		overlay.className = 'skeleton-overlay'
		overlay.id = 'skeletonOverlay'
		overlay.innerHTML = `
            <div class="skeleton-container">
                <div class="skeleton-header-bar"></div>
                <div class="skeleton-spacer-sm"></div>
                
                <div class="skeleton-cards-grid">
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                    
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                    
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                    
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                    
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                    
                    <div class="skeleton-card">
                        <div class="skeleton-image"></div>
                        <div class="skeleton-text">
                            <div class="skeleton-line skeleton-line-title"></div>
                            <div class="skeleton-line skeleton-line-subtitle"></div>
                        </div>
                    </div>
                </div>
            </div>
        `

		document.body.appendChild(overlay)
		this.skeletonOverlay = overlay
	}

	show() {
		if (!this.skeletonOverlay) {
			this.init()
		}
		this.skeletonOverlay.classList.remove('skeleton-hide')
		this.isShown = true
	}

	hide() {
		if (!this.skeletonOverlay) return
		this.skeletonOverlay.classList.add('skeleton-hide')
		this.isShown = false
	}

	forceHide() {
		if (this.skeletonOverlay) {
			this.skeletonOverlay.classList.add('skeleton-hide')
			this.isShown = false
		}
	}
}

const skeletonManager = new SkeletonManager()

document.addEventListener('DOMContentLoaded', () => {
	skeletonManager.init()
})

window.addEventListener('load', () => {
	skeletonManager.show()

	setTimeout(() => {
		skeletonManager.hide()
	}, 1500)
})

document.addEventListener('visibilitychange', () => {
	if (!document.hidden && !skeletonManager.isShown) {
		skeletonManager.show()
		setTimeout(() => {
			skeletonManager.hide()
		}, 1500)
	}
})