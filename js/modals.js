function modalImage() {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const projects = document.querySelectorAll('.project .project-hover');
    projects.forEach((project) => {
        project.addEventListener('click', function (e) {
            displayModalImage(e);
        })
    })
}
function displayModalImage(e) {
    const imageName = e.currentTarget.previousElementSibling.alt.trim();
    const project = e.currentTarget.parentElement;
    const modalImage = project.querySelector('.modal');
    const caption = project.querySelector('.caption');

    modalImage.style.display = "block";
    modalImage.style.zIndex = 10;
    
    caption.innerHTML = imageName;

    $('#' + imageName).slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoPlay: true,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                arrows: true
              }
            },

          ]
    });
    
    const closeSpan = project.querySelector('.close');
    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function () {
        modalImage.style.display = "none";
    }
}

export {modalImage}