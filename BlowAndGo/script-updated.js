document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price')) || 0;
            cart.push({ name: product, price: price });
            saveCart();
            alert(`Added ${product} to your cart!`);
        });
    });

    // Add click event to front image to toggle enlarge
    const frontImage = document.querySelector('.front-image');
    if (frontImage) {
        frontImage.addEventListener('click', () => {
            frontImage.classList.toggle('enlarged');
        });
    }
});
