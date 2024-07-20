// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel1 = document.querySelector('.carousel1');
    const carouselItems1 = document.querySelectorAll('.carousel-item1');
    const prevButton = document.querySelector('.prev1');
    const nextButton = document.querySelector('.next1');

    let currentIndex = 0;

    const updateCarousel1 = () => {
        const width = carouselItems1[0].clientWidth;
        carousel1.style.transform = `translateX(${-currentIndex * width}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems1.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel1();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems1.length - 1;
        }
        updateCarousel1();
    });

    window.addEventListener('resize', updateCarousel1);
});
document.addEventListener('DOMContentLoaded', () => {
    const carousel2 = document.querySelector('.carousel2');
    const carouselItems2 = document.querySelectorAll('.carousel-item2');
    const prevButton = document.querySelector('.prev2');
    const nextButton = document.querySelector('.next2');

    let currentIndex = 0;

    const updateCarousel2 = () => {
        const width = carouselItems2[0].clientWidth;
        carousel2.style.transform = `translateX(${-currentIndex * width}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems2.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel2();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carouselItems2.length - 1;
        }
        updateCarousel2();
    });

    window.addEventListener('resize', updateCarousel2);
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const phonedetails = document.querySelector('.phone-details');

let currentPage = 1;

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    phonedetails.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < 3) {
    currentPage++;
    phonedetails.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
  }
});

