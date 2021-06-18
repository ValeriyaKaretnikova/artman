//Toggle navigation
function toggleNavigation() {
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        console.log("hello");
        document.querySelector('nav').classList.toggle('show-nav');
        document.querySelector('.menu-toggle').classList.toggle('open');
        document.body.classList.toggle('lock');
    });

    const menuLinks = document.querySelectorAll('.menu-links li a');
    menuLinks.forEach((link) => {
        link.addEventListener('click', ()=> {
            if (document.querySelector('nav').classList.contains('show-nav')){
                document.querySelector('nav').classList.remove('show-nav');
                document.querySelector('.menu-toggle').classList.remove('open');
                document.body.classList.remove('lock');
            }
        })
    })
}

export {toggleNavigation}