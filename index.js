// Image Slider App

// Global variables & DOM access
let currentIndex = 0;
let intervalId = null;
const slides = document.querySelectorAll(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// App Logic

function initializeSlider() {
  intervalId = setInterval(() => {
    nextImg();
  }, 3500);

  showImg();
}

function showImg() {
  const slideImg = slides[currentIndex];
  slides.forEach((slide) => {
    slide.classList.remove("activeImg");
  });
  slideImg.classList.add("activeImg");
}

function nextImg() {
  currentIndex++;

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }

  showImg();
}

function prevImg() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  showImg();
}

prevBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  prevImg();
});

nextBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  nextImg();
});

document.addEventListener("DOMContentLoaded", initializeSlider);
