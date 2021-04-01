const slideContainer = document.querySelector('.content-slider');
const slide = document.querySelector('.project-content');
const nextBtn = document.getElementById('prev-btn');
const prevtBtn = document.getElementById('next-btn');
const interval = 5000;
let slideId

let slides = document.querySelectorAll('.project');
let index = 0;

const firtClone = slides[index].cloneNode(true);
const secondClone = slides[index + 1].cloneNode(true);
const terceiroClone = slides[index + 2].cloneNode(true);
const lastCLone = slides[slides.length - 1].cloneNode(true);

firtClone.id = 'first-clone';
lastCLone.id = 'last-CLone';

slide.append(firtClone)
slide.append(secondClone)
slide.append(terceiroClone)
slide.prepend(lastCLone)

const slideWidth = slides[index].clientWidth;

const startSlide = () => {
    slideId = setInterval(() => {
        index++;
        console.log('Funciona')
        slide.style.transform = `translateX(${(-slideWidth - 20) * index}px)`;
        slide.style.transition = '.7s';
    }, interval);
};

const moveToNextSlide = () => {
    if (index >= slides.length - 1) return;
    index++;
    console.log('Funciona')
    slide.style.transform = `translateX(${(-slideWidth - 20) * index}px)`;
    slide.style.transition = '.7s';
};

const moveToPrevSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transform = `translateX(${((-slideWidth - 20) * index)}px)`;
    slide.style.transition = '.7s';
};

slide.addEventListener('transitionend', () => {
    let slides = document.querySelectorAll('.project');
    if (slides[index].id === firtClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${(-slideWidth) * index}px)`;
    }
});

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId)
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToPrevSlide)
prevtBtn.addEventListener('click', moveToNextSlide)

startSlide();