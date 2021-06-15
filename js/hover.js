function projectHover() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            const projectHover = project.children[1];
            const projectText = projectHover.children[0];
            projectHover.classList.add('visible');
            projectText.children[0].style.top = '2rem';
            projectText.children[1].style.top = '3.5rem';
            projectText.children[2].style.bottom = '2rem';
        })
        project.addEventListener('mouseout', (e) => {
            const projectHover = project.children[1];
            const projectText = projectHover.children[0];
            projectHover.classList.remove('visible');
            projectText.children[0].style.top = '-2rem';
            projectText.children[1].style.top = '-3.5rem';
            projectText.children[2].style.bottom = '-2rem';
        })
    })
}

export {projectHover}