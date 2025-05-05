// document.addEventListener('DOMContentLoaded', function() {
//     const dataItems = document.querySelectorAll('.data-item');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = 1;
//                 entry.target.style.transform = 'translateY(0)';
//                 observer.unobserve(entry.target); 
//             }
//         });
//     }, {
//         threshold: 0.1
//     });

//     dataItems.forEach(item => {
//         observer.observe(item);
//     });
// });

// const navLinks = document.querySelectorAll('.navbar a');
//     const currentPath = window.location.pathname.split('/').pop() || 'index.html';

//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === currentPath) {
//             link.classList.add('active');
//         }
//     });
