document.addEventListener('DOMContentLoaded', function () {
    // Carousel (if present)
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-btn.next');
        const prevButton = document.querySelector('.carousel-btn.prev');

        let currentIndex = 0;

        nextButton?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
        }
    }

    // Data fade-in (if present)
    const dataItems = document.querySelectorAll('.data-item');
    if (dataItems.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        dataItems.forEach(item => observer.observe(item));
    }

    // Nav highlight logic (always runs)
    const navLinks = document.querySelectorAll('.navbar a');
    const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href').toLowerCase();
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});
