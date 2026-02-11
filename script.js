// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Console log to verify script is running
    console.log('Exclusive Collection initialized.');

    // Optional: Add scroll reveal if we add more content down the page
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        observer.observe(product);
    });
});
