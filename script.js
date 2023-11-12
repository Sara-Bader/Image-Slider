const sliderImage = document.getElementById('slider-img');
const prevButton = document.getElementById('left-arrow');
const nextButton = document.getElementById('right-arrow');
let currentImageIndex = 0;
const images = [];

prevButton.disabled = true;
nextButton.disabled = true;


async function fetchImages() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < 30; i++) {
        try {
            const response = await fetch(`https://picsum.photos/${width}/${height}?random=${i}`);
            images.push(response.url);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    sliderImage.src = images[0];
    prevButton.disabled = false;
    nextButton.disabled = false;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.src = images[currentImageIndex];
    console.log('Next Image Index:', currentImageIndex); 
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentImageIndex];
    console.log('Previous Image Index:', currentImageIndex); 
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

fetchImages();
