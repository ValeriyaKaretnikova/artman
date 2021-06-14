// const testimonialsRequest = fetch("./js/data.json");
// let store = [];
// let slideshowInterval;

// function testimonialsCarousel() {
//     // Testimonials carousel
//     let currentReview = 0;

//     testimonialsRequest
//         .then((response) => response.json())
//         .then((data) => {
//             store = [...data];

//             slideshowInterval = setInterval(function () {
//                 currentReview += 1;
//                 if (currentReview == store.length) {
//                     currentReview = 0;
//                 }
//                 updateSlide(currentReview);
//             }, 5000);
//         })
//         .catch((error) => console.warn(`Error: ${error}`));

//     // add event listener for carousel controls
//     document.querySelector('.carousel').addEventListener('click', function (e) {
//         let target = e.target.parentNode;
//         if (target.classList.contains('control') || target.hasAttribute('data-index')) {
//             if (target.classList.contains('next')) {
//                 currentReview += 1;
//                 currentReview = (currentReview >= store.length) ? 0 : currentReview;
//             } else if (target.classList.contains('previous')) {
//                 currentReview -= 1;
//                 currentReview = (currentReview < 0) ? store.length - 1 : currentReview;
//             } else {
//                 currentReview = Number(target.dataset.index);
//             }
//             // display the new current image
//             updateSlide(currentReview);
//         }
//     });

// }
// function updateSlide(index) {
//     const template = `
//     <div class="testimonial">
//     <h5>${store[index].heading}</h5>
//     <p class="review">${store[index].text}</p>
//     <p class="name">${store[index].name}</p>
//     </div>
//     `
//     let testimonial = document.createRange().createContextualFragment(template);
//     const carousel = document.querySelector('.carousel');
//     const activeBullet = document.querySelector('.tracker .active');

//     if (carousel.querySelector('.testimonial')) {
//         carousel.removeChild(document.querySelector('.testimonial'));
//     }
//     carousel.appendChild(testimonial);

//     activeBullet.classList.remove('active');
//     document.querySelectorAll('[data-index]')[index].classList.add('active');
// }

// export { testimonialsCarousel }