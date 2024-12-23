// Toggle class active for hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const menu = document.querySelector('#menu');

if (menu && navbarNav) {
    menu.onclick = () => {
        navbarNav.classList.toggle('active');
    };

    // Click outside sidebar to hide nav
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '1rem 7%';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '1.4rem 7%';
        }
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation to shopping cart
const cart = document.querySelector('#shopping-cart');
if (cart) {
    cart.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
}

// Initialize Feather Icons
if (typeof feather !== 'undefined') {
    feather.replace();
}

// Additional smooth scroll for external links
document.querySelectorAll('a').forEach(link => {
    if (link.href.includes('.html')) {
        link.addEventListener('click', function (e) {
            const url = this.getAttribute('href');
            window.location.href = url;
        });
    }
});
