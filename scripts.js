// scripts.js
function togglePlayer() {
  const player = document.getElementById('playerPopup');
  player.style.display = player.style.display === 'block' ? 'none' : 'block';
}

// Presenter slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('#presenterSlider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Start with first slide
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
