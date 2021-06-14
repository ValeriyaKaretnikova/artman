function modalImage() {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const svgs = document.querySelectorAll('.project .text svg') //node list
    const projectsNames = document.querySelectorAll('.project .text p:nth-child(2)');

    projectsNames.forEach((project) => {
        project.addEventListener('click', function (e) {
            displayModalImage(e);
        })
    })

    svgs.forEach((svg) => {
        svg.addEventListener('click', function (e) {
            displayModalImage(e);
        })
    })
}
function displayModalImage(e) {

    const imageName = e.currentTarget.parentElement.previousElementSibling.alt.trim();
    console.log(imageName);
    const project = e.currentTarget.parentElement.parentElement;
    const modalImage = project.querySelector('.modal');
    const caption = project.querySelector('.caption');

    modalImage.style.display = "block";
    modalImage.style.zIndex = 10;
    caption.innerHTML = imageName;

    // project.querySelector('.modalContent').src = `../img/${imageName}.jpg`;
    // Get the <span> element that closes the modal

    // console.log(imageName);

    $('#' + imageName).slick();
    
    const closeSpan = project.querySelector('.close');
    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function () {
        modalImage.style.display = "none";
    }
}

export {modalImage}