function projectHover() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.children[2].classList.add('visible');
            project.children[1].children[0].classList.add('visible');
            project.children[1].children[0].style.top = '2rem';
            project.children[1].children[1].classList.add('visible');
            project.children[1].children[1].style.top = '3.5rem';
            project.children[1].children[2].classList.add('visible');
            project.children[1].children[2].style.bottom = '2rem';
        })
        project.addEventListener('mouseout', (e) => {
            project.children[2].classList.remove('visible');
            project.children[1].children[0].classList.remove('visible');
            project.children[1].children[0].style.top = '-2rem';
            project.children[1].children[1].classList.remove('visible');
            project.children[1].children[1].style.top = '-3rem';
            project.children[1].children[2].classList.remove('visible');
            project.children[1].children[2].style.bottom = '-2rem';
        })
    })
}

export {projectHover}