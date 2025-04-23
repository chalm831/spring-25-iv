document.addEventListener('DOMContentLoaded', function() {
    const dataItems = document.querySelectorAll('.data-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);  // Trigger once per item
            }
        });
    }, {
        threshold: 0.1
    });

    dataItems.forEach(item => {
        observer.observe(item);
    });
});
