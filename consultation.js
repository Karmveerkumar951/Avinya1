const images = ["image1.png", "image2.png", "image3.png"];
const texts = ["Verified Doctors", "Private & Secure", "Free Follow-up"];
let index = 0;

function changeImage() {
    const sliderImage = document.getElementById("slider");
    const sliderText = document.getElementById("slider-text");

    index = (index + 1) % images.length;  // Cycle through images
    sliderImage.src = images[index];
    sliderText.textContent = texts[index];
}

// Change image every 1.5 second
setInterval(changeImage, 1500);
