// JS para animações ou funcionalidades extras, como o carrossel
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    }

    setInterval(showNextTestimonial, 4000);
});
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    }

    setInterval(showNextTestimonial, 4000);
});
