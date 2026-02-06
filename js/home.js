// Home page specific interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add to cart animation (simple mock)
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const originalContent = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = '#4ade80'; // Green success color

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.background = ''; // Revert to CSS default
            }, 2000);
        });
    });
});