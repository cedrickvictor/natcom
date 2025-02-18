// Testimonials Navigation Script
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function updateNavigation() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === testimonials.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showTestimonial(currentIndex);
        updateNavigation();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < testimonials.length - 1) {
        currentIndex++;
        showTestimonial(currentIndex);
        updateNavigation();
    }
});

// Initialize
showTestimonial(currentIndex);
updateNavigation();
