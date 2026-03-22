// 1. Hero Icon Cycling Logic
const cycleContainer = document.querySelector('.icon-cycle');
if (cycleContainer) {
    const icons = cycleContainer.querySelectorAll('.icon');
    let idx = 0;
    setInterval(() => {
        icons[idx].classList.remove('active');
        idx = (idx + 1) % icons.length;
        icons[idx].classList.add('active');
    }, 3000);
}

// 2. Theme Toggle Functionality
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isLight = document.body.classList.toggle('light-mode');

        // Update icons visually
        const sun = themeBtn.querySelector('.sun-icon');
        const moon = themeBtn.querySelector('.moon-icon');
        if (sun && moon) {
            sun.style.display = isLight ? 'none' : 'block';
            moon.style.display = isLight ? 'block' : 'none';
        }
    });
}
