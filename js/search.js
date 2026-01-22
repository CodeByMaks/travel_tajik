// search.js - Unified search and filter functionality

class SearchManager {
    constructor() {
        this.places = [];
        this.images = [];
        this.categories = [];
        this.regions = [];
        this.initialized = false;
    }

    async initialize() {
        if (this.initialized) return;
        
        try {
            // Load all data files
            const [placesRes, imagesRes, categoriesRes, regionsRes] = await Promise.all([
                fetch('../db/place.json'),
                fetch('../db/image.json'),
                fetch('../db/category_code.json'),
                fetch('../db/region_code.json')
            ]);

            this.places = await placesRes.json();
            this.images = await imagesRes.json();
            this.categories = await categoriesRes.json();
            this.regions = await regionsRes.json();
            this.initialized = true;
        } catch (err) {
            console.error('Error loading data:', err);
        }
    }

    getImageForPlace(placeId) {
        const image = this.images.find(img => img.place_id === placeId);
        return image ? image.file_url : '../assets/images/home_reg_2.png';
    }

    getCategoryName(categoryCode) {
        const category = this.categories.find(c => c.code === categoryCode);
        return category ? category.code : categoryCode;
    }

    getRegionName(regionCode) {
        const region = this.regions.find(r => r.code === regionCode);
        
        // Map codes to display names
        const regionMap = {
            'DRS': 'Districts of Republican Subordination',
            'DUSHANBE': 'Dushanbe',
            'GBAO': 'Gorno-Badakhshan Autonomous Province',
            'KHATLON': 'Khatlon',
            'SUGHD': 'Sughd Region'
        };
        
        return regionMap[regionCode] || regionCode;
    }

    search(query = '', categoryCode = '', regionCode = '') {
        let results = this.places;

        // Filter by search query (name or description)
        if (query.trim()) {
            const lowerQuery = query.toLowerCase();
            results = results.filter(place =>
                place.name.toLowerCase().includes(lowerQuery) ||
                place.description.toLowerCase().includes(lowerQuery)
            );
        }

        // Filter by category
        if (categoryCode) {
            results = results.filter(place => place.category_code === categoryCode);
        }

        // Filter by region
        if (regionCode) {
            results = results.filter(place => place.region_code === regionCode);
        }

        return results;
    }

    createPlaceCard(place) {
        const imageUrl = this.getImageForPlace(place.place_id);
        const regionName = this.getRegionName(place.region_code);
        const categoryName = place.category_code.charAt(0) + place.category_code.slice(1).toLowerCase();

        return `
            <a href="./detail.html?id=${place.place_id}" class="place-card-link" style="text-decoration: none;">
                <article class="place-card" data-place-id="${place.place_id}">
                    <div class="place-thumb">
                        <img src="${imageUrl}" alt="${place.name}" />
                        <span class="badge badge-top">${categoryName}</span>
                    </div>
                    <div class="place-body">
                        <h3 class="place-title">${place.name}</h3>
                        <p class="place-desc">${place.description}</p>
                        <div class="place-tags">
                            <span class="badge badge-bottom">
                                <span class="material-icons" aria-hidden="true">location_on</span>
                                ${regionName}
                            </span>
                        </div>
                    </div>
                </article>
            </a>
        `;
    }

    renderResults(results, containerId = '.card-grid') {
        const container = document.querySelector(containerId);
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #a3a3a3;">No results found</p>';
        } else {
            container.innerHTML = results.map(place => this.createPlaceCard(place)).join('');
        }

        // Update results count
        const countElement = document.querySelector('.results-count');
        if (countElement) {
            countElement.textContent = `${results.length} Result${results.length !== 1 ? 's' : ''}`;
        }
    }
}

// Create global instance
const searchManager = new SearchManager();

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await searchManager.initialize();
});
