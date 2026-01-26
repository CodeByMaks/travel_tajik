class SkeletonManager {
	constructor() {
		this.skeletonOverlay = null
		this.isShown = false
		this.pageType = this.detectPageType()
	}

	detectPageType() {
		const currentUrl = window.location.pathname
		if (currentUrl.includes('list.html')) return 'list'
		if (currentUrl.includes('detail.html')) return 'detail'
		if (currentUrl.includes('emergency_contacts.html')) return 'emergency'
		if (currentUrl.includes('home.html') || currentUrl.endsWith('/')) return 'home'
		return 'default'
	}

	getSkeletonHTML() {
		switch (this.pageType) {
			case 'list':
				return this.getListSkeleton()
			case 'detail':
				return this.getDetailSkeleton()
			case 'emergency':
				return this.getEmergencySkeleton()
			case 'home':
				return this.getHomeSkeleton()
			default:
				return this.getDefaultSkeleton()
		}
	}

	getHomeSkeleton() {
		return `
			<div class="skeleton-container">
				<!-- Hero Section Skeleton -->
				<div class="skeleton-hero">
					<div class="skeleton-hero-title"></div>
					<div class="skeleton-hero-subtitle"></div>
					<div class="skeleton-search-box"></div>
				</div>

				<!-- Regions Section Skeleton -->
				<div class="skeleton-regions-section">
					<div class="skeleton-section-title"></div>
					<div class="skeleton-section-subtitle"></div>
					<div class="skeleton-regions-scroll">
						<div class="skeleton-region-card"></div>
						<div class="skeleton-region-card"></div>
						<div class="skeleton-region-card"></div>
						<div class="skeleton-region-card"></div>
						<div class="skeleton-region-card"></div>
					</div>
				</div>

				<!-- Categories Section Skeleton -->
				<div class="skeleton-categories-section">
					<div class="skeleton-section-title"></div>
					<div class="skeleton-section-subtitle"></div>
					<div class="skeleton-categories-grid">
						<div class="skeleton-category-card">
							<div class="skeleton-category-image"></div>
							<div class="skeleton-category-text"></div>
						</div>
						<div class="skeleton-category-card">
							<div class="skeleton-category-image"></div>
							<div class="skeleton-category-text"></div>
						</div>
						<div class="skeleton-category-card">
							<div class="skeleton-category-image"></div>
							<div class="skeleton-category-text"></div>
						</div>
					</div>
				</div>
			</div>
		`
	}

	getListSkeleton() {
		return `
			<div class="skeleton-container">
				<!-- Header Skeleton -->
				<div class="skeleton-list-header">
					<div class="skeleton-title"></div>
				</div>

				<!-- Filter Section Skeleton -->
				<div class="skeleton-filter-panel">
					<div class="skeleton-search-input"></div>
					<div class="skeleton-filter-select"></div>
					<div class="skeleton-filter-select"></div>
					<div class="skeleton-filter-button"></div>
				</div>

				<!-- Results Meta Skeleton -->
				<div class="skeleton-results-meta">
					<div class="skeleton-results-count"></div>
				</div>

				<!-- Cards Grid Skeleton -->
				<div class="skeleton-cards-grid">
					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>

					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>

					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>

					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>

					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>

					<div class="skeleton-place-card">
						<div class="skeleton-place-thumb"></div>
						<div class="skeleton-place-body">
							<div class="skeleton-place-title"></div>
							<div class="skeleton-place-desc-line"></div>
							<div class="skeleton-place-desc-line skeleton-desc-short"></div>
							<div class="skeleton-place-tags">
								<div class="skeleton-place-tag"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
	}

	getDetailSkeleton() {
		return `
			<div class="skeleton-container">
				<!-- Meta Chips Skeleton -->
				<div class="skeleton-detail-meta">
					<div class="skeleton-chip"></div>
					<div class="skeleton-chip"></div>
				</div>

				<!-- Title Row Skeleton -->
				<div class="skeleton-detail-title-row">
					<div class="skeleton-back-btn"></div>
					<div class="skeleton-detail-title"></div>
				</div>

				<!-- Hero Image Skeleton -->
				<div class="skeleton-detail-hero"></div>

				<!-- Gallery Section Skeleton -->
				<div class="skeleton-gallery-section">
					<div class="skeleton-gallery-image"></div>
					<div class="skeleton-gallery-image"></div>
					<div class="skeleton-gallery-image"></div>
				</div>

				<!-- Content Section Skeleton -->
				<div class="skeleton-detail-content">
					<div class="skeleton-detail-text-line"></div>
					<div class="skeleton-detail-text-line"></div>
					<div class="skeleton-detail-text-line skeleton-text-short"></div>
				</div>
			</div>
		`
	}

	getEmergencySkeleton() {
		return `
			<div class="skeleton-container">
				<!-- Header Skeleton -->
				<div class="skeleton-emergency-header">
					<div class="skeleton-title"></div>
				</div>

				<!-- Filter Section Skeleton -->
				<div class="skeleton-emergency-filter">
					<div class="skeleton-filter-select"></div>
					<div class="skeleton-filter-select"></div>
				</div>

				<!-- Results Meta Skeleton -->
				<div class="skeleton-emergency-results-meta">
					<div class="skeleton-results-count"></div>
				</div>

				<!-- Contact List Skeleton -->
				<div class="skeleton-contact-list">
					<div class="skeleton-contact-card">
						<div class="skeleton-contact-info">
							<div class="skeleton-contact-title"></div>
							<div class="skeleton-contact-desc"></div>
						</div>
						<div class="skeleton-contact-badge"></div>
						<div class="skeleton-contact-phone"></div>
					</div>

					<div class="skeleton-contact-card">
						<div class="skeleton-contact-info">
							<div class="skeleton-contact-title"></div>
							<div class="skeleton-contact-desc"></div>
						</div>
						<div class="skeleton-contact-badge"></div>
						<div class="skeleton-contact-phone"></div>
					</div>

					<div class="skeleton-contact-card">
						<div class="skeleton-contact-info">
							<div class="skeleton-contact-title"></div>
							<div class="skeleton-contact-desc"></div>
						</div>
						<div class="skeleton-contact-badge"></div>
						<div class="skeleton-contact-phone"></div>
					</div>

					<div class="skeleton-contact-card">
						<div class="skeleton-contact-info">
							<div class="skeleton-contact-title"></div>
							<div class="skeleton-contact-desc"></div>
						</div>
						<div class="skeleton-contact-badge"></div>
						<div class="skeleton-contact-phone"></div>
					</div>

					<div class="skeleton-contact-card">
						<div class="skeleton-contact-info">
							<div class="skeleton-contact-title"></div>
							<div class="skeleton-contact-desc"></div>
						</div>
						<div class="skeleton-contact-badge"></div>
						<div class="skeleton-contact-phone"></div>
					</div>
				</div>
			</div>
		`
	}

	getDefaultSkeleton() {
		return `
			<div class="skeleton-container">
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
				</div>
			</div>
		`
	}

	init() {
		if (this.skeletonOverlay) return

		const overlay = document.createElement('div')
		overlay.className = 'skeleton-overlay'
		overlay.id = 'skeletonOverlay'
		overlay.innerHTML = this.getSkeletonHTML()

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