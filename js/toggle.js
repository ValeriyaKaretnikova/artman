//Toggle navigation
function toggleNavigation() {
    document.querySelector('.hamburger-btn').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('show-nav');
    });
}

export {toggleNavigation}