// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var href = this.getAttribute('href');
        var target = href === '#' ? null : document.querySelector(href);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Logo (href="#") kembali ke paling atas
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('active');
    });
});