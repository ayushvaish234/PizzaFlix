const video = document.getElementById('Video');
const playButton = document.getElementById('Play');

function play() {
    if (video.paused) {
        playButton.style.display = 'none';
        video.play();
    }
}

video.addEventListener('click', function () {
    if (!video.paused) {
        playButton.style.display = 'block';
        playButton.src = "images/Arrow.svg";
        video.pause();
    }
});

playButton.addEventListener('click', play);

//Carousal
let currentPosition = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const carouselWrapper = document.querySelector('.carousel-wrapper');

function setCarousel() {
    const itemWidth = items[0].offsetWidth + 20;
    const maxItemsVisible = Math.floor(carouselWrapper.offsetWidth / itemWidth);
    const maxPosition = (items.length - maxItemsVisible) * itemWidth;
    carousel.style.setProperty('--max-position', maxPosition);
    currentPosition = Math.min(currentPosition, maxPosition);
    carousel.style.transform = `translateX(-${currentPosition}px)`;
}

function shiftCarousel(direction) {
    const itemWidth = items[0].offsetWidth + 20;
    currentPosition = Math.min(Math.max(currentPosition + direction * itemWidth, 0), parseInt(getComputedStyle(carousel).getPropertyValue('--max-position')));
    carousel.style.transform = `translateX(-${currentPosition}px)`;
}

window.addEventListener('resize', setCarousel);
window.addEventListener('load', setCarousel);

const cartModal = document.getElementById("cart-modal");
    const openCartModalBtn = document.getElementById("open-cart-modal");
    const backToMenuButton = document.getElementById("back-to-menu");

    openCartModalBtn.onclick = function() {
        cartModal.style.display = "block";
    }

    backToMenuButton.onclick = function() {
        cartModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    }

    // Request modal
    var modal = document.getElementById("request-modal");

    var btn = document.getElementById("open-request-modal");
    
    
    var cancelButton = document.getElementsByClassName("cancel-button")[0];
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    
    cancelButton.onclick = function(){
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
