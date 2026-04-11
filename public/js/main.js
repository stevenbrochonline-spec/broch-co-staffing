// Mobile menu toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});
