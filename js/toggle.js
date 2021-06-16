//Toggle navigation
function toggleNavigation() {
    document.querySelector('.hamburger-btn').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('show-nav');
    });

    const menuLinks = document.querySelectorAll('.menu-links li a');
    menuLinks.forEach((link) => {
        link.addEventListener('click', ()=> {
            if (document.querySelector('nav').classList.contains('show-nav')){
                document.querySelector('nav').classList.remove('show-nav');
            }
        })
    })
}

export {toggleNavigation}