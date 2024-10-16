const carousel = document.querySelector('.carousel');
let index = 0;

function showNextImage() {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextImage, 3000);
const testimonials = document.querySelectorAll('.testimonial .card');
let testimonialIndex = 0;

function showNextTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000);
