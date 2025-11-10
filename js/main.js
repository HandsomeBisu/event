// Custom JavaScript will go here

// Initialize AOS
AOS.init();

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.querySelector('.navbar.fixed-top .container');

    if (navbarContainer) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbarContainer.classList.add('container-scrolled');
            } else {
                navbarContainer.classList.remove('container-scrolled');
            }
        });
    }
});
