const products = [
    {
        id: 1,
        name: "Lumina Elite",
        category: "headphones",
        price: 349.00,
        image: "assets/hero-headphones.jpg"
    },
    {
        id: 2,
        name: "Lumina Bass",
        category: "earbuds",
        price: 149.00,
        image: "assets/lumina-bass.jpg"
    },
    {
        id: 3,
        name: "Lumina One",
        category: "headphones",
        price: 299.00,
        image: "assets/lumina-one.jpg"
    },
    {
        id: 4,
        name: "SoundPulse",
        category: "speakers",
        price: 199.00,
        image: "assets/soundpulse.jpg"
    },
    {
        id: 5,
        name: "Lumina Air",
        category: "earbuds",
        price: 129.00,
        image: "assets/lumina-air.jpg"
    },
    {
        id: 6,
        name: "Studio Pro",
        category: "headphones",
        price: 499.00,
        image: "assets/lumina-x1.jpg"
    },
    {
        id: 7,
        name: "Compact 360",
        category: "speakers",
        price: 89.00,
        image: "assets/compact-360.jpg"
    },
    {
        id: 8,
        name: "Sport Flow",
        category: "earbuds",
        price: 99.00,
        image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=800&auto=format&fit=crop"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initial render
    renderProducts(products);

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                renderProducts(filtered);
            }
        });
    });

    function renderProducts(items) {
        productContainer.innerHTML = '';

        // Add animation class for fade in
        productContainer.style.opacity = '0';
        setTimeout(() => {
            productContainer.style.opacity = '1';
        }, 50);

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="add-to-cart"><i class="fas fa-plus"></i></button>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="category">${capitalize(product.category)}</p>
                    <div class="price">$${product.price.toFixed(2)}</div>
                </div>
            `;

            productContainer.appendChild(card);

            // Re-attach add-to-cart listener for new elements
            const btn = card.querySelector('.add-to-cart');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const originalContent = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.style.background = '#4ade80';
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.style.background = '';
                }, 2000);
            });
        });
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});